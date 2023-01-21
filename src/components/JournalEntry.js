import React from "react";

import { Paper, Container, Typography, Box, Button } from "@mui/material";

import EntryForm from "./EntryForm";


export default function JournalEntry () {

return (

<Container component="main" maxWidth="sm" sx={{ mb: 10 }}>
    <Paper variant="standard" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
         <Typography component="h1" variant="h4" align="center" padding={2}>
              Journal Entry
        </Typography>
        <EntryForm />
        <React.Fragment>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                variant="contained"
                sx={{ mt: 3, ml: 1 }}
                >Enter
                </Button>
            </Box>
        </React.Fragment>
    </Paper>
</Container>
)

}