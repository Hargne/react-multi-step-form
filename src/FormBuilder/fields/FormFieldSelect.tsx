import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import {
  FormBuilderFieldComponentProps,
  FormBuilderFieldMultiSelectProps,
} from "./types";

type FormFieldSelectProps = {
  options: FormBuilderFieldMultiSelectProps["options"];
} & FormBuilderFieldComponentProps &
  SelectProps;

export default function FormFieldSelect({
  field,
  helperText,
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
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}
