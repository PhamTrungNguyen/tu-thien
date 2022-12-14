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
    const [participantByUserID, setParticipantByUserId] = useState({});
    const [countParticipantByPostID, setCountParticipantByPostId] = useState("");

    const [money, setMoney] = useState(0);
    const user = JSON.parse(localStorage.getItem("userLogin"));
    const postId = item?.id;
    const userID = user?.id;
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
            toast.error("L???i!!!", {
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
            title: "Nh???n h??? tr??? d??? ??n",
            text: "Sau khi nh???n h??? tr??? b???n s??? tr??? th??nh ?????i tr?????ng c???a d??? ??n n??y",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "?????ng ??",
            cancelButtonText: "H???y",
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
                            "Th??nh c??ng",
                            "B???n ???? nh???n d??? ??n th??nh c??ng, h??y th???c hi???n n?? nh?? .",
                            "success"
                        ).then(function () {
                            window.location.reload();
                        });
                    }
                } else {
                    Swal.fire(
                        "Th???t b???i",
                        "B???n ??ang tham gia m???t d??? ??n n??o tr?????c ???? n??n kh??ng th??? tham gia ti???p n???a.",
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
            title: "Tham gia h??? tr??? d??? ??n",
            text: "Sau khi tham gia h??? tr??? b???n s??? tr??? th??nh th??nh vi??n c???a d??? ??n n??y",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "?????ng ??",
            cancelButtonText: "H???y",
        }).then(async (result) => {
            if (result.isConfirmed) {
                console.log(item.finish);
                console.log("???? ~ file: ItemSupport.js:171 ~ handleSubmitParticipation ~ check", check)
                console.log(countParticipantByPostID);
                console.log(item?.totalParticipant);
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
                            "Th??nh c??ng",
                            "B???n ???? tham gia d??? ??n th??nh c??ng, h??y th???c hi???n n?? nh?? .",
                            "success"
                        ).then(function () {
                            window.location.reload();
                        });
                    }
                } else {
                    Swal.fire(
                        "Th???t b???i",
                        "B???n ??ang tham gia m???t d??? ??n n??o tr?????c ???? ho???c s??? l?????ng ???? ????? n??n kh??ng th??? tham gia v??o d?? ??n n??y.",
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
        // handleGetParticipantByUserID(`http://localhost:8080/api/participant/getParticipantByUserId?userId=${userID}&postId=${item?.id}`)
    }, [item?.id, userID, userLead]);
    // useEffect(() => {
    //     const handleCount = async () => {

    //         const count = await handleCountParticipantByPostId(`http://localhost:8080/api/participant/getCountParticipantByPostId?postId=${item?.id}`)
    //         console.log("???? ~ file: ItemSupport.js:248 ~ handleCount ~ count", count)
    //     }
    //     handleCount()
    // }, [item?.id])
    return (
        <div className="itemSupport-item border-2 flex flex-col items-center duration-200 mb-[20px]">
            <div className="relative p-0 h-[170px] w-[220px]">
                {item.status === 1 && (
                    <ButtonStatus color="#00b6f1">C???n h??? tr???</ButtonStatus>
                )}
                {item.status === 2 && (
                    <ButtonStatus color="#e22d28">??ang v???n ?????ng</ButtonStatus>
                )}
                {item.status === 3 && (
                    <ButtonStatus color="#2ba234">???? ho??n th??nh</ButtonStatus>
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
                        ???? g??p ???????c:{" "}
                        <span className={`text-[${COLORHOMEPAGE.DangVanDong}]`}>
                            {nf.format(number, 10) || "0"} ??
                        </span>
                    </div>
                </div>
                <div
                    className={`flex flex-col items-center justify-center font-medium text-left text-[14px] `}
                >
                    <span className="">
                        {`Ng??y b???t ?????u: `}
                        <h3 className="inline text-[red] font-semibold">
                            {formatDateStart}
                        </h3>
                    </span>
                    <span className="">
                        {`Ng??y k???t th??c: `}
                        <h3 className="inline text-[red] font-semibold">{formatDateEnd}</h3>
                    </span>
                    <span className="mt-[10px]">
                        {`S??? ng?????i tham gia d??? ki???n: `}
                        <h3 className="inline text-[red] font-semibold">{`${countParticipantByPostID}/${item?.totalParticipant}`}</h3>
                    </span>
                    <div className="mt-[10px]">
                        <span>
                            {`Ph??? tr??ch b???i :`}
                            <h3 className="inline text-[red] font-semibold">
                                {account?.displayName
                                    ? account?.displayName
                                    : account?.username || " Ch??a c?? !!!"}
                            </h3>
                        </span>
                    </div>
                </div>
                {item.status === 1 && (
                    <ButtonDonate color="#00b6f1" onClick={() => handleSubmitAdd()}>
                        Nh???n h??? tr???
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
                    <ButtonDonate color="#2ba234" onClick={() => navigate(`/${item.id}`)}>Chi ti???t</ButtonDonate>
                )}
            </div>
        </div>
    );
};

export default ItemSupport;
