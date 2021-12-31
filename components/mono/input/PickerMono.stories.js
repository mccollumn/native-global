import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../../../storybook/stories/CenterView";
import { PickerMono } from "./PickerMono";
import { FormProviderMono } from '../form/FormProviderMono';
import { View, Text } from 'react-native';

storiesOf("Picker", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Picker", () => {
    return (
      <View style={{width: 200}}>
        <PickerMono
          label='PickerMono'
          checked={true}
        />
      </View>
    );
  })
  .add("Picker Form", () => (
    <PickerMonoForm/>
  ));

const PickerMonoForm = () => {
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
        <PickerMono
          name={'checkbox'}
          label='PickerMono'
          checked={checked}
        />
      </View>
    </FormProviderMono>
  );
};
