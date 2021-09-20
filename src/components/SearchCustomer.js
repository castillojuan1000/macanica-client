import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomerCard from './CustomerCard';

export  default function SearchCustomer(){
  const [clients, setClients] = useState([])

  useEffect(()=>{
    const url = "http://localhost:8080/customers"
    axios.get(url)
      .then(response => { setClients(response.data)})
      .catch(error => {
        console.error('There was an error!', error);
    });
  }, [])

  const sortedClients = clients.sort((a , b) => {
    if(a.FirstName < b.FirstName) { return -1; }
    if(a.FirstName > b.FirstName) { return 1; }
    return 0;
  })

  

  return(
    
      <Box sx={{ flexGrow: 1}}>
        <Grid container spacing={2}>
          {
            sortedClients.map((client, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                <CustomerCard customerData={client}/>
              </Grid>
            ))
          }
        </Grid>
      </Box>
  
  )
}