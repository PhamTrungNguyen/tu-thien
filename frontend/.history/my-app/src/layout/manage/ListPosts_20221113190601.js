import React, { useEffect } from "react";
import styled from "styled-components";
import ReactPaginate from 'react-paginate';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ItemPost from "./ItemPost";
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
const itemLimit = 5 // số lượng sản phẩm hiển thị
const ListPosts = () => {
    const [post, setPost] = useState();
    console.log("🚀 ~ file: ListPosts.js ~ line 49 ~ ListPosts ~ post", post)
    console.log("🚀 ~ file: ListPosts.js ~ line 49 ~ ListPosts ~ post", post)
    const [count, setCount] = useState();
    /* -------------- */
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [nextPage, setNextPage] = useState(1)
    /* --------------- */
    async function handleGetPost(url) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        setPost(result);
    }
    async function handleGetCountPost(url) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        setCount(result);
    }
    async function handleGetPaginate(url) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        setPost(result);
    }
    /* ------------ */
    const handlePageClick = (event) => {
        // // hiển thị dấu ... khi click vào trang khác
        // const newOffset = (event.selected * itemLimit) % 12;
        // // console.log("🚀 ~ file: MoviesPage.js ~ line 62 ~ handlePageClick ~ event.selected", event.selected) // số trang đang click -1
        // setItemOffset(newOffset);
        setNextPage(event.selected + 1)
        handleGetPaginate(`http://localhost:8080/api/post/getLimitPost?offset=${event.selected + 1}&limit=${itemLimit}`)
    };
    useEffect(() => {
        setPageCount(Math.ceil(count / itemLimit)); // tổng số page
    }, [count]);
    /* -------------- */
    useEffect(() => {
        // handleGetPost("http://localhost:8080/api/post/getAllPost");
        handleGetPaginate(`http://localhost:8080/api/post/getLimitPost?offset=${1}&limit=${itemLimit}`)
        handleGetCountPost("http://localhost:8080/api/post/getCountPost")
    }, []);
    return (
        <main className="overflow-x-auto">
            <div className="text-right pt-[20px] pr-[20px] border-b-[2px] pb-[10px] mb-[10px]">
                <NavLink to={"/quan-ly/them"} onClick={() => this.refresh()}>
                    <button className="px-[15px] py-[10px] text-[18px] font-semibold rounded-[10px] text-white  bg-[#00b6f1]">
                        Đăng bài viết
                    </button>
                </NavLink>
            </div>
            <h3 className=" px-[20px] text-[20px] font-semibold">
                Danh sách bài viết
            </h3>
            <TableStyles className="p-[20px]">
                <table>
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
                    {post?.length > 0 &&
                        post.map((item, index) => (
                            <tbody key={item.id}>
                                <ItemPost props={item} index={index + 1}></ItemPost>
                            </tbody>
                        ))}
                </table>
            </TableStyles>
            <div className="mb-10">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={<i className="fa-solid fa-arrow-right"></i>}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel={<i className="fa-solid fa-arrow-left"></i>}
                    renderOnZeroPageCount={null}
                    className="pagination"
                /></div>
        </main>
    );
};

export default ListPosts;
