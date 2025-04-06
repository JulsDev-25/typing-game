import React, { useEffect, useState } from "react";
import { Box, Grid2 as Grid, Input, OutlinedInput } from "@mui/material";

const TypingGame = () => {
  const [letter, setLetter] = useState("");
  const [win, setwin] = useState("");

  useEffect(() => {
    let lett = letter 
    if(lett !== "") {
      if (lett.toLowerCase() == "e") {
        setwin(true);
      } else {
        setwin(false);
      }
  
      setTimeout(() => {
        setLetter("")
        setwin("")
      }, 1000);
    }
    
  }, [letter]);


  const letterSet = (e) => {
    setLetter(e.target.value);
  };
  return (
    <>
      <Grid container sx={{ padding: " 30px 30%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "burlywood",
            height: "80px",
            padding: "0px 20px",
            borderRadius: "20px",
            margin: "8px auto",
          }}
        >
          <p style={{ fontSize: "40px" }}>TYPING-GAME</p>
        </Box>
        <Grid
          size={12}
          bgcolor={"lightblue"}
          sx={{ borderRadius: "10px", textAlign: "center" }}
        >
          <h1>Deviner la lettre</h1>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                win === "" 
                  ?"burlywood"
                  :win === true
                  ? "green"
                  : "red",
              height: "80px",
              width: "80px",
              borderRadius: "50%",
              margin: "auto",
            }}
          >
            <p style={{ fontSize: "40px" }}>{win === true ?"E":"?"}</p>
          </Box>
          <Input
            variant={OutlinedInput}
            placeholder="Entrer la lettre deviner"
            value={letter}
            onChange={letterSet}
            sx={{
              border: "2px solid",
              margin: "auto",
              my: 3,
              px: 1,
              borderRadius: 2,
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default TypingGame;
