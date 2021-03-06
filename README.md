<h1 align="center">@stackup/inputs</h1>

<div align="center">

![Build](https://github.com/promptworks/inputs/workflows/Build/badge.svg)
![Version](https://img.shields.io/npm/v/@stackup/inputs)
![Size](https://img.shields.io/bundlephobia/minzip/@stackup/inputs)
![License](https://img.shields.io/npm/l/@stackup/inputs)

</div>

A set of helpful input components that take the burden out of building forms with React.

This library depends on [@stackup/form](https://github.com/rzane/form) to manage the state
of form values.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Components](#components)
  - [Checkbox](#checkbox)
  - [CheckboxItem](#checkboxitem)
  - [FieldSet](#fieldset)
  - [FileInput](#fileinput)
  - [FileListInput](#filelistinput)
  - [Input](#input)
  - [Radio](#radio)
  - [Select](#select)
  - [Switch](#switch)
  - [TextArea](#textarea)
  - [ThemeProvider](#themeprovider)
- [Utilities](#utilities)
  - [concat](#concat)
  - [createTheme](#createtheme)
  - [formatDateTime](#formatdatetime)
  - [formatTime](#formattime)
  - [formatNumber](#formatnumber)
  - [parseDateTime](#parsedatetime)
  - [parseTime](#parsetime)
  - [parseNumber](#parsenumber)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Components

<!-- START components -->

### Checkbox

Manages the state of a boolean value using a checkbox.

In addition to the props listed below, this component accepts
all props for an HTML input.

#### Example

```jsx
<Checkbox
  label="I agree"
  help="Did you read all 7,000 lines?"
  field={useField(form, "confirmation")}
/>
```

#### Props

| Name           | Type                                  | Required | Description                                            |
| -------------- | ------------------------------------- | -------- | ------------------------------------------------------ |
| field          | `FormField<boolean>`                  | ✓        | See [@stackup/form](https://github.com/rzane/form)     |
| label          | `ReactNode`                           | ✓        | Content to appear in the label                         |
| help           | `ReactNode`                           | ✗        | Extra help info that will be rendered within the label |
| variant        | `string \| boolean \| FieldVariant[]` | ✗        | Variant class name to append to all elements           |
| prepend        | `ReactNode`                           | ✗        | Content to render before the input                     |
| append         | `ReactNode`                           | ✗        | Content to render after the input                      |
| className      | `string`                              | ✗        | An additional class name for the field                 |
| inputClassName | `string`                              | ✗        | An additional class name for the input                 |
| labelClassName | `string`                              | ✗        | An additional class name for the label                 |
| helpClassName  | `string`                              | ✗        | An additional class name for the help                  |
| errorClassName | `string`                              | ✗        | An additional class name for the error                 |
| innerRef       | `Ref<HTMLInputElement>`               | ✗        | A ref to the input element                             |

### CheckboxItem

Manages an array of values, represented by checkboxes.

In addition to the props listed below, this component accepts
all props for an HTML input.

Note that this component will not render error messages. For that, you'll
want to wrap your checkboxes in a FieldSet.

#### Example

```jsx
<FieldSet legend="Sport" field={useField(form, "sport")}>
  <CheckboxItem
    label="Soccer"
    value={{ name: "Soccer" }}
    field={useField(form, "sport")}
  />
  <CheckboxItem
    label="Baseball"
    value={{ name: "Baseball" }}
    field={useField(form, "sport")}
  />
</FieldSet>
```

#### Props

| Name           | Type                                  | Required | Description                                            |
| -------------- | ------------------------------------- | -------- | ------------------------------------------------------ |
| value          | `Value`                               | ✓        | Toggle the inclusion of this value in the array.       |
| field          | `FormField<Value[]>`                  | ✓        | See [@stackup/form](https://github.com/rzane/form)     |
| label          | `ReactNode`                           | ✓        | Content to appear in the label                         |
| help           | `ReactNode`                           | ✗        | Extra help info that will be rendered within the label |
| variant        | `string \| boolean \| FieldVariant[]` | ✗        | Variant class name to append to all elements           |
| prepend        | `ReactNode`                           | ✗        | Content to render before the input                     |
| append         | `ReactNode`                           | ✗        | Content to render after the input                      |
| className      | `string`                              | ✗        | An additional class name for the field                 |
| inputClassName | `string`                              | ✗        | An additional class name for the input                 |
| labelClassName | `string`                              | ✗        | An additional class name for the label                 |
| helpClassName  | `string`                              | ✗        | An additional class name for the help                  |
| errorClassName | `string`                              | ✗        | An additional class name for the error                 |
| innerRef       | `Ref<HTMLInputElement>`               | ✗        | A ref to the input element                             |

### FieldSet

Fields that are composed of multiple components (e.g. Radio and CheckboxItem)
should always be rendered within a fieldset.

If an error is associated with the field, it will be rendered within the
fieldset, rather than on a Radio or CheckboxItem.

#### Example

```jsx
<FieldSet legend="Sport" field={useField(form, "sport")}>
  <Radio
    label="Soccer"
    value={{ name: "Soccer" }}
    field={useField(form, "sport")}
  />
  <Radio
    label="Baseball"
    value={{ name: "Baseball" }}
    field={useField(form, "sport")}
  />
</FieldSet>
```

#### Props

| Name            | Type                                  | Required | Description                                        |
| --------------- | ------------------------------------- | -------- | -------------------------------------------------- |
| field           | `FormField<any>`                      | ✓        | See [@stackup/form](https://github.com/rzane/form) |
| legend          | `ReactNode`                           | ✓        | Content to appear in the legend                    |
| help            | `ReactNode`                           | ✗        | Extra help info                                    |
| children        | `ReactNode`                           | ✗        | Content that should appear inside the fieldset     |
| variant         | `string \| boolean \| FieldVariant[]` | ✗        | Variant class name to append to all elements       |
| className       | `string`                              | ✗        | An additional class name for the fieldset          |
| legendClassName | `string`                              | ✗        | An additional class name for the legend            |
| helpClassName   | `string`                              | ✗        | An additional class name for the help              |
| errorClassName  | `string`                              | ✗        | An additional class name for the error             |

### FileInput

Renders an `<input type="file" />`.

In addition to the props listed below, this component accepts
all props for an HTML input.

#### Example

```jsx
<FileInput label="Image" field={useField(form, "image")} />
```

#### Props

| Name           | Type                                  | Required | Description                                            |
| -------------- | ------------------------------------- | -------- | ------------------------------------------------------ |
| field          | `FormField<File>`                     | ✓        | See [@stackup/form](https://github.com/rzane/form)     |
| label          | `ReactNode`                           | ✓        | Content to appear in the label                         |
| help           | `ReactNode`                           | ✗        | Extra help info that will be rendered within the label |
| variant        | `string \| boolean \| FieldVariant[]` | ✗        | Variant class name to append to all elements           |
| prepend        | `ReactNode`                           | ✗        | Content to render before the input                     |
| append         | `ReactNode`                           | ✗        | Content to render after the input                      |
| className      | `string`                              | ✗        | An additional class name for the field                 |
| inputClassName | `string`                              | ✗        | An additional class name for the input                 |
| labelClassName | `string`                              | ✗        | An additional class name for the label                 |
| helpClassName  | `string`                              | ✗        | An additional class name for the help                  |
| errorClassName | `string`                              | ✗        | An additional class name for the error                 |
| innerRef       | `Ref<HTMLInputElement>`               | ✗        | A ref to the input element                             |

### FileListInput

Renders an `<input type="file" multiple />`.

In addition to the props listed below, this component accepts
all props for an HTML input.

#### Example

```jsx
<FileListInput label="Images" field={useField(form, "images")} />
```

#### Props

| Name           | Type                                  | Required | Description                                            |
| -------------- | ------------------------------------- | -------- | ------------------------------------------------------ |
| field          | `FormField<FileList>`                 | ✓        | See [@stackup/form](https://github.com/rzane/form)     |
| label          | `ReactNode`                           | ✓        | Content to appear in the label                         |
| help           | `ReactNode`                           | ✗        | Extra help info that will be rendered within the label |
| variant        | `string \| boolean \| FieldVariant[]` | ✗        | Variant class name to append to all elements           |
| prepend        | `ReactNode`                           | ✗        | Content to render before the input                     |
| append         | `ReactNode`                           | ✗        | Content to render after the input                      |
| className      | `string`                              | ✗        | An additional class name for the field                 |
| inputClassName | `string`                              | ✗        | An additional class name for the input                 |
| labelClassName | `string`                              | ✗        | An additional class name for the label                 |
| helpClassName  | `string`                              | ✗        | An additional class name for the help                  |
| errorClassName | `string`                              | ✗        | An additional class name for the error                 |
| innerRef       | `Ref<HTMLInputElement>`               | ✗        | A ref to the input element                             |

### Input

Renders an `<input />`, which whatever type you provide.

The value of this input will always be a string, but you should use a
validation library such as [@stackup/validate](https://github.com/rzane/validate)
to parse and validate the entry before submission.

In addition to the props listed below, this component accepts
all props for an HTML input.

#### Example

```jsx
<Input type="email" label="Email" field={useField(form, "email")} />
```

#### Props

| Name           | Type                                  | Required | Description                                            |
| -------------- | ------------------------------------- | -------- | ------------------------------------------------------ |
| type           | `InputType`                           | ✗        |                                                        |
| field          | `FormField<string>`                   | ✓        | See [@stackup/form](https://github.com/rzane/form)     |
| label          | `ReactNode`                           | ✓        | Content to appear in the label                         |
| help           | `ReactNode`                           | ✗        | Extra help info that will be rendered within the label |
| variant        | `string \| boolean \| FieldVariant[]` | ✗        | Variant class name to append to all elements           |
| prepend        | `ReactNode`                           | ✗        | Content to render before the input                     |
| append         | `ReactNode`                           | ✗        | Content to render after the input                      |
| className      | `string`                              | ✗        | An additional class name for the field                 |
| inputClassName | `string`                              | ✗        | An additional class name for the input                 |
| labelClassName | `string`                              | ✗        | An additional class name for the label                 |
| helpClassName  | `string`                              | ✗        | An additional class name for the help                  |
| errorClassName | `string`                              | ✗        | An additional class name for the error                 |
| innerRef       | `Ref<HTMLInputElement>`               | ✗        | A ref to the input element                             |

### Radio

Renders an `<input type="radio" />` and manages the state of any type of value.

Note that this component will not render error messages. For that, you'll
want to wrap your radio options in a FieldSet.

In addition to the props listed below, this component accepts
all props for an HTML input.

#### Example

```jsx
<FieldSet legend="Sport" field={useField(form, "sport")}>
  <Radio
    label="Soccer"
    value={{ name: "Soccer" }}
    field={useField(form, "sport")}
  />
  <Radio
    label="Baseball"
    value={{ name: "Baseball" }}
    field={useField(form, "sport")}
  />
</FieldSet>
```

#### Props

| Name           | Type                                  | Required | Description                                            |
| -------------- | ------------------------------------- | -------- | ------------------------------------------------------ |
| value          | `Value`                               | ✓        | The value of the option to be selected                 |
| field          | `FormField<Value>`                    | ✓        | See [@stackup/form](https://github.com/rzane/form)     |
| label          | `ReactNode`                           | ✓        | Content to appear in the label                         |
| help           | `ReactNode`                           | ✗        | Extra help info that will be rendered within the label |
| variant        | `string \| boolean \| FieldVariant[]` | ✗        | Variant class name to append to all elements           |
| prepend        | `ReactNode`                           | ✗        | Content to render before the input                     |
| append         | `ReactNode`                           | ✗        | Content to render after the input                      |
| className      | `string`                              | ✗        | An additional class name for the field                 |
| inputClassName | `string`                              | ✗        | An additional class name for the input                 |
| labelClassName | `string`                              | ✗        | An additional class name for the label                 |
| helpClassName  | `string`                              | ✗        | An additional class name for the help                  |
| errorClassName | `string`                              | ✗        | An additional class name for the error                 |
| innerRef       | `Ref<HTMLInputElement>`               | ✗        | A ref to the input element                             |

### Select

Renders a `<select />` tag with whatever options you provide.

You can provide a placeholder, which will render a disabled option
with a blank value.

In addition to the props listed below, this component accepts
all props for an HTML select.

#### Example

```jsx
<Select
  label="Sport"
  placeholder="Choose a sport"
  field={useField(form, "sport")}
>
  <option value="baseball">Baseball</option>
  <option value="soccer">Soccer</option>
</Select>
```

#### Props

| Name           | Type                                  | Required | Description                                            |
| -------------- | ------------------------------------- | -------- | ------------------------------------------------------ |
| placeholder    | `string`                              | ✗        |                                                        |
| field          | `FormField<string>`                   | ✓        | See [@stackup/form](https://github.com/rzane/form)     |
| label          | `ReactNode`                           | ✓        | Content to appear in the label                         |
| help           | `ReactNode`                           | ✗        | Extra help info that will be rendered within the label |
| variant        | `string \| boolean \| FieldVariant[]` | ✗        | Variant class name to append to all elements           |
| prepend        | `ReactNode`                           | ✗        | Content to render before the input                     |
| append         | `ReactNode`                           | ✗        | Content to render after the input                      |
| className      | `string`                              | ✗        | An additional class name for the field                 |
| inputClassName | `string`                              | ✗        | An additional class name for the input                 |
| labelClassName | `string`                              | ✗        | An additional class name for the label                 |
| helpClassName  | `string`                              | ✗        | An additional class name for the help                  |
| errorClassName | `string`                              | ✗        | An additional class name for the error                 |
| innerRef       | `Ref<HTMLSelectElement>`              | ✗        | A ref to the input element                             |

### Switch

Renders a `<button />` to toggle the state of a boolean value.

You can style this element with CSS by selecting the `[aria-checked]`
value.

In addition to the props listed below, this component accepts
all props for an HTML button.

#### Example

```jsx
<Switch type="enabled" label="Show preview" field={useField(form, "enabled")} />
```

#### Props

| Name           | Type                                  | Required | Description                                            |
| -------------- | ------------------------------------- | -------- | ------------------------------------------------------ |
| field          | `FormField<boolean>`                  | ✓        | See [@stackup/form](https://github.com/rzane/form)     |
| label          | `ReactNode`                           | ✓        | Content to appear in the label                         |
| help           | `ReactNode`                           | ✗        | Extra help info that will be rendered within the label |
| variant        | `string \| boolean \| FieldVariant[]` | ✗        | Variant class name to append to all elements           |
| prepend        | `ReactNode`                           | ✗        | Content to render before the input                     |
| append         | `ReactNode`                           | ✗        | Content to render after the input                      |
| className      | `string`                              | ✗        | An additional class name for the field                 |
| inputClassName | `string`                              | ✗        | An additional class name for the input                 |
| labelClassName | `string`                              | ✗        | An additional class name for the label                 |
| helpClassName  | `string`                              | ✗        | An additional class name for the help                  |
| errorClassName | `string`                              | ✗        | An additional class name for the error                 |
| innerRef       | `Ref<HTMLButtonElement>`              | ✗        | A ref to the input element                             |

### TextArea

Renders a `<textarea />`.

In addition to the props listed below, this component accepts
all props for an HTML input.

#### Example

```jsx
<TextArea type="comment" label="Comment" field={useField(form, "comment")} />
```

#### Props

| Name           | Type                                  | Required | Description                                            |
| -------------- | ------------------------------------- | -------- | ------------------------------------------------------ |
| field          | `FormField<string>`                   | ✓        | See [@stackup/form](https://github.com/rzane/form)     |
| label          | `ReactNode`                           | ✓        | Content to appear in the label                         |
| help           | `ReactNode`                           | ✗        | Extra help info that will be rendered within the label |
| variant        | `string \| boolean \| FieldVariant[]` | ✗        | Variant class name to append to all elements           |
| prepend        | `ReactNode`                           | ✗        | Content to render before the input                     |
| append         | `ReactNode`                           | ✗        | Content to render after the input                      |
| className      | `string`                              | ✗        | An additional class name for the field                 |
| inputClassName | `string`                              | ✗        | An additional class name for the input                 |
| labelClassName | `string`                              | ✗        | An additional class name for the label                 |
| helpClassName  | `string`                              | ✗        | An additional class name for the help                  |
| errorClassName | `string`                              | ✗        | An additional class name for the error                 |
| innerRef       | `Ref<HTMLTextAreaElement>`            | ✗        | A ref to the input element                             |

### ThemeProvider

Render a `ThemeProvider` at the top of your component tree
to provide a global theme.

See `createTheme` for an example of how to define your theme.

#### Example

```jsx
<ThemeProvider value={theme}>
  <App />
</ThemeProvider>
```

<!-- END components -->

## Utilities

### concat

Concatenate multiple class names.

```javascript
concat("field", touched && error && "field--invalid");
```

### createTheme

Create a new theme. This can be used in combination with the
[ThemeProvider](#themeprovider) to apply class names to fields.

```javascript
export const theme = createTheme({
  field: props => {
    return concat(
      "field",
      props.touched && props.error && "field--invalid",
      ...props.types.map(type => `field--${type}`),
      ...props.variants.map(variant => variant && `field--${variant}`)
    );
  }
});
```

### formatDateTime

Convert ISO-8601 to `input[type=datetime-local]`. This can be used to populate
the initial value for your inputs.

When given an invalid value, this function will throw an error.

```javascript
formatDateTime("2020-07-08T16:30:00.000Z");
```

### formatTime

Convert ISO-8601 to `input[type=time]`. This can be used to populate
the initial value for your inputs.

When given an invalid value, this function will throw an error.

```javascript
formatTime("08:28:00Z");
```

### formatNumber

Convert a number to `input[type=number]`. This can be used to populate
the initial value for your inputs.

When given an invalid value, this function will throw an error.

```javascript
formatNumber(0);
```

### parseDateTime

Convert `input[type=datetime-local]` to ISO-8601. This can be used to parse and validate
information entered by the user.

When given an invalid value, this function will return `undefined`.

```javascript
parseDateTime("2020-07-08T12:30");
```

### parseTime

Convert `input[type=time]` to ISO-8601. This can be used to parse and validate
information entered by the user.

When given an invalid value, this function will return `undefined`.

```javascript
parseTime("04:28");
```

### parseNumber

Convert `input[type=number]` to a number. This can be used to parse and validate
information entered by the user.

When given an invalid value, this function will return `undefined`.

```javascript
parseNumber("1");
```
