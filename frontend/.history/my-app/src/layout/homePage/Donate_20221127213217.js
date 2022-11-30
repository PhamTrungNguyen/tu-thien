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

export default function Donate({ item }) {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('userLogin'))
    const toltalMoney = user.
        const[check, setCheck] = React.useState(false)
    const [value, setValue] = React.useState({
        money: "",
        postID: "",
        userID: ""

    })
    var nf = new Intl.NumberFormat();
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
            toast.success(`${result.message}`, {
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
    const handleSubmit = () => {
        // dispatch(getMoney(value))
        setCheck(false);
        // setValue({
        //     ...value,
        //     money: value.money.replace(/,/g, "")
        // })
        console.log(value);
        handleDonate("http://localhost:8080/api/donate/addDonate", value)
    };

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