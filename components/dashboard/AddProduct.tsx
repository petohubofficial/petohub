import { Box, Button, TextField, Typography } from "@mui/material";
import { FormikConfig, useFormik } from "formik";
import { CreateProductRequest } from "types/product";
import { useAuth } from "hooks/auth";
import * as Yup from "yup";
import React from "react";

interface FormikFieldContextProps {
  formik: any;
  children: React.ReactNode[];
}

const FormikFieldContext = (props: FormikFieldContextProps): JSX.Element => {
  const { formik, children } = props;
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { formik });
    }
    return child;
  });
  return <>{childrenWithProps}</>;
};

interface FormikFieldProps {
  label: string;
  name: string;
  formik?: any;
  type?: string;
}

const FormikField = (props: FormikFieldProps): JSX.Element => {
  const { formik, label, name, type = "text" } = props;
  const field = formik.getFieldProps(name);
  const meta = formik.getFieldMeta(name);
  return (
    <TextField
      fullWidth
      size="small"
      label={label}
      type={type}
      name={field.name}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      error={Boolean(meta.touched && meta.error)}
      helperText={meta.touched && meta.error}
      sx={{ my: 1 }}
    />
  );
};

export default function AddProduct() {
  const { user } = useAuth();

  const formik = useFormik({
    initialValues: {
      seller: user?._id || "",
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
      isVeg: false,
      ageRange: {
        min: 0,
        max: 0,
      },
      affiliateLinks: [],
      productImages: [],
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      brand: Yup.string().required("Brand is required"),
      category: Yup.string().required("Category is required"),
      petType: Yup.array().required("Pet type is required"),
      keywords: Yup.array().required("Keywords is required"),
      breedType: Yup.string().required("Breed type is required"),
      description: Yup.string().required("Description is required"),
      weight: Yup.number().required("Weight is required"),
      size: Yup.object({
        length: Yup.number().required("Length is required"),
        width: Yup.number().required("Width is required"),
        height: Yup.number().required("Height is required"),
      }).required("Size is required"),
      countInStock: Yup.number().required("Count in stock is required"),
      price: Yup.number().required("Price is required"),
      isVeg: Yup.boolean().required("Is veg is required"),
      ageRange: Yup.object({
        min: Yup.number().required("Min age is required"),
        max: Yup.number().required("Max age is required"),
      }).required("Age range is required"),
      affiliateLinks: Yup.array().required("Affiliate links is required"),
      productImages: Yup.array().required("Product images is required"),
    }),
    onSubmit: (values: CreateProductRequest) => {
      console.log(values);
    },
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <FormikFieldContext formik={formik}>
          <FormikField label="Product Name" name="name" />
          <FormikField label="Brand" name="brand" />
          <FormikField label="Category" name="category" />
          <FormikField label="Pet Type" name="petType" />
          <FormikField label="Keywords" name="keywords" />
          <FormikField label="Breed Type" name="breedType" />
          <FormikField label="Description" name="description" />
          <FormikField label="Weight" name="weight" />
          <FormikField label="Length" name="size.length" />
          <FormikField label="Width" name="size.width" />
          <FormikField label="Height" name="size.height" />
          <FormikField label="Count In Stock" name="countInStock" />
          <FormikField label="Price" name="price" />
          <FormikField label="Is Veg" name="isVeg" />
          <FormikField label="Min Age" name="ageRange.min" />
          <FormikField label="Max Age" name="ageRange.max" />
          <FormikField label="Affiliate Links" name="affiliateLinks" />
          <FormikField label="Product Images" name="productImages" />
        </FormikFieldContext>
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
}
