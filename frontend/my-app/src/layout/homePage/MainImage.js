import React from 'react';
import imageCenter1 from "../../image/imageCenter1.jpg";
import imageCenter2 from "../../image/imageCenter2.jpg";
import imageCenter3 from "../../image/imageCenter3.jpg";
import imageCenter4 from "../../image/imageCenter4.jpg";
import imageCenter5 from "../../image/imageCenter5.jpg";
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