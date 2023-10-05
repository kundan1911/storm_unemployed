import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@mui/material";
import Auth from "./Auth";

function EmployeeAuthButtons() {

  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);
  const [isRegisterDialogOpen, setRegisterDialogOpen] = useState(false);
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const openLoginDialog = () => {
    setLoginDialogOpen(true);
  };

  const closeLoginDialog = () => {
    setLoginDialogOpen(false);
  };

  const openRegisterDialog = () => {
    setRegisterDialogOpen(true);
  };

  const closeRegisterDialog = () => {
    setRegisterDialogOpen(false);
  };

  const handleLogin = () => {
    // Handle login logic here (e.g., validate credentials)
    console.log("Logging in with Employee ID: ", employeeId);
    console.log("Password: ", password);
    closeLoginDialog();
  };

  const handleRegister = () => {
    // Handle registration logic here (e.g., create a new account)
    console.log("Registering with Employee ID: ", employeeId);
    console.log("Password: ", password);
    closeRegisterDialog();
  };

  return (
    <div>
      <Button variant="contained" onClick={openLoginDialog}>
        Login
      </Button>
      <Button variant="contained" onClick={openRegisterDialog}>
        Register
      </Button>

      <Dialog open={isLoginDialogOpen} onClose={closeLoginDialog}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            label="Employee ID"
            fullWidth
            onChange={(e) => setEmployeeId(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <div style={{marginLeft:"160px"}}>
          <p style={{marginLeft:"60px"}}>Or</p>
        <Auth/>
        </div>
        <DialogActions>
          <Button onClick={handleLogin} variant="contained" color="primary">
            Login
          </Button>
          <Button onClick={closeLoginDialog} variant="contained" color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={isRegisterDialogOpen} onClose={closeRegisterDialog}>
        <DialogTitle>Register</DialogTitle>
        <DialogContent>
          <TextField
            label="Employee ID"
            fullWidth
            onChange={(e) => setEmployeeId(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </DialogContent>
        <div style={{marginLeft:"200px"}}>
          <p style={{marginLeft:"80px"}}>Or</p>
        <Auth/>
        </div>
        <DialogActions>
          <Button onClick={handleRegister} variant="contained" color="primary">
            Register
          </Button>
          <Button onClick={closeRegisterDialog} variant="contained" color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default EmployeeAuthButtons