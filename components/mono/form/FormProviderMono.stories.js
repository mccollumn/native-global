import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../../../storybook/stories/CenterView";
import FormProviderMono from "./FormProviderMono";
import TextInputMono from "../TextInputMono";
import { View, Text } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

storiesOf("Form", module)
  .addDecorator((getStory) => {
    return (
      <PaperProvider theme={DefaultTheme}>
        <CenterView>
          {getStory()}
        </CenterView>
      </PaperProvider>
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
        />

      </FormProviderMono>

    </View>
  );
};
