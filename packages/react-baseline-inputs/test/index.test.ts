import * as inputs from "../src";

test("exports", () => {
  expect(Object.keys(inputs).sort()).toEqual([
    "Checkbox",
    "CheckboxList",
    "DateInput",
    "DateTimeInput",
    "Field",
    "FileInput",
    "FileListInput",
    "FloatInput",
    "Input",
    "IntegerInput",
    "MaskedInput",
    "RadioGroup",
    "Select",
    "TextArea",
    "ThemeContext",
    "ThemeProvider",
    "ToggleButton",
    "defaultFieldTheme",
    "defaultTheme",
    "useTheme"
  ]);
});
