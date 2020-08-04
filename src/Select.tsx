import * as React from "react";
import { FieldProps, Attributes } from "./types";
import { useFieldProps } from "./useFieldProps";

export interface SelectProps
  extends FieldProps<string, HTMLSelectElement>,
    Attributes<"select"> {
  placeholder?: string;
  children?: React.ReactNode;
}

/**
 * Renders a `<select />` tag with whatever options you provide.
 *
 * You can provide a placeholder, which will render a disabled option
 * with a blank value.
 *
 * In addition to the props listed below, this component accepts
 * all props for an HTML select.
 *
 * #### Example
 *
 * ```jsx
 * <Select
 *   label="Sport"
 *   placeholder="Choose a sport"
 *   field={useField(form, "sport")}
 * >
 *   <option value="baseball">Baseball</option>
 *   <option value="soccer">Soccer</option>
 * </Select>
 * ```
 */
export function Select(props: SelectProps) {
  const {
    field,
    label,
    help,
    error,
    append,
    prepend,
    placeholder,
    children,
    getFieldProps,
    getLabelProps,
    getErrorProps,
    getHelpProps,
    ...inputProps
  } = useFieldProps(props, ["select"]);

  const { value, setValue } = field;

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setValue(event.target.value);
    },
    [setValue]
  );

  return (
    <div {...getFieldProps()}>
      <label {...getLabelProps()}>
        {label}
        {help && <span {...getHelpProps()}>{help}</span>}
      </label>
      {prepend}
      <select {...inputProps} value={value} onChange={onChange}>
        {placeholder && (
          <option disabled value="" key="placeholder">
            {placeholder}
          </option>
        )}
        {children}
      </select>
      {append}
      {error && <span {...getErrorProps()}>{error}</span>}
    </div>
  );
}
