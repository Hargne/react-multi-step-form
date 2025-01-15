import { FormBuilderField } from "./fields/types";

export type FormBuilderSteps = Array<Partial<FormBuilderStepProps>>;

export type FormBuilderElements = {
  [key: string]: FormBuilderField;
};

export type FormBuilderStepProps = {
  elements: FormBuilderElements;
};

type Steps = FormBuilderStepProps[];

// Utility type to ensure all keys in elements exist in FormData
type EnsureKeysExist<T, U> = {
  [K in keyof T]: K extends keyof U ? T[K] : never;
};

export type Test<T> = Array<EnsureKeysExist<Steps[0]["elements"], T>>;

export type FormBuilderData<T> = {
  [key: string]: unknown;
};
