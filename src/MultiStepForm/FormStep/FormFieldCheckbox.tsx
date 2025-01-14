import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import { FormField, FormCheckboxElementProps } from "./FormStep.types";

type FormFieldCheckboxProps = {
  field: FormField;
  label?: string;
  options: FormCheckboxElementProps["options"];
  helperText?: string;
  error?: boolean;
};

export default function FormFieldCheckbox({
  field,
  ...props
}: Readonly<FormFieldCheckboxProps>) {
  const id = `${field.name}-radio-group-label`;

  function handleOnChange(
    e: React.ChangeEvent<HTMLInputElement>,
    value: string | number
  ) {
    const newValue = e.target.checked
      ? [...field.value, value]
      : (field.value as Array<string | number>).filter((v) => v !== value);
    field.onChange(newValue);
  }

  return (
    <FormControl fullWidth>
      {props.label && <FormLabel id={id}>{props.label}</FormLabel>}

      <FormGroup>
        {props.options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                checked={(field.value as Array<string | number>).includes(
                  option.value
                )}
                onChange={(e) => handleOnChange(e, option.value)}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
      {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
    </FormControl>
  );
}
