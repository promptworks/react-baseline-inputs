import * as React from "react";
import { MaskedInputProps as TextMaskProps } from "react-text-mask";

export interface FieldTheme {
  field?: string | undefined;
  fieldInline?: string | undefined;
  fieldSuccess?: string | undefined;
  fieldError?: string | undefined;
  fieldTouched?: string | undefined;
  fieldLarge?: string | undefined;
  fieldSmall?: string | undefined;
  fieldDisabled?: string | undefined;

  input?: string | undefined;
  inputSuccess?: string | undefined;
  inputError?: string | undefined;
  inputTouched?: string | undefined;
  inputInline?: string | undefined;
  inputLarge?: string | undefined;
  inputSmall?: string | undefined;
  inputDisabled?: string | undefined;

  label?: string | undefined;
  labelSuccess?: string | undefined;
  labelError?: string | undefined;
  labelTouched?: string | undefined;
  labelInline?: string | undefined;
  labelLarge?: string | undefined;
  labelSmall?: string | undefined;
  labelDisabled?: string | undefined;

  help?: string | undefined;
  helpInline?: string | undefined;
  helpSmall?: string | undefined;
  helpLarge?: string | undefined;

  error?: string | undefined;
  errorInline?: string | undefined;
  errorSmall?: string | undefined;
  errorLarge?: string | undefined;
}

export interface Theme {
  input: FieldTheme;
  checkbox: FieldTheme;
  dateInput: FieldTheme;
  dateTimeInput: FieldTheme;
  field: FieldTheme;
  fileInput: FieldTheme;
  floatInput: FieldTheme;
  integerInput: FieldTheme;
  radioGroup: FieldTheme;
  select: FieldTheme;
  textarea: FieldTheme;
  toggleButton: FieldTheme;
}

export interface FieldInputProps {
  id?: string;
  inline?: boolean;
  large?: boolean;
  small?: boolean;
  touched?: boolean;
  success?: boolean;
  disabled?: boolean;
  error?: React.ReactNode;
  help?: React.ReactNode;
  label?: React.ReactNode;
  labelPosition?: "before" | "after";
  wrapper?: boolean;
  theme?: FieldTheme;
}

export interface OptionProps {
  value: string;
  label?: string;
  key?: any;
  disabled?: boolean;
}

type HTMLProps<T> = OmitConflicts<React.HTMLProps<T>>;
type OmitConflicts<T> = Omit<
  T,
  "value" | "onChange" | "label" | "multiple" | "render"
>;

export interface ValueProps<V, C = V> {
  value: V;
  onChange: (value: C) => void;
}

export interface FieldProps extends FieldInputProps {
  render: (props: object) => React.ReactNode;
}

export type CheckboxProps = FieldInputProps &
  HTMLProps<HTMLInputElement> &
  ValueProps<boolean | null>;

export type CheckboxListProps = FieldInputProps &
  HTMLProps<HTMLInputElement> &
  ValueProps<string[] | null> & {
    options?: Array<OptionProps | string>;
  };

export type DateInputProps = FieldInputProps &
  HTMLProps<HTMLInputElement> &
  ValueProps<string | null>;

export type DateTimeInputProps = FieldInputProps &
  HTMLProps<HTMLInputElement> &
  ValueProps<string | null>;

export type FileInputProps = FieldInputProps &
  HTMLProps<HTMLInputElement> & {
    value?: any;
    onChange: (value: File | null) => void;
  };

export type FileListInputProps = FieldInputProps &
  HTMLProps<HTMLInputElement> & {
    value?: any;
    onChange: (value: FileList) => void;
  };

export type FloatInputProps = FieldInputProps &
  HTMLProps<HTMLInputElement> &
  ValueProps<number | null>;

export type InputProps = FieldInputProps &
  HTMLProps<HTMLInputElement> &
  ValueProps<string | null>;

export type IntegerInputProps = FieldInputProps &
  HTMLProps<HTMLInputElement> &
  ValueProps<number | null>;

export type MaskedInputProps = FieldInputProps &
  OmitConflicts<TextMaskProps> &
  ValueProps<string | null>;

export type RadioGroupProps = FieldInputProps &
  HTMLProps<HTMLInputElement> &
  ValueProps<string | null> & {
    options?: Array<OptionProps | string>;
  };

export type SelectProps = FieldInputProps &
  HTMLProps<HTMLSelectElement> &
  ValueProps<string | null> & {
    placeholder?: string;
    options?: Array<OptionProps | string>;
  };

export type TextAreaProps = FieldInputProps &
  HTMLProps<HTMLTextAreaElement> &
  ValueProps<string | null>;

export type ToggleButtonProps = FieldInputProps &
  HTMLProps<HTMLButtonElement> &
  ValueProps<boolean | null>;
