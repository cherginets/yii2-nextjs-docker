import {Alert} from "@mui/lab";
import {Box, Button, Container, Grid, Paper, Typography} from "@mui/material";
import { Formik } from "formik";
import {useRouter} from "next/router";
import Layout from "../../app/layout/Layout";
import FormikText from "../../features/formik/FormikText";
import {useState} from "react";
import apiAuth from "../../api/apiAuth";
import useLoader from "../../features/mui-loader/useLoader";
import Link from "../../features/next-mui-link/Link";
import {toastPromise} from "../../features/toast/toast";
import { formatError } from "../../utils/formatters";

export default function IndexPage() {
    const {push} = useRouter();
    
    const [error, setError] = useState<string | null>(null);
    const {start, stop, loading} = useLoader(false);
    
    const submit = (values) => {
        setError(null);
        start();
        apiAuth.login(values)
            .then(response => {
                push('/')
            })
            .catch(error => {
                setError(formatError(error))
            })
          .finally(stop)
    };

    return <Layout title={'Авторизация'}>
        <Container>
            <Grid container spacing={2} className={'flex-center'}>
                <Grid item xs={12} lg={4}>
                    <Paper  sx={{p: 2}}>
                        <h1>Авторизация</h1>
    
                        <Formik initialValues={{
                            login: "anton.cherginets@gmail.com",
                            password: "anton.cherginets@gmail.com",
                        }} onSubmit={submit}>{({values, handleSubmit}) => {
                            return <form onSubmit={handleSubmit}>
                                <FormikText label={'Эл. почта'} name={'login'} />
                                <FormikText label={'Пароль'} name={'password'} type={'password'} />
                                <Box className={'flex-center'} sx={{p: 1}}>
                                    <Button variant={'contained'} type={'submit'} disabled={loading} sx={{ml: 'auto'}}>Войти</Button>
                                </Box>
                                <Box className={'flex-line-between'} sx={{p: 1}}>
                                    <Link href={'/auth/reg'}>Регистрация</Link>
                                    <Link href={'/auth/forgot'}>Забыли пароль?</Link>
                                </Box>
                                {error && <Alert severity={'error'} sx={{mt: 1}}>
                                    {error}
                                </Alert>}
                            </form>
                        }}
                        </Formik>
                    </Paper>
                </Grid>
            </Grid>

        </Container>
    </Layout>
}
