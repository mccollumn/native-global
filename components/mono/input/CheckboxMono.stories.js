import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../../../storybook/stories/CenterView";
import CheckboxMono from "./CheckboxMono";
import { FormProviderMono } from '../form/FormProviderMono';
import { View, Text } from 'react-native';

storiesOf("Checkbox", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Checkbox", () => {
    return (
      <View style={{width: 200}}>
        <CheckboxMono
          label='Checkbox'
          checked={true}
        />
      </View>
    );
  })
  .add("Checkbox Form", () => (
    <CheckboxForm/>
  ));

const CheckboxForm = () => {
  const [checked, setChecked] = React.useState(true);

  const onSubmit = (values={}) => {
    setChecked(!!values.checkbox);
  };

  return (
    <FormProviderMono
      containerStyles={{ width: 200 }}
      onSubmit={ onSubmit }>

      <Text>
        Form Value: {checked.toString()}
      </Text>

      <View>
        <CheckboxMono
          name={'checkbox'}
          label='Checkbox'
          checked={checked}
        />
      </View>
    </FormProviderMono>
  );
};
