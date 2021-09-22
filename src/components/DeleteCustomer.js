import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteCustomer() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (event) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    console.log("Cancelar eleminar al cliente")
    setOpen(false);
  };

  const handleDeleteCustomer = (event) => {
    event.stopPropagation();
    console.log("API to delete Customer")


    // const url = `http://localhost:8080/delete/customer/${customerId}`
    setOpen(false)
  }

  return (
    <div>
      <IconButton 
        aria-label="delete" 
        color="error"
        onClick={handleClickOpen}
      >
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Estas Seguro Que Deseas Eleminar Este Cliente?"}</DialogTitle>
        <DialogActions>
          <Button 
            onClick={handleClose}
            variant="outlined" 
            color="success"
          >
            Cancelar
          </Button>

          <Button 
            onClick={handleDeleteCustomer}
            variant="outlined" 
            color="error"
          >
            Eleminar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
