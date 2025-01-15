import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import {
  FormBuilderFieldCheckboxProps,
  FormBuilderFieldComponentProps,
} from "./types";

type FormFieldCheckboxProps = {
  options: FormBuilderFieldCheckboxProps["options"];
} & FormBuilderFieldComponentProps;

export default function FormFieldCheckbox({
  field,
  ...props
}: Readonly<FormFieldCheckboxProps>) {
  const id = `${field.name}-radio-group-label`;

  function getCurrentValue(): Array<string | number> {
    if (!field.value || !Array.isArray(field.value)) {
      return [];
    }
    return field.value;
  }

  function isOptionChecked(
    option: FormBuilderFieldCheckboxProps["options"][number]
  ): boolean {
    return getCurrentValue().includes(option.value);
  }

  function handleOnChange(
    e: React.ChangeEvent<HTMLInputElement>,
    value: string | number
  ) {
    const currentValue = getCurrentValue();
    const newValue = e.target.checked
      ? [...currentValue, value]
      : currentValue.filter((v) => v !== value);
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
                checked={isOptionChecked(option)}
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
