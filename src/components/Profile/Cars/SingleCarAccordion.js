import React, {Fragment, useState, useEffect} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddServiceForm from './AddServiceForm';
import DirectionsCarRoundedIcon from '@mui/icons-material/DirectionsCarRounded';
import { blue, deepOrange} from '@mui/material/colors';
import axios from 'axios';
import ServicesTimeline from './ServicesTimeline';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function SingleCarAccordion({car, expanded, handlePanel}){
  const [services, setServices]= useState([])

  const localStoreExtended = JSON.parse(window.localStorage.getItem('localStorageExtended'));

  const carId = car.ID

  useEffect(()=> {
    const url = `https://mecanica-service.herokuapp.com/car/${carId}`
    axios.get(url)
      .then(response => {
        setServices(response.data.Services)
      })
      .catch(error => console.error("There was an error fetching cars and its services", error))
  },[carId])

  const hanldeDeleteCar = (e) => {
    e.stopPropagation();
    const url = `https://mecanica-service.herokuapp.com/delete/car/${carId}`

    axios.delete(url)
      .then(response => window.location = 'macanica-client/#/profile')
      .catch(error => {
        console.error('There was an error!', error);
    });
  }

  return(
    <Fragment>
      <Accordion expanded={localStoreExtended === `panel${car.ID}`} onChange={handlePanel(`panel${car.ID}`)} key={car.ID}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: blue[600], marginRight: 1}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"

        >
          <DirectionsCarRoundedIcon sx={{ color: deepOrange[500], marginRight: 1}}/>
          <Typography sx={{ width: '25%', flexShrink: 0 }}>
            {addCapToString(car.Make)} {addCapToString(car.Modelo)}
          </Typography>
          <Typography lang="en" sx={{ width: '25%', flexShrink: 0 }}>
            {addCapToString(car.Color)}
          </Typography>
          <Typography sx={{ width: '25%', flexShrink: 0 }}>
            {handleVinNumber(car.VinNumber)}
          </Typography>
          <div sx={{ width: '25%', flexShrink: 0 }}>
          <IconButton 
            aria-label="delete" 
            color="error"
            onClick={hanldeDeleteCar}
          >
            <DeleteIcon />
          </IconButton>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <AddServiceForm car={car} expanded={expanded} panelId={`panel${car.ID}`}/>
          <ServicesTimeline services={services}/>
        </AccordionDetails>
      </Accordion>
    </Fragment>
  )
} 

function addCapToString(string){
  return string.charAt(0).toUpperCase() + string.slice(1).trim();
}

function handleVinNumber(vinNumber){
  let updatedVinNumber =  vinNumber.split("").map(ch => {
    if(+ch){
      return ch
    }else{
      return ch.toUpperCase()
    }
  })

  return updatedVinNumber.join("")
}
