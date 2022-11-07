import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({ open }) {
    const a = open;
    const [check, setCheck] = React.useState(a)
    console.log("🚀 ~ file: FormDialog.js ~ line 14 ~ FormDialog ~ check", check)


    /*   const handleClose = () => {
          setOpen(false);
      }; */

    return (
        <div>

            <Dialog open={check} >
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
                    <Button onClick={() => {
                        setCheck(false)
                    }}>Cancel</Button>
                    {/* <Button onClick={handleClose}>Subscribe</Button> */}
                </DialogActions>
            </Dialog>
        </div>
    );
}