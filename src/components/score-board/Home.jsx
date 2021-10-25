import { Button, Grid } from "@material-ui/core";
import SendIcon from "@mui/icons-material/Send";
import { TextField } from "@mui/material";
import React, { useState } from "react";

/**
 * Home component to enter the user id 
 * 
 */
const Home = () => {
  const [userId, setUserId] = useState("");

  const handleOnChange = (value) => {
    setUserId(value);
  };

  return (
    <>
      <Grid className="user-container" container spacing={1}>
        <Grid item>
          <TextField
            onChange={(e) => handleOnChange(e.target.value)}
            className="userid"
            variant="filled"
            label="Enter User Id"
            type="text"
            value={userId}
          />
        </Grid>
        <Grid item className="match-home">
          <Button
            className="go-btn"
            variant="contained"
            onClick={() => {
              window.location.href = `/dashboard?id=${userId}`;
            }}
            endIcon={<SendIcon />}
          >
            Go
          </Button>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </>
  );
};

export default Home;
