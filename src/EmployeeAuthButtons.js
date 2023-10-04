import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './empAuth.css';

function EmployeeAuthButtons() {
  const [openRegistrationDialog, setOpenRegistrationDialog] = useState(false);
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const [dialogStep, setDialogStep] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    employeeId: '',
    jobRole: '',
    department: '',
    password: '',
  });

  const [loginData, setLoginData] = useState({
    employeeId: '',
    password: '',
  });

  const handleClose = () => {
    if (dialogStep < 5) {
      setDialogStep(dialogStep + 1);
    } else {
      setOpenRegistrationDialog(false);
      setOpenLoginDialog(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const startRegistrationProcess = () => {
    setOpenRegistrationDialog(true);
    setDialogStep(0);
    setFormData({
      name: '',
      employeeId: '',
      jobRole: '',
      department: '',
      password: '',
    });
  };

  const startLoginProcess = () => {
    setOpenLoginDialog(true);
    setLoginData({
      employeeId: '',
      password: '',
    });
  };

  const renderDialogContent = () => {
    switch (dialogStep) {
      case 0:
        return (
          <div>
            <p>Your Name</p>
            <TextField
            fullWidth
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          </div>
        );
      case 1:
        return (
          <div>
            <p>Your Employee Id</p>
            <TextField
            fullWidth
            label="Your Employee ID"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleInputChange}
          />
          </div>
        );
      case 2:
        return (
          <div>
            <p>What is your Job role?</p>
            <TextField
            fullWidth
            select
            label="--select--"
            name="jobRole"
            value={formData.jobRole}
            onChange={handleInputChange}
          >
            {/* Replace the options with your actual job roles */}
            <MenuItem value="role1">Role 1</MenuItem>
            <MenuItem value="role2">Role 2</MenuItem>
            <MenuItem value="role3">Role 3</MenuItem>
          </TextField>
          </div>
        );
      case 3:
        return (
          <div>
            <p>What department do you work in?</p>
          <TextField
            fullWidth
            select
            label="--select--"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
          >
            {/* Replace the options with your actual departments */}
            <MenuItem value="department1">Department 1</MenuItem>
            <MenuItem value="department2">Department 2</MenuItem>
            <MenuItem value="department3">Department 3</MenuItem>
          </TextField>
          </div>
        );
      case 4:
        return (
          <div>
            <p>Create a password</p>
            <TextField
            fullWidth
            label="Create a Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          </div>
        );
      default:
        return <div>Thank you, you are registered successfully!</div>;
    }
  };

  const renderLoginDialogContent = () => {
    return (
      <div>
        <p>Enter your Employee Id </p>
        <TextField
          fullWidth
          label="Employee ID"
          name="employeeId"
          value={loginData.employeeId}
          onChange={handleLoginInputChange}
        />
        <p>Enter your password</p>
        <TextField
          fullWidth
          label="Password"
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleLoginInputChange}
        />
      </div>
    );
  };

  return (
    <div className='main'>
      <Button variant="contained" color="primary" onClick={startLoginProcess} style={{margin: "5px"}}>
        Login
      </Button>
      <Button variant="contained" color="primary" onClick={startRegistrationProcess} style={{marginLeft: "5px"}}>
        Registration
      </Button>
      <Dialog open={openRegistrationDialog || openLoginDialog} onClose={handleClose} PaperProps={{ style: { width: '500px', height: '360px' } }}>
        <DialogTitle className='dialog_title'>
          {openRegistrationDialog ? 'Registration' : 'Login'}
        </DialogTitle>
        <DialogContent className='dialog_content'>
          {openRegistrationDialog ? renderDialogContent() : renderLoginDialogContent()}
        </DialogContent>
        <DialogActions>
          {dialogStep === 5 ? (
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          ) : (
            <Button onClick={handleClose} color="primary">
              Next
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EmployeeAuthButtons;
