import { Box, Container, Typography } from "@mui/material";
import PublicLayout from "components/layouts/PublicLayout";
import Head from "next/head";
import { ReactElement } from "react";

const Contact = () => {
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

Contact.getLayout = (page: ReactElement) => <PublicLayout>{page}</PublicLayout>;
export default Contact;
