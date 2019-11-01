import { FieldTheme, Theme } from "../types";

const fieldTheme: FieldTheme = {
  field: "form-group",
  input: "form-control",
  inputSuccess: "is-valid",
  inputError: "is-invalid",
  inputSmall: "form-control-sm",
  inputLarge: "form-control-lg",
  error: "invalid-feedback",
  help: "form-text text-muted"
};

const checkboxTheme: FieldTheme = {
  ...fieldTheme,
  field: "form-check",
  fieldInline: "form-check-inline",
  input: "form-check-input",
  label: "form-check-label"
};

const selectTheme: FieldTheme = {
  ...fieldTheme,
  input: "custom-select"
};

const fileInputTheme: FieldTheme = {
  ...fieldTheme,
  field: "custom-file",
  input: "custom-file-input",
  label: "custom-file-label"
};

const toggleButtonTheme: FieldTheme = {
  ...fieldTheme,
  field: "custom-control custom-switch",
  input: "custom-control-input",
  label: "custom-control-label"
};

export const bootstrapTheme: Theme = {
  input: fieldTheme,
  dateInput: fieldTheme,
  dateTimeInput: fieldTheme,
  field: fieldTheme,
  floatInput: fieldTheme,
  integerInput: fieldTheme,
  radioGroup: checkboxTheme,
  textarea: fieldTheme,
  select: selectTheme,
  fileInput: fileInputTheme,
  checkbox: checkboxTheme,
  toggleButton: toggleButtonTheme
};
