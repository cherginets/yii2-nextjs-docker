import {Alert} from "@mui/lab";
import {Container} from "@mui/material";
import {GetServerSideProps} from "next";
import apiAuth from "../../api/apiAuth";
import Layout from "../../app/layout/Layout";
import Link, {MuiLink} from "../../features/next-mui-link/Link";

export const getServerSideProps: GetServerSideProps = async(context) => {
  let result = false;
  const {id, code} = context.query;
  try {
    console.log('context.query', context.query);
    console.log('id', id);
    console.log('code', code)
    result = (await apiAuth.activate(id as string, code as string)).data.result;
  } catch (e) {
    console.log('e', e.response.data);
  }
  return {
    props:{result},
  }
}

export default function ActivatePage({result}: { result: boolean }) {
  return <Layout title={'Активация аккаунта'}>
    <Container>
      {result && <>
        <h1>Активация аккаунта прошла успешно</h1>
        <Alert severity={'success'}>Теперь вы можете <Link href={'/auth/login'}>авторизоваться</Link></Alert>
      </>}
      {!result && <>
        <h1>Активация аккаунта завершилась неудачей</h1>
        <Alert severity={'error'}>Попробуйте <Link href={'/auth/login'}>авторизоваться</Link>, быть может вы уже активировали
          аккаунт</Alert>
      </>}
    </Container>
  </Layout>
}