import {Alert} from "@mui/lab";
import {Box, Button, Container, Grid, Paper} from "@mui/material";
import { Formik } from "formik";
import {useRouter} from "next/router";
import Layout from "../../app/layout/Layout";
import {useAppDispatch} from "../../app/store";
import {authActions} from "../../features/auth/authSlice";
import FormikText from "../../features/formik/FormikText";
import {useState} from "react";
import authAPI from "../../api/authAPI";
import useLoader from "../../features/mui-loader/useLoader";
import Link from "../../features/next-mui-link/Link";
import { formatError } from "../../utils/formatters";

export default function IndexPage() {
    const dispatch = useAppDispatch();
    const [initialValues] = useState({
        login: 'test@test.test',
        password: 'test@test.test',
    });
    
    const {push} = useRouter();
    
    const [error, setError] = useState<string | null>(null);
    const {start, stop, loading} = useLoader(false);
    
    const submit = (values: typeof initialValues) => {
        setError(null);
        start();
        dispatch(authActions.login(values.login, values.password))
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
                        <Formik
                          initialValues={initialValues} onSubmit={submit}>{({values, handleSubmit}) => {
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
