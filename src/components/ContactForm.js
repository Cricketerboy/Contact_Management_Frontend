import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";

const ContactForm = ({ onSubmit, selectedContact, onCancel }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
  });

  useEffect(() => {
    if (selectedContact) {
      setFormData(selectedContact);
    } else {
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
      });
    }
  }, [selectedContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: "#fff",
        borderRadius: 2,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        p: 3,
      }}
    >
      <TextField
        fullWidth
        label="First Name"
        name="firstname"
        value={formData.firstname}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Last Name"
        name="lastname"
        value={formData.lastname}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Company"
        name="company"
        value={formData.company}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Job Title"
        name="jobTitle"
        value={formData.jobTitle}
        onChange={handleChange}
        margin="normal"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
        }}
      >
        <Button type="submit" variant="contained" color="primary">
          {selectedContact ? "Update Contact" : "Add Contact"}
        </Button>
      </Box>
      {selectedContact && (
        <Button onClick={onCancel} sx={{ mt: 2, ml: 2 }}>
          Cancel
        </Button>
      )}
    </Box>
  );
};

export default ContactForm;
