import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TablePage = ({ rank }) => {
  const currentUserId = JSON.parse(localStorage.getItem("user"))._id;

  useEffect(() => {
    const anchor = document.querySelector(`#user_${currentUserId}`);
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [currentUserId]);

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: 250,
          minHeight: 0,
          "& .MuiTableCell-head": {
            fontWeight: 700,
          },
        }}
        stickyHeader
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="left">Rank</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Score</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rank
            ? rank.map((row, index) => (
                <TableRow
                  key={index + 1}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  selected={row.userId === currentUserId} // Change logic to equate row.user-id to current user
                  id={`user_${row.userId}`}
                >
                  <TableCell component="th" scope="row">
                    {row.userId === currentUserId? <strong>{index + 1}</strong>: index+1}
                  </TableCell>
                  <TableCell align="center">{row.userId === currentUserId?<strong>{row.userName.join(" ")}</strong>:row.userName.join(" ")}</TableCell>
                  <TableCell align="center">{row.userId === currentUserId? <strong>{Math.round(row.totalScore * 100) / 100}</strong>: Math.round(row.totalScore * 100) / 100}</TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablePage;
