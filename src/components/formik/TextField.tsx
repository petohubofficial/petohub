import { TextField as MuiTextField, TextFieldProps } from "@mui/material";
import { useField } from "formik";

type Overrides = { name: string };

const TextField: React.FC<TextFieldProps & Overrides> = (props) => {
  const { sx, ...rest } = props;
  const [field, meta] = useField(props.name);
  return (
    <MuiTextField
      fullWidth
      size="small"
      error={Boolean(meta.touched && meta.error)}
      helperText={meta.touched && meta.error}
      sx={{ ...sx, my: 1 }}
      {...field}
      {...rest}
    />
  );
};

export default TextField;
