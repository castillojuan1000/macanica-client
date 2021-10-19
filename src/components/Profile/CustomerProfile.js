import React, {Fragment} from 'react'
import SelectCustomerSnackbar from './SelectCustomerSnackbar'
import Customer from './Customer/Customer'

export default function CustomerProfile({customer, selectCustomer}){
  const localStoreCustomer = JSON.parse(window.localStorage.getItem('customer'));

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