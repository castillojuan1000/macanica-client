import axios from 'axios'
import React, {useEffect, useState, Fragment, useCallback} from 'react'
import Filter  from './Filter';
import Container from '@mui/material/Container';
import CustomersTablePagination from './TablePagination';
import _ from "lodash";



export  default function SearchCustomer({showCustomer}){
  const [clients, setClients] = useState([])
  const [name, setName] = useState('');
  const [nameDebounce, setNameDebounce] = useState("")
  const [lastName, setLastName] = useState('')
  const [lastNameDebounce, setLastNameDebounce]= useState("")
  const [phoneNumber, setPhoneNumber] = useState('')
  const [phoneNumberDebounce,setPhoneNumberDebounce] = useState("")
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

    if(nameDebounce.length > 0){
      sortedAndFilteredClients = sortedAndFilteredClients.filter(client => client.FirstName === nameDebounce)
    }

    if(lastNameDebounce.length > 0){
      sortedAndFilteredClients = sortedAndFilteredClients.filter(client => client.LastName === lastNameDebounce)
    }

    if(phoneNumberDebounce.length > 0){
      sortedAndFilteredClients = sortedAndFilteredClients.filter(client => client.Phone === phoneNumberDebounce)
    }

    sortedAndFilteredClients = sortedAndFilteredClients.sort((a , b) => {
      if(a.FirstName < b.FirstName) { return -1; }
      if(a.FirstName > b.FirstName) { return 1; }
      return 0;
    })


    setSortedAndFilteredClients(sortedAndFilteredClients)
    
  }, [nameDebounce, lastNameDebounce, phoneNumberDebounce, clients])


  const handleName = (event) => {
    setName(event.target.value)
    debounceName(event.target.value)
  }

  
  const debounceName = useCallback(// eslint-disable-line react-hooks/exhaustive-deps
    _.debounce((_searchVal) => {
      setNameDebounce(_searchVal);
    }, 500),
    []
  )

  const handleLastName = event => {
    setLastName(event.target.value)
    debounceLastName(event.target.value)
  }

  const debounceLastName = useCallback(// eslint-disable-line react-hooks/exhaustive-deps
    _.debounce((_searchVal) => {
      setLastNameDebounce(_searchVal);
    }, 500),
    []
  );

  const handlePhoneNumber = event => {
    setPhoneNumber(event.target.value)
    debouncePhoneNumber(debouncePhoneNumber)
  }

  const debouncePhoneNumber = useCallback(// eslint-disable-line react-hooks/exhaustive-deps
    _.debounce((_searchVal) => {
      setPhoneNumberDebounce(_searchVal);
    }, 500),
    []
  );

 
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
        <CustomersTablePagination customers={sortedAndFilteredClients} showCustomer={showCustomer}/>
      </Container>
    </Fragment>
  
  )
}