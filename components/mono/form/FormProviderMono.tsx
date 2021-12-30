import React from "react";
import { View } from 'react-native';
import { useForm, FormProvider } from "react-hook-form";
import SubmitButton from '../buttons/SubmitButton';
import { styles } from './FormProviderMono.styles';

export const FormProviderMono = ({
  onSubmit = () => { },
  onError = () => { },
  submitButtonText = '',
  children,
}: FormProviderMonoProps) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>

      <View>

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
  onSubmit?: any;
  onError?: any;
  children: any;
  /**
   * Text to show on submit button
   */
  submitButtonText?: string
}
