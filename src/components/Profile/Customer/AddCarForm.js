import React, {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { deepOrange} from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';



export default function AddCarForm({customer}) {
  const [marca, setMarca] = useState('')
  const [modelo, setModelo] = useState('')
  const [color, setColor] = useState('')
  const [vinNumber, setVinNumber] = useState('')

  const hanldeAddingCar = (e) => {
    e.preventDefault()
    const car = {
      Make: marca,
      Modelo: modelo,
      Color: color, 
      VinNumber: vinNumber,
      CustomerId: customer.ID
    }

    let url = "http://localhost:8080/create/car";

    axios.post(url, car)
      .then(reponse => {
        window.location = '/profile'
        setMarca('')
        setModelo("")
        setColor('')
        setVinNumber("")
      })
      .catch(error => {
        console.error('There was an error adding a car!', error)
      })
  }


  const handleCancelAddingCar = (e) => {
    setMarca('')
    setModelo("")
    setColor('')
    setVinNumber("")
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" sx={{marginTop: 5}}>
        <Box sx={{ width: '100%' }}>
          <form onSubmit={hanldeAddingCar}>
            <Grid 
              container 
              rowSpacing={3} 
              columnSpacing={{ xs: 2, sm: 2, md: 3 }}
              justifyContent="center"
              alignItems="center"
            >
              <Grid 
                container
                item 
                xs={12} 
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="h4" gutterBottom component="div" sx={{ color: deepOrange[500]}}>
                  Añadir vehiculo: 
                </Typography>
              </Grid>
              <Grid 
                item 
                xs={6}
                container
                justifyContent="center"
                alignItems="center"
              >
                <TextField
                  fullWidth
                  required
                  id="outlined-required"
                  label="Marca"
                  value={marca}
                  onChange={(e)=>{setMarca(e.target.value)}}
                />
              </Grid>
              <Grid 
                item 
                xs={6}
                container
                justifyContent="center"
                alignItems="center"
              >
                <TextField
                  fullWidth
                  required
                  id="outlined-required"
                  label="Modelo"
                  value={modelo}
                  onChange={(e)=> setModelo(e.target.value)}
                />
              </Grid>
              <Grid 
                item 
                xs={6}
                container
                justifyContent="center"
                alignItems="center"
              >
                <TextField
                  fullWidth
                  required
                  id="outlined-required"
                  label="Color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </Grid>
              <Grid 
                item 
                xs={6}
                container
                justifyContent="center"
                alignItems="center"
              >
                <TextField
                  fullWidth
                  required
                  id="outlined-required"
                  label="Vin Number"
                  inputProps={{ maxLength: 17 }}
                  value={vinNumber}
                  onChange={(e)=> setVinNumber(e.target.value)}
                />
              </Grid>
              <Grid 
                item 
                xs={4}
                container
                justifyContent="space-around"
                alignItems="center"
              >
                <Button 
                  onClick={handleCancelAddingCar}
                  variant="outlined" 
                  color="error"
                >
                  Cancelar
                </Button>
                <Button 
                  onClick={hanldeAddingCar}
                  variant="outlined" 
                  color="success"
                  type="submit"
                  >
                    Añadir
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
}