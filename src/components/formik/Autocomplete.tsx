import { Autocomplete as MuiAutocomplete, TextField, TextFieldProps } from "@mui/material";
import { useField, useFormikContext } from "formik";
import React from "react";

type AutocompleteProps = TextFieldProps & {
  filterSelectedOptions?: boolean;
  freeSolo?: boolean;
  multiple?: boolean;
  name: string;
  options: any[];
};

const Autocomplete: React.FC<AutocompleteProps> = (props) => {
  const {
    filterSelectedOptions = false,
    freeSolo = false,
    multiple = false,
    name,
    options,
    sx,
    ...rest
  } = props;
  const [field, meta] = useField(name);
  const formik = useFormikContext();

  return (
    <MuiAutocomplete
      fullWidth
      filterSelectedOptions={filterSelectedOptions}
      multiple={multiple}
      freeSolo={freeSolo}
      options={options}
      onChange={(event: React.SyntheticEvent<Element, Event>, value: any[]) => {
        formik.setFieldValue(name, value);
      }}
      value={field.value}
      renderInput={(params) => (
        <TextField
          {...params}
          size="small"
          name={name}
          onBlur={field.onBlur}
          error={Boolean(meta.touched && meta.error)}
          helperText={meta.touched && meta.error}
          sx={{ my: 1, ...sx }}
          {...rest}
        />
      )}
    />
  );
};

export default Autocomplete;
