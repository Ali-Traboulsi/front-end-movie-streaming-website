import React from 'react';
import axios from "axios";
import {
    withStyles,
    TableContainer, Paper, Table, TableRow, TableCell, makeStyles, TextField, RadioGroup, Radio, FormControlLabel, Button, InputBase, InputLabel, FormControl, NativeSelect, Select, Box
} from '@material-ui/core'
import './AddData.module.css'
import { uploadMovies, fetchMovieData,  baseUrl } from '../api'
import { findAllInRenderedTree } from 'react-dom/test-utils'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import './AddData.module.css'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from './logo.png';
import TimeField from 'react-simple-timefield';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';


class Admin extends React.Component {

    state = {
        type_id: '1',
        movie_title: '',
        duration: '00:00:00',
        year: new Date('2020-08-18'),
        imdb_rating: '',
        poster_image_link: '',
        genres_object: '',
        genres: 1,
        description_in_english: '',
        description_in_arabic: '',
        slug: '',
        movie_trailer: '',
        language_id: 1,
        languages: '',
        streaming_links: '',
        slinks: 1,
        download_links: '',
        dlinks: 1,
    }

    async componentDidMount() {
        // const genres = this.state.genres;
        try {
            const response1 = await axios.get(`${baseUrl}genre`);
            console.log(response1.data.genres.data);
            this.setState({genres_object: response1.data.genres.data})

            const response2 = await axios.get(`${baseUrl}language`);
            // console.log(response2.data.languages.data);
            this.setState({languages: response2.data.languages.data})

            const response3 = await axios.get(`${baseUrl}slink`)
            // console.log(response3.data.streaming_link);
            this.setState({streaming_links: response3.data.streaming_link})
            // console.log(this.state.streaming_links);

            const response4 = await axios.get(`${baseUrl}dlink`)
            // console.log(response4.data.dlinks.data);
            this.setState({download_links: response4.data.dlinks.data});
            console.log(this.state.download_links);

            // const genreData = response.data.visuals.data.genres;
            // console.log(this.state.genres_object);
        } catch (error) {
            console.log(error);
            alert(error);
        }
    }


    handleChangeType = (e) => {
        this.setState({
            type_id: e.target.value
        })
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChangeGenre = (e) => {
        e.preventDefault();
        try {
            // console.log(e.target.value);
            const value = e.target.value;

            this.setState((previousState) => ({
                genres_object: previousState.genres_object.map(item => item.genre_in_english === value
                ? Object.assign(item, {genre_in_english: item.genre_in_english})
                    : item
                )
            }))

            this.state.genres_object.map(item => item.genre_in_english === value
                ? this.setState({genres: item.id})
                : item
            )

            console.log(this.state.genres);

        }catch (err) {
            console.log(err)
        }
    }


    handleChangeSlink= (e) => {
        e.preventDefault();
        try {
            // console.log(e.target.value);
            const value = e.target.value;

            this.setState((previousState) => ({
                streaming_links: previousState.streaming_links.map(item => item.description === value
                    ? Object.assign(item, {description: item.description})
                    : item
                )
            }))

            this.state.streaming_links.map(item => item.description === value
                ? this.setState({slinks: item.id})
                : item
            )

            console.log(this.state.slinks);

        }catch (err) {
            console.log(err)
        }
    }


    handleChangeDlink= (e) => {
        e.preventDefault();
        try {
            // console.log(e.target.value);
            const value = e.target.value;

            this.setState((previousState) => ({
                download_links: previousState.download_links.map(item => item.download_link === value
                    ? Object.assign(item, {download_link: item.download_link})
                    : item
                )
            }))

            this.state.download_links.map(item => item.download_link === value
                ? this.setState({dlinks: item.id})
                : item
            )

            console.log(this.state.dlinks);

        }catch (err) {
            console.log(err)
        }
    }



    handleChangeLanguage = (e) => {
        e.preventDefault();
        try {
            // console.log(e.target.value);
            const value = e.target.value;

            this.setState((previousState) => ({
                languages: previousState.languages.map(item => item.language_in_english === value
                    ? Object.assign(item, {language_in_english: item.language_in_english})
                    : item
                )
            }));

            this.state.languages.map(item => item.language_in_english === value
                ? this.setState({language_id: item.id})
                : item
            )

            /*this.setState({
                language_id: value
            });*/

            console.log(this.state.language_id);
        }catch (err) {
            console.log(err)
        }
    }

    handleChangeDuration = (e) => {
        e.preventDefault();
        this.setState({duration: e.target.value});
        console.log(this.state.duration);
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('entered submit try block')
            const formdata = new FormData();
            formdata.append('type_id', this.state.type_id);
            formdata.append('movie_title', this.state.movie_title);
            formdata.append('duration', this.state.duration);
            formdata.append('year', this.state.year);
            formdata.append('imdb_rating', this.state.imdb_rating);
            formdata.append('poster_image_link', this.state.poster_image_link);
            formdata.append('genres', this.state.genres);
            formdata.append('slinks', this.state.slinks);
            formdata.append('dlinks', this.state.dlinks);
            formdata.append('description_in_english', this.state.description_in_english);
            formdata.append('slug', this.state.slug);
            formdata.append('movie_trailer', this.state.movie_trailer);
            formdata.append('language_id', this.state.language_id);
            // const response = await uploadMovies(formdata);
            // alert(response.message)
            // console.log(response)
            const response = await axios.post(`${baseUrl}visual`
                , formdata)
                .then(res => console.log(res))
            ;
        } catch (error) {
            alert(error)
        }
    }


