import { Box, Container, Typography } from "@mui/material";
import { GuestGuard } from "components/auth/GuestGuard";
import Login from "components/auth/Login";
import Head from "next/head";
import { ReactElement } from "react";

const LoginPage = () => {
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Head>
        <title>Petohub | Login</title>
        <meta
          name="description"
          content="Login with email or password to petohub's official website"
        />
      </Head>
      <Login />
    </Box>
  );
};

LoginPage.getLayout = (page: ReactElement) => <GuestGuard>{page}</GuestGuard>;
export default LoginPage;
