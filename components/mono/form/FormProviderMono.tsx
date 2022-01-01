import React from "react";
import { View } from 'react-native';
import { useForm, FormProvider } from "react-hook-form";
import SubmitButton from '../buttons/SubmitButton';
import { styles } from './FormProviderMono.styles';

export const FormProviderMono = ({
  onSubmit = () => { },
  onError = () => { },
  submitButtonText = 'Submit',
  containerStyles = {},
  defaultValues = {},
  children,
}: FormProviderMonoProps) => {

  const methods = useForm({
    defaultValues
  });

  return (
    <FormProvider {...methods}>

      <View style={containerStyles}>

        <View>
          {children}
        </View>

        <View style={styles.container}>

          <SubmitButton
            onError={onError}
            onSubmit={onSubmit}>

            {submitButtonText}

          </SubmitButton>

        </View>

      </View>

    </FormProvider>
  );
}

export default FormProviderMono;

interface FormProviderMonoProps {
  /**
   * Called on form submit
   */
  onSubmit?: any;
  /**
   * Called on form error
   */
  onError?: any;
  /**
   * Text to show on submit button
   */
  submitButtonText?: string;
  /**
   * Base form object
   * Form elements will be populated based on this object
   */
  defaultValues?: Object;
  /**
   * Styles for wrapping container
   */
  containerStyles?: Object;
  /**
   * All child elements
   */
  children: any;
}
