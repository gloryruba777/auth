import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { signIn } from "next-auth/react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [dataResponse, setdataResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = `http://localhost:3000/api/getdata`;
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      // console.log(res.users);
      setdataResponse(res.users);
    }
    getPageData();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button
          onClick={() => {
            signIn();
          }}
        >
          Login
        </button>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
