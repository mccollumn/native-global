import * as React from "react";
import { TextInput } from "react-native-paper";
import { Controller } from "react-hook-form";
import { View, Text } from "react-native";
import { useStyles } from './TextInputMono.styles';

/**
 * Standard Text Input field from React Paper
 * @param onChange - Function called when user changes text
 * @param props
 * @param mode - Type of input style: 'flat' | 'outlined';
 */
export const TextInputMono = ({
  name,
  onChange=()=>{},
  mode,
  style={},
  helperText,
  ...props
}: any) => {

  const styles = useStyles();

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

  // Form and parent change handler should be called
  const changeHandler = (fieldValue:any) => {
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
      helperText={helperText}
    />
  );
}

const TextInputMonoContainer = ({
  helperText,
  ...props
}: any) => {

  const styles = useStyles();


  return (
    <View style={styles.container}>
      <TextInput
        {...props}
      />

      <Text style={styles.helperText}>
        {helperText}
      </Text>

    </View>
  );
}

export default TextInputMono;
