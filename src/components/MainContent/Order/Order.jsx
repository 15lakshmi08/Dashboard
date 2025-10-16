import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(num, name, order, status, amount) {
  return { num, name, order, status, amount };
}

const rows = [
  createData(13256498, "Keyboard", 125, "Rejected", `$70,999`),
  createData(13286564, "Computer Accessories", 100, "Approved", `$83,348`),
  createData(13256498, "Camera Lens", 40, "Rejected", `$40,570`),
  createData(13256498, "TV", 99, "Pending", `$410,780`),
  createData(13256498, "Handset", 50, "Approved", `$10,239`),
  createData(13256498, "Mouse", 89, "Rejected", `$10,570`),
  createData(13256498, "Desktop", 185, "Approved", `$98,063`),
  createData(13256498, "Chair", 100, "Pending", `$14,001`),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
         <h3>Recent Orders</h3>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h4>TRACKING NO.</h4></TableCell>
            <TableCell align="right"><h4>PRODUCT NAME</h4></TableCell>
            <TableCell align="right"><h4>TOTAL ORDER</h4></TableCell>
            <TableCell align="right"><h4>STATUS</h4></TableCell>
            <TableCell align="right"><h4>TOTAL AMOUNT</h4></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.num}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.order}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
