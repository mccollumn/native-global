import React from "react";
import { Button } from 'react-native-paper';
import { useFormContext } from "react-hook-form";

/**
 * Submit button that works with react-hook-forms
 */
export const SubmitButton = ({
  onSubmit = () => { },
  onError = () => { },
  children,
  ...props
}: any) => {

  const {
    handleSubmit
  } = useFormContext();

  return (
    <Button
      mode="contained"
      aria-label="submit"
      onPress={handleSubmit(onSubmit, onError)}
      {...props}>

      {children}

    </Button>
  );
}

export default SubmitButton;
