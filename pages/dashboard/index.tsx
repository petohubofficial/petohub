import { Box, Typography } from "@mui/material";
import AuthGuard from "components/auth/AuthGuard";
import DashboardLayout from "components/layouts/DashboardLayout";
import PublicLayout from "components/layouts/PublicLayout";
import { ReactElement } from "react";
import { Role } from "types/user";

const ClientDashboard = () => {
  return (
    <Box sx={{ p: 1 }}>
      <Typography>Dashboard will be available soon</Typography>
    </Box>
  );
};

ClientDashboard.getLayout = (page: ReactElement) => (
  <AuthGuard roles={[Role.CLIENT]}>
    <PublicLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </PublicLayout>
  </AuthGuard>
);
export default ClientDashboard;
