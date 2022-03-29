import { Box } from "@mui/material";
import { GuestGuard } from "components/auth/GuestGuard";
import ResetPassword from "components/auth/ResetPassword";
import Head from "next/head";
import { ReactElement } from "react";

const ResetPasswordPage = () => {
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Head>
        <title>Petohub | Reset Password</title>
      </Head>
      <ResetPassword />
    </Box>
  );
};

ResetPasswordPage.getLayout = (page: ReactElement) => <GuestGuard>{page}</GuestGuard>;
export default ResetPasswordPage;
