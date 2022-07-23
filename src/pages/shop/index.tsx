import {
  CategoryOutlined,
  CurrencyRupeeOutlined,
  FavoriteBorder,
  FilterAltOffOutlined,
  FilterAltOutlined,
  PetsOutlined,
  ShoppingCartOutlined,
  SortOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Slider,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PublicLayout from "components/layouts/PublicLayout";
import Head from "next/head";
import Image from "next/image";
import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import {
  useGetCategoriesQuery,
  useGetPetsQuery,
  useGetProductsQuery,
} from "services/public.service";
import { AffiliateProvider, GetProductsFilters } from "types/product";

interface AffiliateLinksProps {
  icon: string;
  price: number;
  [key: string]: any;
}

const AffiliateLinks = ({ icon, price, ...other }: AffiliateLinksProps) => {
  return (
    <Paper elevation={10} {...other}>
      <Box
        sx={{ px: 2, pt: 1 }}
        display="flex"
        width="100%"
        justifyContent="space-around"
        alignItems="center"
      >
        <Image height="40" width="100" src={icon} alt="affiliate icon" />
        <Typography fontWeight="600" fontSize={20} sx={{ mb: 1 }}>
          {price === -1 ? "N/A" : `₹${price}`}
        </Typography>
      </Box>
    </Paper>
  );
};

const initialFilters: GetProductsFilters = {
  limit: 10,
  page: 1,
  category: "",
  sort: "",
  pet: "",
  min: 0,
  max: 50000,
};

const Shop = () => {
  const [filters, setFilters] = useState<GetProductsFilters>(initialFilters);
  const [appliedFilters, setAppliedFilters] = useState<GetProductsFilters>(initialFilters);
  const [isFilterModified, setIsFilterModified] = useState<boolean>(false);
  const [filtersOpen, setFiltersOpen] = useState<boolean>(false);

  const { data: productsResponse, isLoading } = useGetProductsQuery(appliedFilters);
  const { data: categoriesResponse } = useGetCategoriesQuery();
  const { data: petsResponse } = useGetPetsQuery();

  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));

  const handlePriceRangeChange = (event: Event, newValue: number | number[]) => {
    const nums = newValue as number[];
    setFilters({ ...filters, min: nums[0], max: nums[1] });
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const category = (event.target as HTMLInputElement).value;
    setFilters({ ...filters, category });
  };

  const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
    const sort = (event.target as HTMLInputElement).value;
    setFilters({ ...filters, sort });
  };

  const handlePetChange = (event: ChangeEvent<HTMLInputElement>) => {
    const pet = (event.target as HTMLInputElement).value;
    setFilters({ ...filters, pet });
  };

  const toggleFilters = () => {
    setFiltersOpen(!filtersOpen);
  };

  const handleResetFilter = () => {
    setFilters(initialFilters);
    setAppliedFilters(initialFilters);
    setIsFilterModified(false);
  };

  const handleApplyFilter = () => {
    setAppliedFilters(filters);
    setIsFilterModified(true);
  };

  useEffect(() => {
    if (JSON.stringify(filters) !== JSON.stringify(initialFilters)) {
      setIsFilterModified(true);
    } else {
      setIsFilterModified(false);
    }
  }, [filters]);

  useEffect(() => {
    if (smUp && !filtersOpen) toggleFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [smUp]);

  const sortOptions = [
    { label: "Newest", value: "newest" },
    { label: "Oldest", value: "oldest" },
    { label: "Best Rated", value: "rating" },
    { label: "Least Rated", value: "-rating" },
    { label: "Price (High to Low)", value: "price" },
    { label: "Price (Low to High)", value: "-price" },
  ];

  const Filters = () => {
    return (
      <Box display="flex" flexDirection="column" sx={{ mr: 3 }}>
        <FormControl sx={{ py: 1 }}>
          <FormLabel id="pet-select-radio-group-label" sx={{ pb: 1 }}>
            <PetsOutlined />
            <Typography fontWeight="bold">Filter by Pets</Typography>
          </FormLabel>
          <RadioGroup
            aria-labelledby="pet-select-radio-group-label"
            name="pet"
            value={filters.pet}
            onChange={handlePetChange}
          >
            {petsResponse?.pets?.map((pet) => (
              <FormControlLabel
                key={pet._id.toString()}
                value={pet.name}
                control={<Radio />}
                label={pet.name}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ py: 1 }}>
          <FormLabel id="price-range-radio-group-label" sx={{ pb: 1 }}>
            <CurrencyRupeeOutlined />
            <Typography fontWeight="bold">Price Range</Typography>
          </FormLabel>
          <Slider
            getAriaLabel={() => "Price Range"}
            min={0}
            max={50000}
            step={500}
            value={[filters.min || 0, filters.max || 50000]}
            onChange={handlePriceRangeChange}
            valueLabelDisplay="auto"
            getAriaValueText={(value: number) => `₹${value}`}
          />
        </FormControl>
        <FormControl sx={{ py: 1 }}>
          <FormLabel id="category-select-radio-group-label" sx={{ pb: 1 }}>
            <CategoryOutlined />
            <Typography fontWeight="bold">Filter by Categories</Typography>
          </FormLabel>
          <RadioGroup
            aria-labelledby="category-select-radio-group-label"
            name="category"
            value={filters.category}
            onChange={handleCategoryChange}
          >
            {categoriesResponse?.categories
              ?.filter((category) => category.type === "Product")
              ?.map((category) => (
                <FormControlLabel
                  key={category._id.toString()}
                  value={category.name}
                  control={<Radio />}
                  label={category.name}
                />
              ))}
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ py: 1 }}>
          <FormLabel id="sort-select-radio-group-label" sx={{ pb: 1 }}>
            <SortOutlined />
            <Typography fontWeight="bold">Sort by</Typography>
          </FormLabel>
          <RadioGroup
            aria-labelledby="sort-select-radio-group-label"
            name="sort"
            value={filters.sort}
            onChange={handleSortChange}
          >
            {sortOptions.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
    );
  };

  return (
    <>
      {isFilterModified && (
        <AppBar
          position="fixed"
          sx={{
            top: "auto",
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            backgroundColor: "background.paper",
            p: { xs: 2, sm: 0 },
          }}
        >
          <Toolbar>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              justifyContent="center"
              gap={2}
              width="100%"
            >
              <Button
                startIcon={<FilterAltOutlined />}
                onClick={handleApplyFilter}
                variant="contained"
                color="success"
              >
                Apply Filters
              </Button>
              <Button
                startIcon={<FilterAltOffOutlined />}
                onClick={handleResetFilter}
                variant="contained"
                color="error"
              >
                Reset Filters
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      )}
      <Container maxWidth="lg">
        <Box>
          <Head>
            <title>Petohub</title>
            <meta
              name="description"
              content="Official website of Petohub - Pet lover's community"
            />
          </Head>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              my: 2,
            }}
          >
            <ShoppingCartOutlined color="primary" fontSize="large" />
            <Typography color="primary.main" variant="h4">
              Browse Shop
            </Typography>
          </Box>
          {!smUp && (
            <Box display="flex" flexDirection="row-reverse">
              <Button startIcon={<FilterAltOutlined />} size="large" onClick={toggleFilters}>
                Filters
              </Button>
            </Box>
          )}
          <Box display="flex" flexDirection={{ xs: "column", sm: "row" }}>
            {filtersOpen && <Filters />}
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
        </Box>
      </Container>
    </>
  );
};

Shop.getLayout = (page: ReactElement) => <PublicLayout>{page}</PublicLayout>;
export default Shop;
