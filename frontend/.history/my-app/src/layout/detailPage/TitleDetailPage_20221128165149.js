import React from 'react';
import { COLORHOMEPAGE } from '../../menuColor';

const TitleDetailPage = ({ ...props }) => {
    return (
        <div>
            <div className="pb-[30px]">
                <div className={`py-[15px] px-[40px] bg-[${COLORHOMEPAGE.CanHoTro}] duration-300 text-[14px] `}>
                    <a href="/" className="text-black hover:text-white ">Trang chủ </a>
                    <span className="">/ {props?.title}</span>
                </div>
            </div>
            <div className="px-[40px] ">
                <h2 className="text-[28px] pb-[10px] font-semibold border-b-[2px]">{props?.title}</h2>
            </div>
        </div>
    );
};

export default TitleDetailPage;