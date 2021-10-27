import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Slide from '@mui/material/Slide';
import axios from 'axios'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteCustomer({customer}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (event) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setOpen(false);
  };

  const handleDeleteCustomer = (event) => {
    event.stopPropagation();
    const customerId = customer.ID

    const url = `https://mecanica-service.herokuapp.com/delete/customer/${customerId}`

    axios.delete(url)
      .then(response => {
        let localStorageCustomer = JSON.parse(window.localStorage.getItem('customer'))
        if(localStorageCustomer.ID === customerId){
          window.localStorage.setItem('customer', JSON.stringify({}));
        }
        window.location = '/search'
      })
      .catch(error => {
          console.error('There was an error!', error);
      });
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
