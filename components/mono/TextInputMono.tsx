import * as React from "react";
import { TextInput } from "react-native-paper";
import { Controller } from "react-hook-form";

const TextInputMono = ({
  name,
  onChange=()=>{},
  ...props
}: any) => {

  // No name means this component is not part of a form
  if (!name) return (
    <TextInput
      onChangeText={onChange}
      {...props}
    />
  );

  // Within form context
  return (
    <Controller
      name={name}
      render={({
        field,
        fieldState,
        formState,
      }) => {

        return (
          <TextInputForm
            onChange={onChange}
            parentProps={props}
            field={field}
            fieldState={fieldState}
          />
        );
      }}
    />
  );
};

const TextInputForm = ({
  onChange=()=>{},
  parentProps = {},
  field = {},
  fieldState = {}
}: any) => {

  const {
    onChange: onFieldChange, onBlur, value, name, ref
  } = field;

  // Form and parent change handler should be called
  const changeHandler = (fieldValue:any) => {
    onFieldChange(fieldValue);
    onChange(fieldValue);
  }

  return (
    <TextInput
      {...parentProps}
      onBlur={onBlur}
      onChangeText={changeHandler}
      inputRef={ref}
      value={value || ""}
    />
  );
}

export default TextInputMono;
