import * as React from "react";
import { CustomInputProps } from "./types";
import { Field } from "./Field";

export type TextInputProps = CustomInputProps<"input", string | null>;

/**
 * An HTML `<input />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It defaults to `type="text"`.
 *   * It emits a `null` value to the `onChange` handler when the input is empty.
 */
export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  label = false,
  wrap = true,
  ...props
}) => {
  const handleChange = React.useCallback(
    event => onChange(event.target.value || null),
    [onChange]
  );

  return (
    <Field
      label={label}
      render={inputProps => (
        <input
          {...inputProps}
          type="text"
          value={value || ""}
          onChange={handleChange}
        />
      )}
      {...props}
    />
  );
};
