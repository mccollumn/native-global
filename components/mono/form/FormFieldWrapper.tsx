import React from "react";
import { View, Text } from "react-native";
import { useStyles } from './FormFieldWrapper.styles';

/**
 * Wrapper for common form elements.
 * Provides spacing and helper text
 */
export const FormFieldWrapper = ({
  helperText,
  isError,
  children
}: FormFieldWrapperProps) => {

  const styles = useStyles(isError);

  return (
    <View style={styles.container}>

      {children}

      <Text style={styles.helperText}>
        {helperText}
      </Text>

    </View>
  );
}

interface FormFieldWrapperProps {
  /**
   * Text to display underneath form element
   */
  helperText?: string,
  /**
   * If form field is in an error state
   */
  isError?: boolean
  /**
   * Form element as a child
   */
  children: any,
}
