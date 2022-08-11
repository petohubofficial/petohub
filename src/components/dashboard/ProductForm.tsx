import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CollectionsIcon from "@mui/icons-material/Collections";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import PublishIcon from "@mui/icons-material/Publish";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import StorefrontIcon from "@mui/icons-material/Storefront";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import Autocomplete from "components/formik/Autocomplete";
import TextField from "components/formik/TextField";
import { FormikHelpers, FormikProvider, useFormik } from "formik";
import { useAuth } from "hooks/auth";
import React from "react";
import { useGetBrandsQuery, useGetCategoriesQuery, useGetPetsQuery } from "services/public.service";
import { CategoryType } from "types/category";
import {
  AffiliateProvider,
  FoodClassification,
  Product,
  ProductRequest,
  Variation,
  VariationBasis,
} from "types/product";
import generateSKU from "utils/generateSKU";
import * as Yup from "yup";

enum Step {
  General = 0,
  Affiliate = 1,
  Variations = 2,
  Photos = 3,
}

const firstStep = Step.General;
const lastStep = Step.Photos;

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

  const [step, setStep] = React.useState<Step>(Step.General);

  const formik = useFormik<ProductRequest>({
    initialValues: product || {
      seller: user?.directory?._id || null,
      name: "",
      brand: null,
      category: null,
      petType: [],
      keywords: [],
      breedType: "",
      description: "",
      foodClassification: FoodClassification.NOT_APPLICABLE,
      ageRange: {
        min: 0,
        max: 0,
      },
      affiliateLinks: [],
      productImages: [],
      baseVariant: {
        price: 0,
        countInStock: 0,
        onOffer: false,
        offerPrice: 0,
        sku: generateSKU(),
        attributes: {
          color: "",
          size: {
            length: 0,
            height: 0,
            width: 0,
          },
          weight: 0,
        },
      },
      variations: [],
    },
    validationSchema:
      step === Step.General
        ? Yup.object().shape({
            name: Yup.string().required("Name is required"),
            brand: Yup.string().typeError("Brand is required").required("Brand is required"),
            category: Yup.string()
              .typeError("Category is required")
              .required("Category is required"),
            petType: Yup.array().required("Pet type is required"),
            keywords: Yup.array().required("Keywords is required"),
            breedType: Yup.string().required("Breed type is required"),
            description: Yup.string().required("Description is required"),
            foodClassification: Yup.string().required("Food classification is required"),
            ageRange: Yup.object()
              .shape({
                min: Yup.number().required("Min age is required"),
                max: Yup.number().required("Max age is required"),
              })
              .required("Age range is required"),
          })
        : step === Step.Photos
        ? Yup.object().shape({
            productImages: Yup.array().of(Yup.string().required("Product image link is required")),
          })
        : step === Step.Affiliate
        ? Yup.object().shape({
            affiliateLinks: Yup.array().of(
              Yup.object().shape({
                id: Yup.string().required("Product id is required"),
                link: Yup.string().required("Product link is required"),
                provider: Yup.string()
                  .typeError("Product provider is required")
                  .oneOf(Object.values(AffiliateProvider), "Product provider is required"),
                price: Yup.number().required("Product price is required"),
              })
            ),
          })
        : step === Step.Variations
        ? Yup.object().shape({
            baseVariant: Yup.object().shape({
              countInStock: Yup.number().required("Count in stock is required"),
              price: Yup.number().required("Price is required"),
              sku: Yup.string().required("SKU is required"),
              offerPrice: Yup.number(),
              onOffer: Yup.boolean(),
              attributes: Yup.object().shape({
                color: Yup.string(),
                weight: Yup.number(),
                size: Yup.object().shape({
                  length: Yup.number(),
                  width: Yup.number(),
                  height: Yup.number(),
                }),
              }),
            }),
            variants: Yup.array().of(
              Yup.object().shape({
                countInStock: Yup.number().required("Count in stock is required"),
                price: Yup.number().required("Price is required"),
                sku: Yup.string().required("SKU is required"),
                basis: Yup.string()
                  .typeError("Variation basis is required")
                  .oneOf(Object.values(VariationBasis), "Variation basis is required"),
                offerPrice: Yup.number(),
                onOffer: Yup.boolean(),
                attributes: Yup.object().shape({
                  color: Yup.string(),
                  weight: Yup.number(),
                  size: Yup.object().shape({
                    length: Yup.number(),
                    width: Yup.number(),
                    height: Yup.number(),
                  }),
                }),
              })
            ),
          })
        : Yup.object().shape({}),
    onSubmit: (values, helpers) => {
      if (step !== lastStep) setStep((prevStep) => prevStep + 1);
      else onSubmit(values, helpers);
      helpers.setSubmitting(false);
    },
  });

  return (
    <FormikProvider value={formik}>
      <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
        <Typography variant="overline" fontSize="large" color="textSecondary">
          Step {step + 1} of {lastStep + 1}:{" "}
          <Typography component="span" color="textPrimary" fontSize="inherit" fontWeight="600">
            {Step[step]}
          </Typography>
        </Typography>
        {step === Step.General ? (
          <>
            <TextField label="Product Name" name="name" />
            <TextField multiline label="Description" name="description" />
            <Box display={{ xs: "block", md: "flex" }} gap={1}>
              {isCategoriesLoading ? (
                <Box display="flex" gap={2}>
                  <CircularProgress size={20} />
                  <Typography>Loading categories...</Typography>
                </Box>
              ) : (
                <Autocomplete
                  filterSelectedOptions
                  options={
                    categoriesData?.categories
                      ?.filter((category) => category.type === CategoryType.PRODUCT)
                      ?.map((category) => category.name) || []
                  }
                  label="Category"
                  name="category"
                />
              )}
              {isBrandsLoading ? (
                <Box display="flex" gap={2}>
                  <CircularProgress size={20} />
                  <Typography>Loading brands...</Typography>
                </Box>
              ) : (
                <Autocomplete
                  filterSelectedOptions
                  options={brandsData?.brands?.map((brand) => brand.name) || []}
                  label="Brand"
                  name="brand"
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
                  filterSelectedOptions
                  options={petsData?.pets?.map((pet) => pet.name) || []}
                  label="Pet Type"
                  name="petType"
                />
              )}
            </Box>
            <Autocomplete multiple freeSolo options={[]} name="keywords" label="Keywords" />
            <TextField label="Breed Type" name="breedType" />
            <Box display={{ xs: "block", md: "flex" }} gap={1}>
              <TextField
                type="number"
                label="Minimum Age"
                name="ageRange.min"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Typography>months</Typography>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                type="number"
                label="Maximum Age"
                name="ageRange.max"
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
              filterSelectedOptions
              options={Object.values(FoodClassification)}
              name="foodClassification"
              label="Food Classification"
            />
          </>
        ) : step === Step.Affiliate ? (
          <>
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
                  <Box
                    display="flex"
                    width="100%"
                    flexDirection={{ xs: "column", md: "row" }}
                    gap={1}
                  >
                    <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={1}>
                      <Autocomplete
                        filterSelectedOptions
                        options={Object.values(AffiliateProvider)}
                        label="Provider"
                        name={`affiliateLinks[${index}].provider`}
                      />
                      <TextField label="Link" name={`affiliateLinks[${index}].link`} />
                    </Box>
                    <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={1}>
                      <TextField label="ASIN/FSN/ID" name={`affiliateLinks[${index}].id`} />
                      <TextField
                        type="number"
                        label="Price"
                        name={`affiliateLinks[${index}].price`}
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
          </>
        ) : step === Step.Variations ? (
          <>
            <Box display="flex" justifyContent="space-between" sx={{ my: 1, px: 1 }}>
              <Box display="flex" sx={{ color: "secondary.main" }} gap={1}>
                <DynamicFeedIcon color="inherit" />
                <Typography variant="h6">Base Variant</Typography>
              </Box>
            </Box>
            <Box display={{ xs: "block", md: "flex" }} gap={1}>
              <TextField name="baseVariant.sku" label="SKU" placeholder="UGG-BB-PUR-06" />
              <TextField type="number" label="Count in stock" name="baseVariant.countInStock" />
            </Box>
            <Typography fontWeight={600} fontSize="large" sx={{ my: 1 }}>
              Prices
            </Typography>
            <Box display={{ xs: "block", md: "flex" }} gap={1}>
              <TextField
                type="number"
                label="Price"
                name="baseVariant.price"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Typography>₹</Typography>
                    </InputAdornment>
                  ),
                }}
              />
              {formik.values.baseVariant.onOffer && (
                <TextField
                  type="number"
                  label="Offer Price"
                  name="baseVariant.offerPrice"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Typography>₹</Typography>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            </Box>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formik.values.baseVariant.onOffer}
                  onChange={(e) => formik.setFieldValue("baseVariant.onOffer", e.target.checked)}
                />
              }
              label="On Offer"
            />
            <Typography fontWeight={600} fontSize="large" sx={{ my: 1 }}>
              Attributes
            </Typography>
            <Box display={{ xs: "block", md: "flex" }} gap={1}>
              <Autocomplete
                options={Object.values(VariationBasis)}
                name="baseVariant.basis"
                label="Basis"
              />
              {formik.values.baseVariant.basis === VariationBasis.SIZE && (
                <Box display={{ xs: "block", md: "flex" }} gap={1}>
                  <TextField
                    type="number"
                    label="Length"
                    name="baseVariant.attributes.size.length"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Typography>cms</Typography>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    type="number"
                    label="Height"
                    name="baseVariant.attributes.size.height"
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
                    type="number"
                    label="Width"
                    name="baseVariant.attributes.size.width"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Typography>cms</Typography>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              )}
              {formik.values.baseVariant.basis === VariationBasis.COLOR && (
                <TextField name="baseVariant.attributes.color" label="Color" placeholder="Black" />
              )}
              {formik.values.baseVariant.basis === VariationBasis.WEIGHT && (
                <TextField
                  type="number"
                  label="Weight"
                  name="baseVariant.attributes.weight"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Typography>grams</Typography>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            </Box>
            <Box display="flex" justifyContent="space-between" sx={{ mt: 2, px: 1 }}>
              <Box display="flex" sx={{ color: "secondary.main" }} gap={1}>
                <DynamicFeedIcon color="inherit" />
                <Typography variant="h6">Additional Variations</Typography>
              </Box>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                startIcon={<LibraryAddIcon />}
                onClick={() =>
                  formik.setFieldValue("variations", [
                    ...formik.values.variations,
                    {
                      sku: generateSKU(),
                      price: 0,
                      countInStock: 0,
                      attributes: {
                        color: "",
                        weight: 0,
                        size: { length: 0, height: 0, width: 0 },
                      },
                      onOffer: false,
                      offerPrice: 0,
                    } as Variation,
                  ])
                }
              >
                Add
              </Button>
            </Box>
            {formik.values.variations.length === 0 ? (
              <Box display="flex" justifyContent="center" alignItems="center" sx={{ my: 1 }}>
                <Typography color="text.secondary">
                  No additional variations added to this product!
                </Typography>
              </Box>
            ) : (
              formik.values.variations.map((_, index) => (
                <Box key={index}>
                  <Box display={{ xs: "block", md: "flex" }} alignItems="start" gap={1}>
                    <TextField
                      name={`variations[${index}].sku`}
                      label="SKU"
                      placeholder="UGG-BB-PUR-06"
                    />
                    <TextField
                      type="number"
                      label="Count in stock"
                      name={`variations[${index}].countInStock`}
                    />
                    <IconButton
                      color="error"
                      sx={{ mt: 1 }}
                      onClick={() => {
                        const updated = [...formik.values.variations];
                        updated.splice(index, 1);
                        formik.setFieldValue("variations", updated);
                      }}
                    >
                      <RemoveCircleOutlineIcon fontSize="small" />
                      <Typography display={{ xs: "block", sm: "none " }}>Remove</Typography>
                    </IconButton>
                  </Box>
                  <Typography fontWeight={600} fontSize="large" sx={{ my: 1 }}>
                    Prices
                  </Typography>
                  <Box display={{ xs: "block", md: "flex" }} gap={1}>
                    <TextField
                      type="number"
                      label="Price"
                      name={`variations[${index}].price`}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Typography>₹</Typography>
                          </InputAdornment>
                        ),
                      }}
                    />
                    {formik.values.variations[index].onOffer && (
                      <TextField
                        type="number"
                        label="Offer Price"
                        name={`variations[${index}].offerPrice`}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Typography>₹</Typography>
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  </Box>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formik.values.variations[index].onOffer}
                        onChange={(e) =>
                          formik.setFieldValue(`variations[${index}].onOffer`, e.target.checked)
                        }
                      />
                    }
                    label="On Offer"
                  />
                  <Typography fontWeight={600} fontSize="large" sx={{ my: 1 }}>
                    Attributes
                  </Typography>
                  <Box display={{ xs: "block", md: "flex" }} gap={1}>
                    <Autocomplete
                      options={Object.values(VariationBasis)}
                      name={`variations[${index}].basis`}
                      label="Basis"
                    />
                    {formik.values.variations[index].basis === VariationBasis.SIZE && (
                      <Box display={{ xs: "block", md: "flex" }} gap={1}>
                        <TextField
                          type="number"
                          label="Length"
                          name={`variations[${index}].attributes.size.length`}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <Typography>cms</Typography>
                              </InputAdornment>
                            ),
                          }}
                        />
                        <TextField
                          type="number"
                          label="Height"
                          name={`variations[${index}].attributes.size.height`}
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
                          type="number"
                          label="Width"
                          name={`variations[${index}].attributes.size.width`}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <Typography>cms</Typography>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                    )}
                    {formik.values.variations[index].basis === VariationBasis.COLOR && (
                      <TextField
                        name={`variations[${index}].attributes.color`}
                        label="Color"
                        placeholder="Black"
                      />
                    )}
                    {formik.values.variations[index].basis === VariationBasis.WEIGHT && (
                      <TextField
                        type="number"
                        label="Weight"
                        name={`variations[${index}].attributes.weight`}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <Typography>grams</Typography>
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  </Box>
                </Box>
              ))
            )}
          </>
        ) : step === Step.Photos ? (
          <>
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
                  <TextField label={`Image ${index + 1}`} name={`productImages[${index}]`} />
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
          </>
        ) : null}
        <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={2} sx={{ mt: 2 }}>
          {step !== firstStep && (
            <Button
              fullWidth
              disabled={formik.isSubmitting}
              variant="text"
              startIcon={<ArrowBackIcon />}
              onClick={() => setStep((prev) => prev - 1)}
            >
              Previous
            </Button>
          )}
          <Button
            fullWidth
            disabled={formik.isSubmitting}
            variant="outlined"
            startIcon={step !== lastStep ? <ArrowForwardIcon /> : <PublishIcon />}
            type="submit"
          >
            {formik.isSubmitting ? "Submitting..." : step !== lastStep ? "Next" : "Submit"}
          </Button>
        </Box>
      </form>
    </FormikProvider>
  );
}
