import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
} from "@mui/material";
import { FormField, FormRadioElementProps } from "./FormStep.types";

type FormFieldRadioProps = {
  field: FormField;
  label?: string;
  options: FormRadioElementProps["options"];
  helperText?: string;
  error?: boolean;
} & RadioGroupProps;

export default function FormFieldRadio({
  field,
  ...props
}: Readonly<FormFieldRadioProps>) {
  const id = `${field.name}-radio-group-label`;

  return (
    <FormControl fullWidth>
      {props.label && <FormLabel id={id}>{props.label}</FormLabel>}

      <RadioGroup aria-labelledby={id} {...field}>
        {props.options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={<Radio />}
            {...option}
          />
        ))}
      </RadioGroup>
      {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
    </FormControl>
  );
}
