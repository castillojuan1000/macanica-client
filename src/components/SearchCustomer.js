import axios from 'axios'
import React, {useEffect, useState, Fragment, useCallback} from 'react'
import Filter  from './Filter';
import Container from '@mui/material/Container';
import CustomersTablePagination from './TablePagination';
import _ from "lodash";



export  default function SearchCustomer({showCustomer}){
  const [clients, setClients] = useState([])
  const [sortedAndFilteredClients, setSortedAndFilteredClients] = useState(clients)

  const [valueState, setValueState] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
  })

  const [debouncedValueState, setDebouncedValueState] = useState({
    debouncedName: "",
    debouncedLastName: "",
    debouncedPhoneNumber: "",
  })


  useEffect(()=>{
    const url = "https://mecanica-service.herokuapp.com/customers"
    axios.get(url)
      .then(response => { setClients(response.data)})
      .catch(error => {
        console.error('There was an error!', error);
    });
  }, [])



  useEffect(()=>{
    let sortedAndFilteredClients = clients; 

    if(debouncedValueState.debouncedName.length > 0){
      sortedAndFilteredClients = sortedAndFilteredClients.filter(client => client.FirstName === debouncedValueState.debouncedName)
    }

    if(debouncedValueState.debouncedLastName.length > 0){
      sortedAndFilteredClients = sortedAndFilteredClients.filter(client => client.LastName === debouncedValueState.debouncedLastName)
    }

    if(debouncedValueState.debouncedPhoneNumber.length > 0){
      sortedAndFilteredClients = sortedAndFilteredClients.filter(client => client.Phone === debouncedValueState.debouncedPhoneNumber)
    }

    sortedAndFilteredClients = sortedAndFilteredClients.sort((a , b) => {
      if(a.FirstName < b.FirstName) { return -1; }
      if(a.FirstName > b.FirstName) { return 1; }
      return 0;
    })


    setSortedAndFilteredClients(sortedAndFilteredClients)
    
  }, [debouncedValueState.debouncedName, debouncedValueState.debouncedLastName, debouncedValueState.debouncedPhoneNumber, clients])


  const handleValueChange = (e) => {
    setValueState({...valueState, [e.target.name] : e.target.value})
    debouncedValues(e.target.value, e.target.name, debouncedValueState)
  }

  const debouncedValues = useCallback(// eslint-disable-line react-hooks/exhaustive-deps
    _.debounce((_searchVal, valueName, debouncedValueState) => {
      if(valueName === "name"){
        setDebouncedValueState({...debouncedValueState, "debouncedName": _searchVal})
      }else if(valueName === "lastName"){
        setDebouncedValueState({...debouncedValueState, "debouncedLastName": _searchVal})
      }else if(valueName === "telefono"){
        setDebouncedValueState({...debouncedValueState, "debouncedPhoneNumber": _searchVal})
      }
    }, 500),
    []
  )

  return(
    <Fragment>
      <Filter 
        name={valueState.name}
        lastName={valueState.lastName}
        phoneNumbere={valueState.phoneNumber}
        handleValueChange={handleValueChange}
      />
      <Container maxWidth="md">
        <CustomersTablePagination customers={sortedAndFilteredClients} showCustomer={showCustomer}/>
      </Container>
    </Fragment>
  
  )
}