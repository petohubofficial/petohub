import AddBoxIcon from "@mui/icons-material/AddBox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Alert, Box, CircularProgress, IconButton, Typography } from "@mui/material";
import AuthGuard from "components/auth/AuthGuard";
import ProductForm from "components/dashboard/ProductForm";
import DashboardLayout from "components/layouts/DashboardLayout";
import PublicLayout from "components/layouts/PublicLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import toast from "react-hot-toast";
import { useEditClientProductMutation, useGetClientProductQuery } from "services/client.service";
import { Role } from "types/user";
import createFormData from "utils/createFormData";

const ClientEditProductPage = () => {
  const router = useRouter();
  const { data, isFetching } = useGetClientProductQuery(router.query.id as string);
  const [editProduct] = useEditClientProductMutation();

  return (
    <Box sx={{ p: 2 }}>
      <Box display="flex" alignItems="center" gap={1}>
        <Link href="/dashboard/product" passHref>
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Link>
        <AddBoxIcon />
        <Typography variant="h5">Edit Product</Typography>
      </Box>
      <Box sx={{ p: 1 }}>
        {isFetching ? (
          <Box display="flex" width="100%">
            <CircularProgress sx={{ m: "0 auto" }} />
          </Box>
        ) : (
          <>
            <Box sx={{ my: 2 }}>
              <Alert severity="warning" variant="outlined">
                You are editing{" "}
                <Typography component="span" fontSize="inherit" fontWeight={600}>
                  {data?.product?.name}
                </Typography>
                . After editing, the product must go through the approval stage once again.
              </Alert>
            </Box>
            <ProductForm
              product={data?.product}
              onSubmit={async (values, { resetForm, setSubmitting }) => {
                setSubmitting(true);
                const request = createFormData(values);
                try {
                  const response = await editProduct({
                    id: data?.product?._id?.toString() as string,
                    body: request,
                  }).unwrap();
                  if (response.success) toast.success("Product updated successfully");
                  resetForm();
                } catch (error: any) {
                  toast.error(error?.data?.error || "Something went wrong");
                } finally {
                  setSubmitting(false);
                }
              }}
            />
          </>
        )}
      </Box>
    </Box>
  );
};

ClientEditProductPage.getLayout = (page: React.ReactElement) => (
  <AuthGuard roles={[Role.CLIENT]}>
    <PublicLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </PublicLayout>
  </AuthGuard>
);
export default ClientEditProductPage;
