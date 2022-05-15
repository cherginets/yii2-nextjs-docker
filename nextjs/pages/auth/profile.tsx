import {Box, Button, Container, Grid, Paper, Typography} from "@mui/material";
import { Formik } from "formik";
import Layout from "../../app/layout/Layout";
import FormikText from "../../features/formik/FormikText";
import {useEffect, useState} from "react";
import apiAuth from "../../api/apiAuth";

export default function AuthProfilePage() {
    const [response, setResponse] = useState('');

    const fetch = () => {
        setResponse('loading...');
        apiAuth.profileGet()
            .then(response => {
                setResponse(JSON.stringify(response.data, null, ' '))
            })
            .catch(error => {
                setResponse('error: ' + JSON.stringify(error.response.data, null, ' '))
            });
    }
    useEffect(() => {fetch();}, []);

    return <Layout title={'Профиль'}>
        <Container>
            <h1>Авторизация</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={4}>
                    <Paper sx={{p: 2}}>
                        profile
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={8}>
                    <Paper sx={{p: 2}}>
                        <pre>{response}</pre>
                    </Paper>
                </Grid>
            </Grid>

        </Container>
    </Layout>
}
