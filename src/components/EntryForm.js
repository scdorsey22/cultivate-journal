import React from "react";
import { Grid, Box, Toolbar, Typography, TextField, FormControlLabel, Checkbox } from "@mui/material";

export default function EntryForm() {
    return (
    <React.Fragment>
        <Box component="main" sx={{ p: 1 }}>
            <TextField
            id="entry form"
            name="entry form"
            label="Write your thoughts here..."
            autoComplete="given-name"
            fullWidth
            variant="outlined"
            multiline
            rows={16}
            /> 
        </Box>
    </React.Fragment>
    )}

