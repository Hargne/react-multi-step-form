import { Button, Stack } from "@mui/material";
import { Controller, ControllerRenderProps, useForm } from "react-hook-form";
import FormFieldCheckbox from "./fields/FormFieldCheckbox";
import FormFieldMultiSelect from "./fields/FormFieldMultiSelect";
import FormFieldRadio from "./fields/FormFieldRadio";
import FormFieldSelect from "./fields/FormFieldSelect";
import FormFieldText from "./fields/FormFieldText";
import { FormBuilderField } from "./fields/types";
import { FormBuilderData, FormBuilderElements } from "./types";

export type FormBuilderStepProps = {
  elements: FormBuilderElements;
  onSubmit: (data: FormBuilderData) => void;
  submitButtonLabel?: string;
  onBack?: () => void;
  backButtonLabel?: string;
  validationTrigger?: "all" | "onBlur" | "onChange" | "onSubmit" | "onTouched";
};

export default function FormBuilderStep(props: Readonly<FormBuilderStepProps>) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormBuilderData>({
    mode: props.validationTrigger,
    defaultValues: Object.fromEntries(
      Object.entries(props.elements).map(([key, element]) => {
        if (element.type === "multiselect" || element.type === "checkbox") {
          return [key, []];
        }
        return [key, ""];
      })
    ) as FormBuilderData,
  });

  function renderInput(
    field: FormBuilderField,
    fieldProps: ControllerRenderProps<FormBuilderData, never>
  ) {
    const helperText = errors[fieldProps.name]
      ? errors[fieldProps.name]!.message
      : field.description;
    const hasError = !!errors[fieldProps.name];

    switch (field.type) {
      case "text":
        return (
          <FormFieldText
            label={field.label}
            error={hasError}
            helperText={helperText}
            field={fieldProps}
          />
        );
      case "select":
        return (
          <FormFieldSelect
            label={field.label}
            error={hasError}
            helperText={helperText}
            field={fieldProps}
            options={field.options}
          />
        );
      case "multiselect":
        return (
          <FormFieldMultiSelect
            label={field.label}
            error={hasError}
            helperText={helperText}
            field={fieldProps}
            options={field.options}
          />
        );
      case "radio":
        return (
          <FormFieldRadio
            label={field.label}
            error={hasError}
            helperText={helperText}
            field={fieldProps}
            options={field.options}
          />
        );
      case "checkbox":
        return (
          <FormFieldCheckbox
            label={field.label}
            error={hasError}
            helperText={helperText}
            field={fieldProps}
            options={field.options}
          />
        );
      default:
        return <></>;
    }
  }

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(props.onSubmit)}
      spacing={6}
      height="100%"
    >
      <Stack spacing={2} flexGrow={1}>
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
