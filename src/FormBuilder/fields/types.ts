import { ControllerRenderProps, RegisterOptions } from "react-hook-form";
import { FormBuilderData } from "../types";

export type FormBuilderFieldComponentProps = {
  field: ControllerRenderProps<FormBuilderData, never>;
  label?: string;
  helperText?: string;
  error?: boolean;
};

type FormBuilderFieldProps = {
  label: string;
  description?: string;
  rules?: Omit<
    RegisterOptions<FormBuilderData, never>,
    "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
};

export type FormBuilderFieldTextProps = {
  type: "text";
} & FormBuilderFieldProps;

export type FormBuilderFieldSelectProps = {
  type: "select";
  options: Array<{ label: string; value: string | number }>;
} & FormBuilderFieldProps;

export type FormBuilderFieldMultiSelectProps = {
  type: "multiselect";
  options: Array<{ label: string; value: string | number }>;
} & FormBuilderFieldProps;

export type FormBuilderFieldRadioProps = {
  type: "radio";
  options: Array<{ label: string; value: string | number }>;
} & FormBuilderFieldProps;

export type FormBuilderFieldCheckboxProps = {
  type: "checkbox";
  options: Array<{ label: string; value: string | number }>;
} & FormBuilderFieldProps;

export type FormBuilderField =
  | FormBuilderFieldTextProps
  | FormBuilderFieldSelectProps
  | FormBuilderFieldMultiSelectProps
  | FormBuilderFieldRadioProps
  | FormBuilderFieldCheckboxProps;
