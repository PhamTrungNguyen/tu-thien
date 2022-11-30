import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ButtonDonate from '../../components/button/ButtonDonate';
import { useDispatch } from "react-redux";
import { getMoney } from '../../redux/reduxSlice';
import NumberFormat from 'react-number-format';
import { toast } from 'react-toastify';
export default function FormDialog({ open }) {
    // const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()
    const [check, setCheck] = React.useState(false)
    const [value, setValue] = React.useState(0)

    var nf = new Intl.NumberFormat();
    const handleClickOpen = () => {
        setCheck(true)
        setValue("")
    };
    const handleClose = () => {
        setCheck(false);
    };
    const handleSubmit = () => {
        if (!isNaN((value.replace(/,/g, "")))) {
            console.log(value);
            dispatch(getMoney(value))
            setCheck(false);
        }
        else {
            toast.error(`Nhập số tiền không hợp lệ`, {
                pauseOnHover: false,
                delay: 0,
                autoClose: 1300,
            });
        }
    };

    return (
        <div>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button> */}
            <ButtonDonate variant="outlined" onClick={handleClickOpen} >Nạp tiền</ButtonDonate>
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
                        value={value}
                        variant="standard"
                        onChange={(e) => {
                            // setValue(nf.format(e.target.value))
                            const value = e.target.value;
                            const number = value.replace(/\$|,|\./g, "");
                            setValue(nf.format(number, 10));
                            // console.log(isNaN((value.replace(/,/g, ""))))
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