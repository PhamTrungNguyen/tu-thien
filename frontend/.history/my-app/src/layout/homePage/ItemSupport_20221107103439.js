import React from 'react';
import ButtonDonate from '../../components/button/ButtonDonate';
import ButtonStatus from '../../components/button/ButtonStatus';
import { COLORHOMEPAGE } from '../../menuColor';

const ItemSupport = ({ props }) => {
    return (
        <div>
            <div className="itemSupport-item border-2 flex flex-col items-center duration-200 ">
                <div className="relative p-0">
                    <ButtonStatus>{props.status}</ButtonStatus>
                    <img
                        src="https://tc.cdnchinhphu.vn/Uploaded/nguyenthilananh/2017_04_25/treemngheo.jpg"
                        alt=""
                    />
                </div>
                <div className="p-[15px] flex flex-col items-center">
                    <h3 className="itemSupport-title text-[17px] font-semibold  mb-[20px]">
                        <a href="#1">
                            Chung tay cùng bà con tuyến kênh Phèn, xã Vĩnh Viễn, Long
                            Mỹ, Hậu Giang xây con đường mong ước của bao thế hệ
                        </a>
                    </h3>
                    <p className="itemSupport-desc">
                        Cập nhật ngày 29/11/2018 Quỹ Từ thiện Bông Sen đã chuyển số
                        tiền 22.450.000 đồng đến người dân tại tuyến Kênh Phèn. Con
                        đường bê tông, niềm mong mỏi của bao thế hệ gần 50 năm nay đã
                        thành hiện thực
                    </p>
                </div>

                <div className="pb-[10px] mt-auto flex flex-col items-center">
                    <div className="money">
                        <div className={`font-semibold text-left text-[15px] pb-[10px]`}>
                            Đã góp được: <span className={`text-[${COLORHOMEPAGE.DangVanDong}]`}>15.000.000đ</span>
                        </div>
                        <div className={`font-semibold text-left text-[15px] text-[${COLORHOMEPAGE.DaHoanThanh}]`}>
                            Trích từ quỹ: <span className={`text-[${COLORHOMEPAGE.DangVanDong}]`}>5.000.000đ</span>
                        </div>
                    </div>
                    <ButtonDonate></ButtonDonate>
                </div>
            </div>
        </div>
    );
};

export default ItemSupport;