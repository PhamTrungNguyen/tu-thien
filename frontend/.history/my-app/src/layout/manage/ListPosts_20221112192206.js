import React, { useEffect } from 'react';
import styled from "styled-components";
import ActionDelete from '../../components/actions/ActionDelete';
import ActionEdit from '../../components/actions/ActionEdit';
import ActionView from '../../components/actions/ActionView';
import LabelStatus from '../../components/label/LabelStatus';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import ItemPost from './ItemPost';
const TableStyles = styled.div`
  overflow-x: auto;
  background-color: white;
  border-radius: 10px;
  font-size: 14px;
  table {
      overflow-x: auto;
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
    padding: 20px 20px;
    font-weight: 600;
    text-align: center;
  }
  td {
    padding: 15px 30px;
  }
  tbody {
  }
  .title-post {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100px;
    max-width: 100px;
    white-space: pre-wrap;
    word-break: break-word;
  }
`;
const ListPosts = () => {
    const [post, setPost] = useState()
    console.log("🚀 ~ file: ListPosts.js ~ line 50 ~ ListPosts ~ post", post)
    async function handleGetPost(url) {

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        });
        const result = await response.json();
        setPost(result)
    }
    useEffect(() => {
        handleGetPost("http://localhost:8080/api/post/getPost")
    }, [])
    return (
        <main className="overflow-x-auto">
            <div className="text-right pt-[20px] pr-[20px] border-b-[2px] pb-[10px] mb-[10px]">
                <NavLink to={"/quan-ly/them"} onClick={() => this.refresh()}>
                    <button className="px-[15px] py-[10px] text-[18px] font-semibold rounded-[10px] text-white  bg-[#00b6f1]">
                        Đăng bài viết
                    </button>
                </NavLink>
            </div>
            <h3 className=" px-[20px] text-[20px] font-semibold">Danh sách bài viết</h3>
            <TableStyles className="p-[20px]">
                <table >
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Bài viết</th>
                            <th>Tác giả</th>
                            <th>Trạng thái</th>
                            <th>Nổi bật</th>
                            <th>Hành động</th>

                        </tr>
                    </thead>
                    {post?.length > 0 && post.map((item, index) => (
                        <tbody>
                            <ItemPost item={item} key={item.id}></ItemPost>
                        </tbody>
                    ))

                    }
                    {/* <tbody>
                        <tr>
                            <td>2</td>
                            <td>
                                <div className="flex items-center gap-x-3">
                                    <img
                                        src="https://nld.mediacdn.vn/2017/8-chan-1-1501857270466.jpg"
                                        alt=""
                                        className="w-[66px] h-[55px] rounded object-cover"
                                    />
                                    <div className="flex-1">
                                        <h3
                                            className="title-post text-[12px] font-semibold max-w-[300px] whitespace-normal cursor-pointer"
                                            title=" KỲ 382: CHA BỆNH, CON THƠ, LO CHẠY ĂN TỪNG BỮA, GIA ĐÌNH NGHÈO
                                            LÂM CẢNH NỢ NẦN, TÚNG QUẪN"
                                        >
                                            KỲ 382: CHA BỆNH, CON THƠ, LO CHẠY ĂN TỪNG BỮA, GIA
                                            ĐÌNH NGHÈO LÂM CẢNH NỢ NẦN, TÚNG QUẪN
                                        </h3>
                                        <time className="text-sm text-gray-500">
                                            01/01/2002
                                        </time>
                                    </div>
                                </div>
                            </td>
                            <td >
                                <h3 className="pl-[10px]" >Phạm Trung Nguyên</h3>
                            </td>
                            <td>
                                <LabelStatus type="DangVanDong">Đang vận động</LabelStatus>
                            </td>
                            <td>
                                <LabelStatus type="Co">Có</LabelStatus>
                            </td>
                            <td>
                                <div className="flex items-center gap-x-3 text-gray-500">
                                    <ActionView></ActionView>
                                    <ActionEdit></ActionEdit>
                                    <ActionDelete></ActionDelete>
                                </div>
                            </td>

                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>3</td>
                            <td>
                                <div className="flex items-center gap-x-3">
                                    <img
                                        src="https://nld.mediacdn.vn/2017/8-chan-1-1501857270466.jpg"
                                        alt=""
                                        className="w-[66px] h-[55px] rounded object-cover"
                                    />
                                    <div className="flex-1">
                                        <h3
                                            className="title-post text-[12px] font-semibold max-w-[300px] whitespace-normal cursor-pointer"
                                            title=" KỲ 382: CHA BỆNH, CON THƠ, LO CHẠY ĂN TỪNG BỮA, GIA ĐÌNH NGHÈO
                                            LÂM CẢNH NỢ NẦN, TÚNG QUẪN"
                                        >
                                            KỲ 382: CHA BỆNH, CON THƠ, LO CHẠY ĂN TỪNG BỮA, GIA
                                            ĐÌNH NGHÈO LÂM CẢNH NỢ NẦN, TÚNG QUẪN
                                        </h3>
                                        <time className="text-sm text-gray-500">
                                            01/01/2002
                                        </time>
                                    </div>
                                </div>
                            </td>
                            <td >
                                <h3 className="pl-[10px]" >Phạm Trung Nguyên</h3>
                            </td>
                            <td>
                                <LabelStatus type="DaHoanThanh">Đã hoàn thành</LabelStatus>
                            </td>
                            <td>
                                <LabelStatus type="Co">Có</LabelStatus>
                            </td>
                            <td>
                                <div className="flex items-center gap-x-3 text-gray-500">
                                    <ActionView ></ActionView>
                                    <ActionEdit

                                    ></ActionEdit>
                                    <ActionDelete

                                    ></ActionDelete>
                                </div>
                            </td>

                        </tr>
                    </tbody> */}
                </table>
            </TableStyles>
        </main>
    );
};

export default ListPosts;