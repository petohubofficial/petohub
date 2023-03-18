import { FavoriteBorder } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useProduct } from "hooks/product";
import { FC } from "react";
import { useGetProductsQuery } from "services/public.service";
import { AffiliateProvider } from "types/product";
import AffiliateLinks from "./AffiliateLinks";

const Products: FC = () => {
  const theme = useTheme();
  const { appliedFilters } = useProduct();
  const { data: productsResponse, isLoading } = useGetProductsQuery(appliedFilters);

  return (
    <Box>
      {isLoading ? (
        <Box width="100%" display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        <Grid container>
          {productsResponse?.data?.results?.map((product) => (
            <Grid item key={product._id.toString()} xs={12} sm={6} md={4} lg={3}>
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
                        product.affiliateLinks.find(
                          (link) => link.provider === AffiliateProvider.AMAZON
                        )?.price || -1
                      }
                      sx={{
                        ...(theme.palette.mode === "dark" && {
                          backgroundColor: "neutral.100",
                          color: "neutral.900",
                        }),
                      }}
                    />
                    <AffiliateLinks
                      icon="/assets/icons/flipkart.svg"
                      price={
                        product.affiliateLinks.find(
                          (link) => link.provider === AffiliateProvider.FLIPKART
                        )?.price || -1
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
  );
};

export default Products;
