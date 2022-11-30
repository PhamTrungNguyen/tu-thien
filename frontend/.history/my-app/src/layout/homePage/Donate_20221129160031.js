import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import ButtonDonate from '../../components/button/ButtonDonate';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Donate({ item }) {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('userLogin'))
    var nf = new Intl.NumberFormat();
    const [account, setAccount] = useState();
    const totalMoney = account?.totalMoney;
    const [check, setCheck] = useState(false)
    const [value, setValue] = useState({
        money: "",
        postID: "",
        userID: ""

    })


    const handleClickOpen = () => {
        setCheck(true)
        setValue({
            money: ""
        })
    };
    const handleClose = () => {
        setCheck(false);
    };
    const handleDonate = async (url, data) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            toast.success(`Bạn đã đóng góp  ${value.money} VNĐ`, {
                pauseOnHover: false,
                delay: 0,
                autoClose: 1300,
            });
        } catch (error) {
            toast.error("Đóng góp thất bại", {
                pauseOnHover: false,
                delay: 0,
                autoClose: 1300,
            });
        }
    }
    const handleUpdateMoney = async (url, data) => {
        try {
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
        } catch (error) {
            toast.error("Đóng góp thất bại", {
                pauseOnHover: false,
                delay: 0,
                autoClose: 1300,
            });
        }
    };
    async function handleGetAccountByID(url) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        setAccount(result);
    }
    React.useEffect(() => {
        handleGetAccountByID(
            `http://localhost:8080/api/auth/getAccountByID?accountId=${user?.id}`
        );
    }, [user?.id]);

    const handleSubmit = async () => {
        setCheck(false);
        // setValue({
        //     ...value,
        //     money: value.money.replace(/,/g, "")
        // })

        if (parseInt(value.money.replace(/,/g, "")) <= parseInt(totalMoney)) {
            let returnMoney = (parseInt(totalMoney) - parseInt(value.money.replace(/,/g, "")))
            handleDonate("http://localhost:8080/api/donate/addDonate", value)
            await handleUpdateMoney(
                `http://localhost:8080/api/auth/UpdateMoneyByUser?idAccount=${user?.id}`,
                { money: returnMoney }
            );
            setTimeout(() => {
                navigate("/")
                window.location.href = window.location.href
            }, 1500)
        }
        else {
            toast.error("Số tiền trong tài khoản không đủ", {
                pauseOnHover: false,
                delay: 0,
                autoClose: 1300,
            });
        }

    };
    useEffect(() => {
        if (account) {

            localStorage.setItem("userLogin", JSON.stringify(account));
        }
    }, [account])

    return (
        <div>
            <ButtonDonate onClick={handleClickOpen} color="#e22d28">Đóng góp</ButtonDonate>
            <Dialog open={check} onClose={handleClose}>
                <DialogTitle>Nhập số tiền đóng góp</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Vui lòng nhập số tiền cần đóng góp
                    </DialogContentText>
                    <TextField
                        autoComplete="off"
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Số tiền"
                        type="text"
                        fullWidth
                        value={value.money}
                        variant="standard"
                        onChange={(e) => {
                            // setValue(nf.format(e.target.value))
                            const value = e.target.value;
                            const number = value.replace(/\$|,|\./g, "");
                            setValue({
                                money: nf.format(number, 10),
                                postID: item.id,
                                userID: user.id
                            });
                            // setDonate(value);
                            // console.log(e.target.value)
                        }}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Hủy</Button>
                    <Button onClick={handleSubmit}>Đồng ý</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}