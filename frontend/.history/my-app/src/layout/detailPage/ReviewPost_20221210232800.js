import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import * as yup from "yup";
import TextArea from "../../components/input/TextArea";

const ReviewPost = (idPost) => {
    const userLocal = JSON.parse(localStorage.getItem("userLogin"));
    const userId = userLocal?.id;
    const [postComment, setPostComment] = useState("");
    const [comment, setComment] = useState("");
    console.log("🚀 ~ file: ReviewPost.js:15 ~ ReviewPost ~ comment", comment)
    const [participant, setParticipant] = useState("");
    const userIDParticipant = participant[0]?.userID;
    const schema = yup
        .object({
            review: yup.string().required("Vui lòng nhập vào nội dung"),
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
    async function handleGetAllParticipantByLeadAndPostID(url) {
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
            toast.success(`Đánh giá bài viết thành công`, {
                pauseOnHover: false,
                delay: 0,
                autoClose: 1300,
            });
        } catch (error) {
            toast.error("Đánh giá bài viết thất bại", {
                pauseOnHover: false,
                delay: 0,
                autoClose: 1300,
            });
        }
    };
    const submitReviewForm = (values) => {
        setValue("userId", userId);
        const newValue = { ...values };
        newValue.userId = getValues("userId");
        newValue.postId = idPost.idPost;
        newValue.hot = true;
        console.log(newValue);
        if (userLocal !== "") {
            if (comment.length === 0 && userIDParticipant === userId) {
                handleAddComment(
                    "http://localhost:8080/api/comment/addComment",
                    newValue
                );
            } else {
                if (comment.length > 0) {
                    toast.error("Bài viết đã tồn tại đánh giá !!!", {
                        pauseOnHover: false,
                        delay: 0,
                        autoClose: 1400,
                    });
                } else if (userIDParticipant !== userId) {
                    toast.error("Chỉ đội trưởng của bài viết mới được đánh giá", {
                        pauseOnHover: false,
                        delay: 0,
                        autoClose: 1300,
                    });
                }
            }
        } else {
            toast.error("Vui lòng đăng nhập để đánh giá", {
                pauseOnHover: false,
                delay: 0,
                autoClose: 1400,
            });
        }
        setTimeout(() => (window.location.href = window.location.href), 1500);
    };
    async function handleDeleteCommentByID(url) {
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
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
                    const check = await handleDeleteCommentByID(
                        `http://localhost:8080/api/comment/DeleteCommentById?id=${idComment}`
                    );
                    console.log(
                        "🚀 ~ file: ItemPost.js ~ line 52 ~ handleDeletePost ~ check",
                        check
                    );
                    if (check.status === 200) {
                        Swal.fire(
                            "Xóa thành công!",
                            "Đánh giá đã được xóa.",
                            "success"
                        ).then(function () {
                            window.location.reload();
                        });
                    } else {
                        Swal.fire(
                            "Xóa thất bại!",
                            "Đánh giá chưa được xóa.",
                            "warning"
                        ).then(function () {
                            window.location.reload();
                        });
                    }
                } else {
                    toast.error("Bạn không có quyền xóa đánh giá này!!!", {
                        pauseOnHover: false,
                        delay: 0,
                        autoClose: 1300,
                    });
                    setTimeout(() => window.location.reload(), 1200);
                }
            }
        });
    };
    useEffect(() => {
        handleGetCommentIDByPostID(
            `http://localhost:8080/api/comment/getCommentIDByPostID?postId=${idPost.idPost}`
        );
        handleGetAllParticipantByLeadAndPostID(
            `http://localhost:8080/api/participant/getAllParticipantByLeadAndPostID?postId=${idPost.idPost}`
        );
    }, [idPost.idPost]);
    useEffect(() => {
        const getDonate = async () => {
            let data = [];
            if (postComment?.length > 0) {
                const kq = await Promise.all(
                    postComment.map(async (item) => {
                        return await handleGetCommentByCommentId(
                            `http://localhost:8080/api/comment/getCommentByCommentIDAndHot?commentId=${item.commentId}`
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
    return (
        <div>
            <div className="reviews py-[40px]">
                <h3 className="text-[20px] font-semibold ">
                    Kết quả đánh giá thiện nguyện
                </h3>
                <div className="border-[1px] p-[10px] mb-[20px] h-[100px] overflow-auto pointer-events-none">
                    {comment?.length > 0 && (
                        <div className="flex items-center justify-center gap-x-[10px]" >
                            <span>{comment[0]?.text}</span>
                        </div>
                    )}
                </div>
                {comment?.length > 0 && (
                    <div
                        onClick={() => handleDeleteComment(comment[0].userID, comment[0].id)}
                        className="mb-[20px]"
                    >
                        <button className="px-[10px] py-[5px] bg-[#e22d28] text-center rounded-[5px] text-white font-medium">
                            Xóa đánh giá
                        </button>
                    </div>
                )}
                <form onSubmit={handleSubmit(submitReviewForm)} action="">
                    <TextArea
                        placeholder="Nhập đánh giá tại đây."
                        height="70px"
                        padding="10px"
                        name="review"
                        control={control}
                    ></TextArea>
                    <button className="px-[10px] py-[5px] bg-[#e22d28] text-center rounded-[5px] text-white font-medium">
                        Viết đánh giá
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ReviewPost;
