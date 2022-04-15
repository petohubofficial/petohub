import { Box } from "@mui/material";
import { AuthGuard } from "components/auth/AuthGuard";
import { Layout } from "components/Layout";
import Head from "next/head";
import { ReactElement } from "react";
import { Role } from "types/user";

const ClientDashboard = () => {
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Head>
        <title>Petohub | Member&apos;s Area</title>
      </Head>
      <h1>Client secret area</h1>
    </Box>
  );
};

ClientDashboard.getLayout = (page: ReactElement) => (
  <AuthGuard role={Role.CLIENT}>
    <Layout>{page}</Layout>
  </AuthGuard>
);
export default ClientDashboard;
