import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
'& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
'& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

export default function EditCustomer({customer}) {
  const {FirstName, LastName, Phone} = customer
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState(FirstName);
  const [lastName, setLastName] = useState(LastName);
  const [phoneNumber, setPhoneNumber] = useState(Phone)

  const handleClickOpen = (event) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setOpen(false);
  };

  const handleEditCustomer = (event) => {
    event.preventDefault();
    
    console.log({
      "first Name": firstName, 
      "last Name": lastName, 
      "phone Number": phoneNumber
    })
    setOpen(false);
    event.stopPropagation();
  }


  return (
    <div>
      <IconButton 
        aria-label="edit" 
        color="warning"
        onClick={handleClickOpen}
      >
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <form 
          className={classes.root}
          onSubmit={handleEditCustomer}
        >
          <TextField
            autoComplete="fname"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <TextField
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <TextField
            required
            fullWidth
            type="tel"
            inputProps={{ maxLength: 10 }}
            id="phone"
            label="Phone Number"
            name="phone"
            autoComplete="phone"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
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
              type="submit"
              >
                Editar
            </Button>
          </DialogActions>
        </form>
        
      </Dialog>
    </div>
  );
}
