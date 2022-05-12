import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Avatar, Box, Button, Card, CardContent, Container, Typography } from "@mui/material";
import AuthGuard from "components/auth/AuthGuard";
import PublicLayout from "components/layouts/PublicLayout";
import Link from "next/link";
import React from "react";
import { Role } from "types/user";

const AdminDashboard = () => {
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
                  <Typography variant="h2">-</Typography>
                </Box>
                <Link href="/admin/user" passHref>
                  <Button color="primary" endIcon={<ArrowForwardIcon />}>
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
                  <Typography variant="h2">-</Typography>
                </Box>
                <Link href="/admin/product" passHref>
                  <Button color="primary" endIcon={<ArrowForwardIcon />}>
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
