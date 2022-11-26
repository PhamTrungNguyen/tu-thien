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
export default function FormDialog({ open }) {
    // const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()
    const [check, setCheck] = React.useState(false)
    const [value, setValue] = React.useState("")
    console.log("🚀 ~ file: Money.js ~ line 15 ~ FormDialog ~ value", value)

    console.log("🚀 ~ file: Money.js ~ line 14 ~ FormDialog ~ check", check)


    const handleClickOpen = () => {
        setCheck(true)
    };
    // React.useEffect(() => {
    //     setCheck(open)
    // }, [open])
    const handleClose = () => {
        setCheck(false);
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
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Số tiền"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setValue(e.target.value)
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Hủy</Button>
                    <Button onClick={handleClose}>Đồng ý</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}