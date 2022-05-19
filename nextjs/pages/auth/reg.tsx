import {Button, Container, Grid, Paper} from "@mui/material";
import apiAuth from "../../api/apiAuth";
import Layout from "../../app/layout/Layout";
import Formik from "../../features/formik/Formik";
import FormikText from "../../features/formik/FormikText";
import {toastPromise} from "../../features/toast/toast";
import Yup from "../../features/yup";

const RegistrationSchema = Yup.object().shape({
  email:Yup.string().email().required(),
  password: Yup.string().min(6).max(30).required(),
});

export default function PageRegistration() {
  const submit = (values) => {
    toastPromise(apiAuth.registration(values), 'Вы зарегистрированы! Осталось подтвердить письмо на почте.')
    console.log('values', values);
  }
  
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
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={RegistrationSchema}
              onSubmit={submit}
            >{({values, handleSubmit, isValid, errors, }) => {
              return <form onSubmit={handleSubmit}>
                <FormikText label={'Эл. почта'} name={'email'}/>
                <FormikText label={'Пароль'} name={'password'} type={'password'}/>
                <Button
                  variant={'contained'}
                  type={'submit'}
                  sx={{mt:2}}
                >Зарегистрироваться</Button>
              </form>
            }}
            </Formik>
          </Paper>
        </Grid>
      </Grid>
      
      // email
      // username
      // password
    </Container>
  </Layout>
}