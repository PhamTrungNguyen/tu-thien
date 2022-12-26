import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Input } from "@mui/material";
import IconEyeOpen from "../../components/icon/IconEyeOpen";
import IconEyeClose from "../../components/icon/IconEyeClose";
import { useEffect } from "react";

export default function ChangePassword({ open }) {
    const user = JSON.parse(localStorage.getItem("userLogin"));
    const [isFocused, setIsFocused] = React.useState(false);
    const [check, setCheck] = React.useState(false);
    const [icon, setIcon] = React.useState(false);
    const [icon2, setIcon2] = React.useState(false);
    const [icon3, setIcon3] = React.useState(false);
    const [password1, setPassword1] = React.useState("");
    const [password2, setPassword2] = React.useState("");
    const [password3, setPassword3] = React.useState("");
    const [error, setError] = React.useState("");
    const [confirm, setConfirm] = React.useState(false);

    React.useEffect(() => {
        setCheck(open);
    }, [open]);
    const handleClickOpen = () => {
        setCheck(true);
    };
    function handleFocus() {
        setIsFocused(true);
    }
    const handleClose = () => {
        setCheck(false);
    };
    const handleSubmit = async () => {
        setCheck(false);
    };
    useEffect(() => {
        if (password2 !== password3) {
            setError("Nhập mật khẩu chưa chính xác")
            setConfirm(false)
        }
        else {
            setError("")
            setConfirm(true)
        }
    }, [password2, password3])
    return (
        <div>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button> */}
            <h3
                className="text-[16px] hide pt-[30px] mb-[-20px] text-[#181818] font-bold  cursor-pointer text-center"
                onClick={() => setCheck(!check)}
            >
                Đổi mật khẩu
            </h3>
            <Dialog open={true} onClose={handleClose}>
                <DialogTitle>Thay đổi mật khẩu</DialogTitle>
                <DialogContent>
                    <DialogContentText>Vui lòng điền đầy đủ thông tin</DialogContentText>
                    <div className="grid grid-cols-1 gap-y-[20px]">
                        <div>
                            <Input
                                placeholder="Nhập mật khẩu cũ"
                                inputProps={{
                                    autoComplete: "off",
                                    type: `${!icon2 ? "password" : "text"}`,
                                }}
                                className="relative"

                                onChange={(e) => {
                                    setPassword1(e.target.value);
                                }}
                            />
                            {icon2 ? (
                                <IconEyeOpen
                                    onClick={() => {
                                        setIcon2(!icon2);
                                    }}
                                    className="absolute right-[20px] top-[33%]"
                                    color="black"
                                ></IconEyeOpen>
                            ) : (
                                <IconEyeClose
                                    onClick={() => {
                                        setIcon2(!icon2);
                                    }}
                                    color="black"
                                    className="absolute right-[20px] top-[33%]"
                                ></IconEyeClose>
                            )}
                        </div>
                        <div>
                            <Input
                                placeholder="Nhập mật lại khẩu mới"
                                inputProps={{
                                    autoComplete: "off",
                                    type: `${!icon ? "password" : "text"}`,
                                }}
                                className="relative"

                                onChange={(e) => {
                                    setPassword2(e.target.value);
                                }}
                            />
                            {icon ? (
                                <IconEyeOpen
                                    onClick={() => {
                                        setIcon(!icon);
                                    }}
                                    className="absolute right-[20px] top-[51%]"
                                    color="black"
                                ></IconEyeOpen>
                            ) : (
                                <IconEyeClose
                                    onClick={() => {
                                        setIcon(!icon);
                                    }}
                                    color="black"
                                    className="absolute right-[20px] top-[51%]"
                                ></IconEyeClose>
                            )}
                        </div>
                        <div>
                            <Input
                                placeholder="Nhập mật khẩu mới"
                                inputProps={{
                                    autoComplete: "off",
                                    type: `${!icon3 ? "password" : "text"}`,
                                    onFocus: handleFocus
                                }}
                                className="relative"
                                onChange={(e) => {
                                    setPassword3(e.target.value);
                                }}
                            />
                            {icon3 ? (
                                <IconEyeOpen
                                    onClick={() => {
                                        setIcon3(!icon3);
                                    }}
                                    className=" absolute right-[20px] top-[69%]"
                                    color="black"
                                ></IconEyeOpen>
                            ) : (
                                <IconEyeClose
                                    onClick={() => {
                                        setIcon3(!icon3);
                                    }}
                                    color="black"
                                    className=" absolute right-[20px] top-[69%]"
                                ></IconEyeClose>
                            )}
                            {error && isFocused && (
                                <p className="font-semibold text-[12px] text-red-700 ">
                                    {error}
                                </p>
                            )}
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Hủy</Button>
                    <Button onClick={handleSubmit}>Đồng ý</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
