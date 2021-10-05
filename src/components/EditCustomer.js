import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

export default function EditCustomer({customer}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = (event) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setOpen(false);
  };

  const handleEditCustomer = (event) => {
    event.stopPropagation();
    alert("Edit customer")
    setOpen(false);
  }

  return (
    <div>
      <IconButton 
        aria-label="delete" 
        color="warning"
        onClick={handleClickOpen}
      >
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Editar Cliente</DialogTitle>
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
          <Button 
            onClick={handleClose}
            variant="outlined" 
            color="success"
            >
              Cancelar
          </Button>
          <Button 
            onClick={handleEditCustomer}
            variant="outlined" 
            color="warning"
            >
              Editar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
