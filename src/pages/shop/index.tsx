import { FilterAltOffOutlined, FilterAltOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PublicLayout from "components/layouts/PublicLayout";
import Filters from "components/shop/Filters";
import Products from "components/shop/Products";
import { initialFilters, ProductProvider } from "contexts/product";
import Head from "next/head";
import { ReactElement, useEffect, useState } from "react";
import { GetProductsFilters } from "types/product";

const Shop = () => {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));

  const [filters, setFilters] = useState<GetProductsFilters>(initialFilters);
  const [appliedFilters, setAppliedFilters] = useState<GetProductsFilters>(initialFilters);
  const [isFilterModified, setIsFilterModified] = useState<boolean>(false);
  const [filtersOpen, setFiltersOpen] = useState<boolean>(false);

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

  return (
    <ProductProvider value={{ filters, appliedFilters, setFilters, setAppliedFilters }}>
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
            <Products />
          </Box>
        </Box>
      </Container>
    </ProductProvider>
  );
};

Shop.getLayout = (page: ReactElement) => (
  <PublicLayout>
    <Head>
      <title>Shop at Petohub</title>
    </Head>
    {page}
  </PublicLayout>
);

export default Shop;
