import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import ButtonDonate from "../../components/button/ButtonDonate";
import ButtonStatus from "../../components/button/ButtonStatus";
import { COLORHOMEPAGE } from "../../menuColor";
import Donate from "./Donate";
import FormDialog from "./Donate";
import { format } from 'date-fns';
import { differenceInDays } from 'date-fns';
import MyProgressBar from "./MyProgressBar";
import LinearWithValueLabel from "./MyProgressBar";
const ItemSupport = ({ item, ...props }) => {
    const navigate = useNavigate();
    const [donate, setDonate] = useState("");
    const [participant, setParticipant] = useState("");
    const [account, setAccount] = useState("");
    const [userLead, setUserLead] = useState("");
    const [participantByID, setParticipantById] = useState("");
    const [participantByUserID, setParticipantByUserId] = useState({});
    const [countParticipantByPostID, setCountParticipantByPostId] = useState("");

    const [money, setMoney] = useState(0);
    const user = JSON.parse(localStorage.getItem("userLogin"));
    const postId = item?.id;
    const userID = user?.id;
    const status = parseInt(item.status) === 1 ? true : false;
    const date = new Date(item?.createdAt);
    const formatDateStart = new Date(date).toLocaleDateString("vi");
    const numberOfDaysToAdd = item.date;
    const result = date.setDate(date.getDate() + numberOfDaysToAdd);
    const formatDateEnd = new Date(result).toLocaleDateString("vi");
    const endDate = new Date();
    const startDate = new Date(result)
    const difference = differenceInDays(startDate, endDate);
    var nf = new Intl.NumberFormat();
    const number = money.toString()?.replace(/\$|,|\./g, "");
    const numberTotal = item.totalMoney.toString()?.replace(/\$|,|\./g, "");
    const percent = Math.floor((number / numberTotal) * 100)
    async function handleGetDonateIDByPostID(url) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        setDonate(result);
    }
    async function handleGetDonateByDonateId(url) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        setMoney((money) => parseInt(money) + parseInt(result[0].money));
    }
    async function handleGetAllParticipantByLead(url) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        setParticipant(result);
    }
    async function handleCountParticipantByPostId(url) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        setCountParticipantByPostId(result.participant);
    }
    async function handleGetAccountByID(url) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        setAccount(result);
        // getAccountByID
    }
    async function handleGetParticipantByID(url) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        setParticipantById(result);
    }
    async function handleGetParticipantByUserID(url) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        setParticipantByUserId(result);
        return result;
    }
    const handleAddParticipant = async (url, data) => {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            return result;
        } catch (error) {
            toast.error("Lỗi!!!", {
                pauseOnHover: false,
                delay: 0,
                autoClose: 1300,
            });
        }
    };
    const handleSubmitAdd = async () => {
        let check = false;
        const kq = await handleGetParticipantByUserID(`http://localhost:8080/api/participant/getParticipantByUserId?userId=${userID}`);
        kq?.length > 0 && kq.forEach((item) => {
            if (item.finish === true) {
                check = true;
            }

        });
        if (kq?.length === 0) {
            check = true
        }
        Swal.fire({
            title: "Nhận hỗ trợ dự án",
            text: "Sau khi nhận hỗ trợ bạn sẽ trở thành đội trưởng của dự án này",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Đồng ý",
            cancelButtonText: "Hủy",
        }).then(async (result) => {
            if (result.isConfirmed) {
                console.log(check);
                if (check) {
                    const kq = await handleAddParticipant(
                        "http://localhost:8080/api/participant/addParticipant",
                        {
                            userID: userID,
                            status: status,
                            postId: postId,
                        }
                    );
                    if (kq.status === 200) {
                        Swal.fire(
                            "Thành công",
                            "Bạn đã nhận dữ án thành công, hãy thực hiện nó nhá .",
                            "success"
                        ).then(function () {
                            window.location.reload();
                        });
                    }
                } else {
                    Swal.fire(
                        "Thất bại",
                        "Bạn đang tham gia một dự án nào trước đó nên không thể tham gia tiếp nữa.",
                        "error"
                    ).then(function () {
                        navigate("/");
                        window.location.href = window.location.href;
                    });
                }
            }
        });
    };
    const handleSubmitParticipation = async () => {
        let check = false;
        const kq = await handleGetParticipantByUserID(`http://localhost:8080/api/participant/getParticipantByUserId?userId=${userID}`);
        kq?.length > 0 && kq.forEach((item) => {
            if (item?.finish === true) {
                check = true;
            }

        });
        if (kq?.length === 0) {
            check = true
        }
        Swal.fire({
            title: "Tham gia hỗ trợ dự án",
            text: "Sau khi tham gia hỗ trợ bạn sẽ trở thành thành viên của dự án này",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Đồng ý",
            cancelButtonText: "Hủy",
        }).then(async (result) => {
            if (result.isConfirmed) {
                if (difference >= 0) {
                    if (check && countParticipantByPostID < item?.totalParticipant) {
                        const kq = await handleAddParticipant(
                            "http://localhost:8080/api/participant/addParticipant",
                            {
                                userID: userID,
                                status: status,
                                postId: postId,
                            }
                        );
                        if (kq.status === 200) {
                            Swal.fire(
                                "Thành công",
                                "Bạn đã tham gia dữ án thành công, hãy thực hiện nó nhá .",
                                "success"
                            ).then(function () {
                                window.location.reload();
                            });
                        }
                    } else {
                        Swal.fire(
                            "Thất bại",
                            "Bạn đang tham gia một dự án nào trước đó hoặc số lượng đã đủ nên không thể tham gia vào dư án này.",
                            "error"
                        ).then(function () {
                            navigate("/");
                            window.location.href = window.location.href;
                        });
                    }
                }
                else {
                    toast.error(`Dự án đã hết hạn không thể tham gia`, {
                        pauseOnHover: false,
                        delay: 0,
                        autoClose: 1300,
                    });
                }
            }
        });
    };
    useEffect(() => {
        handleGetDonateIDByPostID(
            `http://localhost:8080/api/donate/getDonateIDByPostID?postId=${item.id}`
        );
    }, [item.id]);
    useEffect(() => {
        donate.length > 0 &&
            donate.forEach((item) => {
                handleGetDonateByDonateId(
                    `http://localhost:8080/api/donate/getDonateByDonateID?donateId=${item.donateId}`
                );
            });
    }, [donate]);
    useEffect(() => {
        handleGetAllParticipantByLead(
            `http://localhost:8080/api/participant/getAllParticipantByLead`
        );
    }, []);
    useEffect(() => {
        if (participant.length > 0) {
            participant.forEach((item) => {
                if (item.postId === postId) {
                    setUserLead(item.userID);
                }
            });
        }
    }, [participant, postId]);
    useEffect(() => {
        handleGetAccountByID(
            `http://localhost:8080/api/auth/getAccountByID?accountId=${userLead}`
        );
        handleGetParticipantByID(
            `http://localhost:8080/api/participant/getParticipantById?userId=${userID}`
        );
        handleCountParticipantByPostId(`http://localhost:8080/api/participant/getCountParticipantByPostId?postId=${item?.id}`)
        // handleGetParticipantByUserID(`http://localhost:8080/api/participant/getParticipantByUserId?userId=${userID}&postId=${item?.id}`)
    }, [item?.id, userID, userLead]);

    return (
        <div className="itemSupport-item border-2 flex flex-col items-center duration-200 mb-[20px]">
            <div className="relative p-0 h-[170px] w-[220px]">
                {item.status === 1 && difference > 0 && (
                    <ButtonStatus color="#00b6f1">Cần hỗ trợ</ButtonStatus>
                )}
                {item.status === 2 && (
                    <ButtonStatus color="#e22d28">Đang vận động</ButtonStatus>
                )}
                {item.status === 3 && (
                    <ButtonStatus color="#2ba234">Đã hoàn thành</ButtonStatus>
                )}
                {item.status === 1 && difference < 0 && (
                    <ButtonStatus color="#333333">Chưa được hỗ trợ</ButtonStatus>
                )}
                <a href={item?.id}>
                    <img
                        src={item?.image}
                        alt=""
                        className="h-full object-cover w-full"
                    />
                </a>
            </div>
            <div className="p-[15px] flex flex-col items-center">
                <h3 className="itemSupport-title text-[16px] font-semibold  mb-[20px]">
                    <a href={item.id} title={item.title}>
                        {item.title}
                    </a>
                </h3>
                <p className="itemSupport-desc">{item.desc}</p>
            </div>

            <div className="pb-[10px] mt-auto flex flex-col items-center">
                <div className="money">
                    <div className={`font-semibold text-left text-[15px] pb-[10px]`}>
                        Đã góp được:{" "}
                        <span className={`text-[${COLORHOMEPAGE.DangVanDong}]`}>
                            {nf.format(number, 10) || "0"} đ
                        </span>
                    </div>
                    <div className={`font-semibold text-left text-[15px] pb-[10px]`}>
                        Cần huy động:{" "}
                        <span className={`text-[${COLORHOMEPAGE.DangVanDong}]`}>
                            {nf.format(numberTotal, 10) || "0"} đ
                        </span>
                    </div>
                </div>
                <div>

                    <LinearWithValueLabel completion={percent}></LinearWithValueLabel>
                </div>
                <div
                    className={`flex flex-col items-center justify-center font-medium text-left text-[14px] `}
                >
                    <span className="">
                        {`Ngày bắt đầu: `}
                        <h3 className="inline text-[red] font-semibold">
                            {formatDateStart}
                        </h3>
                    </span>
                    <span className="">
                        {`Ngày kết thúc: `}
                        <h3 className="inline text-[red] font-semibold">{formatDateEnd}</h3>
                    </span>
                    {difference > 0 &&
                        <span className="">
                            {`Dự kiến còn: `}
                            <h3 className="inline text-[red] font-semibold">{difference + " ngày"}</h3>
                        </span>
                    }
                    {difference < 0 &&
                        <span className="">
                            <h3 className="inline text-[red] font-semibold">Đã quá hạn</h3>
                        </span>
                    }
                    <span className="mt-[10px]">
                        {`Số người tham gia dự kiến: `}
                        <h3 className="inline text-[red] font-semibold">{`${countParticipantByPostID}/${item?.totalParticipant}`}</h3>
                    </span>
                    <div className="mt-[10px]">
                        <span>
                            {`Phụ trách bởi :`}
                            <h3 className="inline text-[red] font-semibold">
                                {account?.displayName
                                    ? account?.displayName
                                    : account?.username || " Chưa có !!!"}
                            </h3>
                        </span>
                    </div>
                </div>
                {item.status === 1 && difference > 0 && (
                    <ButtonDonate color="#00b6f1" onClick={() => handleSubmitAdd()}>
                        Nhận hỗ trợ
                    </ButtonDonate>
                )}
                {item.status === 2 && (
                    <div className="flex  flex-row">
                        {percent < 100 &&
                            <Donate item={item}></Donate>
                        }
                        {percent >= 100 &&
                            <ButtonDonate
                                className="text-[12px]"
                                color="#FF00CC"
                                onClick={() => {
                                    navigate(`/${item.id}`)
                                    window.location.reload()
                                    // setTimeout(
                                    //     () => (window.location.reload()),
                                    //     1000
                                    // );
                                }
                                }

                            >
                                Đủ chỉ tiêu
                            </ButtonDonate>
                        }
                        <ButtonDonate
                            className="text-[12px]"
                            color="#3085d6"
                            onClick={() => handleSubmitParticipation()}
                        >
                            Tham gia
                        </ButtonDonate>
                    </div>
                )}
                {item.status === 3 && (
                    <ButtonDonate color="#2ba234" onClick={() => {
                        navigate(`/${item.id}`)
                        window.location.reload()
                        // setTimeout(
                        //     () => (window.location.reload()),
                        //     1000
                        // );
                    }
                    }
                    >Chi tiết</ButtonDonate>
                )}
                {item.status === 1 && difference < 0 && (
                    <ButtonDonate color="#333333" onClick={() => {
                        navigate(`/${item.id}`)
                        window.location.reload()
                        // setTimeout(
                        //     () => (window.location.reload()),
                        //     1000
                        // );
                    }
                    }
                    >Chưa được hỗ trợ</ButtonDonate>
                )}
            </div>
        </div>
    );
};

export default ItemSupport;
