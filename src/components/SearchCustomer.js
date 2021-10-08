import axios from 'axios'
import React, {useEffect, useState, Fragment} from 'react'
import Filter  from './Filter';
import Container from '@mui/material/Container';
import CustomersTablePagination from './TablePagination';


export  default function SearchCustomer(){
  const [clients, setClients] = useState([])
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [sortedAndFilteredClients, setSortedAndFilteredClients] = useState(clients)

  useEffect(()=>{
    const url = "http://localhost:8080/customers"
    axios.get(url)
      .then(response => { setClients(response.data)})
      .catch(error => {
        console.error('There was an error!', error);
    });
  }, [])



  useEffect(()=>{
    let sortedAndFilteredClients = clients; 

    if(name.length > 0){
      sortedAndFilteredClients = sortedAndFilteredClients.filter(client => client.FirstName === name)
    }

    if(lastName.length > 0){
      sortedAndFilteredClients = sortedAndFilteredClients.filter(client => client.LastName === lastName)
    }

    if(phoneNumber.length > 0){
      sortedAndFilteredClients = sortedAndFilteredClients.filter(client => client.Phone === phoneNumber)
    }

    sortedAndFilteredClients = sortedAndFilteredClients.sort((a , b) => {
      if(a.FirstName < b.FirstName) { return -1; }
      if(a.FirstName > b.FirstName) { return 1; }
      return 0;
    })


    setSortedAndFilteredClients(sortedAndFilteredClients)
    
  }, [name, lastName, phoneNumber, clients])


  const handleName = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
    
  }

  const handleLastName = event => {
    setLastName(event.target.value)
  }

  const handlePhoneNumber = event => {
    setPhoneNumber(event.target.value)
  }

 
  return(
    <Fragment>
      <Filter 
        handleName={handleName}
        name={name}
        handleLastName={handleLastName}
        lastName={lastName}
        handlePhoneNumber={handlePhoneNumber}
        phoneNumbere={phoneNumber}
      />
      <Container maxWidth="md">
        <CustomersTablePagination customers={sortedAndFilteredClients}/>
      </Container>
    </Fragment>
  
  )
}