import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
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
    <Box display="flex" width="100%" justifyContent="space-around" alignItems="center" {...other}>
      <Paper sx={{ backgroundColor: "neutral.100", px: 2, pt: 1 }}>
        <Image height="40" width="100" src={icon} />
      </Paper>
      <Typography fontWeight="600" fontSize={18}>
        {price === -1 ? "N/A" : `₹${price}`}
      </Typography>
    </Box>
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
        <Typography variant="h1">Shop</Typography>
        {isLoading ? (
          <Typography variant="h5">Loading...</Typography>
        ) : (
          <Grid container>
            {data?.data?.results?.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <Card sx={{ m: 1 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.productImages[0]}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      {product.name}
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
