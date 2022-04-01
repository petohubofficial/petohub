import { Box, Container, Typography } from "@mui/material";
import { Layout } from "components/Layout";
import Head from "next/head";
import { ReactElement } from "react";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Head>
          <title>Petohub</title>
          <meta name="description" content="Official website of Petohub - Pet lover's community" />
        </Head>
        <Typography variant="h1" color="text.primary">
          Welcome to{" "}
          <Typography variant="h1" display="inline" color="primary.main">
            Petohub
          </Typography>
        </Typography>
        <Typography variant="subtitle1">
          The website is under construction and will be ready in April 2022.
        </Typography>
      </Box>
    </Container>
  );
};

HomePage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export default HomePage;
