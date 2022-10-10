import * as React from "react";
import { TextInput } from "react-native-paper";
import { Controller } from "react-hook-form";
import { FormFieldWrapper } from '../form/FormFieldWrapper';

/**
 * Standard Text Input field from React Paper
 */
export const TextInputMono = ({
  name,
  onChange = () => { },
  mode,
  style = {},
  helperText,
  rules,
  ...props
}: TextInputMonoProps) => {

  const inputProps = {
    mode,
    helperText,
    ...props
  };

  // No name means this component is not part of a form
  if (!name) return (
    <TextInputMonoContainer
      onChangeText={onChange}
      {...inputProps}
    />
  );

  // Within form context
  return (
    <Controller
      name={name}
      rules={rules}
      render={({
        field,
        fieldState,
        formState,
      }) => {

        return (
          <TextInputForm
            onChange={onChange}
            parentProps={inputProps}
            field={field}
            fieldState={fieldState}
            helperText={helperText}
          />
        );
      }}
    />
  );
};

const TextInputForm = ({
  onChange = () => { },
  parentProps = {},
  field = {},
  fieldState = {},
  helperText
}: any) => {

  const {
    onChange: onFieldChange, onBlur, value, name, ref
  } = field;

  const {
    error = {}
  } = fieldState;

  // Form and parent change handler should be called
  const changeHandler = (fieldValue: any) => {
    onFieldChange(fieldValue);
    onChange(fieldValue);
  }

  return (
    <TextInputMonoContainer
      {...parentProps}
      onBlur={onBlur}
      onChangeText={changeHandler}
      inputRef={ref}
      value={value || ""}
      helperText={error.message || helperText}
      isError={!!error.message}
    />
  );
}

const TextInputMonoContainer = ({
  helperText,
  isError,
  ...props
}: any) => {

  return (
    <FormFieldWrapper
      isError={isError}
      helperText={helperText}>

      <TextInput
        {...props}
        error={isError}
      />

    </FormFieldWrapper>
  );
}

interface TextInputMonoProps {
  /**
   * Display label
   */
  label?: string;
  /**
   * Text to display below element
   */
  helperText?: string;
  /**
   * Name of input element in form state
   */
  name?: string;
  /**
   * Handle Change
   */
  onChange?: Function;
  /**
   * Type of visual mode to display
   */
  mode?: 'flat' | 'outlined';
  /**
   * Css style on element
   */
  style?: Object;
  /**
   * React-hook-form validation rules
   */
  rules?: any;
  /**
   * All other types
   */
  [x: string]: any;
}

export default TextInputMono;
