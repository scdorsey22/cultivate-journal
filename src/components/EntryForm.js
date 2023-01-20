import React from "react";
import { Grid, Typography, TextField, FormControlLabel, Checkbox } from "@mui/material";

export default function EntryForm() {
    return (
    <React.Fragment>
        <Grid container spacing={1}>
            <TextField
            required
            id="entry form"
            name="entry form"
            label="Write your thoughts here..."
            autoComplete="given-name"
            fullWidth
            variant="outlined"
            multiline
            rows={16}
            /> 
        </Grid>
    </React.Fragment>
    )}

