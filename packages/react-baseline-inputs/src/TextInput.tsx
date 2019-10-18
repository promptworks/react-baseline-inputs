import * as React from "react";
import { Field } from "./Field";
import { TextInputProps } from "./types";

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
  ...props
}) => {
  const handleChange = React.useCallback(
    event => onChange(event.target.value || null),
    [onChange]
  );

  return (
    <Field
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
