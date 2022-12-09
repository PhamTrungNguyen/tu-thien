import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import ButtonDonate from "../../components/button/ButtonDonate";
import ButtonStatus from "../../components/button/ButtonStatus";
import { COLORHOMEPAGE } from "../../menuColor";
import Donate from "./Donate";
import FormDialog from "./Donate";

const ItemSupport = ({ item, ...props }) => {
    const navigate = useNavigate();
    const [donate, setDonate] = useState("");
    const [participant, setParticipant] = useState("");
    const [account, setAccount] = useState("");
    const [userLead, setUserLead] = useState("");
    const [participantByID, setParticipantById] = useState("");
    const [countParticipantByPostID, setCountParticipantByPostId] = useState("");

    const [money, setMoney] = useState(0);
    const user = JSON.parse(localStorage.getItem("userLogin"));
    const postId = item.id;
    const userID = user.id;
    const status = parseInt(item.status) === 1 ? true : false;
    const date = new Date(item?.createdAt);
    const formatDateStart = new Date(date).toLocaleDateString("vi");
    var numberOfDaysToAdd = 30;
    var result = date.setDate(date.getDate() + numberOfDaysToAdd);
    const formatDateEnd = new Date(result).toLocaleDateString("vi");
    var nf = new Intl.NumberFormat();
    const number = money.toString()?.replace(/\$|,|\./g, "");
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
    const handleSubmitAdd = () => {
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
                console.log(participantByID?.postID)
                console.log(participantByID?.postID === undefined)
                if (participantByID?.postID === undefined) {
                    const check = await handleAddParticipant(
                        "http://localhost:8080/api/participant/addParticipant",
                        {
                            userID: userID,
                            status: status,
                            postId: postId,
                        }
                    );
                    if (check.status === 200) {
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
    const handleSubmitParticipation = () => {
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
                console.log(participantByID)
                console.log(participantByID?.postID === undefined)
                console.log("🚀 ~ file: ItemSupport.js:170 ~ handleSubmitParticipation ~ participantByID", participantByID)
                if (participantByID?.postID === undefined && countParticipantByPostID < item.totalParticipant) {
                    const check = await handleAddParticipant(
                        "http://localhost:8080/api/participant/addParticipant",
                        {
                            userID: userID,
                            status: status,
                            postId: postId,
                        }
                    );
                    if (check.status === 200) {
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
    }, [item?.id, userID, userLead]);
    // useEffect(() => {
    //     const handleCount = async () => {

    //         const count = await handleCountParticipantByPostId(`http://localhost:8080/api/participant/getCountParticipantByPostId?postId=${item?.id}`)
    //         console.log("🚀 ~ file: ItemSupport.js:248 ~ handleCount ~ count", count)
    //     }
    //     handleCount()
    // }, [item?.id])
    return (
        <div className="itemSupport-item border-2 flex flex-col items-center duration-200 mb-[20px]">
            <div className="relative p-0 h-[170px] w-[220px]">
                {item.status === 1 && (
                    <ButtonStatus color="#00b6f1">Cần hỗ trợ</ButtonStatus>
                )}
                {item.status === 2 && (
                    <ButtonStatus color="#e22d28">Đang vận động</ButtonStatus>
                )}
                {item.status === 3 && (
                    <ButtonStatus color="#2ba234">Đã hoàn thành</ButtonStatus>
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
                {item.status === 1 && (
                    <ButtonDonate color="#00b6f1" onClick={() => handleSubmitAdd()}>
                        Nhận hỗ trợ
                    </ButtonDonate>
                )}
                {item.status === 2 && (
                    <div className="flex  flex-row">
                        <Donate item={item}></Donate>
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
                    <ButtonDonate color="#2ba234">Chi tiết</ButtonDonate>
                )}
            </div>
        </div>
    );
};

export default ItemSupport;
