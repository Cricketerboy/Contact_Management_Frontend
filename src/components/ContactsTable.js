import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TablePagination,
  Paper,
  TableContainer,
} from "@mui/material";

const ContactsTable = ({ contacts, onEdit, onDelete }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => setRowsPerPage(+event.target.value);

  const paginatedContacts = contacts.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <TableContainer
    component={Paper}
    elevation={3}
    sx={{
      mt: 2,
      borderRadius: 2,
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      }}
    >
      <Table>
        <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
          <TableRow>
            {["First Name", "Last Name", "Email", "Phone", "Company", "Job Title", "Actions"].map(
              (header) => (
                <TableCell
                  key={header}
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    borderRight: "1px solid #ddd",
                  }}
                >
                  {header}
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedContacts.map((contact) => (
            <TableRow
              key={contact._id}
              sx={{
                "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" },
                "&:hover": { backgroundColor: "#f1f1f1" },
              }}
            >
              <TableCell sx={{ textAlign: "center", borderRight: "1px solid #ddd" }}>
                {contact.firstname}
              </TableCell>
              <TableCell sx={{ textAlign: "center", borderRight: "1px solid #ddd" }}>
                {contact.lastname}
              </TableCell>
              <TableCell sx={{ textAlign: "center", borderRight: "1px solid #ddd" }}>
                {contact.email}
              </TableCell>
              <TableCell sx={{ textAlign: "center", borderRight: "1px solid #ddd" }}>
                {contact.phone}
              </TableCell>
              <TableCell sx={{ textAlign: "center", borderRight: "1px solid #ddd" }}>
                {contact.company}
              </TableCell>
              <TableCell sx={{ textAlign: "center", borderRight: "1px solid #ddd" }}>
                {contact.jobTitle}
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Button onClick={() => onEdit(contact)} color="primary">
                  Edit
                </Button>
                <Button onClick={() => onDelete(contact._id)} color="error">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={contacts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default ContactsTable;
