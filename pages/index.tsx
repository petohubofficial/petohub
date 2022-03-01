import Head from "next/head";
import classes from "../styles/HomePage.module.css";

function HomePage() {
  return (
    <div className={classes.main}>
      <Head>
        <title>Petohub</title>
        <meta name="description" content="Official website of Petohub - Pet lover's community" />
      </Head>
      <h1>
        Welcome to <span className={classes.text}>Petohub</span>
      </h1>
      <p>The website is under construction and will be ready in March 2022.</p>
    </div>
  );
}

export default HomePage;
