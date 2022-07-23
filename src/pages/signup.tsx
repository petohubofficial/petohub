import { Box } from "@mui/material";
import { GuestGuard } from "components/auth/GuestGuard";
import Signup from "components/auth/Signup";
import Head from "next/head";
import { ReactElement } from "react";

const SignupPage = () => {
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Head>
        <title>Petohub | Signup</title>
        <meta name="description" content="Register to become a part of petohub's community" />
      </Head>
      <Signup />
    </Box>
  );
};

SignupPage.getLayout = (page: ReactElement) => <GuestGuard>{page}</GuestGuard>;
export default SignupPage;
