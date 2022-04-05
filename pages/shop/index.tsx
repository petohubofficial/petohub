import { FavoriteBorder, ShoppingCart } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { Layout } from "components/Layout";
import Head from "next/head";
import Image from "next/image";
import { ReactElement, useState } from "react";
import { useGetProductsQuery } from "services/api.service";
import { GetProductsFilters } from "types/product";

interface AffiliateLinksProps {
  icon: string;
  price: number;
  [key: string]: any;
}

const AffiliateLinks = ({ icon, price, ...other }: AffiliateLinksProps) => {
  return (
    <Paper sx={{ px: 2, pt: 1 }} elevation={10}>
      <Box display="flex" width="100%" justifyContent="space-around" alignItems="center" {...other}>
        <Image height="40" width="100" src={icon} />
        <Typography fontWeight="600" fontSize={20} sx={{ mb: 1 }}>
          {price === -1 ? "N/A" : `₹${price}`}
        </Typography>
      </Box>
    </Paper>
  );
};

const Shop = () => {
  const [filters, setFilters] = useState<GetProductsFilters>({});
  const { data, isLoading } = useGetProductsQuery(filters);
  return (
    <Container maxWidth="lg">
      <Box>
        <Head>
          <title>Petohub</title>
          <meta name="description" content="Official website of Petohub - Pet lover's community" />
        </Head>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", my: 2 }}>
          <ShoppingCart color="primary" fontSize="large" />
          <Typography color="primary.main" variant="h4">
            Browse Shop
          </Typography>
        </Box>
        {isLoading ? (
          <Box width="100%" display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          <Grid container>
            {data?.data?.results?.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ m: 1 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.productImages[0]}
                    alt={product.name}
                  />
                  <CardContent>
                    <Box display="flex" justifyContent="space-between">
                      <Typography variant="body1" fontWeight={600}>
                        {product.name}
                      </Typography>
                      <Tooltip title="Add to favorites" arrow>
                        <FavoriteBorder color="primary" sx={{ cursor: "pointer" }} />
                      </Tooltip>
                    </Box>
                    <Typography>
                      Brand:{" "}
                      <Typography component="span" color="primary.main" fontWeight={600}>
                        {product.brand}
                      </Typography>
                    </Typography>
                    <Typography>
                      Category:{" "}
                      <Typography component="span" color="primary.main" fontWeight={600}>
                        {product.category}
                      </Typography>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Box width="100%" display="flex" flexDirection="column" gap={2}>
                      <AffiliateLinks
                        icon="/assets/icons/amazon.svg"
                        price={
                          product.affiliateLinks.find((link) => link.productProvider === "Amazon")
                            ?.productPrice || -1
                        }
                      />
                      <AffiliateLinks
                        icon="/assets/icons/flipkart.svg"
                        price={
                          product.affiliateLinks.find((link) => link.productProvider === "Flipkart")
                            ?.productPrice || -1
                        }
                      />
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

Shop.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export default Shop;
