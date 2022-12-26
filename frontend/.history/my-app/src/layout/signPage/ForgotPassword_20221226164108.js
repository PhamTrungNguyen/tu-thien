import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Input from '@mui/material/Input';
export default function ForgotPassword({ open }) {
    const [check, setCheck] = React.useState(false)

    React.useEffect(() => {
        setCheck(open)
    }, [open])
    const handleClickOpen = () => {
        setCheck(true);
    };

    const handleClose = () => {
        setCheck(false);
    };

    return (
        <div>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button> */}
            <Dialog open={check} onClose={handleClose} maxWidth="md">
                <DialogTitle>Đặt lại mật khẩu</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Để lấy lại mật khẩu bạn vui lòng nhập đúng tài khoản, email và mã code của mình
                    </DialogContentText>

                    <Input placeholder="Nhập vào tài khoản" inputProps={{
                        autocomplete: 'off',
                        type: 'text',
                        name: 'username',
                    }} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}