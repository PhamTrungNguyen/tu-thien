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

export default function Donate({ item }) {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('userLogin'))
    console.log("🚀 ~ file: Donate.js ~ line 15 ~ Donate ~ user", user)
    const [check, setCheck] = React.useState(false)
    const [value, setValue] = React.useState({
        donate: "",
        postID: "",
        userID: user.id

    })
    // console.log("🚀 ~ file: Donate.js ~ line 19 ~ Donate ~ value", value)
    // const [donate, setDonate] = React.useState()
    var nf = new Intl.NumberFormat();
    const handleClickOpen = () => {
        console.log("🚀 ~ file: Donate.js ~ line 13 ~ Donate ~ item", item)
        setCheck(true)
        setValue({
            donate: ""
        })
    };
    const handleClose = () => {
        setCheck(false);
    };
    const handleSubmit = () => {
        // dispatch(getMoney(value))
        setCheck(false);
        console.log(value)
    };

    return (
        <div>
            <ButtonDonate onClick={handleClickOpen} color="#e22d28">Đóng góp</ButtonDonate>
            <Dialog open={check} onClose={handleClose}>
                <DialogTitle>Nạp tiền</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Vui lòng nhập số tiền cần nạp vào tài khoản
                    </DialogContentText>
                    <TextField
                        autoComplete="off"
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Số tiền"
                        type="text"
                        fullWidth
                        value={value.donate}
                        variant="standard"
                        onChange={(e) => {
                            // setValue(nf.format(e.target.value))
                            const value = e.target.value;
                            const number = value.replace(/\$|,|\./g, "");
                            setValue({
                                donate: nf.format(number, 10),
                                postID: item.id
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