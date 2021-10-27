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



export default function AddServiceForm({car, expanded, panelId}) {
  const [comment, setComment] = useState('')
  const [miles, setMiles] = useState('')

  const carId = car.ID
  const handleAddingService = (e) => {
    e.preventDefault()
    const service = {
      Comment: comment.trim(),
      Miles: miles.trim(),
      CarId: carId
    }

    const url = "https://mecanica-service.herokuapp.com/create/service"

    axios.post(url, service)
      .then(response => {
        window.location = '/profile'
      })
      .catch(error => {
        console.error("There was an error adding a service to the car", error)
      })

    setComment('')
    setMiles("")
  }


  const handleCancelAddingCar = (e) => {
    setComment('')
    setMiles("")
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" sx={{marginTop: 1}}>
        <Box sx={{ width: '100%' }}>
          <form onSubmit={handleAddingService}>
            <Grid 
              container 
              rowSpacing={1} 
              columnSpacing={{ xs: 1, sm: 1, md: 1 }}
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
                <Typography variant="h6" gutterBottom component="div" sx={{ color: deepOrange[500]}}>
                  Añadir Servicio: 
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
                  multiline
                  maxRows={4}
                  id="outlined-required"
                  label="Comentarios"
                  value={comment}
                  onChange={(e)=>{setComment(e.target.value)}}
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
                  label="Miles"
                  value={miles}
                  onChange={(e)=> setMiles(e.target.value)}
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