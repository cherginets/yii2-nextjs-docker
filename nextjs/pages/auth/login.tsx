import {Box, Button, Container, Grid, Paper, Typography} from "@mui/material";
import { Formik } from "formik";
import Layout from "../../app/layout/Layout";
import FormikText from "../../features/formik/FormikText";
import {useState} from "react";
import apiAuth from "../../api/apiAuth";

export default function IndexPage() {
    const [response, setResponse] = useState('');

    const submit = (values) => {
        setResponse('loading...');
        apiAuth.login(values)
            .then(response => {
                setResponse(JSON.stringify(response.data, null, ' '))
            })
            .catch(error => {
                setResponse('error: ' + JSON.stringify(error.response.data, null, ' '))
            })
        console.log("values", values);
    };

    return <Layout title={'Авторизация'}>
        <Container>
            <h1>Авторизация</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={4}>
                    <Paper sx={{p: 2}}>
                        <Formik initialValues={{
                            login: "anton.cherginets@gmail.com",
                            password: "anton.cherginets@gmail.com",
                        }} onSubmit={submit}>{({values, handleSubmit}) => {
                            return <form onSubmit={handleSubmit}>
                                <FormikText label={'Эл. почта'} name={'login'} />
                                <FormikText label={'Пароль'} name={'password'} type={'password'} />
                                <Button variant={'contained'} type={'submit'}>Сохранить</Button>
                            </form>
                        }}
                        </Formik>
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
