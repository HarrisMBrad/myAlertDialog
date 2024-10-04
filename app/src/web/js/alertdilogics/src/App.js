import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const MainComponent = () => {
  const [open, setOpen] = useState(false);

  // Function to handle opening the dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to handle closing the dialog
  const handleClose = (shouldExit) => {
    if (shouldExit) {
      // Simulate exiting the application (or any other action you'd like to trigger)
      console.log("Exiting the application...");
    }
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Show Dialog
      </Button>

      <Dialog open={open} onClose={() => handleClose(false)} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          {"Alert"} {/* You can replace this with your dynamic title */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {"This is a confirmation dialog. Do you want to proceed?"} {/* Replace with your dynamic message */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(true)} color="primary">
            Yes {/* Positive action */}
          </Button>
          <Button onClick={() => handleClose(false)} color="secondary" autoFocus>
            No {/* Negative action */}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MainComponent;
