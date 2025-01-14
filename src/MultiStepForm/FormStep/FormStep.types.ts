import { ControllerRenderProps, RegisterOptions } from "react-hook-form";

type FormElementProps = {
  label: string;
  description?: string;
  rules?: Omit<
    RegisterOptions<MultiStepFormData, never>,
    "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
};

export type FormTextFieldElementProps = {
  type: "text";
} & FormElementProps;

export type FormSelectElementProps = {
  type: "select";
  options: Array<{ label: string; value: string | number }>;
} & FormElementProps;

export type FormMultiSelectElementProps = {
  type: "multiselect";
  options: Array<{ label: string; value: string | number }>;
} & FormElementProps;

export type FormRadioElementProps = {
  type: "radio";
  options: Array<{ label: string; value: string | number }>;
} & FormElementProps;

export type FormCheckboxElementProps = {
  type: "checkbox";
  options: Array<{ label: string; value: string | number }>;
} & FormElementProps;

export type FormField = ControllerRenderProps<MultiStepFormData, never>;

export type MultiStepFormElement =
  | FormTextFieldElementProps
  | FormSelectElementProps
  | FormMultiSelectElementProps
  | FormRadioElementProps
  | FormCheckboxElementProps;

type MultiStepFormElements = {
  [key: string]: MultiStepFormElement;
};

export type MultiStepFormData = {
  [K in keyof MultiStepFormElements]: MultiStepFormElements[K] extends {
    type: "text";
  }
    ? string
    : MultiStepFormElements[K] extends { type: "select" }
    ? string | number
    : MultiStepFormElements[K] extends { type: "multiselect" }
    ? Array<string | number>
    : never;
};

export type FormStepProps = {
  elements: MultiStepFormElements;
  onSubmit: (data: MultiStepFormData) => void;
  submitButtonLabel?: string;
  onBack?: () => void;
  backButtonLabel?: string;
  validationTrigger?: "all" | "onBlur" | "onChange" | "onSubmit" | "onTouched";
};
