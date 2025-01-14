import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import { FormField, FormMultiSelectElementProps } from "./FormStep.types";

type FormFieldMultiSelectProps = {
  field: FormField;
  label?: string;
  options: FormMultiSelectElementProps["options"];
  helperText?: string;
} & SelectProps;

export default function FormFieldMultielect({
  field,
  ...props
}: Readonly<FormFieldMultiSelectProps>) {
  return (
    <FormControl fullWidth>
      {props.label && <InputLabel>{props.label}</InputLabel>}
      <Select
        variant="outlined"
        multiple
        {...field}
        {...props}
        value={field.value ?? []}
      >
        {props.options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
    </FormControl>
  );
}
