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
                        <button>Đăng bài viết</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Manage;