import React, {Fragment} from 'react'
import SelectCustomerSnackbar from './SelectCustomerSnackbar'

export default function CustomerProfile({customer, selectCustomer}){

  //todo: store customer in a session, cookie, local storage just till it gets push to the database
  //todo: should be render when customer gets created as well 
  console.log(Object.keys(customer).length)

  return(
    <Fragment>
      {
        !Object.keys(customer).length > 0 && <SelectCustomerSnackbar selectCustomer={selectCustomer}/>
      }

    </Fragment>

  )
}