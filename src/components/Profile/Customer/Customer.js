import React, {Fragment, useEffect, useState} from "react";
import CustomerInfo from './CustomerInfo'
import AddCarForm from '../Cars/AddCarForm'
import axios from 'axios';
import CarsAccordions from '../Cars/CarsAccordions'

export default function Customer({customer}){
  const [cars, setCars] = useState([])


  let customerID  = customer.ID

  useEffect(()=>{
    const url = `http://localhost:8080/customer/${customerID}`
    axios.get(url)
      .then(response => setCars(response.data.Cars))
  },[customerID])


  console.log(cars)
  return(
    <Fragment>  
      <CustomerInfo customer={customer}/>
      <AddCarForm customer={customer}/>
      <CarsAccordions cars={cars}/>
    </Fragment>
  )
}