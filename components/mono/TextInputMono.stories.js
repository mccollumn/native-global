import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../../storybook/stories/CenterView";
import TextInputMono from "./TextInputMono";
import {View, Text} from 'react-native';

storiesOf("Text Input", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("base", () => {
    return (
      <TextInputMono />
    );
  })
  .add("basic", () => (
    <View>
      <Text>
        Hello
      </Text>
    </View>
  ));
