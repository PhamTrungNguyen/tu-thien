import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Label from "../components/label/Label";
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
const SelectStyles = styled.div`
padding: 10px 10px;
.custom-select{
    width: 200px;
} 
select{
    background-color : #f7f7f8;
    border-radius:10px;
    padding: 8px;
}

`;
const Honor = () => {
    const [account, setAccount] = useState();
    const [countParticipant, setCountParticipant] = useState();
    const [sumMoney, setSumMoney] = useState();
    const [sortParticipant, setSortParticipant] = useState(0);
    // const [check, setCheck] = useState
    const [bxhParticipant, setBxhParticipant] = useState([])
    const [bxhParticipant1, setBxhParticipant1] = useState([])


    useEffect(() => {
        let array = [];
        if (countParticipant && sumMoney) {
            countParticipant.forEach((item1) => {
                const kq = sumMoney.find((item2) => item1.userId === item2.userId)
                const kq2 = account.find((item3) => item1.userId === item3.id.toString())
                if (kq && kq2) {
                    array.push({
                        userId: item1.userId,
                        participant: item1.participant,
                        money: kq.postDonate,
                        username: kq2.username,
                        roleId: kq2.roleId
                    });
                }

            });
            setBxhParticipant([...array.sort((a, b) => b.money - a.money)])
            setBxhParticipant1([...array.sort((a, b) => b.money - a.money)].slice(0, 3))
        }
    }, [countParticipant, sumMoney])
    // bxhParticipant.sort((a, b) => b.money - a.money)
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
    useEffect(() => {
        if (sortParticipant === "0") {
            let kq = bxhParticipant.sort((a, b) => b.money - a.money)
            setBxhParticipant([...kq]);
        }
        else if (sortParticipant === "1") {
            let kq = bxhParticipant.sort((a, b) => b.participant - a.participant)
            setBxhParticipant([...kq]);
        }
        else if (sortParticipant === "2") {
            let kq = bxhParticipant.sort((a, b) => b.roleId - a.roleId)
            setBxhParticipant([...kq]);
        }
    }, [bxhParticipant, sortParticipant])
    return (
        <div className="flex flex-row">
            <div className="w-[70%]">
                <SelectStyles>
                    <Label color="black">Sắp xếp bảng vinh danh thành viên</Label>
                    <div className="custom-select">
                        <select onChange={(e) => { setSortParticipant(e.target.value) }}>
                            <option value="0">Tiền đóng góp</option>
                            <option value="1">Lượt tham gia</option>
                            <option value="2">Loại tài khoản</option>

                        </select>
                    </div>
                </SelectStyles>
                <TableStyles className="p-[10px] h-[450px]">
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tài khoản</th>
                                <th>Loại tài khoản</th>
                                <th>Lượt tham gia</th>
                                <th>Tiền đóng góp</th>
                            </tr>
                        </thead>
                        {bxhParticipant.length > 0 && bxhParticipant.map((item, index) => (
                            <tbody key={index} >
                                <td>{index + 1}</td>
                                <td>{item.username}</td>
                                {item.roleId === 1 && <td>Người dùng</td>}
                                {item.roleId === 2 && <td>Quản trị viên</td>}
                                {item.roleId === 3 && <td>Admin</td>}
                                <td>{item.participant}</td>
                                {item.money === null && <td>0 VĐN</td>}
                                {item.money !== null && <td>{item.money || "0"} VĐN</td>}
                            </tbody>
                        ))

                        }

                    </table>
                </TableStyles>
            </div>
            <div className="w-[30%]">
                <SelectStyles>
                    <Label color="black">Sắp xếp bảng vinh danh thành viên</Label>
                    <div className="custom-select">
                        <select onChange={(e) => { setSortParticipant(e.target.value) }}>
                            <option value="0">Tiền đóng góp</option>
                            <option value="1">Lượt tham gia</option>
                            <option value="2">Loại tài khoản</option>

                        </select>
                    </div>
                </SelectStyles>
                <TableStyles className="p-[10px] h-[450px]">
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tài khoản</th>

                            </tr>
                        </thead>
                        {bxhParticipant.length > 0 && bxhParticipant.map((item, index) => (
                            <tbody key={index} >
                                <td>{index + 1}</td>
                                <td>{item.username}</td>

                            </tbody>
                        ))

                        }

                    </table>
                </TableStyles>
            </div>

        </div>
    );
};

export default Honor;
