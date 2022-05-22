import {Alert, LoadingButton} from "@mui/lab";
import {Button, Container, Grid, Paper} from "@mui/material";
import {useState} from "react";
import authAPI from "../../api/authAPI";
import Layout from "../../app/layout/Layout";
import {NEXTJS_ENV_DEV} from "../../constants/enviroment";
import Formik from "../../features/formik/Formik";
import FormikText from "../../features/formik/FormikText";
import useLoader from "../../features/mui-loader/useLoader";
import Link from "../../features/next-mui-link/Link";
import {toastPromise} from "../../features/toast/toast";
import Yup from "../../features/yup";

const RegistrationSchema = Yup.object().shape({
  email:Yup.string().email().required(),
  password: Yup.string().min(6).max(30).required(),
});

export default function PageRegistration() {
  const [initialValues] = useState({
    email: 'test@test.test',
    password: 'test@test.test',
  });
  
  const [success, setSuccess] = useState<JSX.Element>(null);
  const [error, setError] = useState<JSX.Element | string>(null);
  
  const {start, stop, loading} = useLoader(false);
  const submit = (values) => {
    start();
    authAPI.registration(values)
      .then((response) => setSuccess(<>Вы зарегистрированы! Осталось подтвердить письмо на почте.
        {NEXTJS_ENV_DEV &&
        <Link href={`/auth/activate/?id=${response.data.user_id}&code=${response.data.token}`}>dev ссылка на
            активацию</Link>}
      </>))
      .catch(() => setError('Ошибка какая-то'))
      .finally(stop)
  };
  
  return <Layout title={'Регистрация'}>
    <Container>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} lg={4}>
          <Paper sx={{p:2}}>
            <h1>Регистрация</h1>
            
            <Formik
              initialValues={initialValues}
              validationSchema={RegistrationSchema}
              onSubmit={submit}
            >{({values, handleSubmit, isValid, errors, }) => {
              return <form onSubmit={handleSubmit}>
                <FormikText label={'Эл. почта'} name={'email'}/>
                <FormikText label={'Пароль'} name={'password'} type={'password'}/>
                <LoadingButton
                  variant={'contained'}
                  type={'submit'}
                  sx={{mt:2, mb: 2}}
                  loading={loading}
                >Зарегистрироваться</LoadingButton>
                {success && <Alert severity={'success'}>{success}</Alert>}
                {error && <Alert severity={'error'}>{error}</Alert>}
              </form>
            }}
            </Formik>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </Layout>
}
