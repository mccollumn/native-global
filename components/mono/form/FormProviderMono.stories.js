import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../../../storybook/stories/CenterView";
import FormProviderMono from "./FormProviderMono";
import TextInputMono from "../input/TextInputMono";
import { CheckboxMono } from "../input/CheckboxMono";
import { View, Text } from "react-native";

storiesOf("Form", module)
  .addDecorator((getStory) => {
    return (
        <CenterView>
          {getStory()}
        </CenterView>
    );
  })
  .add("Form Example", () => {
    return (<FormExample/>);
  });


const FormExample = () => {
  const [values, setValues] = React.useState({});

  const onSubmit = (formValues) => {
    setValues(formValues);
  };

  const defaultValues = {
    textField1: '',
    textField2: 'Text 2 default value',
    checkbox1: true
  };

  const checkbox1Val = values.checkbox1 || false;

  console.log('values', values);

  return (

    <View style={{width: 300}}>

      <View>
        <Text>Submit Value 1: {values.textField1}</Text>
        <Text>Submit Value 2: {values.textField2}</Text>
        <Text>Checkbox Value 1: {checkbox1Val.toString()}</Text>
      </View>

      <FormProviderMono
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        submitButtonText='Submit'>

        <TextInputMono
          name="textField1"
          label="Enter text"
          helperText="Enter text here"
          rules={{
            required: 'This field is required'
          }}
        />

        <TextInputMono
          name="textField2"
          label="Enter text"
          helperText="Enter text here"
          rules={{
            required: 'This field is required'
          }}
        />

        <CheckboxMono
          label="Terms and Conditions"
          name="checkbox1"
        />

      </FormProviderMono>

    </View>
  );
};
