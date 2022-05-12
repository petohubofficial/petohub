import { AddBox } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import AuthGuard from "components/auth/AuthGuard";
import AddProduct from "components/dashboard/AddProduct";
import DashboardLayout from "components/layouts/DashboardLayout";
import PublicLayout from "components/layouts/PublicLayout";
import { ReactElement } from "react";
import { Role } from "types/user";

const ClientNewProductPage = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Box display="flex" alignItems="center" gap={1}>
        <AddBox />
        <Typography variant="h5">Add Product</Typography>
      </Box>
      <Box sx={{ p: 1 }}>
        <AddProduct />
      </Box>
    </Box>
  );
};

ClientNewProductPage.getLayout = (page: ReactElement) => (
  <AuthGuard roles={[Role.CLIENT]}>
    <PublicLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </PublicLayout>
  </AuthGuard>
);
export default ClientNewProductPage;
