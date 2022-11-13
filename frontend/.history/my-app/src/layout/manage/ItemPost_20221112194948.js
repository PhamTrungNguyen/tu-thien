import React, { useEffect, useState } from 'react';
import ActionDelete from '../../components/actions/ActionDelete';
import ActionEdit from '../../components/actions/ActionEdit';
import ActionView from '../../components/actions/ActionView';
import LabelStatus from '../../components/label/LabelStatus';

const ItemPost = ({ props, index }) => {
    const [account, setAccount] = useState()
    const date = props?.createAt?.seconds
        ? new Date(props?.createAt?.seconds * 1000)
        : new Date();
    const formatDate = new Date(date).toLocaleDateString("vi");
    const accountID = props.accountId
    // console.log("🚀 ~ file: ItemPost.js ~ line 13 ~ ItemPost ~ accountID", accountID)
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
    useEffect(() => {
        handleGetAccountByID(`http://localhost:8080/api/auth/getAccountByID?accountId=${accountID}`);
    }, [accountID]);
    return (

        <tr>
            <td>{index}</td>
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
            <td>
                <LabelStatus type="Khong">Không</LabelStatus>
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

    );
};

export default ItemPost;