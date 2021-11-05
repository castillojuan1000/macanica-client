import React, {Fragment} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import SnackbarContent from '@mui/material/SnackbarContent';


export default function SelectCustomerSnackbar({selectCustomer}) {

  const accion = (
    <Button 
      variant="outlined" 
      color="success"
      onClick={() => selectCustomer()}
      sx={{
        marginTop: 1,
      }}
      >
        Seleccionar Cliente
    </Button>
  );
  
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <SnackbarContent
          message="Selecciona Un Cliente Antes De Continuar En Esta Pagina"
          action={accion}
          sx={{
            marginTop: 5,
            boxShadow: 3,
            borderRadius: 4,
            p: 4,
            minWidth: 300,
            fontSize: 18
          }}
        />
      </Container>
    </Fragment>
    
  );
}
