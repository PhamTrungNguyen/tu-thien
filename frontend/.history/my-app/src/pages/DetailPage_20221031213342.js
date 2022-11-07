import React, { useRef } from 'react';
import Banner from '../layout/homePage/Banner';
import MainImage from '../layout/homePage/MainImage';
import SidebarMenu from '../layout/homePage/SidebarMenu';
import { COLORHOMEPAGE } from '../menuColor';

const DetailPage = () => {
    const ref = useRef()
    console.log(ref.current);
    console.log("🚀 ~ file: DetailPage.js ~ line 9 ~ DetailPage ~ ref", ref)
    return (

        <div className="flex">
            <SidebarMenu></SidebarMenu>
            <main className="">
                <div className="pb-[30px]">
                    <div className={`py-[15px] px-[40px] bg-[${COLORHOMEPAGE.CanHoTro}] duration-300 text-[14px] `}>
                        <a href="#1" className="text-black hover:text-white ">Trang chủ </a>
                        <span className="">/ KỲ 382: CHA BỆNH, CON THƠ, LO CHẠY ĂN TỪNG BỮA, GIA ĐÌNH NGHÈO LÂM CẢNH NỢ NẦN, TÚNG QUẪN</span>
                    </div>
                </div>
                <div className="px-[40px] ">
                    <h2 className="text-[28px] pb-[10px] font-semibold border-b-[2px]">KỲ 525: THA PHƯƠNG MƯU SINH GẶP TAI NẠN NGHIÊM TRỌNG</h2>
                </div>
                <div className="flex px-[40px] pt-[40px]">
                    <div className="w-[70%] ">
                        <div className="flex flex-col ">
                            <div className="mb-[10px]">
                                <img src="https://nld.mediacdn.vn/2017/8-chan-1-1501857270466.jpg" alt="" className="w-[400px]  " />
                            </div>

                            <p className=" leading-7 ">Gia đình ở quê thuộc diện khó khăn, ba mẹ không có công việc ổn định, ai thuê gì làm đó nuôi 3 anh em. Người anh lớn từ sớm đã vào Đồng Nai làm công nhân phụ giúp gia đình, L là người con thứ, nghỉ học từ năm lớp 7, ở nhà với ba mẹ đến nay thì muốn vào HCM tìm công việc mưu sinh. Một mình lặn lội từ miền Trung vào Sài Gòn với người cậu. L chỉ đi làm được vài tháng thì xảy ra chuyện không may. Những ngày đầu một mình người cậu chăm lo cho L trong khi chờ bố mẹ em vào.Nghe tin con gặp tai nạn nghiêm trọng, tình trạng nguy kịch và chi phí điều trị vô cùng lớn với gia đình. Chị T-mẹ của bệnh nhân-thất thần nhưng cũng chạy đi vay mượn tiền để vào với con trai. Chắc hẳn chuyến xe đưa chị vào chăm con là chuyến xe xa nhất, lâu nhất và nặng nề nhất chị từng đi. Vì hoàn cảnh gia đình khó khăn nên các con không có điều kiện học hành buộc lòng các con phải ra đời bươn chải sớm. L có BHYT nhưng quá trình điều trị lâu dài, tình trạng chấn thương nghiêm trọng nên tính đến đầu tháng 10, gia đình vẫn đang nợ viện phí gần 30 triệu đồng. Gia đình đóng được 71 triệu tạm ứng hoàn toàn là tiền vay mượn. Ngày thường chi tiêu sinh hoạt đã thiếu trước, hụt sau thì nay tiền chục triệu là một con số vượt quá khả năng.</p>
                        </div>
                    </div>
                    <div className="w-[30%] flex justify-center">Bài viết liên quan</div>
                </div>
                <div>
                    1231
                    <input ref={ref} type="file" />
                </div>
            </main>
        </div>
    );
};

export default DetailPage;