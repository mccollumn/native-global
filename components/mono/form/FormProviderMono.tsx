import React from "react";
import { View } from 'react-native';
import { useForm, FormProvider } from "react-hook-form";
import SubmitButton from '../buttons/SubmitButton';
import { styles } from './FormProviderMono.styles';

export default function FormProviderMono({
  onSubmit = () => { },
  submitButtonText='',
  children,
}: FormProviderMonoProps) {
  const methods = useForm();

  return (
    <FormProvider {...methods}>

      <View>

        <View style={styles.container}>
          {children}
        </View>

        <View style={styles.container}>

          <SubmitButton
            onSubmit={onSubmit}>
            {submitButtonText}
          </SubmitButton>

        </View>

      </View>

    </FormProvider>
  );
}

interface FormProviderMonoProps {
  onSubmit: any;
  children: any;
  /**
   * Text to show on submit button
   */
  submitButtonText: string
}
