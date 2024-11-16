import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TablePagination,
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
    <>
      <Table>
        <TableHead>
          <TableRow>
            {["First Name", "Last Name", "Email", "Phone", "Company", "Job Title", "Actions"].map(
              (header) => (
                <TableCell key={header}>{header}</TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedContacts.map((contact) => (
            <TableRow key={contact._id}>
              <TableCell>{contact.firstname}</TableCell>
              <TableCell>{contact.lastname}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>{contact.company}</TableCell>
              <TableCell>{contact.jobTitle}</TableCell>
              <TableCell>
                <Button onClick={() => onEdit(contact)} color="primary">
                  Edit
                </Button>
                <Button onClick={() => onDelete(contact._id)} color="secondary">
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
    </>
  );
};

export default ContactsTable;
