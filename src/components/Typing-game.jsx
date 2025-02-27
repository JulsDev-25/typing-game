import React, { useState } from 'react';
import { Box, Grid2 as Grid, Input, OutlinedInput } from '@mui/material';

const TypingGame = () => {

    const [letter, setLetter] = useState("")
    console.log(letter)

    return (
        <>
            <Grid
                container
                sx={{padding: " 30px 30%"}}
            >
                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "burlywood", height: "80px",padding: "0px 20px", borderRadius: "20px", margin: "8px auto"}}><p style={{fontSize: "40px"}}>TYPING-GAME</p></Box>
                <Grid size={12} bgcolor={"lightblue"}>
                    <h1>Deviner la lettre</h1>
                    <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "burlywood", height: "80px", width: "80px", borderRadius: "50%", margin: "auto"}}><p style={{fontSize: "40px"}}>?</p></Box>
                    <Input variant={OutlinedInput} placeholder='Entrer la lettre deviner' value={letter} onChange={(e) => setLetter(e.target.value)} sx={{border: "2px solid", margin: "auto"}} />
                </Grid>
            </Grid>
        </>
    );
}

export default TypingGame;
