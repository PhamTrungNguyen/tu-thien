import React from 'react';

const MainImage = () => {
    return (
        <div className="relative">
            <div className="grid grid-cols-5 items-center content-end ">
                <div className="">
                    <img
                        src={imageCenter1}
                        alt=""
                        className="h-[300px] w-[300px] object-cover"
                    />
                </div>
                <div className="">
                    <img
                        src={imageCenter2}
                        alt=""
                        className="h-[300px] w-[300px] object-cover"
                    />
                </div>
                <div className="">
                    <img
                        src={imageCenter3}
                        alt=""
                        className="h-[300px] w-[300px] object-cover"
                    />
                </div>
                <div className="">
                    <img
                        src={imageCenter4}
                        alt=""
                        className="h-[300px] w-[300px] object-cover"
                    />
                </div>
                <div className="">
                    <img
                        src={imageCenter5}
                        alt=""
                        className="h-[300px] w-[300px] object-cover"
                    />
                </div>
            </div>
            <div className="image-blur"></div>
            <div>
                <i className="text-center absolute text-image">
                    "Chúng tôi cùng với bạn, trên hành trình kiếm tìm hạnh phúc, bằng cách
                    lan tỏa lòng nhân ái, chuyển hóa khổ đau."{" "}
                </i>
            </div>
        </div>
    );
};

export default MainImage;