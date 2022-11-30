import React, { useEffect, useState } from "react";
import ButtonDonate from "../../components/button/ButtonDonate";
import ButtonStatus from "../../components/button/ButtonStatus";
import { COLORHOMEPAGE } from "../../menuColor";
import Donate from "./Donate";
import FormDialog from "./Donate";

const ItemSupport = ({ item, ...props }) => {
    // console.log("🚀 ~ file: ItemSupport.js ~ line 7 ~ ItemSupport ~ item", item)
    const [donate, setDonate] = useState("");
    console.log("🚀 ~ file: ItemSupport.js ~ line 11 ~ ItemSupport ~ donate", donate)
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
        setDonate(result);
    }
    useEffect(() => {
        handleGetDonateIDByPostID(
            `http://localhost:8080/api/donate/getDonateIDByPostID?postId=${item.id}`
        );
        donate && donate.forEach(object => {
            console.log(object);
        });
    }, [item.id]);
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
                <img src={item.image} alt="" className="h-full object-cover w-full" />
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
                            {item?.money || "0"} đ
                        </span>
                    </div>
                    {/* <div
                            className={`font-semibold text-left text-[15px] text-[${COLORHOMEPAGE.DaHoanThanh}]`}
                        >
                            Trích từ quỹ:{" "}
                            <span className={`text-[${COLORHOMEPAGE.DangVanDong}]`}>
                                5.000.000đ
                            </span>
                        </div> */}
                </div>
                {item.status === 1 && (
                    <ButtonDonate color="#00b6f1">Nhận hỗ trợ</ButtonDonate>
                )}
                {item.status === 2 && <Donate item={item}></Donate>}
                {item.status === 3 && (
                    <ButtonDonate color="#2ba234">Chi tiết</ButtonDonate>
                )}
            </div>
        </div>
    );
};

export default ItemSupport;
