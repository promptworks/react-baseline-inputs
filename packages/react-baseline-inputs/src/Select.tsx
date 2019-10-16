import * as React from "react";
import { CustomInputProps } from "./types";
import { Field } from "./Field";

export interface SelectOption extends React.HTMLProps<HTMLOptionElement> {
  value: string;
  label: string;
  key?: any;
}

export interface SelectProps extends CustomInputProps<"select", string | null> {
  placeholder?: string;
  options: Array<SelectOption | string>;
}

const getOptionProps = ({
  label: _label,
  value,
  key = value,
  ...option
}: SelectOption) => ({
  key,
  value,
  ...option
});

/**
 * An HTML `<select />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It accepts a `placeholder`.
 *   * It allows you to pass in an array of options.
 */
export const Select: React.FC<SelectProps> = ({
  onChange,
  options,
  placeholder,
  value,
  label = false,
  wrap = true,
  ...props
}) => {
  const handleChange = React.useCallback(
    event => onChange(event.target.value),
    [onChange]
  );

  return (
    <Field
      label={label}
      render={inputProps => (
        <select
          {...inputProps}
          value={value === null ? "" : value}
          onChange={handleChange}
        >
          {placeholder && (
            <option disabled value="" key="placeholder">
              {placeholder}
            </option>
          )}

          {options.map(option =>
            typeof option === "string" ? (
              <option value={option} key={option}>
                {option}
              </option>
            ) : (
              <option {...getOptionProps(option)}>{option.label}</option>
            )
          )}
        </select>
      )}
      {...props}
    />
  );
};
