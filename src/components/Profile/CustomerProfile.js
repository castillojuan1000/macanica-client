import React, {Fragment} from 'react'
import Customer from './Customer/Customer'
import SelectCustomerSnackbar from './SelectCustomerSnackbar'

export default function CustomerProfile({customer, selectCustomer}){
  const localStorageCustomer = JSON.parse(window.localStorage.getItem('customer')) || customer;

  return(
    <Fragment>
      {
        !Object.keys(localStorageCustomer).length > 0 && <SelectCustomerSnackbar selectCustomer={selectCustomer}/>
      }

      {
        Object.keys(localStorageCustomer).length > 0 && <Customer customer={localStorageCustomer}/>
      }

    </Fragment>
  )
}