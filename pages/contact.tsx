import { Box, Container, Typography } from "@mui/material";
import { Layout } from "components/Layout";
import Head from "next/head";
import { ReactElement } from "react";

const Shop = () => {
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
          You can contact us by calling at the number below or by emailing directly us at{" "}
          <Typography
            component="a"
            fontWeight="bold"
            color="primary.main"
            href="mailto:petohubofficial@gmail.com"
          >
            petohubofficial@gmail.com
          </Typography>
        </Typography>
      </Box>
    </Container>
  );
};

Shop.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export default Shop;
