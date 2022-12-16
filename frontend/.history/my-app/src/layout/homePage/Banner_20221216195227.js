import React, { useState } from 'react';
import { useEffect } from 'react';

const Banner = () => {
    const [totalPost, setTotalPost] = useState()
    const [totalMoney, setTotalMoney] = useState()
    console.log("🚀 ~ file: Banner.js:7 ~ Banner ~ totalMoney", totalMoney)
    var nf = new Intl.NumberFormat();
    const number = totalMoney?.donate.toString()?.replace(/\$|,|\./g, "");
    const money = nf.format(number, 10)
    console.log("🚀 ~ file: Banner.js:11 ~ Banner ~ money", money)
    async function handleCallAPIGet(url) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        return result;
    }
    useEffect(() => {
        const handleGet = async () => {
            const kq1 = await handleCallAPIGet("http://localhost:8080/api/post/getCountPost")
            const kq2 = await handleCallAPIGet("http://localhost:8080/api/donate/getSumDonate")
            setTotalPost(kq1)
            setTotalMoney(kq2)
        }
        handleGet()
    }, [])
    return (
        <div className="pb-[50px] text-[#f0f0f0]">
            <div className="w-full h-[250px] bg-[#0f1e31]">
                <div className="px-[30px] pt-[30px]">
                    <h2 className="pb-[5px]  font-semibold text-[20px] uppercase border-b-[1px]">ĐẾN HÔM NAY chúng ta ĐÃ LÀM ĐƯỢC :</h2>
                </div>
                <div className="py-[40px] px-[100px] flex justify-between items-center uppercase">
                    <div className="flex items-center flex-col">
                        <h3 className="text-[40px] text-[#f06626] font-semibold">{totalPost?.post}</h3>
                        <h5 className="text-[30px] font-normal ">Trường hợp</h5>
                    </div>
                    <div className="flex items-center flex-col">
                        <h3 className="text-[40px] text-[#e22d28] font-semibold">22.000.000</h3>
                        <h5 className="text-[30px] font-normal">Đồng</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;