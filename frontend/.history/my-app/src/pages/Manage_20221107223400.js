import React from 'react';
import SidebarMenu from '../layout/homePage/SidebarMenu';

const Manage = () => {
    const user = JSON.parse(localStorage.getItem('userLogin'))
    return (
        <div className="flex">
            <SidebarMenu styled="60.5px" props={user}></SidebarMenu>
            <main>
                <div>
                    <div>
                        <button className="px-[15px] py-[10px] text-[20px] font-semibold text-right bg-[#00b6f1]">Đăng bài viết</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Manage;