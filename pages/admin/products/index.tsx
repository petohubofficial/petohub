import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import PublicLayout from "components/layouts/PublicLayout";
import { Scrollbar } from "components/Scrollbar";
import { ReactElement, useState } from "react";
import { useGetProductsQuery } from "services/admin.service";
import { GetProductsFilters } from "types/product";

const Products = () => {
  const [filters, setFilters] = useState<GetProductsFilters>({});
  const { data, isLoading, refetch } = useGetProductsQuery(filters);

  return (
    <Container maxWidth="lg">
      <Box>
        <Typography variant="h1">Products Dashboard</Typography>
        {isLoading ? (
          <Typography variant="h5">Loading...</Typography>
        ) : (
          <Scrollbar>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Pet Type</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.data?.results?.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>
                      <img width="50px" src={product.productImages[0]} alt={product.name} />
                    </TableCell>
                    <TableCell>{product.petType?.join(" ")}</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Scrollbar>
        )}
      </Box>
    </Container>
  );
};

Products.getLayout = (page: ReactElement) => <PublicLayout>{page}</PublicLayout>;
export default Products;
