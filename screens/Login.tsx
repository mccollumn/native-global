import React from "react";
import { Text, View } from 'react-native';
import FormProviderMono from "../components/mono/form/FormProviderMono";
import TextInputMono from "../components/mono/input/TextInputMono";

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
    username: '',
    password: ''
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <FormProviderMono
          defaultValues={defaultValues}
          onSubmit={onSubmit}
          submitButtonText='Login'>

          <View>

            <Text
              style={{
                fontSize: '24px',
                alignSelf: 'center',
                marginBottom: '24px'
              }}>
              Login Page
            </Text>

            <TextInputMono
              name="username"
              label="Username or Email"
              rules={{
                required: 'This field is required'
              }}
            />

            <TextInputMono
              name="password"
              label="Password"
              secureTextEntry={true}
              rules={{
                required: 'This field is required'
              }}
            />

          </View>

        </FormProviderMono>

    </View >
  );
};
