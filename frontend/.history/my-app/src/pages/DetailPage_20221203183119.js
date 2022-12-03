import React, { useEffect, useState } from "react";
import ItemRelate from "../layout/detailPage/ItemRelate";
import TitleDetailPage from "../layout/detailPage/TitleDetailPage";
import * as yup from "yup";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import LoadMore from "../layout/homePage/LoadMore";
import TextArea from "../components/input/TextArea";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
const TableStyles = styled.div`
  overflow-x: auto;
  background-color: white;
  border-radius: 10px;
  font-size: 14px;
  margin-bottom: 30px;
  table {
    /* width: 200px; */
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
  const [participant, setParticipant] = useState();
  const [relate, setRelate] = useState();
  const [limit, setLimit] = useState(8);
  const [postDonate, setPostDonate] = useState("");
  const [postComment, setPostComment] = useState("");
  const [totalMoney, setTotalMoney] = useState("");
  // console.log("🚀 ~ file: DetailPage.js:48 ~ DetailPage ~ totalMoney", totalMoney)
  const [donate, setDonate] = useState({});
  console.log("🚀 ~ file: DetailPage.js:50 ~ DetailPage ~ donate", donate)
  const [comment, setComment] = useState({});
  // console.log("🚀 ~ file: DetailPage.js:50 ~ DetailPage ~ comment", comment)
  const [user, setUser] = useState({});
  const [userParticipant, setUserParticipant] = useState({});
  const userLocal = JSON.parse(localStorage.getItem('userLogin'))
  const userId = userLocal?.id
  // const nameUser = userLocal?.displayName
  //   ? userLocal?.displayName
  //   : userLocal?.username
  const schema = yup
    .object({
      text: yup.string().required("Vui lòng nhập vào nội dung"),

    })
    .required();
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    watch,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    // defaultValues: {
    //   title: "",
    //   desc: "",
    //   hot: false,
    //   image_url: "",
    //   accountId: "",
    // },
  });
  var nf = new Intl.NumberFormat();
  const hot = post?.hot ? 1 : 0;
  const param = useParams();
  const idPost = param.Id;
  /* --------------- */
  async function handleGetPostByPostID(url) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    setPost(result);
  }
  /* --------------- */
  async function handleGetAllParticipantByPostID(url) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    setParticipant(result);
  }
  /* --------------- */
  async function handleGetUserParticipantByUserID(url) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  }
  /* --------------- */
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
  /* --------------- */
  async function handleGetCommentIDByPostID(url) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    setPostComment(result);
  }
  /* --------------- */
  async function handleGetDonateByDonateId(url) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result[0];
  }
  /* --------------- */
  async function handleGetCommentByCommentId(url) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result[0];
  }
  /* --------------- */
  async function handleGetAccountByID(url) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  }
  /* --------------- */
  async function handleGetAllPostRelate(url) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    setRelate(result);
  }
  const handleAddComment = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      toast.success(`${result.message}`, {
        pauseOnHover: false,
        delay: 0,
        autoClose: 1300,
      });
    } catch (error) {
      toast.error("Bình luận thất bại", {
        pauseOnHover: false,
        delay: 0,
        autoClose: 1300,
      });
    }
  }
  useEffect(() => {
    handleGetAllPostRelate(
      `http://localhost:8080/api/post/getAllPostRelate?hot=${hot}`
    );
  }, [hot]);
  useEffect(() => {
    handleGetPostByPostID(
      `http://localhost:8080/api/post/getPostById?idPost=${idPost}`
    );
    handleGetAllParticipantByPostID(
      `http://localhost:8080/api/participant/getAllParticipantByPostId?postId=${idPost}`
    );
  }, [idPost]);
  useEffect(() => {
    handleGetDonateIDByPostID(
      `http://localhost:8080/api/donate/getDonateIDByPostID?postId=${post?.id}`
    );
    handleGetCommentIDByPostID(`http://localhost:8080/api/comment/getCommentIDByPostID?postId=${post?.id}`)
  }, [post?.id]);
  /* ---------------------------------------------------- */
  useEffect(() => {
    const getDonate = async () => {
      if (postDonate.length > 0) {
        const kq = await Promise.all(
          postDonate.map(async (item) => {
            return await handleGetDonateByDonateId(
              `http://localhost:8080/api/donate/getDonateByDonateID?donateId=${item?.donateId}`
            );
          })
        );
        const result = kq.reduce((acc, curr) => {
          const objInAcc = acc.find((o) => o.userID === curr.userID);
          if (objInAcc) objInAcc.money += curr.money;
          else acc.push(curr);
          return acc;
        }, []);
        let sortedMoney = result.sort((p1, p2) =>
          p1.money < p2.money ? 1 : p1.money > p2.money ? -1 : 0
        );
        setDonate(sortedMoney);
        const sum = sortedMoney.reduce((accumulator, object) => {
          return accumulator + object.money;
        }, 0);
        setTotalMoney(sum);
      }
    };
    getDonate();
  }, [postDonate]);
  useEffect(() => {
    const getDonate = async () => {
      if (postComment?.length > 0) {
        const kq = await Promise.all(
          postComment.map(async (item) => {
            return await handleGetCommentByCommentId(
              `http://localhost:8080/api/comment/getCommentByCommentID?commentId=${item.commentId}`
            );
          })
        );
        setComment(kq)
      }
    };
    getDonate();
  }, [postComment]);
  /* ---------------------------------------------------- */
  useEffect(() => {
    const handleGetParticipant = async () => {
      if (participant?.length > 0) {
        const kq = await Promise.all(
          participant.map((item) => {

            return handleGetUserParticipantByUserID(
              `http://localhost:8080/api/auth/getAccountByID?accountId=${item.userID}`
            );
          })
        );
        setUserParticipant(kq);
      }
    };
    handleGetParticipant();
  }, [participant]);
  /* ---------------------------------------------------- */
  useEffect(() => {
    const getUser = async () => {
      if (donate.length > 0) {
        const kqUser = await Promise.all(
          donate.map(async (item) => {
            return await handleGetAccountByID(
              `http://localhost:8080/api/auth/getAccountByID?accountId=${parseInt(
                item.userID
              )}`
            );
          })
        );
        setUser(kqUser);
      }
    };
    getUser();
  }, [donate]);
  const submitForm = (values) => {
    setValue("userId", userId)
    setValue("postId", idPost)
    const newValue = { ...values }
    newValue.userId = getValues("userId")
    newValue.postId = getValues("postId")
    console.log(newValue);
    handleAddComment("http://localhost:8080/api/comment/addComment", newValue)
    setTimeout(
      () => (window.location.href = window.location.href),
      700
    );
  }
  return (
    <div className="flex">
      <main className="">
        <TitleDetailPage title={post?.title}></TitleDetailPage>
        <div className="flex px-[40px] pt-[40px]">
          <div className="w-[65%] border-r-[2px] pr-[20px]">
            <div className="flex flex-col items-center ">
              <div className="mb-[10px]">
                <img src={post?.image} alt="" className="w-[500px]  " />
              </div>
              <p className=" leading-7 ">{post?.desc}</p>
            </div>
            <div className="reviews py-[40px]">
              <h3 className="text-[20px] font-semibold ">
                Kết quả đánh giá thiện nguyện
              </h3>
              <div className="m-auto text-center">
                <button className="px-[10px] py-[5px] bg-[#e22d28] text-center rounded-[5px] text-white font-medium">
                  Viết đánh giá
                </button>
              </div>
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
                  {donate.length > 0 &&
                    donate.map((item, index) => (
                      <tr key={item?.id}>
                        <td>
                          {user[index]?.displayName
                            ? user[index]?.displayName
                            : user[index]?.username}
                        </td>
                        <td>
                          {nf.format(
                            item?.money.toString().replace(/\$|,|\./g, ""),
                            10
                          ) + " VNĐ"}
                        </td>
                      </tr>
                    ))}
                  <tr className="text-black font-semibold text-[18px]">
                    <td>Tổng tiền :</td>
                    <td>
                      {" "}
                      {nf.format(
                        totalMoney.toString().replace(/\$|,|\./g, ""),
                        10
                      ) + " VNĐ"}{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </TableStyles>
            <TableStyles>
              <h3 className="text-[18px] font-bold pb-[10px]">
                Danh sách thành viên tham gia
              </h3>
              <table>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên thành viên</th>
                  </tr>
                </thead>
                <tbody>
                  {userParticipant?.length > 0 &&
                    userParticipant.map((item, index) => (
                      <tr key={item?.id}>
                        <td>{index + 1}</td>
                        <td>
                          {item?.displayName
                            ? item?.displayName
                            : item?.username}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </TableStyles>
            <h3 className="text-[18px] font-bold pb-[10px]">
              Bài viết liên quan
            </h3>
            <div className="">
              {relate?.length > 0 &&
                relate.map((item) =>
                  item.id !== parseInt(idPost) ? (
                    <ItemRelate key={item.id} item={item}></ItemRelate>
                  ) : null
                )}
            </div>
            <LoadMore
              onClick={() => {
                setLimit(limit + 4);
                console.log(limit);
                handleGetAllPostRelate(
                  `http://localhost:8080/api/post/getAllPostRelate?hot=${hot}&limit=${limit}`
                );
              }}
            ></LoadMore>
            <div className="reviews pb-[20px] ">
              <h3 className="text-[20px] font-semibold mb-[20px]">
                Bình luận bài viết
              </h3>
              <div className="border-[1px] p-[10px] mb-[20px]">
                {comment?.length > 0 && comment.map((item, index) => (
                  <div className="text-[13px]" key={index}>
                    <h3 className="font-semibold inline">{`${item?.id} :`}</h3>
                    <span className="inline">{item?.text}</span>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSubmit(submitForm)} className="text-center">
                <TextArea height="70px" padding="10px" name="text" control={control}></TextArea>
                <button className={`px-[10px] mt-[20px] py-[5px] bg-[#e22d28] text-center rounded-[5px] text-white font-medium ${!isValid ? "opacity-50" : ""}`}>
                  Đăng bình luận
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailPage;
