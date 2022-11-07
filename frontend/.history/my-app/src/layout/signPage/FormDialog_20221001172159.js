import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({ open, getRadio }) {
    const [check, setCheck] = React.useState(false)
    const [value, setValue] = React.useState("")

    React.useEffect(() => {
        setCheck(open)
    }, [open])
    const submit = () => {
        if (value === "123") {
            setCheck(false)
            getRadio("admin")
        }

    }
    const submit2 = () => {
        setCheck(false)
        getRadio("user")

    }
    return (
        <div>

            <Dialog open={check} >
                <DialogTitle>Xác thực </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setValue(e.target.value)
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={submit2}>Cancel</Button>
                    <Button onClick={submit}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}