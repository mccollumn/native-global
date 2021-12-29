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

  return (

    <View>

      <View>
        <Text>Submit Value: {values.Mono}</Text>
      </View>

      <FormProviderMono
        onSubmit={onSubmit}
        submitButtonText='Submit'>

        <TextInputMono
          name="Mono"
          label="Enter text"
          helperText="Enter text here"
        />

      </FormProviderMono>

    </View>
  );
};
