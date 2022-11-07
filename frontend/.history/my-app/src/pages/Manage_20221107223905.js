import React from 'react';
import SidebarMenu from '../layout/homePage/SidebarMenu';

const Manage = () => {
    const user = JSON.parse(localStorage.getItem('userLogin'))
    return (
        <div className="flex">
            <SidebarMenu styled="60.5px" props={user}></SidebarMenu>
            <main>
                <div>
                    <div className="text-right pt-[20px] pr-[20px] border-b-[2px] pb-[10px]">
                        <button className="px-[15px] py-[10px] text-[20px] font-semibold rounded-[10px] text-white  bg-[#00b6f1]">Đăng bài viết</button>
                    </div>
                    <div className="p-[20x]">
                        <h3>Danh sách bài viết</h3>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Manage;