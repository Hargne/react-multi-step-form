import { TextField, TextFieldProps } from "@mui/material";
import { FormField } from "./FormStep.types";

type FormFieldTextProps = {
  field: FormField;
} & TextFieldProps;

export default function FormFieldText({
  field,
  ...props
}: Readonly<FormFieldTextProps>) {
  return <TextField fullWidth variant="outlined" {...props} {...field} />;
}
