import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';


const MainComponent = () => {
  const [open, setOpen] = useState(false);
  

  // Function to handle opening the dialog
  const HandleClickOpen = () => {
    //
    setOpen(true);
  };

  // Function to handle closing the dialog
  const handleClose = (shouldExit) => {
    if (shouldExit) {
    //
      console.log("Login Page");
    } else {
      // Just close the dialog
      setOpen(false);
    }
  };

  return (
    <div>
      <div style={{ position: 'relative', height: '100vh' }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={HandleClickOpen} 
          style={{
            position: 'absolute', 
            left: '50%', 
            transform: 'translate(-50%, 20%)',
            bottom: '30%'
          }}>
          Show Dialog
        </Button>
      </div>

      <Dialog 
        open={open} 
        onClose={() => handleClose(false)} 
        aria-labelledby="alert-dialog-title" 
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Alert"} {/* You can replace this with your dynamic title */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {"This is a confirmation dialog. Do you want to proceed?"}
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