    handleOnClick = async (e) => {
        // const genres = this.state.genres;
        e.preventDefault();
        try {
            const response = await fetchMovieData()
            console.log(response)
        } catch (error) {
            console.log(error);
            alert(error);
        }
    }



    render() {
        const { classes } = this.props
        const darkTheme = createMuiTheme({
            palette: {
                type: 'dark',
            },
        });


        return (
            <>
                <div className={classes.outwards}>

                    <div className={classes.container}>
                        <div className={classes.logo}>
                            <img src={logo} alt='website logo'/>
                        </div>
                        {/* <h2 className={classes.h2} > Upload the data to the server</h2> */}
                        <TableContainer  className={classes.tableContainer} component={Paper}>
                            <form onSubmit={this.handleSubmit}>
                                <Table size='small' className={classes.table} aria-label="simple table">
                                    <TableRow>
                                        <TableCell className={classes.boldText}>Type</TableCell>
                                        <TableCell>
                                            <div>
                                                <RadioGroup row aria-label="type_id" name="type_id" value={this.state.type_id} onChange={this.handleChangeType}>
                                                    <FormControlLabel value="1" control={<Radio />} label="Movie" />
                                                    <FormControlLabel value="2" control={<Radio />} label="Serie" />
                                                </RadioGroup>
                                            </div>
                                        </TableCell>
                                    </TableRow>


                                    {/* ------------------- Movie Title -------------------- */}
                                    <TableRow >
                                        <TableCell className={classes.boldText}>Movie Title</TableCell>
                                        <TableCell align="right">
                                            <TextField
                                                onChange={this.handleChange}
                                                variant='filled'
                                                required
                                                name="movie_title"
                                                id="movie_title"
                                                type="text"
                                                label="movie_title"
                                                fullWidth
                                                autoComplete="movie_title"
                                            />
                                            {console.log(this.state.movie_title)}
                                        </TableCell>
                                    </TableRow>

                                    {/* ------------------- Duration -------------------- */}
                                    <TableRow>
                                    <TableCell className={classes.boldText}>Duration</TableCell>
                                        <TableCell>
                                            <TimeField
                                                value={this.state.duration}
                                                showSeconds
                                                onChange={this.handleChangeDuration}
                                                input={<TextField label="duration" value={this.state.duration} variant="outlined" />}
                                            />
                                            {console.log(this.state.duration)}
                                        </TableCell>
                                    </TableRow>

                                    {/* ------------------- Poster image Link -------------------- */}
                                    <TableRow>
                                        <TableCell className={classes.boldText}>Image</TableCell>
                                        <TableCell>
                                            {/*<input type="file"*/}
                                            {/*       onChange={this.handleChange}*/}
                                            {/*       variant='filled'*/}
                                            {/*       required*/}
                                            {/*       id="image"*/}
                                            {/*       name="image"*/}
                                            {/*       label="Image"*/}
                                            {/*       fullWidth*/}
                                            {/*       autoComplete="image"*/}
                                            {/*/>*/}
                                            <TextField type="text"
                                                       onChange={this.handleChange}
                                                       variant='filled'
                                                       required
                                                       id="poster_image_link"
                                                       name="poster_image_link"
                                                       label="poster_image_link"
                                                       fullWidth
                                            />

                                        </TableCell>
                                    </TableRow>


                                    {/* ------------------- Genres -------------------- */}
                                    <TableRow>
                                        <TableCell className={classes.boldText}>Genres</TableCell>
                                        <TableCell>
                                            <FormControl variant="filled" className={classes.formControl}>
                                                <InputLabel htmlFor="filled-age-native-simple">Genre</InputLabel>
                                                <Select
                                                    native
                                                    onChange={this.handleChangeGenre}
                                                    inputProps={{
                                                    }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    { (this.state.genres_object.length != 0)
                                                        ? this.state.genres_object.map((val) =>
                                                                <option key={val.id}>{val.genre_in_english}</option>
                                                            )
                                                        : null
                                                    }
                                                </Select>
                                                {/*{console.log(this.state.genres)}*/}
                                            </FormControl>
                                            {/* type="text" */}
                                            {/* onChange={this.handleChange}
                                        variant='filled'
                                        required
                                        id="genres"
                                        name="genres"
                                        label="Genres"
                                        fullWidth
                                        autoComplete="genres"
                                    />  */}
                                        </TableCell>
                                    </TableRow>



                                    {/* ------------------- Streaming Links -------------------- */}
                                    <TableRow>
                                        <TableCell className={classes.boldText}>Streaming Links</TableCell>
                                        <TableCell>
                                            <FormControl variant="filled" className={classes.formControl}>
                                                <InputLabel htmlFor="filled-age-native-simple">Stream Links</InputLabel>
                                                <Select
                                                    native
                                                    onChange={this.handleChangeSlink}
                                                    inputProps={{
                                                    }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    { (this.state.streaming_links.length != 0)
                                                        ? this.state.streaming_links.map((val) =>
                                                            <option key={val.id}>{val.description}</option>
                                                        )
                                                        : null
                                                    }
                                                </Select>
                                                {/*{console.log(this.state.genres)}*/}
                                            </FormControl>
                                            {/* type="text" */}
                                            {/* onChange={this.handleChange}
                                        variant='filled'
                                        required
                                        id="genres"
                                        name="genres"
                                        label="Genres"
                                        fullWidth
                                        autoComplete="genres"
                                    />  */}
                                        </TableCell>
                                    </TableRow>




                                    {/* ------------------- Download Links -------------------- */}
                                    <TableRow>
                                        <TableCell className={classes.boldText}>Download Links</TableCell>
                                        <TableCell>
                                            <FormControl variant="filled" className={classes.formControl}>
                                                <InputLabel htmlFor="filled-age-native-simple">Down Link</InputLabel>
                                                <Select
                                                    native
                                                    onChange={this.handleChangeDlink}
                                                    inputProps={{
                                                    }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    { (this.state.download_links.length != 0)
                                                        ? this.state.download_links.map((val) =>
                                                            <option key={val.id}>{val.download_link}</option>
                                                        )
                                                        : null
                                                    }
                                                </Select>
                                                {/*{console.log(this.state.genres)}*/}
                                            </FormControl>
                                            {/* type="text" */}
                                            {/* onChange={this.handleChange}
                                        variant='filled'
                                        required
                                        id="genres"
                                        name="genres"
                                        label="Genres"
                                        fullWidth
                                        autoComplete="genres"
                                    />  */}
                                        </TableCell>
                                    </TableRow>




                                    {/* ------------------- Language -------------------- */}
                                    <TableRow>
                                        <TableCell className={classes.boldText}>Language</TableCell>
                                        <TableCell>
                                            <FormControl variant="filled" className={classes.formControl}>
                                                <InputLabel htmlFor="filled-age-native-simple">Language</InputLabel>
                                                <Select
                                                    native
                                                    onChange={this.handleChangeLanguage}
                                                    inputProps={{
                                                    }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    { (this.state.languages.length != 0)
                                                        ? this.state.languages.map((val) =>
                                                            <>
                                                                <option key={val.id}>{val.language_in_english}</option>
                                                            </>
                                                        )
                                                        : null
                                                    }
                                                    {console.log(this.state.language_id)}
                                                </Select>
                                            </FormControl>
                                        </TableCell>
                                    </TableRow>

                                    {/* -------------------- movie trailer link --------------------- */}
                                    <TableRow>
                                        <TableCell className={classes.boldText}>movie_trailer</TableCell>
                                        <TableCell>
                                            <TextField type="text"
                                                       onChange={this.handleChange}
                                                       variant='filled'
                                                       required
                                                       id="movie_trailer"
                                                       name="movie_trailer"
                                                       label="movie_trailer"
                                                       fullWidth
                                            />
                                            {console.log(this.state.movie_trailer)}
                                        </TableCell>
                                    </TableRow>

                                    {/* -------------------- Release Year Link --------------------- */}
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
                                        {console.log(this.state.year)}
                                    </TableRow>

                                    {/* -------------------- imdb rating link --------------------- */}
                                    <TableRow>
                                        <TableCell className={classes.boldText}>imdb_rating</TableCell>
                                        <TableCell>
                                            <TextField type="number"
                                                       onChange={this.handleChange}
                                                       InputLabelProps={{
                                                           shrink: true,
                                                       }}
                                                       variant='filled'
                                                       required
                                                       id="imdb_rating"
                                                       name="imdb_rating"
                                                       label="imdb_rating"
                                                       fullWidth
                                            />
                                            {console.log(this.state.imdb_rating)}
                                        </TableCell>
                                    </TableRow>



                                    {/* -------------------- slug --------------------- */}
                                    <TableRow>
                                        <TableCell className={classes.boldText}>Slug</TableCell>
                                        <TableCell>
                                            <TextField type="text"
                                                       onChange={this.handleChange}
                                                       InputLabelProps={{
                                                           shrink: true,
                                                       }}
                                                       variant='filled'
                                                       required
                                                       id="slug"
                                                       name="slug"
                                                       label="slug"
                                                       fullWidth
                                            />
                                            {console.log(this.state.slug)}
                                        </TableCell>
                                    </TableRow>


                                    {/* -------------------- Description --------------------- */}
                                    <TableRow>
                                        <TableCell className={classes.boldText} > Description</TableCell>
                                        <TableCell>
                                            <TextField type="text"
                                                       onChange={this.handleChange}
                                                       fullWidth
                                                       id="description_in_english"
                                                       label="Description"
                                                       required
                                                       name="description_in_english"
                                                       multiline
                                                       rows={4}
                                                // defaultValue="Description is option"
                                                       variant="outlined"
                                            />
                                            {console.log(this.state.description_in_english)}
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>
                                            <Button
                                                className= {classes.submit}
                                                type="submit"
                                                fullWidth
                                                variant='contained'
                                                color='primary'
                                            >Submit
                                            </Button>
                                        </TableCell>
                                    </TableRow>

                                </Table>
                            </form>
                        </TableContainer>
                    </div>
                </div>
            </>
        );
    }
}

const styles = {
    Adminlogo1: {
        marginRight: '200',
    },
    outwards: {
        position: 'absolute',
        backgroundColor: '#1b262c',
        height: "100%",
        width: '100%',
    },
    container: {
        height: "100%",
        marginBottom: 16,
        marginTop: 60,
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
export default withStyles(styles)(Admin);