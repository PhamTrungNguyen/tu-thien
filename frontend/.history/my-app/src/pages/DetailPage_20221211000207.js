import React, { useEffect, useState } from "react";
import ItemRelate from "../layout/detailPage/ItemRelate";
import TitleDetailPage from "../layout/detailPage/TitleDetailPage";
import * as yup from "yup";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import LoadMore from "../layout/homePage/LoadMore";
import TextArea from "../components/input/TextArea";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import ReviewPost from "../layout/detailPage/ReviewPost";
import ButtonStatus from "../components/button/ButtonStatus";
import ButtonDonate from "../components/button/ButtonDonate";
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
  const navigate = useNavigate();
  const [post, setPost] = useState();
  console.log("🚀 ~ file: DetailPage.js:47 ~ DetailPage ~ post", post)
  const [participant, setParticipant] = useState();
  const [relate, setRelate] = useState();
  const [limit, setLimit] = useState(8);
  const [postDonate, setPostDonate] = useState("");
  const [postComment, setPostComment] = useState("");
  const [totalMoney, setTotalMoney] = useState("");
  const [donate, setDonate] = useState({});
  const [comment, setComment] = useState({});
  const [user, setUser] = useState({});
  const [userComment, setUserComment] = useState({});
  const [userParticipant, setUserParticipant] = useState({});
  const [leadParticipant, setLeadParticipant] = useState({});
  const userLocal = JSON.parse(localStorage.getItem("userLogin"));
  const userId = userLocal?.id;
  var nf = new Intl.NumberFormat();
  const hot = post?.hot ? 1 : 0;
  const param = useParams();
  const idPost = param.Id;
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

  });

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
  /* --------------- */
  async function handleGetAllParticipantByLeadAndPostID(url) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    setLeadParticipant(result);
  }
  const handleAddComment = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
  };
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
    handleGetCommentIDByPostID(
      `http://localhost:8080/api/comment/getCommentIDByPostID?postId=${post?.id}`
    );
    handleGetAllParticipantByLeadAndPostID(
      `http://localhost:8080/api/participant/getAllParticipantByLeadAndPostID?postId=${post?.id}`
    );
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
      let data
      if (postComment?.length > 0) {
        const kq = await Promise.all(
          postComment.map(async (item) => {
            return await handleGetCommentByCommentId(
              `http://localhost:8080/api/comment/getCommentByCommentID?commentId=${item.commentId}`
            );
          })
        );
        data = kq.filter(function (element) {
          return element !== undefined;
        });
        setComment(data);
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
    const getUserByDonate = async () => {
      if (donate?.length > 0) {
        const kqUser = await Promise.all(
          donate.map(async (item) => {
            return await handleGetAccountByID(
              `http://localhost:8080/api/auth/getAccountByID?accountId=${parseInt(
                item?.userID
              )}`
            );
          })
        );
        setUser(kqUser);
      }
    };
    const getUserByComment = async () => {
      if (comment?.length > 0) {
        const kqUser = await Promise.all(
          comment.map(async (item) => {
            return await handleGetAccountByID(
              `http://localhost:8080/api/auth/getAccountByID?accountId=${parseInt(
                item?.userID
              )}`
            );
          })
        );
        setUserComment(kqUser);
      }
    };
    getUserByDonate();
    getUserByComment();
  }, [comment, donate]);
  const submitForm = (values) => {
    setValue("userId", userId);
    setValue("postId", idPost);
    const newValue = { ...values };
    newValue.userId = getValues("userId");
    newValue.postId = getValues("postId");
    console.log(newValue);
    if (userLocal !== "") {
      handleAddComment(
        "http://localhost:8080/api/comment/addComment",
        newValue
      );
    } else {
      toast.error("Vui lòng đăng nhập để bình luận", {
        pauseOnHover: false,
        delay: 0,
        autoClose: 1300,
      });
    }
    // setTimeout(() => {
    //   navigate(`/${idPost}`);
    //   const reloadUsingLocationHash = () => {
    //     window.location.hash = "reload";
    //   }
    //   window.onload = reloadUsingLocationHash();
    // }, 1000);
    // navigate(`/${idPost}`);
    const reloadUsingLocationHash = () => {
      window.location.hash = "reload";
    }
    window.onload = reloadUsingLocationHash();
  };

  async function handleDeleteCommentByID(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    // setMessage(result)
    return result;
  }
  const handleDeleteComment = (idUserComment, idComment) => {
    Swal.fire({
      title: "Bạn có chắc chắn không?",
      text: "Bạn sẽ không thể hoàn tác tài nguyên nếu xóa !!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý",
      cancelButtonText: "Hủy",
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (idUserComment === userId || userLocal.roleId === 3) {
          const check = await handleDeleteCommentByID(`http://localhost:8080/api/comment/DeleteCommentById?id=${idComment}`)
          console.log("🚀 ~ file: ItemPost.js ~ line 52 ~ handleDeletePost ~ check", check)
          if (check.status === 200) {
            Swal.fire("Xóa thành công!", "Bình luận đã được xóa.", "success").then(
              function () {
                window.location.reload();
              }
            );
          } else {
            Swal.fire("Xóa thất bại!", "Bình luận chưa được xóa.", "warning").then(
              function () {
                window.location.reload();
              }
            );
          }
        }
        else {
          toast.error("Không được phép xóa bình luận của người khác", {
            pauseOnHover: false,
            delay: 0,
            autoClose: 1300,
          });
          setTimeout(
            () => (window.location.reload()),
            1200
          );
        }
      }
    });
  };
  const handleUpdateFinish = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      toast.success(`${result?.finish?.message}`, {
        pauseOnHover: false,
        delay: 0,
        autoClose: 1300,
      });
      return result;
    } catch (error) {
      toast.error("Hoàn thành thất bại", {
        pauseOnHover: false,
        delay: 0,
        autoClose: 1300,
      });
    }
  };
  const handleUpdate = () => {
    if (leadParticipant[0]?.userID === userId) {
      handleUpdateFinish(`http://localhost:8080/api/participant/UpdateFinishByPostId?postId=${idPost}`)
    }
    else {
      toast.error("Bạn không có quyền hoàn thành thiện nguyện", {
        pauseOnHover: false,
        delay: 0,
        autoClose: 1300,
      });
    }
    setTimeout(() => (window.location.href = window.location.href), 1500);
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
            <ReviewPost idPost={idPost}></ReviewPost>
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
              <div className="border-[1px] p-[10px] mb-[20px] h-[100px] overflow-auto">
                {comment?.length > 0 &&
                  comment.map((item, index) => (
                    <div className="text-[13px] relative mb-[5px]" key={index}>
                      <h3 className="font-semibold inline">{`${userComment[index]?.displayName
                        ? userComment[index]?.displayName
                        : userComment[index]?.username
                        } :`}</h3>
                      <span className="inline">{item?.text}</span>
                      <div
                        className="inline absolute right-0 hover:text-red-500"
                        onClick={() => handleDeleteComment(item.userID, item.id)}
                      >
                        <i className="fa-solid fa-xmark "></i>
                      </div>
                    </div>
                  ))}
              </div>
              <form onSubmit={handleSubmit(submitForm)} className="text-center">
                <TextArea
                  placeholder="Nhập bình luận tại đây."
                  height="70px"
                  padding="10px"
                  name="text"
                  control={control}
                ></TextArea>
                <button
                  className={`px-[10px] mt-[20px] py-[5px] bg-[#e22d28] text-center rounded-[5px] text-white font-medium ${!isValid ? "opacity-50" : ""
                    }`}
                >
                  Đăng bình luận
                </button>
              </form>
            </div>


          </div>
        </div>
        {post?.status !== 3 &&
          <div className="m-auto mb-[20px]" onClick={() => handleUpdate()}>
            <ButtonDonate padding={"20px 80px"} size={"20px"} color={"#50C7C7"}>Hoàn thành thiện nguyện</ButtonDonate>
          </div>

        }
        {post?.status === 3 &&
          <div className="m-auto mb-[20px]" >
            <span className="bg-[#2ba234 ] px-[40px] py-[15px] text-[20px] font-semibold text-white">Đã hoàn thành</span>
          </div>

        }

      </main>

    </div>
  );
};

export default DetailPage;
