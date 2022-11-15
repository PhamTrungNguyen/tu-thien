import React from "react";
import ButtonDonate from "../../components/button/ButtonDonate";
import ButtonStatus from "../../components/button/ButtonStatus";
import { COLORHOMEPAGE } from "../../menuColor";

const ItemSupport = ({ item, ...props }) => {
    console.log("🚀 ~ file: ItemSupport.js ~ line 7 ~ ItemSupport ~ item", item)
    return (
        <div>
            <div className="itemSupport-item border-2 flex flex-col items-center duration-200 ">
                <div className="relative p-0">
                    {item.status === 1 &&
                        <ButtonStatus color="#00b6f1">Cần hỗ trợ</ButtonStatus>
                    }
                    {item.status === 2 &&
                        <ButtonStatus color="#e22d28">Đang vận động</ButtonStatus>
                    }
                    {item.status === 3 &&
                        <ButtonStatus color="#2ba234">Đã hoàn thành</ButtonStatus>
                    }
                    <img
                        src={item.image}
                        alt=""
                        className="h-[100px]"
                    />
                </div>
                <div className="p-[15px] flex flex-col items-center">
                    <h3 className="itemSupport-title text-[17px] font-semibold  mb-[20px]">
                        <a href="#1">
                            Chung tay cùng bà con tuyến kênh Phèn, xã Vĩnh Viễn, Long Mỹ, Hậu
                            Giang xây con đường mong ước của bao thế hệ
                        </a>
                    </h3>
                    <p className="itemSupport-desc">
                        Cập nhật ngày 29/11/2018 Quỹ Từ thiện Bông Sen đã chuyển số tiền
                        22.450.000 đồng đến người dân tại tuyến Kênh Phèn. Con đường bê
                        tông, niềm mong mỏi của bao thế hệ gần 50 năm nay đã thành hiện thực
                    </p>
                </div>

                <div className="pb-[10px] mt-auto flex flex-col items-center">
                    <div className="money">
                        <div className={`font-semibold text-left text-[15px] pb-[10px]`}>
                            Đã góp được:{" "}

                            <span className={`text-[${COLORHOMEPAGE.DangVanDong}]`}>
                                {item?.money || "15.000.000"}
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
                    {item.status === 1 &&
                        <ButtonDonate color="#00b6f1">Nhận hỗ trợ</ButtonDonate>
                    }
                    {item.status === 2 &&
                        <ButtonDonate color="#e22d28">Đang vận động</ButtonDonate>
                    }
                    {item.status === 3 &&
                        <ButtonDonate color="#2ba234">Chi tiết</ButtonDonate>
                    }
                </div>
            </div>
        </div>
    );
};

export default ItemSupport;
