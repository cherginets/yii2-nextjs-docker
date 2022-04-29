import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";

export default function Home() {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const fetchHello = () => {
    setError('');
    setSuccess('');
    fetch('http://localhost/test/', {
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(r => r.json())
      .then(response => setSuccess(response))
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

        {success && <code className={styles.success}>{JSON.stringify(success)}</code>}
        {error && <code className={styles.error}>{error}</code>}
        {error && <code className={styles.error}>{error}</code>}
        {!success && !error && <code>Loading</code>}

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
