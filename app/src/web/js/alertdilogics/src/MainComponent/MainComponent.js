import React from "react";
import { useNavigate } from "react-router-dom";  // Replaced useHistory with useNavigate
import { Button } from "@mui/material";


 
  const MainComponent = () => {
    const navigate = useNavigate();  // Use navigate instead of useHistory
  
    const handleClick = () => {
      setTimeout(() => {
        navigate("/form");  // Replaced history.push with navigate
      }, 1000);  // Delay of 1 second
    };
  
    return (
      <div>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Go to Form Page
        </Button>
        
      </div>
    );
  };
  
  export default MainComponent;
  


