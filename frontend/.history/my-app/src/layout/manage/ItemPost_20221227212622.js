import React, { useEffect, useState } from 'react';
import ActionDelete from '../../components/actions/ActionDelete';
import ActionEdit from '../../components/actions/ActionEdit';
import ActionView from '../../components/actions/ActionView';
import LabelStatus from '../../components/label/LabelStatus';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ItemPost = ({ props, index }) => {
    const [account, setAccount] = useState()
    const [post, setPost] = useState()
    const idPost = props.id;
    const navigate = useNavigate();
    const date = props?.createdAt

    const formatDate = new Date(date).toLocaleDateString("vi");
    const accountID = props.accountId
    const accountNow = JSON.parse(localStorage.getItem("userLogin"))
    // console.log("🚀 ~ file: ItemPost.js:19 ~ ItemPost ~ accountNow", accountNow.roleId)
    const accountIDNow = accountNow?.id
    const reloadUsingLocationHash = () => {
        window.location.hash = "reload";
    }
    async function handleGet(url) {
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
        const getPostById = async () => {
            let kq = await handleGet(
                `http://localhost:8080/api/post/getPostById?idPost=${idPost}`
            );
            setPost(kq)
        }
        getPostById()
    }, [idPost])
    async function handleGetAccountByID(url) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        setAccount(result)
    }
    async function handleDeleteAccountByID(url) {
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
    const handleDeletePost = () => {
        Swal.fire({
            title: 'Bạn có chắc chắn không?',
            text: "Bạn sẽ không thể hoàn tác tài nguyên nếu xóa!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đồng ý',
            cancelButtonText: 'Hủy'
        }).then(async (result) => {
            if (result.isConfirmed) {
                if (accountID === accountIDNow || accountNow.roleId === 3) {
                    if (post?.status === 1) {
                        const check = await handleDeleteAccountByID(`http://localhost:8080/api/post/DeletePostById?idPost=${idPost}`)
                        console.log("🚀 ~ file: ItemPost.js ~ line 52 ~ handleDeletePost ~ check", check)
                        if (check.status === 200) {
                            Swal.fire(
                                'Xóa thành công!',
                                'Bài viết đã được xóa.',
                                'success'
                            ).then(function () {

                                window.location.reload()
                            })
                        }
                        else {
                            Swal.fire(
                                'Xóa thất bại!',
                                'Bài viết chưa được xóa.',
                                'warning'
                            ).then(function () {

                                window.location.reload()
                            })
                        }
                    }
                    else {
                        toast.error("Chỉ được xóa bài viết cần hỗ trợ", {
                            pauseOnHover: false,
                            delay: 0,
                            autoClose: 1300,
                        });
                        setTimeout(
                            () => (window.location.reload()),
                            1500
                        );
                    }
                }
                else {
                    toast.error("Không được phép xóa bài viết của người khác", {
                        pauseOnHover: false,
                        delay: 0,
                        autoClose: 1300,
                    });
                    setTimeout(
                        () => (window.location.reload()),
                        1500
                    );
                }
            }
        })
    }
    const handleUpdate = () => {
        if (accountID === accountIDNow || accountNow.roleId === 3) {
            navigate(`/quan-ly/sua?id=${idPost}`)
        }
        else {
            toast.error("Không được phép chỉnh sửa bài viết của người khác", {
                pauseOnHover: false,
                delay: 0,
                autoClose: 1300,
            });
            setTimeout(
                () => (window.location.reload()),
                1500
            );
        }
    }
    useEffect(() => {
        handleGetAccountByID(`http://localhost:8080/api/auth/getAccountByID?accountId=${accountID}`);
    }, [accountID]);
    return (

        <tr>

            <td>
                <div className="flex items-center gap-x-3">
                    <img
                        src={props.image}
                        alt=""
                        className="w-[66px] h-[55px] rounded object-cover"

                    />

                    <div className="flex-1">
                        <h3
                            className="title-post text-[12px] font-semibold max-w-[300px] whitespace-normal cursor-pointer"
                            title={props.title}
                        >
                            <a href={`/${idPost}`}>

                                {props.title}
                            </a>
                        </h3>
                        <time className="text-sm text-gray-500">
                            {formatDate}
                        </time>
                    </div>
                </div>
            </td>
            <td >
                <h3 className="pl-[10px]" >{account?.username}</h3>
            </td>
            {props?.status === 1 &&
                <td>
                    <LabelStatus type="CanHoTro" color1="#3376bc" color2="#91bbe5">Cần hỗ trợ</LabelStatus>
                </td>
            }
            {props?.status === 2 &&
                <td>
                    <LabelStatus type="DangVanDong" color1="#f20231" color2="#efbf7f">Đang vận động</LabelStatus>
                </td>
            }
            {props?.status === 3 &&
                <td>
                    <LabelStatus type="DaHoanThanh" color1="#407f3e" color2="#89b449">Đã hoàn thành</LabelStatus>
                </td>
            }
            {props?.hot === false &&
                <td>
                    <LabelStatus type="Khong" color1="#ff0035" color2="#efbf7f">Không</LabelStatus>
                </td>
            }
            {props?.hot === true &&
                <td>
                    <LabelStatus type="Co" color1="#f20231" color2="#efbf7f">Có</LabelStatus>
                </td>
            }


            <td>
                <div className="flex items-center gap-x-3 text-gray-500">
                    <ActionView onClick={() => navigate(`/${idPost}`)}></ActionView>
                    <ActionEdit
                        onClick={() => handleUpdate()}
                    ></ActionEdit>
                    <ActionDelete
                        onClick={() => { handleDeletePost() }}
                    ></ActionDelete>
                </div>
            </td>

        </tr>

    );
};

export default ItemPost;