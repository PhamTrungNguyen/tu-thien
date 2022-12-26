import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import Input from '../../components/input/Input';

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
    const schema = yup
        .object({
            username: yup.string().required("Vui lòng nhập vào tài khoản"),
            password: yup
                .string()
                .min(8, "Mật khẩu phải ít nhất 8 kí tự")
                .required("Vui lòng nhập vào mật khẩu"),
            confirmPassword: yup
                .string()
                .oneOf([yup.ref("password"), null], "Nhập mật khẩu chưa chính xác")
                .min(8, "Mật khẩu phải ít nhất 8 kí tự"),
        })
        .required();
    const {
        control,
        handleSubmit,
        setValue,
        getValues,
        reset,
        formState: { errors, isValid, isSubmitting },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
        defaultValues: {
            username: "",
            password: "",
            confirmPassword: "",
            role_name: 1,
        },
    });
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
                        <div>
                            <Input
                                className="input mb-[20px]"
                                name="username"
                                type="text"
                                control={control}
                            >
                                Tài khoản
                            </Input>
                            {errors?.username?.message && (
                                <p className="font-semibold text-[16px] absolute z-10 top-[150px] left-[50px] text-red-700 ">
                                    {errors?.username?.message}
                                </p>
                            )}
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