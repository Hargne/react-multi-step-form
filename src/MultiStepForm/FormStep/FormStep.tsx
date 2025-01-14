import { Button, Stack } from "@mui/material";
import { Controller, ControllerRenderProps, useForm } from "react-hook-form";
import {
  MultiStepFormData,
  FormStepProps,
  MultiStepFormElement,
} from "./FormStep.types";
import FormFieldText from "./FormFieldText";
import FormFieldSelect from "./FormFieldSelect";
import FormFieldMultiSelect from "./FormFieldMultiSelect";
import FormFieldRadio from "./FormFieldRadio";
import FormFieldCheckbox from "./FormFieldCheckbox";

export default function FormStep(props: Readonly<FormStepProps>) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<MultiStepFormData>({
    mode: props.validationTrigger,
    defaultValues: Object.fromEntries(
      Object.entries(props.elements).map(([key, element]) => {
        if (element.type === "multiselect" || element.type === "checkbox") {
          return [key, []];
        }
        return [key, ""];
      })
    ) as MultiStepFormData,
  });

  function renderInput(
    element: MultiStepFormElement,
    field: ControllerRenderProps<MultiStepFormData, never>
  ) {
    const helperText = errors[field.name]
      ? errors[field.name]!.message
      : element.description;
    const hasError = !!errors[field.name];

    switch (element.type) {
      case "text":
        return (
          <FormFieldText
            label={element.label}
            error={hasError}
            helperText={helperText}
            field={field}
          />
        );
      case "select":
        return (
          <FormFieldSelect
            label={element.label}
            error={hasError}
            helperText={helperText}
            field={field}
            options={element.options}
          />
        );
      case "multiselect":
        return (
          <FormFieldMultiSelect
            label={element.label}
            error={hasError}
            helperText={helperText}
            field={field}
            options={element.options}
          />
        );
      case "radio":
        return (
          <FormFieldRadio
            label={element.label}
            error={hasError}
            helperText={helperText}
            field={field}
            options={element.options}
          />
        );
      case "checkbox":
        return (
          <FormFieldCheckbox
            label={element.label}
            error={hasError}
            helperText={helperText}
            field={field}
            options={element.options}
          />
        );
      default:
        return <></>;
    }
  }

  return (
    <Stack component="form" onSubmit={handleSubmit(props.onSubmit)} spacing={6}>
      <Stack spacing={2}>
        {Object.entries(props.elements).map(([key, element]) => (
          <Controller
            key={key}
            // @ts-expect-error: key is a string
            name={key}
            control={control}
            render={({ field }) => renderInput(element, field)}
            rules={element.rules}
          />
        ))}
      </Stack>
      <Stack spacing={2}>
        <Button type="submit" variant="contained">
          {props.submitButtonLabel ?? "Submit"}
        </Button>
        {props.onBack && (
          <Button variant="outlined" onClick={props.onBack}>
            {props.backButtonLabel ?? "Back"}
          </Button>
        )}
      </Stack>
    </Stack>
  );
}
