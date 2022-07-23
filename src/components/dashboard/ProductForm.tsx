import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CollectionsIcon from "@mui/icons-material/Collections";
import PublishIcon from "@mui/icons-material/Publish";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import StorefrontIcon from "@mui/icons-material/Storefront";
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { FormikErrors, FormikHelpers, FormikTouched, useFormik } from "formik";
import { useAuth } from "hooks/auth";
import { SyntheticEvent } from "react";
import { useGetBrandsQuery, useGetCategoriesQuery, useGetPetsQuery } from "services/public.service";
import { CategoryType } from "types/category";
import {
  AffiliateLink,
  AffiliateProvider,
  FoodClassification,
  Product,
  ProductRequest,
} from "types/product";
import * as Yup from "yup";

interface ProductFormProps {
  product?: Product;
  onSubmit: (
    values: ProductRequest,
    formikHelpers: FormikHelpers<ProductRequest>
  ) => void | Promise<any>;
}

export default function ProductForm(props: ProductFormProps) {
  const { product, onSubmit } = props;
  const { user } = useAuth();
  const { data: brandsData, isLoading: isBrandsLoading } = useGetBrandsQuery();
  const { data: categoriesData, isLoading: isCategoriesLoading } = useGetCategoriesQuery();
  const { data: petsData, isLoading: isPetsLoading } = useGetPetsQuery();

  const formik = useFormik<ProductRequest>({
    initialValues: product || {
      seller: user?.directory?._id || null,
      name: "",
      brand: "",
      category: "",
      petType: [],
      keywords: [],
      breedType: "",
      description: "",
      weight: 0,
      size: {
        length: 0,
        width: 0,
        height: 0,
      },
      countInStock: 0,
      price: 0,
      foodClassification: FoodClassification.NOT_APPLICABLE,
      ageRange: {
        min: 0,
        max: 0,
      },
      affiliateLinks: [],
      productImages: [],
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      brand: Yup.string().required("Brand is required"),
      category: Yup.string().required("Category is required"),
      petType: Yup.array().required("Pet type is required"),
      keywords: Yup.array().required("Keywords is required"),
      breedType: Yup.string().required("Breed type is required"),
      description: Yup.string().required("Description is required"),
      weight: Yup.number().required("Weight is required"),
      size: Yup.object()
        .shape({
          length: Yup.number().required("Length is required"),
          width: Yup.number().required("Width is required"),
          height: Yup.number().required("Height is required"),
        })
        .required("Size is required"),
      countInStock: Yup.number().required("Count in stock is required"),
      price: Yup.number().required("Price is required"),
      foodClassification: Yup.string().required("Food classification is required"),
      ageRange: Yup.object()
        .shape({
          min: Yup.number().required("Min age is required"),
          max: Yup.number().required("Max age is required"),
        })
        .required("Age range is required"),
      affiliateLinks: Yup.array().of(
        Yup.object().shape({
          id: Yup.string().required("Product id is required"),
          link: Yup.string().required("Product link is required"),
          provider: Yup.string().oneOf(
            Object.values(AffiliateProvider),
            "Product provider is required"
          ),
          price: Yup.number().required("Product price is required"),
        })
      ),
      productImages: Yup.array().of(Yup.string().required("Product image link is required")),
    }),
    onSubmit,
  });

  return (
    <Box>
      <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          size="small"
          label="Product Name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          error={Boolean(formik.touched.name && formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          sx={{ my: 1 }}
        />
        <TextField
          fullWidth
          multiline
          size="small"
          label="Description"
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          error={Boolean(formik.touched.description && formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
          sx={{ my: 1 }}
        />
        <Box display={{ xs: "block", md: "flex" }} gap={1}>
          {isCategoriesLoading ? (
            <Box display="flex" gap={2}>
              <CircularProgress size={20} />
              <Typography>Loading categories...</Typography>
            </Box>
          ) : (
            <Autocomplete
              fullWidth
              options={
                categoriesData?.categories
                  ?.filter((category) => category.type === CategoryType.PRODUCT)
                  ?.map((category) => category.name) || []
              }
              onChange={(event: SyntheticEvent<Element, Event>, value: string | null) => {
                formik.setFieldValue("category", value);
              }}
              value={formik.values.category}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Category"
                  size="small"
                  name="category"
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.touched.category && formik.errors.category)}
                  helperText={formik.touched.category && formik.errors.category}
                  sx={{ my: 1 }}
                />
              )}
            />
          )}
          {isBrandsLoading ? (
            <Box display="flex" gap={2}>
              <CircularProgress size={20} />
              <Typography>Loading brands...</Typography>
            </Box>
          ) : (
            <Autocomplete
              fullWidth
              options={brandsData?.brands?.map((brand) => brand.name) || []}
              onChange={(event: SyntheticEvent<Element, Event>, value: string | null) => {
                formik.setFieldValue("brand", value);
              }}
              value={formik.values.brand}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Brand"
                  size="small"
                  name="brand"
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.touched.brand && formik.errors.brand)}
                  helperText={formik.touched.brand && formik.errors.brand}
                  sx={{ my: 1 }}
                />
              )}
            />
          )}
          {isPetsLoading ? (
            <Box display="flex" gap={2}>
              <CircularProgress size={20} />
              <Typography>Loading pets...</Typography>
            </Box>
          ) : (
            <Autocomplete
              multiple
              fullWidth
              options={petsData?.pets?.map((pet) => pet.name) || []}
              onChange={(event: SyntheticEvent<Element, Event>, value: string[]) => {
                formik.setFieldValue("petType", value);
              }}
              value={formik.values.petType}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Pet Type"
                  size="small"
                  name="petType"
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.touched.petType && formik.errors.petType)}
                  helperText={formik.touched.petType && formik.errors.petType}
                  sx={{ my: 1 }}
                />
              )}
            />
          )}
        </Box>
        <Box display={{ xs: "block", md: "flex" }} gap={1}>
          <TextField
            fullWidth
            size="small"
            type="number"
            label="Price"
            name="price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
            error={Boolean(formik.touched.price && formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
            sx={{ my: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Typography>₹</Typography>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            size="small"
            type="number"
            label="Count in stock"
            name="countInStock"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.countInStock}
            error={Boolean(formik.touched.countInStock && formik.errors.countInStock)}
            helperText={formik.touched.countInStock && formik.errors.countInStock}
            sx={{ my: 1 }}
          />
        </Box>
        <Autocomplete
          multiple
          freeSolo
          options={[]}
          onChange={(event: SyntheticEvent<Element, Event>, value: any[]) => {
            console.log(value);
            formik.setFieldValue("keywords", value);
          }}
          value={formik.values.keywords}
          isOptionEqualToValue={() => false}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Keywords"
              size="small"
              name="keywords"
              onBlur={formik.handleBlur}
              error={Boolean(formik.touched.keywords && formik.errors.keywords)}
              helperText={formik.touched.keywords && formik.errors.keywords}
              sx={{ my: 1 }}
            />
          )}
        />
        <TextField
          fullWidth
          size="small"
          label="Breed Type"
          name="breedType"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.breedType}
          error={Boolean(formik.touched.breedType && formik.errors.breedType)}
          helperText={formik.touched.breedType && formik.errors.breedType}
          sx={{ my: 1 }}
        />
        <Box display={{ xs: "block", md: "flex" }} gap={1}>
          <TextField
            fullWidth
            size="small"
            type="number"
            label="Length"
            name="size.length"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.size.length}
            error={Boolean(formik.touched.size?.length && formik.errors.size?.length)}
            helperText={formik.touched.size?.length && formik.errors.size?.length}
            sx={{ my: 1 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Typography>cms</Typography>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            size="small"
            type="number"
            label="Height"
            name="size.height"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.size.height}
            error={Boolean(formik.touched.size?.height && formik.errors.size?.height)}
            helperText={formik.touched.size?.height && formik.errors.size?.height}
            sx={{ my: 1 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Typography>cms</Typography>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            size="small"
            type="number"
            label="Width"
            name="size.width"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.size.width}
            error={Boolean(formik.touched.size?.width && formik.errors.size?.width)}
            helperText={formik.touched.size?.width && formik.errors.size?.width}
            sx={{ my: 1 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Typography>cms</Typography>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box display={{ xs: "block", md: "flex" }} gap={1}>
          <TextField
            fullWidth
            size="small"
            type="number"
            label="Weight"
            name="weight"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.weight}
            error={Boolean(formik.touched.weight && formik.errors.weight)}
            helperText={formik.touched.weight && formik.errors.weight}
            sx={{ my: 1 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Typography>grams</Typography>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            size="small"
            type="number"
            label="Minimum Age"
            name="ageRange.min"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.ageRange?.min}
            error={Boolean(formik.touched.ageRange?.min && formik.errors.ageRange?.min)}
            helperText={formik.touched.ageRange?.min && formik.errors.ageRange?.min}
            sx={{ my: 1 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Typography>months</Typography>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            size="small"
            type="number"
            label="Maximum Age"
            name="ageRange.max"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.ageRange?.max}
            error={Boolean(formik.touched.ageRange?.max && formik.errors.ageRange?.max)}
            helperText={formik.touched.ageRange?.max && formik.errors.ageRange?.max}
            sx={{ my: 1 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Typography>months</Typography>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Autocomplete
          fullWidth
          options={Object.values(FoodClassification)}
          onChange={(event: SyntheticEvent<Element, Event>, value: FoodClassification | null) => {
            formik.setFieldValue("foodClassification", value);
          }}
          value={formik.values.foodClassification}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="Food Classification"
              size="small"
              name="foodClassification"
              onBlur={formik.handleBlur}
              error={Boolean(formik.touched.foodClassification && formik.errors.foodClassification)}
              helperText={formik.touched.foodClassification && formik.errors.foodClassification}
              sx={{ my: 1 }}
            />
          )}
        />
        <Box display="flex" justifyContent="space-between" sx={{ mt: 2, px: 1 }}>
          <Box display="flex" sx={{ color: "secondary.main" }} gap={1}>
            <StorefrontIcon color="inherit" />
            <Typography variant="h6">Affiliate Links</Typography>
          </Box>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            startIcon={<AddBusinessIcon />}
            onClick={() =>
              formik.setFieldValue("affiliateLinks", [
                ...formik.values.affiliateLinks,
                { id: "", link: "", price: "", provider: "" },
              ])
            }
          >
            Add
          </Button>
        </Box>
        {formik.values.affiliateLinks.length === 0 ? (
          <Box display="flex" justifyContent="center" alignItems="center" sx={{ my: 1 }}>
            <Typography color="text.secondary">
              No affiliate links added to this product!
            </Typography>
          </Box>
        ) : (
          formik.values.affiliateLinks.map((affiliateLink, index) => (
            <Box
              key={index}
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "center", md: "start" }}
              gap={1}
            >
              <Box display="flex" width="100%" flexDirection={{ xs: "column", md: "row" }} gap={1}>
                <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={1}>
                  <Autocomplete
                    fullWidth
                    options={Object.values(AffiliateProvider)}
                    onChange={(
                      event: SyntheticEvent<Element, Event>,
                      value: AffiliateProvider | null
                    ) => {
                      formik.setFieldValue(`affiliateLinks[${index}].provider`, value || "");
                    }}
                    value={affiliateLink.provider}
                    filterSelectedOptions
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Provider"
                        size="small"
                        name={`affiliateLinks[${index}].provider`}
                        onBlur={formik.handleBlur}
                        error={Boolean(
                          formik.touched.affiliateLinks?.[index]?.provider &&
                            (formik.errors.affiliateLinks as FormikErrors<AffiliateLink>[])?.[index]
                              ?.provider
                        )}
                        helperText={
                          formik.touched.affiliateLinks?.[index]?.provider &&
                          (formik.errors.affiliateLinks as FormikErrors<AffiliateLink>[])?.[index]
                            ?.provider
                        }
                        sx={{ my: 1 }}
                      />
                    )}
                  />
                  <TextField
                    fullWidth
                    size="small"
                    label="Link"
                    name={`affiliateLinks[${index}].link`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={affiliateLink.link}
                    error={Boolean(
                      formik.touched.affiliateLinks?.[index]?.link &&
                        (formik.errors.affiliateLinks as FormikErrors<AffiliateLink>[])?.[index]
                          ?.link
                    )}
                    helperText={
                      formik.touched.affiliateLinks?.[index]?.link &&
                      (formik.errors.affiliateLinks as FormikErrors<AffiliateLink>[])?.[index]?.link
                    }
                    sx={{ my: 1 }}
                  />
                </Box>
                <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={1}>
                  <TextField
                    fullWidth
                    size="small"
                    label="ASIN/FSN/ID"
                    name={`affiliateLinks[${index}].id`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={affiliateLink.id}
                    error={Boolean(
                      formik.touched.affiliateLinks?.[index]?.id &&
                        (formik.errors.affiliateLinks as FormikErrors<AffiliateLink>[])?.[index]?.id
                    )}
                    helperText={
                      formik.touched.affiliateLinks?.[index]?.id &&
                      (formik.errors.affiliateLinks as FormikErrors<AffiliateLink>[])?.[index]?.id
                    }
                    sx={{ my: 1 }}
                  />
                  <TextField
                    fullWidth
                    size="small"
                    type="number"
                    label="Price"
                    name={`affiliateLinks[${index}].price`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={affiliateLink.price}
                    error={Boolean(
                      formik.touched.affiliateLinks?.[index]?.price &&
                        (formik.errors.affiliateLinks as FormikErrors<AffiliateLink>[])?.[index]
                          ?.price
                    )}
                    helperText={
                      formik.touched.affiliateLinks?.[index]?.price &&
                      (formik.errors.affiliateLinks as FormikErrors<AffiliateLink>[])?.[index]
                        ?.price
                    }
                    sx={{ my: 1 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Typography>₹</Typography>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </Box>
              <IconButton
                color="error"
                sx={{ mt: 1 }}
                onClick={() => {
                  const updated = [...formik.values.affiliateLinks];
                  updated.splice(index, 1);
                  formik.setFieldValue("affiliateLinks", updated);
                }}
              >
                <RemoveCircleOutlineIcon fontSize="small" />
                <Typography display={{ xs: "block", sm: "none" }}>Remove</Typography>
              </IconButton>
            </Box>
          ))
        )}
        <Box display="flex" justifyContent="space-between" sx={{ mt: 2, px: 1 }}>
          <Box display="flex" sx={{ color: "secondary.main" }} gap={1}>
            <CollectionsIcon color="inherit" />
            <Typography variant="h6">Product Images</Typography>
          </Box>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            startIcon={<AddPhotoAlternateIcon />}
            onClick={() =>
              formik.setFieldValue("productImages", [...formik.values.productImages, ""])
            }
          >
            Add
          </Button>
        </Box>
        {formik.values.productImages.length === 0 ? (
          <Box display="flex" justifyContent="center" alignItems="center" sx={{ my: 1 }}>
            <Typography color="text.secondary">No images added to this product!</Typography>
          </Box>
        ) : (
          formik.values.productImages.map((productImage, index) => (
            <Box
              key={index}
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "center", md: "start" }}
              gap={1}
            >
              <TextField
                fullWidth
                size="small"
                label={`Image ${index + 1}`}
                name={`productImages[${index}]`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={productImage}
                error={Boolean(
                  (formik.touched.productImages as unknown as FormikTouched<string[]>)?.[index] &&
                    (formik.errors.productImages as FormikErrors<string>[])?.[index]
                )}
                helperText={
                  (formik.touched.productImages as unknown as FormikTouched<string[]>)?.[index] &&
                  (formik.errors.productImages as FormikErrors<string>[])?.[index]
                }
                sx={{ my: 1 }}
              />
              <IconButton
                color="error"
                sx={{ mt: 1 }}
                onClick={() => {
                  const updated = [...formik.values.productImages];
                  updated.splice(index, 1);
                  formik.setFieldValue("productImages", updated);
                }}
              >
                <RemoveCircleOutlineIcon fontSize="small" />
                <Typography display={{ xs: "block", sm: "none" }}>Remove</Typography>
              </IconButton>
            </Box>
          ))
        )}
        <Button
          fullWidth
          disabled={formik.isSubmitting}
          variant="outlined"
          startIcon={<PublishIcon />}
          type="submit"
          sx={{ mt: 3 }}
        >
          {formik.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Box>
  );
}
