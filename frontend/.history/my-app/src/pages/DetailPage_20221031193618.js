import React from 'react';
import SidebarMenu from '../layout/homePage/SidebarMenu';
import { COLORHOMEPAGE } from '../menuColor';

const DetailPage = () => {
    return (

        <div className="flex">
            <SidebarMenu></SidebarMenu>
            <main>
                <div>
                    <div className={`p-[20px] bg-[${COLORHOMEPAGE.CanHoTro}]  `}>
                        <a href="#1">Trang chủ </a>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DetailPage;