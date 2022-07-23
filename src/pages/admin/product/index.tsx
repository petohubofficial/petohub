import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import {
  Avatar,
  Box,
  Button,
  Container,
  Dialog,
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
import CopyField from "components/CopyField";
import PublicLayout from "components/layouts/PublicLayout";
import Scrollbar from "components/Scrollbar";
import { useRouter } from "next/router";
import React from "react";
import toast from "react-hot-toast";
import { useApproveProductMutation, useGetAdminProductsQuery } from "services/admin.service";
import { GetProductsFilters, Product } from "types/product";
import { Role } from "types/user";
import convertDate from "utils/convertDate";
import placeholder, { Placeholder } from "utils/placeholder";
import truncate from "utils/truncate";

const Products = () => {
  const [filters, setFilters] = React.useState<GetProductsFilters>({
    limit: 10,
    page: 1,
  });
  const { data, isFetching } = useGetAdminProductsQuery(filters);

  const router = useRouter();
  React.useEffect(() => {
    router.replace({ query: { ...filters } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 3 }}>
        <Typography variant="h3">
          <ShoppingBagIcon fontSize="large" /> Products Dashboard
        </Typography>
        <Scrollbar>
          <Table sx={{ my: 3 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ minWidth: 70 }}>S. No</TableCell>
                <TableCell>Product ID</TableCell>
                <TableCell>Image</TableCell>
                <TableCell sx={{ minWidth: 200 }}>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Approved</TableCell>
                <TableCell sx={{ minWidth: 160 }}>Approved At</TableCell>
                <TableCell sx={{ minWidth: 160 }}>Created At</TableCell>
                <TableCell sx={{ minWidth: 160 }}>Updated At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isFetching
                ? Array(10)
                    .fill(null)
                    .map((_, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Skeleton variant="text" />
                        </TableCell>
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
                        <TableCell>
                          <Skeleton variant="text" />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="text" />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="text" />
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
  const [approveOpen, setApproveOpen] = React.useState<boolean>(false);
  const [approveProduct, { isLoading }] = useApproveProductMutation();

  return (
    <TableRow>
      <TableCell>{index}</TableCell>
      <TableCell>
        <CopyField text={product._id.toString()} />
      </TableCell>
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
        <Tooltip title={product.description}>
          <Typography>{truncate(product.description)}</Typography>
        </Tooltip>
      </TableCell>
      <TableCell>
        <Typography>₹{product.price}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{product.category}</Typography>
      </TableCell>
      <TableCell>
        {product.isApproved ? (
          <Tooltip title="Approved">
            <CheckCircleIcon color="success" />
          </Tooltip>
        ) : (
          <>
            <Dialog fullWidth open={approveOpen} onClose={() => setApproveOpen(false)}>
              <Box sx={{ p: 3 }}>
                <Typography textAlign="center">
                  Are you sure you want to approve{" "}
                  <Typography component="span" fontWeight={600} color="primary.main">
                    {product.name}
                  </Typography>
                  ?
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "flex-end", pt: 2 }}>
                  <Button
                    size="small"
                    startIcon={<CancelIcon />}
                    color="error"
                    onClick={() => setApproveOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<CheckCircleIcon />}
                    color="success"
                    disabled={isLoading}
                    onClick={async () => {
                      try {
                        const response = await approveProduct(product._id.toString()).unwrap();
                        if (response.success) toast.success("Product approved successfully");
                      } catch (error: any) {
                        toast.error(error?.data?.error || "Something went wrong");
                      } finally {
                        setApproveOpen(false);
                      }
                    }}
                  >
                    {isLoading ? "Approving" : "Approve"}
                  </Button>
                </Box>
              </Box>
            </Dialog>
            <Tooltip title="Click to approve">
              <CancelIcon
                color="error"
                sx={{ cursor: "pointer" }}
                onClick={() => setApproveOpen(true)}
              />
            </Tooltip>
          </>
        )}
      </TableCell>
      <TableCell>
        <Typography>{convertDate(product.approvedAt)}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{convertDate(product.createdAt)}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{convertDate(product.updatedAt)}</Typography>
      </TableCell>
    </TableRow>
  );
};

Products.getLayout = (page: React.ReactElement) => (
  <AuthGuard roles={[Role.ADMIN, Role.PRODUCT_ADMIN]}>
    <PublicLayout>{page}</PublicLayout>
  </AuthGuard>
);
export default Products;
