import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import {
  Avatar,
  Box,
  Button,
  Container,
  Dialog,
  IconButton,
  Link as MuiLink,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import AuthGuard from "components/auth/AuthGuard";
import DashboardLayout from "components/layouts/DashboardLayout";
import PublicLayout from "components/layouts/PublicLayout";
import Scrollbar from "components/Scrollbar";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import toast from "react-hot-toast";
import { useDeleteClientProductMutation, useGetClientProductsQuery } from "services/client.service";
import { GetProductsFilters, Product } from "types/product";
import { Role } from "types/user";
import placeholder, { Placeholder } from "utils/placeholder";

const ClientProductDashboard = () => {
  const [filters, setFilters] = React.useState<GetProductsFilters>({
    limit: 10,
    page: 1,
  });
  const { data, isFetching } = useGetClientProductsQuery(filters);

  const router = useRouter();
  React.useEffect(() => {
    router.replace({ query: { ...filters } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  if (data?.data?.results?.length === 0)
    return (
      <Box
        sx={{ p: 2 }}
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
    <Container>
      <Box sx={{ my: 3 }}>
        <Typography variant="h3">
          <ShoppingBagIcon fontSize="large" /> Products
        </Typography>
        <Scrollbar>
          <Table sx={{ my: 3 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ minWidth: 70 }}>S. No</TableCell>
                <TableCell>Image</TableCell>
                <TableCell sx={{ minWidth: 140 }}>Product Name</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>Price</TableCell>
                <TableCell sx={{ minWidth: 140 }}>Affiliate Links</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isFetching
                ? Array(filters.limit)
                    .fill(null)
                    .map((_, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Skeleton variant="text" />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="circular" width={25} height={25} />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="text" />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="text" />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="text" />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="text" />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="circular" width={25} height={25} />
                        </TableCell>
                      </TableRow>
                    ))
                : data?.data?.results?.map((product, index) => (
                    <ProductRow
                      key={product._id.toString()}
                      product={product}
                      index={(filters.page - 1) * filters.limit + index + 1}
                    />
                  ))}
            </TableBody>
          </Table>
        </Scrollbar>
        {data?.data && data.data.total > 10 && (
          <TablePagination
            component="div"
            count={data?.data?.total}
            page={filters.page - 1}
            rowsPerPage={filters.limit}
            rowsPerPageOptions={[10, 20, 30]}
            onPageChange={(event: React.MouseEvent<HTMLButtonElement> | null, page: number): void =>
              setFilters({ ...filters, page: page + 1 })
            }
            onRowsPerPageChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
              setFilters({ ...filters, limit: parseInt(event.target.value, 10) });
            }}
          />
        )}
      </Box>
    </Container>
  );
};

const ProductRow = (props: { product: Product; index: number }) => {
  const { product, index } = props;
  const router = useRouter();
  const [deleteOpen, setDeleteOpen] = React.useState<boolean>(false);
  const [deleteProduct, { isLoading }] = useDeleteClientProductMutation();

  return (
    <TableRow hover>
      <TableCell>{index}</TableCell>
      <TableCell>
        <Avatar
          src={product.productImages[0] || placeholder(Placeholder.PRODUCT)}
          alt={`${product.name} product`}
        />
      </TableCell>
      <TableCell>
        <Typography>{product.name}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{product.countInStock}</Typography>
      </TableCell>
      <TableCell>
        <Typography>₹{product.price}</Typography>
      </TableCell>
      <TableCell>
        {product.affiliateLinks.length > 0 ? (
          product.affiliateLinks.map((link) => (
            <MuiLink
              key={link.provider}
              underline="always"
              href={link.link}
              target="_blank"
              rel="noreferrer"
              color="text.primary"
              sx={{ display: "block" }}
            >
              {link.provider} ₹{link.price}
            </MuiLink>
          ))
        ) : (
          <Typography>N/A</Typography>
        )}
      </TableCell>
      <TableCell>
        <Typography>
          {product.isApproved ? (
            <Tooltip title="Approved">
              <CheckCircleIcon color="primary" />
            </Tooltip>
          ) : (
            <Tooltip title="Waiting for approval">
              <AccessTimeFilledIcon color="warning" />
            </Tooltip>
          )}
        </Typography>
      </TableCell>
      <TableCell>
        <Box display="flex">
          <Link href={`${router.pathname}/${product._id.toString()}`} passHref>
            <Tooltip title="Edit">
              <IconButton>
                <EditIcon />
              </IconButton>
            </Tooltip>
          </Link>
          <Dialog fullWidth open={deleteOpen} onClose={() => setDeleteOpen(false)}>
            <Box sx={{ p: 3 }}>
              <Typography textAlign="center">
                Are you sure you want to delete{" "}
                <Typography component="span" fontWeight={600} color="primary.main">
                  {product.name}
                </Typography>
                ?
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-end", pt: 2 }}>
                <Button
                  size="small"
                  startIcon={<CancelIcon />}
                  color="success"
                  onClick={() => setDeleteOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<CheckCircleIcon />}
                  color="error"
                  disabled={isLoading}
                  onClick={async () => {
                    try {
                      const response = await deleteProduct(product._id.toString()).unwrap();
                      if (response.success) toast.success("Product deleted successfully");
                    } catch (error: any) {
                      toast.error(error?.data?.error || "Something went wrong");
                    } finally {
                      setDeleteOpen(false);
                    }
                  }}
                >
                  {isLoading ? "Deleting..." : "Delete"}
                </Button>
              </Box>
            </Box>
          </Dialog>
          <Tooltip title="Delete">
            <IconButton onClick={() => setDeleteOpen(true)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </TableCell>
    </TableRow>
  );
};

ClientProductDashboard.getLayout = (page: React.ReactElement) => (
  <AuthGuard roles={[Role.CLIENT]}>
    <PublicLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </PublicLayout>
  </AuthGuard>
);
export default ClientProductDashboard;
