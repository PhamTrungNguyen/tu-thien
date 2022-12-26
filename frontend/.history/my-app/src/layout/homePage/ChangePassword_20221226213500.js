import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Input } from '@mui/material';

export default function ChangePassword({ open }) {
    const [check, setCheck] = React.useState(false);
    React.useEffect(() => {
        setCheck(open);
    }, [open]);
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
            <h3 className="text-[16px] hide pt-[30px] mb-[-20px] text-[#181818] font-bold  cursor-pointer text-center" onClick={() => setCheck(!check)}>
                Đổi mật khẩu
            </h3>
            <Dialog open={check} onClose={handleClose}>
                <DialogTitle>Thay đổi mật khẩu</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Vui lòng điền đầy đủ thông tin
                    </DialogContentText>
                    <div>
                        <Input
                            placeholder="Nhập mật khẩu cũ"
                            inputProps={{
                                autoComplete: "off",
                                type: "text",
                                name: "username",
                            }}
                            label="Email"
                        // onChange={(e) => {
                        //     setUsername(e.target.value);
                        // }}
                        />
                        <Input
                            placeholder="Nhập mật khẩu mới"
                            inputProps={{
                                autoComplete: "off",
                                type: "text",
                                name: "username",
                            }}
                            label="Email"
                        // onChange={(e) => {
                        //     setUsername(e.target.value);
                        // }}
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}