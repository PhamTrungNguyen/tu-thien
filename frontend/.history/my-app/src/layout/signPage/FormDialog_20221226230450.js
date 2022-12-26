import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { toast } from "react-toastify";
export default function FormDialog({ open, getRadio }) {
    const [check, setCheck] = React.useState(false)
    const [value, setValue] = React.useState("")

    React.useEffect(() => {
        setCheck(open)
    }, [open])
    const submit = () => {
        if (value === "123") {
            setCheck(false)
            getRadio(2)
            toast.success("Correct code !!!", {
                pauseOnHover: false,
                delay: 0,
            });
        }
        else {
            toast.error("Incorrect code !!!", {
                pauseOnHover: false,
                delay: 0,
            });
        }

    }
    const submit2 = () => {
        setCheck(false)
        getRadio(1)

    }
    return (
        <div>

            <Dialog open={check} >
                <DialogTitle>Xác thực </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Để đăng kí được tài khoản quản lý vui lòng nhập mã xác thực được cung cấp bởi Admin .Liên hệ qua facebook
                        <a href="https://www.facebook.com/nguyenne010102" className='text-blue-500 '> tại đây </a>
                        để biết thêm chi tiết về mã  <span className='text-black'>    (để thuận tiện trong quá trình dùng thử website thì mã xác thực là :</span>
                        <span className='text-red-500'> 123</span>
                        <span className='text-black'>)</span>
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Mã xác thực"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setValue(e.target.value)
                        }}
                        inputProps={{
                            autoComplete: "off",
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={submit2}>Hủy</Button>
                    <Button onClick={submit}>Xác thực</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}