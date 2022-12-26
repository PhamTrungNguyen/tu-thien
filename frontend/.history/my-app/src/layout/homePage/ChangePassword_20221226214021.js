import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Input } from '@mui/material';
import IconEyeOpen from '../../components/icon/IconEyeOpen';
import IconEyeClose from '../../components/icon/IconEyeClose';

export default function ChangePassword({ open }) {
    const [check, setCheck] = React.useState(false);
    const [icon, setIcon] = React.useState(false);

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
            <Dialog open={true} onClose={handleClose}>
                <DialogTitle>Thay đổi mật khẩu</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Vui lòng điền đầy đủ thông tin
                    </DialogContentText>
                    <div className="grid grid-cols-1 gap-y-[20px]">
                        <Input
                            placeholder="Nhập mật khẩu cũ"
                            inputProps={{
                                autoComplete: "off",
                                type: `${!icon ? "password" : "text"}`,
                                name: "username",
                            }}

                        // onChange={(e) => {
                        //     setUsername(e.target.value);
                        // }}
                        />
                        <div>
                            <Input
                                placeholder="Nhập mật lại khẩu mới"
                                inputProps={{
                                    autoComplete: "off",
                                    type: `${!icon ? "password" : "text"}`,
                                    name: "username",
                                }}
                                className="relative"

                            // onChange={(e) => {
                            //     setUsername(e.target.value);
                            // }}
                            />
                            {icon ? (
                                <IconEyeOpen
                                    onClick={() => {
                                        setIcon(!icon);
                                    }}
                                    className="absolute right-[20px] top-[50%] "
                                    color="black"
                                ></IconEyeOpen>
                            ) : (
                                <IconEyeClose
                                    onClick={() => {
                                        setIcon(!icon);
                                    }}
                                    color="black"
                                    className=""
                                ></IconEyeClose>
                            )}
                        </div>
                        <div>

                            <Input
                                placeholder="Nhập mật khẩu mới"
                                inputProps={{
                                    autoComplete: "off",
                                    type: "password",
                                    name: "username",
                                }}

                            // onChange={(e) => {
                            //     setUsername(e.target.value);
                            // }}
                            />
                            {/* {icon ? (
                                <IconEyeOpen
                                    onClick={() => {
                                        setIcon(!icon);
                                    }}
                                    className=" fixed top-[39%] right-[13%] z-42"
                                    color="black"
                                ></IconEyeOpen>
                            ) : (
                                <IconEyeClose
                                    onClick={() => {
                                        setIcon(!icon);
                                    }}
                                    color="black"
                                    className=" fixed top-[38%] right-[13%] z-42"
                                ></IconEyeClose>
                            )} */}
                        </div>
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