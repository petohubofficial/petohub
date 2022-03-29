import { Box } from "@mui/material";
import EmailVerification from "components/auth/EmailVerification";
import { GuestGuard } from "components/auth/GuestGuard";
import Head from "next/head";
import { ReactElement } from "react";

const VerifyPage = () => {
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Head>
        <title>Petohub | Verify Account</title>
      </Head>
      <EmailVerification />
    </Box>
  );
};

VerifyPage.getLayout = (page: ReactElement) => <GuestGuard>{page}</GuestGuard>;
export default VerifyPage;
