import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import {darken, makeStyles} from '@material-ui/core/styles';
import {
    Avatar,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Box,
} from '@material-ui/core'

import { adminLogin } from '../api'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function SignIn() {
    const history = useHistory()
    let email = ''
    let password = ''
    const classes = useStyles()
    const {handleSubmit, register } = useForm();

    const handleEmailChange = e => {
        e.preventDefault();
        email = e.target.value
        //password = e.target.value
    }
    const handlePasswordChange = e => {
        e.preventDefault();
        password = e.target.value
        //password = e.target.value
    }
    const onSubmitadmin = async (data) => {
        //history.push('/')
        try {
            const success = await adminLogin(data)
            console.log(success);
            if (success) {
                // localStorage.setItem("token", data.email);
                history.push('/dashboard')
            }
        } catch (err) {
            const errMessage = err.message
            alert(err)
            // this.setState({ err: errMessage })
            // return;
        }
    }
    return (
        <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar} />
                <Typography component="h1" variant="h5" >
                    Sign in
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit(onSubmitadmin)} >
                    <TextField
                        // onChange={handleEmailChange}
                        // value="email"
                               variant="outlined"
                               margin="normal"
                               required
                               fullWidth
                               id="email"
                               label="Email Address"
                               name="email"
                               autoComplete="email"
                               autoFocus
                               inputRef={register}
                    />

                    <TextField
                        // onChange={handlePasswordChange}
                        // value={password}
                               variant="outlined"
                               margin="normal"
                               required
                               fullWidth
                               id="password"
                               label="Password"
                               name="password"
                               type="password"
                               autoComplete="password"
                               inputRef={register}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
                        Sign In
                    </Button>
                </form>
            </div>
            <Box mt={8} >
                <CopyRight />
            </Box>
        </Container>
    )
}

const CopyRight = () => (
    <Typography  >
        {'Copyright ©'}
        {new Date().getFullYear()}
    </Typography>
)

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
