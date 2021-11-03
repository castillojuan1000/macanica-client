import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const theme = createTheme();

function validatePhoneNumber(inputtxt) {
  //eslint-disable-next-line
  var regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if(inputtxt.match(regex)) {
    return true;
  }
  else {
    return false;
  }
}

function AddCustomer() {
  const [duplicatePhoneNumber, setDuplicatePhoneNumber] = useState(false)
  const [validatedNumber, setValidatedNumber] = useState(true)
  const history = useHistory()

  const handleSubmit = (event) => {
    setValidatedNumber(true)
    setDuplicatePhoneNumber(false)

    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const customer = {
      firstName: data.get('firstName').toLocaleLowerCase().trim(),
      lastName: data.get('lastName').toLocaleLowerCase().trim(),
      phone: data.get('phone').trim(),
    }

    let url = "https://mecanica-service.herokuapp.com/create/customer";

    if(validatePhoneNumber(data.get('phone'))){

      axios.post(url, customer)
        .then(response => {
          if(response.data.hasOwnProperty('Severity')){
            setDuplicatePhoneNumber(true)
          }else{
            window.localStorage.setItem('customer', JSON.stringify(response.data));
            history.push('/profile')
            window.location = '/macanica-client/#/profile'
          }
        })
        .catch(error => {
          console.error('There was an error!', error)
        })
    }else{
      setValidatedNumber(false)
    }

  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: "100vh",
          }}
        >
          <Typography component="h1" variant="h5">
            Añadir Cliente!!!
          </Typography>
          <Box sx={{ mt: 3 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="tel"
                    inputProps={{ maxLength: 10 }}
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    autoComplete="phone"
                  />
                  {
                    duplicatePhoneNumber && 
                    <Alert severity="error" style={{marginTop: 10}}>
                      <AlertTitle>Error</AlertTitle>
                          <strong>Numero Duplicado!</strong>
                    </Alert>
                  }
                  {
                    !validatedNumber && 
                    <Alert severity="error" style={{marginTop: 10}}>
                      <AlertTitle>Error</AlertTitle>
                          <strong>Numero De Telefono No Es Valido!</strong>
                    </Alert>
                  }
                </Grid>
              </Grid>
              <Button
                style={{marginTop: 20, marginBottom: 20, color: "white", background: "#3F51B5"}}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 3 }}
              >
                Añadir 
              </Button>
            </form>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default withRouter(AddCustomer)