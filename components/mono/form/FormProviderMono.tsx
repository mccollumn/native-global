import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

export default function FormProviderMono({
  onSubmit = () => {},
  children,
}: FormProviderMonoProps) {
  const methods = useForm();
  const submitHandler = (data: any) => {
    console.log(data);
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitHandler)}>{children}</form>
    </FormProvider>
  );
}

interface FormProviderMonoProps {
  onSubmit: any;
  children: any;
}
