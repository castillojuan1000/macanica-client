import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function CustomerTable({customers}) {
  const handleCustomer = (customer) => {
    console.log(customer)
  }
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell align="right">Telefono</StyledTableCell>
            <StyledTableCell align="right">Editar</StyledTableCell>
            <StyledTableCell align="right">Eleminar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer, index) =>{
            const {Phone, FirstName, LastName} = customer;
            const phoneNumberDashes = Phone.slice(0,3)+"-"+Phone.slice(3,6)+"-"+Phone.slice(6)
            const firstNameCap = FirstName.charAt(0).toUpperCase() + FirstName.slice(1).trim();
            const lastNameCap = LastName.charAt(0).toUpperCase() + LastName.slice(1).trim();

            return(
            <StyledTableRow key={index} onClick={() => handleCustomer(customer)}>
              <StyledTableCell component="th" scope="row">
                <strong>{firstNameCap} {lastNameCap}</strong>
              </StyledTableCell>
              <StyledTableCell align="right"><strong>{phoneNumberDashes}</strong></StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </StyledTableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
