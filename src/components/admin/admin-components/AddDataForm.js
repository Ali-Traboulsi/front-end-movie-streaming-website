import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {
    Container,
    makeStyles,
    FormControl,
    NativeSelect,
    FormHelperText
} from '@material-ui/core';

export default function AddDataForm() {
    const classes = useStyles()
    return (
        <Container maxWidth='md' >
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="title"
                        name="title"
                        label="Movie Title"
                        fullWidth
                        autoComplete="title"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="movie-id"
                        name="movie-id"
                        label="Movie ID"
                        fullWidth
                        autoComplete="movie-id"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="image"
                        name="image"
                        label="Image Url"
                        fullWidth
                        autoComplete="image"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="genres"
                        name="genres"
                        label="Genres"
                        fullWidth
                        autoComplete="genres"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="year"
                        name="year"
                        label="Release Year"
                        fullWidth
                        autoComplete="year"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                </Grid>
                <Grid itme xs={12}>
                    <NativeSelect
                        className={classes.selectEmpty}
                        // value={state.age}
                        name="age"
                        // onChange={handleChange}
                        inputProps={{ 'aria-label': 'age' }}
                    >
                        <option value="" disabled={false}>
                            Select Type</option>
                        <option value={'movie'}>Movie</option>
                        <option value={'series'}>Series</option>
                    </NativeSelect>
                    <FormHelperText>Type</FormHelperText>

                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="Use this address for payment details"
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

const useStyles = makeStyles((theme) => ({
    formControl: {

    }
}))