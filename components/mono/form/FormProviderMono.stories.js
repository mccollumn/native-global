import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../../../storybook/stories/CenterView";
import FormProviderMono from "./FormProviderMono";
import TextInputMono from "../input/TextInputMono";
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
    textField2: 'Text 2 default value'
  };

  return (

    <View>

      <View>
        <Text>Submit Value 1: {values.textField1}</Text>
        <Text>Submit Value 2: {values.textField2}</Text>
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

      </FormProviderMono>

    </View>
  );
};
