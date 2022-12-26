import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Input from "@mui/material/Input";
export default function ForgotPassword({ open }) {
    const [check, setCheck] = React.useState(false);
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [code, setCode] = React.useState("");
    async function handleCallAPIGet(url) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        return result;
    }
    React.useEffect(() => {
        setCheck(open);
    }, [open]);
    // React.useEffect(() => {
    // }, [username]);
    const handleClickOpen = () => {
        setCheck(true);
    };

    const handleClose = () => {
        setCheck(false);
    };
    const handleSubmit = async () => {
        const { account } = await handleCallAPIGet(`http://localhost:8080/api/auth/getAccountByUser?username=${username}`)
        console.log("🚀 ~ file: ForgotPassword.js:40 ~ ForgotPassword ~ account", account)
        if (username === account.username && email === account.email && code === account.code) {

        }
    };

    return (
        <div>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button> */}
            <Dialog open={check} onClose={handleClose} maxWidth="sm">
                <DialogTitle>Đặt lại mật khẩu</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Để lấy lại mật khẩu bạn vui lòng nhập đúng tài khoản, email và mã
                        code của mình
                    </DialogContentText>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                        <Input
                            placeholder="Nhập vào tài khoản"
                            inputProps={{
                                autoComplete: "off",
                                type: "text",
                                name: "username",
                            }}
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />
                        <Input
                            placeholder="Nhập vào email"
                            inputProps={{
                                autoComplete: "off",
                                type: "email",
                                name: "email",
                            }}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <Input
                            placeholder="Nhập vào mã code"
                            inputProps={{
                                autoComplete: "off",
                                type: "text",
                                name: "code",
                            }}
                            onChange={(e) => {
                                setCode(e.target.value);
                            }}
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
