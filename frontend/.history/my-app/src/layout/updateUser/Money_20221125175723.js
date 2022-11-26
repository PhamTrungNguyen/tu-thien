import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ButtonDonate from '../../components/button/ButtonDonate';

export default function FormDialog({ open }) {
    // const [open, setOpen] = React.useState(false);
    const [check, setCheck] = React.useState(false)
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
                <DialogTitle>Subscribe</DialogTitle>
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
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}