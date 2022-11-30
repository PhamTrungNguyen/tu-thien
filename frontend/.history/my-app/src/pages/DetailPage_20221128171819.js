import React, { useEffect, useRef, useState } from "react";
import ItemRelate from "../layout/detailPage/ItemRelate";
import TitleDetailPage from "../layout/detailPage/TitleDetailPage";
import Banner from "../layout/homePage/Banner";
import MainImage from "../layout/homePage/MainImage";
import SidebarMenu from "../layout/homePage/SidebarMenu";
import { COLORHOMEPAGE } from "../menuColor";
import styled from "styled-components";
import { useParams } from "react-router-dom";
const TableStyles = styled.div`
  overflow-x: auto;
  background-color: white;
  border-radius: 10px;
  font-size: 14px;
  table {
    width: 100%;
  }
  thead {
    background-color: #f7f7f8;
  }
  th,
  td {
    vertical-align: middle;
    white-space: nowrap;
  }
  th {
    padding: 10px 20px;
    font-weight: 600;
    text-align: left;
  }
  td {
    padding: 10px 20px;
  }
  tbody {
  }
`;
const DetailPage = () => {
  const [post, setPost] = useState();
  // console.log("🚀 ~ file: DetailPage.js ~ line 39 ~ DetailPage ~ post", post)
  const [postDonate, setPostDonate] = useState("");
  // console.log("🚀 ~ file: DetailPage.js ~ line 40 ~ DetailPage ~ postDonate", postDonate)
  const [donate, setDonate] = useState({
    userId: "",
    money: "",
  });
  console.log("🚀 ~ file: DetailPage.js ~ line 43 ~ DetailPage ~ donate", donate)
  // console.log("🚀 ~ file: DetailPage.js ~ line 39 ~ DetailPage ~ post", post)
  const param = useParams()
  const idPost = param.Id
  async function handleGetPostByPostID(url) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    setPost(result)
  }
  async function handleGetDonateIDByPostID(url) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    setPostDonate(result);
  }
  async function handleGetDonateByDonateId(url) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log("🚀 ~ file: DetailPage.js ~ line 78 ~ handleGetDonateByDonateId ~ result", result)
    setDonate({
      ...donate,
      userId: result.userId,
      money: result.money,

    })
  }
  useEffect(() => {
    handleGetPostByPostID(`http://localhost:8080/api/post/getPostById?idPost=${idPost}`)
  }, [idPost])
  useEffect(() => {
    handleGetDonateIDByPostID(`http://localhost:8080/api/donate/getDonateIDByPostID?postId=${post?.id}`)
  }, [post?.id])
  useEffect(() => {
    postDonate.length > 0 && postDonate.forEach((item) => {
      // console.log(item.donateId);
      handleGetDonateByDonateId(
        `http://localhost:8080/api/donate/getDonateByDonateID?donateId=${item?.donateId}`
      );
    })

  }, [postDonate, postDonate.donateId]);
  return (
    <div className="flex">
      <main className="">
        <TitleDetailPage title={post?.title}></TitleDetailPage>
        <div className="flex px-[40px] pt-[40px]">
          <div className="w-[65%] border-r-[2px] pr-[20px]">
            <div className="flex flex-col items-center ">
              <div className="mb-[10px]">
                <img
                  src={post?.image}
                  alt=""
                  className="w-[500px]  "
                />
              </div>

              <p className=" leading-7 ">
                {post?.desc}
              </p>
            </div>
          </div>
          <div className="w-[35%] flex flex-col justify-start pl-[20px]">
            <TableStyles>
              <h3 className="text-[18px] font-bold pb-[10px]">
                Danh sách ủng hộ
              </h3>
              <table>
                <thead>
                  <tr>
                    <th>Nhà hảo tâm</th>
                    <th>Số tiền đóng góp</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Phạm trung Nguyên</td>
                    <td>22.000.000đ</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Nguyễn Đình Thúy Vy</td>
                    <td>500.000đ</td>
                  </tr>
                </tbody>
              </table>
            </TableStyles>
            <h3 className="text-[18px] font-bold pt-[30px] pb-[10px]">
              Bài viết liên quan
            </h3>
            <div className="">
              <ItemRelate></ItemRelate>
              <ItemRelate></ItemRelate>
              <ItemRelate></ItemRelate>
              <ItemRelate></ItemRelate>
            </div>

          </div>
        </div>
        <div className="reviews  px-[40px] py-[40px]">
          <h3 className="text-[20px] font-semibold ">
            Kết quả đánh giá thiện nguyện
          </h3>
          <div className="m-auto text-center">
            <button className="px-[10px] py-[5px] bg-[#e22d28] text-center rounded-[5px] text-white font-medium">Viết đánh giá</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailPage;
