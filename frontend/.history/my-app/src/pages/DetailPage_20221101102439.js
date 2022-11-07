import React, { useRef, useState } from 'react';
import TitleDetailPage from '../layout/detailPage/TitleDetailPage';
import Banner from '../layout/homePage/Banner';
import MainImage from '../layout/homePage/MainImage';
import SidebarMenu from '../layout/homePage/SidebarMenu';
import { COLORHOMEPAGE } from '../menuColor';

const DetailPage = () => {


  return (

    <div className="flex">
      <SidebarMenu></SidebarMenu>
      <main className="">
        <TitleDetailPage></TitleDetailPage>
        <div className="flex px-[40px] pt-[40px]">
          <div className="w-[75%] border-r-[2px] pr-[20px]">
            <div className="flex flex-col items-center ">
              <div className="mb-[10px]">
                <img src="https://nld.mediacdn.vn/2017/8-chan-1-1501857270466.jpg" alt="" className="w-[500px]  " />
              </div>

              <p className=" leading-7 ">Gia đình ở quê thuộc diện khó khăn, ba mẹ không có công việc ổn định, ai thuê gì làm đó nuôi 3 anh em. Người anh lớn từ sớm đã vào Đồng Nai làm công nhân phụ giúp gia đình, L là người con thứ, nghỉ học từ năm lớp 7, ở nhà với ba mẹ đến nay thì muốn vào HCM tìm công việc mưu sinh. Một mình lặn lội từ miền Trung vào Sài Gòn với người cậu. L chỉ đi làm được vài tháng thì xảy ra chuyện không may. Những ngày đầu một mình người cậu chăm lo cho L trong khi chờ bố mẹ em vào.Nghe tin con gặp tai nạn nghiêm trọng, tình trạng nguy kịch và chi phí điều trị vô cùng lớn với gia đình. Chị T-mẹ của bệnh nhân-thất thần nhưng cũng chạy đi vay mượn tiền để vào với con trai. Chắc hẳn chuyến xe đưa chị vào chăm con là chuyến xe xa nhất, lâu nhất và nặng nề nhất chị từng đi. Vì hoàn cảnh gia đình khó khăn nên các con không có điều kiện học hành buộc lòng các con phải ra đời bươn chải sớm. L có BHYT nhưng quá trình điều trị lâu dài, tình trạng chấn thương nghiêm trọng nên tính đến đầu tháng 10, gia đình vẫn đang nợ viện phí gần 30 triệu đồng. Gia đình đóng được 71 triệu tạm ứng hoàn toàn là tiền vay mượn. Ngày thường chi tiêu sinh hoạt đã thiếu trước, hụt sau thì nay tiền chục triệu là một con số vượt quá khả năng.</p>
            </div>
          </div>
          <div className="w-[25%] flex justify-center">
            <h3 className="text-left">Bài viết liên quan</h3>
          </div>
        </div>

      </main>
    </div>
  );
};

export default DetailPage;