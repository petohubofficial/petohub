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
import Directories from "components/directory/Directories";
import Filters from "components/directory/Filters";
import PublicLayout from "components/layouts/PublicLayout";
import { DirectoryProvider, initialFilters } from "contexts/directory";
import Head from "next/head";
import { ReactElement, useEffect, useState } from "react";
import { GetDirectoriesFilters } from "types/directory";

const DirectoriesPage = () => {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));

  const [filters, setFilters] = useState<GetDirectoriesFilters>(initialFilters);
  const [appliedFilters, setAppliedFilters] = useState<GetDirectoriesFilters>(initialFilters);
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
    <DirectoryProvider value={{ filters, appliedFilters, setFilters, setAppliedFilters }}>
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
              Browse Directories
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
            <Directories />
          </Box>
        </Box>
      </Container>
    </DirectoryProvider>
  );
};

DirectoriesPage.getLayout = (page: ReactElement) => (
  <PublicLayout>
    <Head>
      <title>Browse directories at Petohub</title>
    </Head>
    {page}
  </PublicLayout>
);

export default DirectoriesPage;
