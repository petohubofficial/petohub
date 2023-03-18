import { Pages } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Skeleton,
  Typography,
} from "@mui/material";
import AuthGuard from "components/auth/AuthGuard";
import PublicLayout from "components/layouts/PublicLayout";
import Link from "next/link";
import React from "react";
import { useGetAdminProductsQuery, useGetAdminUsersQuery } from "services/admin.service";
import { Role } from "types/user";

const AdminDashboard = () => {
  const { data: productsData, isFetching: productsIsFetching } = useGetAdminProductsQuery({
    limit: 10,
    page: 1,
  });
  const { data: usersData, isFetching: usersIsFetching } = useGetAdminUsersQuery({
    limit: 10,
    page: 1,
  });

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 3 }}>
        <Typography variant="h4">Admin Dashboard</Typography>
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={2} sx={{ my: 2 }}>
          <Card sx={{ mt: 2, flex: 1 }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h5">Users</Typography>
                <Avatar sx={{ bgcolor: "success.main" }}>
                  <PeopleIcon />
                </Avatar>
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="end">
                <Box>
                  <Typography variant="h6">Total Users</Typography>
                  {usersIsFetching ? (
                    <Skeleton />
                  ) : (
                    <Typography variant="h2">{usersData?.data?.total}</Typography>
                  )}
                </Box>
                <Link href="/admin/user" passHref>
                  <Button color="primary" component="a" endIcon={<ArrowForwardIcon />}>
                    View Users
                  </Button>
                </Link>
              </Box>
            </CardContent>
          </Card>
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
                  {productsIsFetching ? (
                    <Skeleton />
                  ) : (
                    <Typography variant="h2">{productsData?.data?.total}</Typography>
                  )}
                </Box>
                <Link href="/admin/product" passHref>
                  <Button color="primary" component="a" endIcon={<ArrowForwardIcon />}>
                    View Products
                  </Button>
                </Link>
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ mt: 2, flex: 1 }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h5">Directories</Typography>
                <Avatar sx={{ bgcolor: "info.main" }}>
                  <Pages />
                </Avatar>
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="end">
                <Box>
                  <Typography variant="h6">Total Directories</Typography>
                  {productsIsFetching ? (
                    <Skeleton />
                  ) : (
                    <Typography variant="h2">{productsData?.data?.total}</Typography>
                  )}
                </Box>
                <Link href="/admin/product" passHref>
                  <Button color="primary" component="a" endIcon={<ArrowForwardIcon />}>
                    View Products
                  </Button>
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

AdminDashboard.getLayout = (page: React.ReactElement) => (
  <AuthGuard roles={[Role.ADMIN, Role.PRODUCT_ADMIN]}>
    <PublicLayout>{page}</PublicLayout>
  </AuthGuard>
);
export default AdminDashboard;
