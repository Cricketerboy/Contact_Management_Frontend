import React, { useState, useEffect } from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import ContactForm from "./components/ContactForm";
import ContactsTable from "./components/ContactsTable";
import { fetchContacts, addContact, updateContact, deleteContact } from "./services/api";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  const loadContacts = async () => {
    try {
      const data = await fetchContacts();
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts:", error.message);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const handleAddOrUpdate = async (contact) => {
    try {
      if (selectedContact) {
        await updateContact(selectedContact._id, contact);
      } else {
        await addContact(contact);
      }
      loadContacts();
      setSelectedContact(null);
    } catch (error) {
      console.error("Error adding/updating contact:", error.response?.data || error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteContact(id);
      loadContacts();
    } catch (error) {
      console.error("Error deleting contact:", error.message);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Management System
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <ContactForm
            onSubmit={handleAddOrUpdate}
            selectedContact={selectedContact}
            onCancel={() => setSelectedContact(null)}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <ContactsTable
            contacts={contacts}
            onEdit={setSelectedContact}
            onDelete={handleDelete}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
