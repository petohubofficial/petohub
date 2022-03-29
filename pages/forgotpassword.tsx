import { Box } from "@mui/material";
import ForgotPassword from "components/auth/ForgotPassword";
import { GuestGuard } from "components/auth/GuestGuard";
import Head from "next/head";
import { ReactElement } from "react";

const ForgotPasswordPage = () => {
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Head>
        <title>Petohub | Forgot password</title>
      </Head>
      <ForgotPassword />
    </Box>
  );
};

ForgotPasswordPage.getLayout = (page: ReactElement) => <GuestGuard>{page}</GuestGuard>;
export default ForgotPasswordPage;
