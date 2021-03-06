import * as React from "react";
import { FieldProps, Attributes } from "./types";
import { useFieldProps } from "./useFieldProps";

export interface TextAreaProps
  extends FieldProps<string, HTMLTextAreaElement>,
    Attributes<"textarea"> {}

/**
 * Renders a `<textarea />`.

 * In addition to the props listed below, this component accepts
 * all props for an HTML input.
 *
 * #### Example
 *
 * ```jsx
 * <TextArea
 *   type="comment"
 *   label="Comment"
 *   field={useField(form, "comment")}
 * />
 * ```
 */
export function TextArea(props: TextAreaProps) {
  const {
    field,
    label,
    help,
    error,
    append,
    prepend,
    render,
    getFieldProps,
    getLabelProps,
    getErrorProps,
    getHelpProps,
    ...inputProps
  } = useFieldProps(props, ["textarea"]);

  const { value, setValue } = field;
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      {render("textarea", { ...inputProps, value, onChange })}
      {append}
      {error && <span {...getErrorProps()}>{error}</span>}
    </div>
  );
}
