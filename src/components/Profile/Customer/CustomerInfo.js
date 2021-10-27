import React, {Fragment} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { deepOrange} from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';


export default function CustomerInfo({customer}){
  const {FirstName, LastName, Phone} = customer

  const phoneNumberDashes = Phone.slice(0,3)+"-"+Phone.slice(3,6)+"-"+Phone.slice(6)

  const firstNameCap = FirstName.charAt(0).toUpperCase() + FirstName.slice(1).trim();
  const lastNameCap = LastName.charAt(0).toUpperCase() + LastName.slice(1).trim();

  const firstChar = FirstName.charAt(0).toUpperCase() 
  const secondChar = LastName.charAt(0).toUpperCase()
  
  
  return(
    <Fragment>
      <CssBaseline />
      <Container maxWidth="md" sx={{marginTop: 3}}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid 
              item 
              sm={6} 
              md={6} 
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              >
              <Avatar 
                sx={{ bgcolor: deepOrange[500], marginRight: 1, width: 50, height: 50}}
              >
                {firstChar}{secondChar}
              </Avatar> 
              <Fragment>
                <Typography variant="h5" gutterBottom component="div">
                {firstNameCap} {lastNameCap}
                </Typography>
              </Fragment>
            </Grid>
            <Grid 
              item 
              sm={6} 
              md={6}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              >
              <PhoneForwardedIcon sx={{ color: deepOrange[500], marginRight: 1, fontSize: 45 }} />
              <Typography variant="h5" gutterBottom component="div">
              {phoneNumberDashes}
              </Typography>
            </Grid>
          </Grid>
        </Box> 
      </Container> 
    </Fragment>
  )
}