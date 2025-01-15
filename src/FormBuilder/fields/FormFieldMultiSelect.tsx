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

type FormFieldMultiSelectProps = {
  options: FormBuilderFieldMultiSelectProps["options"];
} & FormBuilderFieldComponentProps &
  SelectProps;

export default function FormFieldMultielect({
  field,
  helperText,
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
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}
