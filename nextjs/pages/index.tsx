import {Button, Container} from "@mui/material";
import axios from "axios";
import {useEffect, useState} from "react";
import Layout from "../app/layout/Layout";
import Counter from "../features/counter/Counter";

export async function getStaticProps(context) {
    return {
        props: {
            NODE_ENV: process.env.NODE_ENV,
            BACKEND_HOST_NAME : process.env.BACKEND_HOST_NAME || '',
            SOME_NEXTJS_ENVIROMENT_VARIABLE: process.env.SOME_NEXTJS_ENVIROMENT_VARIABLE,
        }, // will be passed to the page component as props
    }
}

export default function IndexPage(props: any) {
    return <Layout title={'Главная'}>
        <Container>
            <h1>Главная</h1>
            <EnviromentTest {...props} />
            <h2>Redux</h2>
            <Counter />
        </Container>
    </Layout>
}

const EnviromentTest = ({NODE_ENV, SOME_NEXTJS_ENVIROMENT_VARIABLE, BACKEND_HOST_NAME}) => {
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    
    const fetchHello = () => {
        setError('');
        setSuccess('');
        axios.post(`${window.location.protocol}//api.shop.local/test/?param=5`, ['mybody'], {
              // withCredentials: true,
              headers: {
                  // 'Origin': window.location.href,
                  'Content-Type': 'application/json',
              },
          })
          .then(response => setSuccess(response.data))
          .catch(error => {
              setError(error.toString())
              console.log('error', error);
          })
    };
    
    useEffect(() => {
        fetchHello()
    }, [])
    
    return <>
        <h2>Тест окружения <Button onClick={e => {
            fetchHello();
        }}>
            Проверить
        </Button></h2>
        
        <code style={{color: 'green'}}><pre>NODE_ENV={NODE_ENV}</pre></code>
        <code style={{color: 'green'}}><pre>SOME_NEXTJS_ENVIROMENT_VARIABLE={SOME_NEXTJS_ENVIROMENT_VARIABLE}</pre></code>
        <code style={{color: 'green'}}><pre>BACKEND_HOST_NAME={BACKEND_HOST_NAME}</pre></code>
    
        {success && <code style={{color: 'green'}}><pre>{JSON.stringify(success, null, '  ')}</pre></code>}
        {error && <code style={{color: 'red'}}>{error}</code>}
        {error && <code style={{color: 'red'}}>{error}</code>}
        {!success && !error && <code>Loading...</code>}
    </>
}
