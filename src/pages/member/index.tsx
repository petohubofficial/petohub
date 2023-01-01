import { Box } from "@mui/material";
import { GuestGuard } from "components/auth/GuestGuard";
import MemberSignup from "components/auth/MemberSignup";
import Head from "next/head";
import { ReactElement } from "react";

const MemberSignupPage = () => {
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Head>
        <title>Petohub | Member</title>
        <meta name="description" content="Register to become a part of petohub's community" />
      </Head>
      <MemberSignup />
    </Box>
  );
};

MemberSignupPage.getLayout = (page: ReactElement) => <GuestGuard>{page}</GuestGuard>;
export default MemberSignupPage;
