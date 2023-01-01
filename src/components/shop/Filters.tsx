import {
  CategoryOutlined,
  CurrencyRupeeOutlined,
  PetsOutlined,
  SortOutlined,
} from "@mui/icons-material";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from "@mui/material";
import { useProduct } from "hooks/product";
import { ChangeEvent, FC } from "react";
import { useGetCategoriesQuery, useGetPetsQuery } from "services/public.service";

const Filters: FC = () => {
  const { filters, setFilters } = useProduct();
  const { data: categoriesResponse } = useGetCategoriesQuery();
  const { data: petsResponse } = useGetPetsQuery();

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

  const sortOptions = [
    { label: "Newest", value: "newest" },
    { label: "Oldest", value: "oldest" },
    { label: "Best Rated", value: "rating" },
    { label: "Least Rated", value: "-rating" },
    { label: "Price (High to Low)", value: "price" },
    { label: "Price (Low to High)", value: "-price" },
  ];

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

export default Filters;
