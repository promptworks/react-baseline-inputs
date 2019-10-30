import { useState } from "react";
import { Theme, defaultConfig, defaultTheme } from "react-baseline-inputs";

export interface Values {
  checkbox: boolean | null;
  checkboxList: string[] | null;
  date: string | null;
  datetime: string | null;
  file: File | null;
  filelist: FileList | null;
  float: number | null;
  integer: number | null;
  radioGroup: string | null;
  select: string | null;
  text: string | null;
  masked: string | null;
  textarea: string | null;
  toggle: boolean | null;
}

export const initialValues: Values = {
  checkbox: null,
  checkboxList: null,
  date: null,
  datetime: null,
  file: null,
  filelist: null,
  float: null,
  integer: null,
  radioGroup: null,
  select: null,
  text: null,
  masked: null,
  textarea: null,
  toggle: null
};

export type Fields<T> = {
  [K in keyof T]: {
    name: K;
    value: T[K];
    onChange: (value: T[K]) => void;
  };
};

export const notBlank = (value: any) => {
  if (value === null) {
    return "This field is required.";
  }
};

export const useForm = <T>(initialValues: T): [T, Fields<T>] => {
  const [values, setValues] = useState<T>(initialValues);

  const fields = Object.entries(values).reduce(
    (acc, [name, value]) => ({
      ...acc,
      [name]: {
        name,
        value,
        onChange: (v: any) => setValues({ ...values, [name]: v })
      }
    }),
    {} as Fields<T>
  );

  return [values, fields];
};

export const fieldConfig = {
  ...defaultTheme,
  field: "form-group",
  input: "form-control",
  inputSuccess: "is-valid",
  inputError: "is-invalid",
  inputSmall: "form-control-sm",
  inputLarge: "form-control-lg",
  error: "invalid-feedback",
  help: "form-text text-muted"
};

export const checkboxConfig = {
  ...defaultTheme,
  field: "form-check",
  fieldInline: "form-check-inline",
  input: "form-check-input",
  label: "form-check-label"
};

export const selectConfig = {
  ...defaultTheme,
  input: "custom-select"
};

export const fileInputConfig = {
  ...defaultTheme,
  field: "custom-file mb-3",
  input: "custom-file-input",
  label: "custom-file-label"
};

export const toggleButtonConfig = {
  ...defaultTheme,
  field: "custom-control custom-switch",
  input: "custom-control-input",
  label: "custom-control-label"
};

export const config = {
  input: fieldConfig,
  dateInput: fieldConfig,
  dateTimeInput: fieldConfig,
  field: fieldConfig,
  floatInput: fieldConfig,
  integerInput: fieldConfig,
  radioGroup: checkboxConfig,
  textarea: fieldConfig,
  select: selectConfig,
  fileInput: fileInputConfig,
  checkbox: checkboxConfig,
  toggleButton: toggleButtonConfig
};

export const telephoneMask = [
  "(",
  /[1-9]/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/
];
