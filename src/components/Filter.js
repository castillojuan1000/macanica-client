import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Filter({
  handleName, 
  name, 
  handleLastName, 
  lastName, 
  handlePhoneNumber,
  phoneNumber
}){



  return(
    <Container 
      maxWidth="md" 
      sx={{
        display: "flex", 
        flexDirection: "column",
        alignItems: 'center'
      }}
    >
      <h1>Buscar Clientes: </h1>
      <Box
        component="form"
        sx={{
          display: "flex",
          justifyContent: "center",
          '& > :not(style)': { m: 2, mb: 6, mt: 0, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
            id="outlined-name"
            label="Nombre"
            value={name}
            onChange={handleName}
          />

          <TextField
            id="outlined-name"
            label="Apellido"
            value={lastName}
            onChange={handleLastName}
          />

          <TextField
            id="outlined-name"
            label="Telefono"
            value={phoneNumber}
            type='tel'
            onChange={handlePhoneNumber}
          />
      </Box>
    </Container>
  )
}