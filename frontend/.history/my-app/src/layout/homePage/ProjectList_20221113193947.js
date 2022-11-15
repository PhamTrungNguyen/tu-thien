import React, { useEffect, useState } from 'react';
import ButtonDonate from '../../components/button/ButtonDonate';
import ButtonStatus from '../../components/button/ButtonStatus';
import { COLORHOMEPAGE } from '../../menuColor';
import ItemSupport from './ItemSupport';

const ProjectList = () => {
    const [post, setPost] = useState();

    async function handleGetAllPost(url) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        setPost(result)
    }
    useEffect(() => { })
    return (
        <div>
            <div className="itemSupport p-[30px]">
                <div className="grid grid-cols-4 gap-x-[20px]">
                    <ItemSupport status={"Đang vận động"} button={"Đóng góp"}></ItemSupport>
                    {/* <div className="itemSupport-item border-2 flex flex-col items-center duration-200 ">
                        <div className="relative p-0">
                            <ButtonStatus>Đang vận động</ButtonStatus>
                            <img
                                src="https://tc.cdnchinhphu.vn/Uploaded/nguyenthilananh/2017_04_25/treemngheo.jpg"
                                alt=""
                            />
                        </div>
                        <div className="p-[15px] flex flex-col items-center">
                            <h3 className="itemSupport-title text-[17px] font-semibold  mb-[20px]">
                                <a href="#1">
                                    Chung tay cùng bà con tuyến kênh Phèn, xã Vĩnh Viễn, Long
                                    Mỹ, Hậu Giang xây con đường mong ước của bao thế hệ tuyến
                                    Kênh Phèn. Con đường bê tông, niềm{" "}
                                </a>
                            </h3>
                            <p className="itemSupport-desc">
                                Cập nhật ngày 29/11/2018 Quỹ Từ thiện Bông Sen đã chuyển số
                                tiền 22.450.000 đồng đến người dân tại tuyến Kênh Phèn. Con
                                đường bê tông, niềm mong mỏi của bao thế hệ gần{" "}
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
                    <div className="itemSupport-item border-2 flex flex-col items-center duration-200">
                        <div className="relative p-0">
                            <ButtonStatus color={COLORHOMEPAGE.DaHoanThanh}>
                                Đã hoàn thành
                            </ButtonStatus>
                            <img
                                src="https://tc.cdnchinhphu.vn/Uploaded/nguyenthilananh/2017_04_25/treemngheo.jpg"
                                alt=""
                            />
                        </div>
                        <div className="p-[15px] flex flex-col items-center">
                            <h3 className="itemSupport-title text-[17px] font-semibold  mb-[20px]">
                                <a href="#1">Chung tay cùng bà con tuyến kênh Phèn,</a>
                            </h3>
                            <p className="itemSupport-desc">
                                Cập nhật ngày 29/11/2018 Quỹ Từ thiện Bông Sen đã chuyển số
                                tiền 22.450.000 đồng đến người dân tại tuyến Kênh Phèn. Con
                                đường bê tông, niềm mong mỏi của bao thế hệ gần 50 năm nay
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
                            <ButtonDonate color={COLORHOMEPAGE.DaHoanThanh}>
                                Chi tiết
                            </ButtonDonate>
                        </div>
                    </div>
                    <div className="itemSupport-item border-2 flex flex-col items-center duration-200">
                        <div className="relative p-0">
                            <ButtonStatus color={COLORHOMEPAGE.CanHoTro}>
                                Cần hỗ trợ
                            </ButtonStatus>
                            <img
                                src="https://tc.cdnchinhphu.vn/Uploaded/nguyenthilananh/2017_04_25/treemngheo.jpg"
                                alt=""
                            />
                        </div>
                        <div className="p-[15px] flex flex-col items-center">
                            <h3 className="itemSupport-title text-[17px] font-semibold  mb-[20px]">
                                <a href="#1">
                                    {" "}
                                    Chung tay cùng bà con tuyến kênh Phèn, xã Vĩnh Viễn,{" "}
                                </a>
                            </h3>
                            <p className="itemSupport-desc">
                                Cập nhật ngày 29/11/2018 Quỹ Từ thiện Bông Sen đã chuyển số
                                tiền 22.450.000 đồng đến người dân tại{" "}
                            </p>
                        </div>
                        <div className="pb-[10px] mt-auto">
                            <ButtonDonate color={COLORHOMEPAGE.CanHoTro}>
                                Nhận hỗ trợ
                            </ButtonDonate>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ProjectList;