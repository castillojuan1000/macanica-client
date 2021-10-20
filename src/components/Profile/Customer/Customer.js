import React, {Fragment} from "react";
import CustomerInfo from './CustomerInfo'

export default function Customer({customer}){
  return(
    <Fragment>  
      <CustomerInfo customer={customer}/>
    </Fragment>
  )
}