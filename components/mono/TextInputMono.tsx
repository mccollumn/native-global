import * as React from "react";
import { TextInput } from "react-native-paper";
import { Controller } from "react-hook-form";

const TextInputMono = ({ name, ...props }: any) => {
  if (!name) return <TextInput {...props} />;
  return (
    <Controller
      name={name}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => {
        return (
          <TextInput
            {...props}
            onBlur={onBlur}
            onChange={onChange}
            inputRef={ref}
            value={value || ""}
          />
        );
      }}
    />
  );
};

export default TextInputMono;
