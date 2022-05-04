import { Alert, Box, CircularProgress, Table, Typography } from "@mui/material";
import { AuthGuard } from "components/auth/AuthGuard";
import DashboardLayout from "components/layouts/DashboardLayout";
import PublicLayout from "components/layouts/PublicLayout";
import Link from "next/link";
import { ReactElement } from "react";
import { useGetClientProductsQuery } from "services/client.service";
import { Role } from "types/user";

const ClientProductDashboard = () => {
  const { data, isFetching } = useGetClientProductsQuery({ page: 1, limit: 10 });

  if (isFetching)
    return (
      <Box height="100%" display="flex" alignItems="center" justifyContent="center">
        <CircularProgress />
      </Box>
    );

  if (data?.data?.results?.length === 0)
    return (
      <Box
        sx={{ p: 1 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Typography color="textSecondary">No products found!</Typography>
        <Typography>
          You can start adding products by clicking{" "}
          <Link href="/dashboard/products/new" passHref>
            <Typography component="span" variant="link">
              here
            </Typography>
          </Link>
        </Typography>
      </Box>
    );

  return (
    <Box>
      <Table></Table>
    </Box>
  );
};

ClientProductDashboard.getLayout = (page: ReactElement) => (
  <AuthGuard role={Role.CLIENT}>
    <PublicLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </PublicLayout>
  </AuthGuard>
);
export default ClientProductDashboard;
