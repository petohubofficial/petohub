import { TextFieldProps } from "@mui/material";
import { FormikErrors, FormikTouched, FormikValues } from "formik";

interface FormikLike<T = any> {
  touched: FormikTouched<T>;
  errors: FormikErrors<T>;
  values: FormikValues;
}

export const getErrorProps = (formik: FormikLike, name: string): TextFieldProps => {
  if (name in formik.touched) {
    return {
      error: Boolean(formik.touched[name] && formik.errors[name]),
      helperText: formik.errors[name] || " ",
    };
  }
  return {
    error: false,
    helperText: " ",
  };
};
