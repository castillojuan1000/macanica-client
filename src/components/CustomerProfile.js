import React from 'react'

export default function CustomerProfile({customer}){

  //todo: store customer in a session, cookie, local storage just till it gets push to the database
  console.log(Object.keys(customer).length)

  return(
    <div>Customer Profile</div>
  )
}