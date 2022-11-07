import React from 'react';

const ItemRelate = () => {
    return (
        <div>
            <div className="flex flex-row items-start pb-[10px]">
                <div className="w-[100px] h-[70px] object-cover border-[2px] p-[3px]">
                    <img
                        src="https://nld.mediacdn.vn/2017/8-chan-1-1501857270466.jpg"
                        alt=""
                        className="w-full h-full"
                    />
                </div>
                <TextclamStyle>
                    <h3 className="text-[14px] font-semibold">
                        <a href="#1">Khám bệnh từ thiện xã Ma Nới, huyện Ninh Sơn, tỉnh Ninh
                            Thuận</a>
                    </h3>
                    <span className="text-[14px]">Th8 18, 2022</span>
                </TextclamStyle>
            </div>
        </div>
    );
};

export default ItemRelate;