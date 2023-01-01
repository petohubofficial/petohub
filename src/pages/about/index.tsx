import { Box, Container, Typography } from "@mui/material";
import PublicLayout from "components/layouts/PublicLayout";
import Head from "next/head";
import { ReactElement } from "react";

const About = () => {
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
          Welcome to the best pet lover&apos;s community. Here you can find things for your pets and
          give them the best quality care that they deserve
        </Typography>
      </Box>
    </Container>
  );
};

About.getLayout = (page: ReactElement) => <PublicLayout>{page}</PublicLayout>;
export default About;
