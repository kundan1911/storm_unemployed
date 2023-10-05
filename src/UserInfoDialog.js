import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UserInfoDialog = () => {
  const [name, setName] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [department, setDepartment] = useState('');
  const [dob, setDob] = useState(null);
  const [joinDate, setJoinDate] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const calculateAge = (dob) => {
    // Age calculation function (same as before)
  };

  const handleDobChange = (date) => {
    setDob(date);
  };

  const handleJoinDateChange = (date) => {
    setJoinDate(date);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const age = calculateAge(dob);

    console.log('Name:', name);
    console.log('Job Role:', jobRole);
    console.log('Department:', department);
    console.log('Date of Birth:', dob);
    console.log('Date of Joining:', joinDate);
    console.log('Age:', age);

    // Close the dialog box
    setOpenDialog(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={() => setOpenDialog(true)}>
        Profile
      </Button>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} PaperProps={{ style: { width: '800px', height: '540px' } }}>
        <DialogTitle>User Information</DialogTitle>
        <DialogContent>
          <form onSubmit={handleFormSubmit}>
            <p style={{margin:"0px"}}>Your Name -</p>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <p style={{marginTop:"0.4px"}}>Your Job Role -</p>
              {/* <InputLabel>----Select----</InputLabel> */}
              <Select
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
                required
              >
                <MenuItem value="">----Select----</MenuItem>
                <MenuItem value="Developer">Developer</MenuItem>
                <MenuItem value="Designer">Designer</MenuItem>
                <MenuItem value="Manager">Manager</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              {/* <InputLabel>Department</InputLabel> */}
              <p style={{marginTop:"0.4px"}}>Your Department -</p>
              <Select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
              >
                <MenuItem value="">Select Department</MenuItem>
                <MenuItem value="HR">HR</MenuItem>
                <MenuItem value="IT">IT</MenuItem>
                <MenuItem value="Finance">Finance</MenuItem>
              </Select>
            </FormControl>
            <div>
            {/* <p style={{marginTop:"1px",marginBottom:"0.1px"}}>Your Date of Birth -</p>
            <DatePicker
              selected={dob}
              onChange={handleDobChange}
              required
              dateFormat="yyyy-MM-dd"
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={15}
              dropdownMode="select"
              margin="normal"
              fullWidth
              label="Date of Birth"
            /> */}

              <p style={{marginTop:"15px",marginBottom:"0.1px"}}>Your Date of Joining -</p>
            <DatePicker
              selected={joinDate}
              onChange={handleJoinDateChange}
              required
              dateFormat="yyyy-MM-dd"
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={15}
              dropdownMode="select"
              margin="normal"
              fullWidth
              label="Date of Joining"
            />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleFormSubmit} color="primary" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserInfoDialog;
