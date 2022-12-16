import React, { useEffect, useState } from "react";
import styled from "styled-components";
const TableStyles = styled.div`
  overflow-x: none;
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
    const [account, setAccount] = useState();
    const [countParticipant, setCountParticipant] = useState();
    const [sumMoney, setSumMoney] = useState();
    let bxhParticipant = [];
    if (countParticipant && sumMoney) {
        countParticipant.forEach((item1) => {
            const kq = sumMoney.find((item2) => item1.userId === item2.userId)
            const kq2 = account.find((item3) => item1.userId === item3.id.toString())
            if (kq && kq2) {
                bxhParticipant.push({
                    userId: item1.userId,
                    participant: item1.participant,
                    money: kq.postDonate,
                    username: kq2.username,
                    roleId: kq2.roleId
                });
            }

        });
    }
    bxhParticipant.sort((a, b) => b.money - a.money)
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
            const kq1 = await handleCallAPIGet(
                "http://localhost:8080/api/auth/getAllAccount"
            );
            setAccount(kq1);
        };

        handleGetAllAccount();
    }, []);
    useEffect(() => {
        const handleCountParticipantByUserID = async () => {
            if (account?.length > 0) {
                const kq = await Promise.all(
                    account.map(async (item) => {
                        return await handleCallAPIGet(
                            `http://localhost:8080/api/participant/getCountParticipantByUserId?userId=${item?.id}`
                        );
                    })
                );
                setCountParticipant(kq);
            }
        };
        const handleSumMoneyUserID = async () => {
            if (account?.length > 0) {
                const kq = await Promise.all(
                    account.map(async (item) => {
                        return await handleCallAPIGet(
                            `http://localhost:8080/api/donate/getSumDonateByUserId?userId=${item?.id}`
                        );
                    })
                );
                setSumMoney(kq);
            }
        };
        handleSumMoneyUserID();
        handleCountParticipantByUserID();
    }, [account]);

    return (
        <div className="flex flex-row">
            <div className="w-[50%]">
                <div class="custom-select" style="width:200px;">
                    <select>
                        <option value="0">Select car:</option>
                        <option value="1">Audi</option>
                        <option value="2">BMW</option>

                    </select>
                </div>
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
                        {bxhParticipant.length > 0 && bxhParticipant.map((item, index) => (
                            <tbody key={item.id} >
                                <td>{index + 1}</td>
                                <td>{item.username}</td>
                                {item.roleId === 1 && <td>Người dùng</td>}
                                {item.roleId === 2 && <td>Quản trị viên</td>}
                                {item.roleId === 3 && <td>Admin</td>}
                                <td>{item.participant}</td>
                                {item.money === null && <td>0 VĐN</td>}
                                {item.money !== null && <td>{item.money} VĐN</td>}
                            </tbody>
                        ))

                        }

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
                        <tbody>
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
