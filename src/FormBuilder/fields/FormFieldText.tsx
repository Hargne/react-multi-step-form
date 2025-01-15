import { TextField, TextFieldProps } from "@mui/material";
import { FormBuilderFieldComponentProps } from "./types";

type FormFieldTextProps = FormBuilderFieldComponentProps & TextFieldProps;

export default function FormFieldText({
  field,
  ...props
}: Readonly<FormFieldTextProps>) {
  return <TextField fullWidth variant="outlined" {...props} {...field} />;
}
