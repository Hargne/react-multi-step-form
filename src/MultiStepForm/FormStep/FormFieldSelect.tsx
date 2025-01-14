import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import { FormField, FormSelectElementProps } from "./FormStep.types";

type FormFieldSelectProps = {
  field: FormField;
  label?: string;
  options: FormSelectElementProps["options"];
  helperText?: string;
} & SelectProps;

export default function FormFieldSelect({
  field,
  ...props
}: Readonly<FormFieldSelectProps>) {
  return (
    <FormControl fullWidth>
      {props.label && <InputLabel>{props.label}</InputLabel>}
      <Select
        variant="outlined"
        {...field}
        {...props}
        value={field.value ?? ""}
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
