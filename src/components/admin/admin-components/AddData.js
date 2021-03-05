import React from 'react'

import {
    withStyles,
    TableContainer, Paper, Table, TableRow, TableCell, makeStyles, TextField, RadioGroup, Radio, FormControlLabel, Button
} from '@material-ui/core'

import { uploadMovies } from '../api'
import { findAllInRenderedTree } from 'react-dom/test-utils'

class AddData extends React.Component {
    state = {
        type: 'movie',
        title: '',
        year: '',
        movie_id: '',
        image: '',
        genres: '',
        category: '',
        description: ''
    }

    handleChangeType = (e) => {
        this.setState({
            type: e.target.value
        })
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        const data  = this.state
        e.preventDefault()
        try {
            const response = await uploadMovies(data)
            alert(response.message)
            console.log(response)
        } catch (error) {
            alert(error)
        }
    }

    render() {
        const { classes } = this.props

        return (
            <div className={classes.container} >
                <h2 className={classes.h2} > Upload the data to the server</h2>

                <TableContainer className={classes.tableContainer} component={Paper}>
                    <form onSubmit={this.handleSubmit}>
                        <Table size='small' className={classes.table} aria-label="simple table">
                            <TableRow  >
                                <TableCell className={classes.boldText}>Type</TableCell>
                                <TableCell>
                                    <div>
                                        <RadioGroup row aria-label="type" name="type" value={this.state.type} onChange={this.handleChangeType}>
                                            <FormControlLabel value="movie" control={<Radio />} label="Movie" />
                                            <FormControlLabel value="serie" control={<Radio />} label="Serie" />
                                        </RadioGroup>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell className={classes.boldText}>Movie Title</TableCell>
                                <TableCell align="right">
                                    <TextField
                                        onChange={this.handleChange}
                                        variant='filled'
                                        required
                                        name="title"
                                        id="title"
                                        type="text"
                                        label="Movie Title"
                                        fullWidth
                                        autoComplete="title"
                                    />
                                </TableCell>

                            </TableRow>
                            <TableRow>
                                <TableCell className={classes.boldText}>Release Year</TableCell>
                                <TableCell>
                                    <TextField type="text"
                                               onChange={this.handleChange}
                                               variant='filled'
                                               required
                                               id="year"
                                               name="year"
                                               label="Release Year"
                                               fullWidth
                                               autoComplete="release-year"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className={classes.boldText}>Movie ID</TableCell>
                                <TableCell>
                                    <TextField type="text"
                                               onChange={this.handleChange}
                                               variant='filled'
                                               required
                                               id="movie_id"
                                               name="movie_id"
                                               label="Movie ID"
                                               fullWidth
                                               autoComplete="movie_id"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className={classes.boldText}>Movie Image</TableCell>
                                <TableCell>
                                    <TextField type="text"
                                               onChange={this.handleChange}
                                               variant='filled'
                                               required
                                               id="image"
                                               name="image"
                                               label="Movie Image"
                                               fullWidth
                                               autoComplete="image"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className={classes.boldText}>Genres</TableCell>
                                <TableCell>
                                    <TextField type="text"
                                               onChange={this.handleChange}
                                               variant='filled'
                                               required
                                               id="genres"
                                               name="genres"
                                               label="Genres"
                                               fullWidth
                                               autoComplete="genres"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className={classes.boldText}>Category</TableCell>
                                <TableCell>
                                    <TextField type="text"
                                               onChange={this.handleChange}
                                               variant='filled'
                                               required
                                               id="category"
                                               name="category"
                                               label="Category"
                                               fullWidth
                                               autoComplete="category"
                                    />
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className={classes.boldText} > Description</TableCell>
                                <TableCell>
                                    <TextField type="text"
                                               onChange={this.handleChange}
                                               fullWidth
                                               id="outlined-multiline-static"
                                               label="Description"
                                               required
                                               name="description"
                                               multiline
                                               rows={4}
                                               defaultValue="Description is option"
                                               variant="outlined"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Button
                                        className={classes.submit}
                                        type="submit"
                                        fullWidth
                                        variant='contained'
                                        color='primary' >
                                        Submit
                                    </Button>
                                </TableCell>
                            </TableRow>

                        </Table>
                    </form>
                </TableContainer>
            </div>
        );
    }
}

const styles = {
    container: {
        marginBottom: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    tableContainer: {
        maxWidth: 800,
    },
    table: {
        minWidth: 650,
        // maxWidth: 'md'
    },
    boldText: {
        fontWeight: 'bold'
    },
    submit: {
        margin: (3, 0, 2)
    }
}

export default withStyles(styles)(AddData)