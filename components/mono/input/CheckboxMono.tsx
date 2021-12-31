import * as React from "react";
import { Checkbox } from "react-native-paper";
import { Controller } from "react-hook-form";
import { FormFieldWrapper } from '../form/FormFieldWrapper';
import { useStyles } from './CheckboxMono.styles';

/**
 * Standard Checkbox form field from React Paper
 */
export const CheckboxMono = ({
  name,
  onChange = () => { },
  checked = false,
  style = {},
  rules,
  label,
  ...props
}: CheckboxMonoProps) => {

  const [isChecked, setIsChecked] = React.useState(checked);

  // Update check status if parent status is changed
  React.useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const inputProps = {
    label,
    onChange,
    isChecked,
    setIsChecked,
    ...props
  };

  // No name means this component is not part of a form
  if (!name) return (
    <CheckboxMonoContainer
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
          <CheckboxMonoForm
            onChange={onChange}
            parentProps={inputProps}
            field={field}
            fieldState={fieldState}
          />
        );
      }}
    />
  );
};

const CheckboxMonoForm = ({
  onChange = () => {},
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

  // Set defaut value from form if not set
  React.useEffect(() => {
    if(value === undefined) {
      onFieldChange(parentProps.isChecked);
    }
  }, [parentProps.isChecked, value]);

  return (
    <CheckboxMonoContainer
      {...parentProps}
      onBlur={onBlur}
      onChange={changeHandler}
      inputRef={ref}
      helperText={error.message || helperText}
      isError={!!error.message}
      isChecked={value || false}
    />
  );
}

const CheckboxMonoContainer = ({
  onChange = () => { },
  isChecked,
  setIsChecked,
  isError,
  label,
  style,
  helperText,
  ...props
}: any) => {

  const styles = useStyles(isError);

  const changeHandler = () => {
    const checkedVal = !isChecked;
    setIsChecked(checkedVal);
    onChange(checkedVal);
  };

  return (
    <FormFieldWrapper
      isError={isError}>

      <Checkbox.Item
        onPress={changeHandler}
        status={STATUS[isChecked]}
        label={label}
        style={{
          ...styles.checkBox,
          ...style
        }}
        error={isError}
        {...props}
      />

    </FormFieldWrapper>
  );
}

// Checked state to bool
const STATUS: any = {
  false: 'unchecked',
  true: 'checked'
}

interface CheckboxMonoProps {
  /**
   * Display label
   */
  label?: string;
  /**
   * Name of input element in form state
   */
  name?: string;
  /**
   * Handle checkbox status changed
   */
  onChange?: Function;
  /**
   * If checkbox is checked or not
   */
  checked?: Boolean;
  /**
   * Css style on element
   */
  style?: Object;
  /**
   * React-hook-form validation rules
   */
  rules?: any;
}

export default CheckboxMono;
