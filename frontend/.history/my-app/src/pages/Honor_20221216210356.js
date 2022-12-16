import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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
    text-align: center;
  }
  th {
    padding: 10px 10px;
    font-weight: 600;
    text-align: center;
  }
  td {
    padding: 10px 10px;
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
const Honor = () => {
    const [account, setAccount] = useState()
    const [countParticipant, setCountParticipant] = useState()
    const [sumMoney, setSumMoney] = useState()
    console.log("🚀 ~ file: Honor.js:47 ~ Honor ~ sumMoney", sumMoney)
    async function handleCallAPIGet(url) {
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
        const handleGetAllAccount = async () => {
            const kq1 = await handleCallAPIGet("http://localhost:8080/api/auth/getAllAccount")
            setAccount(kq1)
        }

        handleGetAllAccount()
    }, [])
    useEffect(() => {
        const handleCountParticipantByUserID = async () => {
            if (account?.length > 0) {
                const kq = await Promise.all(
                    account.map(async (item) => {
                        console.log("🚀 ~ file: Honor.js:88 ~ account.map ~ item", item.id)
                        return await handleCallAPIGet(`http://localhost:8080/api/participant/getCountParticipantByUserId?userId=${item?.id}`)
                    })
                )
                setCountParticipant(kq)
            }
        }
        const handleSumMoneyUserID = async () => {
            if (account?.length > 0) {
                const kq = await Promise.all(
                    account.map(async (item) => {
                        console.log("🚀 ~ file: Honor.js:88 ~ account.map ~ item", item.id)
                        return await handleCallAPIGet(`http://localhost:8080/api/donate/getSumDonateByUserId?userId=${item?.id}`)
                    })
                )
                setSumMoney(kq)
            }
        }
        handleSumMoneyUserID()
        handleCountParticipantByUserID()
    }, [account])

    return (
        <div className="flex flex-row">
            <div className="w-[50%]">
                <TableStyles className="p-[10px] h-[450px]">
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tài khoản</th>
                                <th>Loại tài khoản</th>
                                <th>Lượt tham gia</th>
                                <th>Tiền</th>

                            </tr>
                        </thead>
                        <tbody >
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>

                        </tbody>

                    </table>
                </TableStyles>
            </div>
            <div className="w-[50%]">
                <TableStyles className="p-[10px] h-[450px]">
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
                        <tbody >
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                        </tbody>

                    </table>
                </TableStyles>
            </div>
        </div>
    );
};

export default Honor;