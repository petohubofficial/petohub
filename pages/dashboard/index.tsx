import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Avatar, Box, Button, Card, CardContent, Skeleton, Typography } from "@mui/material";
import AuthGuard from "components/auth/AuthGuard";
import DashboardLayout from "components/layouts/DashboardLayout";
import PublicLayout from "components/layouts/PublicLayout";
import Link from "next/link";
import { ReactElement } from "react";
import { useGetClientProductsQuery } from "services/client.service";
import { Role } from "types/user";

const ClientDashboard = () => {
  const { data, isFetching } = useGetClientProductsQuery({ limit: 10, page: 1 });

  return (
    <Box sx={{ p: 1 }}>
      <Card sx={{ mt: 2, flex: 1 }}>
        <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h5">Products</Typography>
            <Avatar sx={{ bgcolor: "error.main" }}>
              <ShoppingBagIcon />
            </Avatar>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="end">
            <Box>
              <Typography variant="h6">Total Products</Typography>
              {isFetching ? (
                <Skeleton height={70} width={70} />
              ) : (
                <Typography variant="h2">{data?.data?.total}</Typography>
              )}
            </Box>
            <Link href="/dashboard/product" passHref>
              <Button color="primary" endIcon={<ArrowForwardIcon />}>
                View Products
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
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
