import * as inputs from "../src";

test("exports", () => {
  expect(Object.keys(inputs).sort()).toEqual([
    "Checkbox",
    "DateInput",
    "DateTimeInput",
    "FileInput",
    "FloatInput",
    "IntegerInput",
    "Select",
    "TextArea",
    "TextInput"
  ]);
});