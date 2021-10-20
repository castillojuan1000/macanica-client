import React, {Fragment} from 'react'
import Customer from './Customer/Customer'
import SelectCustomerSnackbar from './SelectCustomerSnackbar'

export default function CustomerProfile({customer, selectCustomer}){
  const localStoreCustomer = JSON.parse(window.localStorage.getItem('customer')) || customer;

  return(
    <Fragment>
      {
        !Object.keys(localStoreCustomer).length > 0 && <SelectCustomerSnackbar selectCustomer={selectCustomer}/>
      }

      {
        Object.keys(localStoreCustomer).length > 0 && <Customer customer={localStoreCustomer}/>
      }

    </Fragment>
  )
}