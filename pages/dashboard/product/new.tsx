import AddBoxIcon from "@mui/icons-material/AddBox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, IconButton, Typography } from "@mui/material";
import AuthGuard from "components/auth/AuthGuard";
import ProductForm from "components/dashboard/ProductForm";
import DashboardLayout from "components/layouts/DashboardLayout";
import PublicLayout from "components/layouts/PublicLayout";
import Link from "next/link";
import { ReactElement } from "react";
import toast from "react-hot-toast";
import { useAddClientProductMutation } from "services/client.service";
import { Role } from "types/user";
import createFormData from "utils/createFormData";

const ClientNewProductPage = () => {
  const [addProduct] = useAddClientProductMutation();

  return (
    <Box sx={{ p: 2 }}>
      <Box display="flex" alignItems="center" gap={1}>
        <Link href="/dashboard/product" passHref>
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Link>
        <AddBoxIcon />
        <Typography variant="h5">Add Product</Typography>
      </Box>
      <Box sx={{ p: 1 }}>
        <ProductForm
          onSubmit={async (values, { resetForm, setSubmitting }) => {
            setSubmitting(true);
            const request = createFormData(values);
            try {
              const response = await addProduct(request).unwrap();
              if (response.success) toast.success("Product added successfully");
              resetForm();
            } catch (error: any) {
              toast.error(error?.data?.error || "Something went wrong");
            } finally {
              setSubmitting(false);
            }
          }}
        />
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
