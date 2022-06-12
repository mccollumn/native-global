import React from "react";
import { Text, View } from 'react-native';
import FormProviderMono from "../components/mono/form/FormProviderMono";
import TextInputMono from "../components/mono/input/TextInputMono";
import { TextInput } from "react-native-paper";

export const Login = ({
  name = 'Login'
}) => {
  const [
    values,
    setValues
  ]: any = React.useState({});

  const onSubmit = (formValues: any) => {
    setValues(formValues);
  };

  const defaultValues = {
    textField1: '',
    textField2: 'Text 2 default value'
  };

  return (
    <View>

      <View>
        <Text>Submit Value 1: {values.textField1}</Text>
        <Text>Submit Value 2: {values.textField2}</Text>
      </View>

      <View>

        <FormProviderMono
          defaultValues={defaultValues}
          onSubmit={onSubmit}
          submitButtonText='Submit'>

          <View>

            <Text>Login Page</Text>

            <TextInputMono
              name="textField1"
              label="Enter text"
              helperText="Enter text here"
              rules={{
                required: 'This field is required'
              }}
            />

            {/* 

            <TextInputMono
              name="textField2"
              label="Enter text"
              helperText="Enter text here"
              rules={{
                required: 'This field is required'
              }}
            /> */}

          </View>

        </FormProviderMono>

      </View>

    </View >
  );
};
