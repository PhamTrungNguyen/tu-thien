import React, { useEffect, useState } from 'react';
import ActionDelete from '../../components/actions/ActionDelete';
import ActionEdit from '../../components/actions/ActionEdit';
import ActionView from '../../components/actions/ActionView';
import LabelStatus from '../../components/label/LabelStatus';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

const ItemPost = ({ props, index }) => {
    const [account, setAccount] = useState()
    const idPost = props.id;
    const navigate = useNavigate();
    const date = props?.createdAt

    console.log("🚀 ~ file: ItemPost.js ~ line 14 ~ ItemPost ~ date", date.getDate())
    const formatDate = new Date(date).toLocaleDateString("vi");
    const accountID = props.accountId
    const reloadUsingLocationHash = () => {
        window.location.hash = "reload";
    }

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
        })
    }
    useEffect(() => {
        handleGetAccountByID(`http://localhost:8080/api/auth/getAccountByID?accountId=${accountID}`);
    }, [accountID]);
    return (

        <tr>
            <td>{index}</td>
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
                            {props.title}
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
                    <LabelStatus type="CanHoTro">Cần hỗ trợ</LabelStatus>
                </td>
            }
            {props?.status === 2 &&
                <td>
                    <LabelStatus type="DangVanDong">Đang vận động</LabelStatus>
                </td>
            }
            {props?.status === 3 &&
                <td>
                    <LabelStatus type="DaHoanThanh">Đã hoàn thành</LabelStatus>
                </td>
            }
            {props?.hot === false &&
                <td>
                    <LabelStatus type="Khong">Không</LabelStatus>
                </td>
            }
            {props?.hot === true &&
                <td>
                    <LabelStatus type="Co">Có</LabelStatus>
                </td>
            }


            <td>
                <div className="flex items-center gap-x-3 text-gray-500">
                    <ActionView onClick={() => navigate(`/${idPost}`)}></ActionView>
                    <ActionEdit
                        onClick={() => navigate(`/quan-ly/sua/${idPost}`)}
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