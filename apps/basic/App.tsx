import "./App.css";
import "react-app-polyfill/stable";

import * as React from "react";
import * as ReactDOM from "react-dom";

import {
  Checkbox,
  DateInput,
  DateTimeInput,
  FileInput,
  FloatInput,
  TextInput,
  IntegerInput,
  Select,
  TextArea
} from "react-baseline-inputs";

interface Values {
  boolean: boolean | null;
  date: string | null;
  datetime: string | null;
  file: File | null;
  files: FileList | null;
  float: number | null;
  integer: number | null;
  select: string | null;
  string: string | null;
  text: string | null;
}

const App = () => {
  const [values, setValues] = React.useState<Values>({
    boolean: null,
    date: null,
    datetime: null,
    file: null,
    files: null,
    float: null,
    integer: null,
    select: null,
    string: null,
    text: null
  });

  function handleChange<K extends keyof Values>(key: K) {
    return (value: Values[K]) => {
      const nextValues = { ...values, [key]: value };
      console.log(nextValues);
      setValues(nextValues);
    };
  }

  return (
    <div className="App">
      <header>
        <h1>React Baseline Inputs</h1>
      </header>

      <main>
        <TextInput
          label="Text Input"
          name="string"
          value={values.string}
          onChange={handleChange("string")}
        />

        <Select
          label="Select"
          name="string"
          value={values.select}
          onChange={handleChange("select")}
          options={["One", "Two", "Three"]}
        />

        <IntegerInput
          label="IntegerInput"
          name="Integer"
          value={values.integer}
          onChange={handleChange("integer")}
        />

        <FloatInput
          label="FloatInput"
          name="float"
          value={values.float}
          onChange={handleChange("float")}
        />

        <DateInput
          label="DateInput"
          name="date"
          value={values.date}
          onChange={handleChange("date")}
        />

        <DateTimeInput
          label="DateTimeInput"
          name="datetime"
          value={values.datetime}
          onChange={handleChange("datetime")}
        />

        <FileInput
          label="FileInput"
          name="file"
          value={values.file}
          onChange={handleChange("file")}
        />

        <FileInput
          label="Files"
          name="file"
          value={values.files}
          onChange={handleChange("files")}
          multiple
        />

        <TextArea
          label="TextArea"
          name="text"
          value={values.text}
          onChange={handleChange("text")}
        />

        <Checkbox
          label="Checkbox"
          name="boolean"
          value={values.boolean}
          onChange={handleChange("boolean")}
        />
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
