import {Box, Button, Container, Grid, Paper, Typography} from "@mui/material";
import { Formik } from "formik";
import Layout from "../../app/layout/Layout";
import FormikText from "../../features/formik/FormikText";
import {useEffect, useState} from "react";
import authAPI from "../../api/authAPI";

export default function AuthProfilePage() {
    const [response, setResponse] = useState('');

    const fetch = () => {
        setResponse('loading...');
        authAPI.profileGet()
            .then(response => {
                setResponse(JSON.stringify(response.data, null, ' '))
            })
            .catch(error => {
                setResponse('error: ' + JSON.stringify(error.response.data, null, ' '))
            });
    }
    useEffect(() => {fetch()}, []);

    return <Layout title={'Профиль'} redirectIfGuest={true}>
        <Container>
            <h1>Профиль</h1>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper sx={{p: 2}}>
                        <pre>{response}</pre>
                    </Paper>
                </Grid>
            </Grid>

        </Container>
    </Layout>
}
