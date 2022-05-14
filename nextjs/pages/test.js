import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import axios from "axios";

export async function getStaticProps(context) {
  return {
    props: {
      NODE_ENV: process.env.NODE_ENV,
      BACKEND_HOST_NAME : process.env.BACKEND_HOST_NAME || '',
      SOME_NEXTJS_ENVIROMENT_VARIABLE: process.env.SOME_NEXTJS_ENVIROMENT_VARIABLE,
    }, // will be passed to the page component as props
  }
}

export default function Home({NODE_ENV, SOME_NEXTJS_ENVIROMENT_VARIABLE, BACKEND_HOST_NAME}) {
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


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a> on Docker!
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <code className={styles.success}><pre>NODE_ENV={NODE_ENV}</pre></code>
        <code className={styles.success}><pre>SOME_NEXTJS_ENVIROMENT_VARIABLE={SOME_NEXTJS_ENVIROMENT_VARIABLE}</pre></code>
        <code className={styles.success}><pre>BACKEND_HOST_NAME={BACKEND_HOST_NAME}</pre></code>

        {success && <code className={styles.success}><pre>{JSON.stringify(success, null, '  ')}</pre></code>}
        {error && <code className={styles.error}>{error}</code>}
        {error && <code className={styles.error}>{error}</code>}
        {!success && !error && <code>Loading...</code>}

        <div className={styles.grid}>
          <a href="#" className={styles.card} onClick={e => {
            e.preventDefault();
            fetchHello();
          }}>
            <h3>Send&nbsp;query&nbsp;to&nbsp;API</h3>
            <p>and get 'hello:world'</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
