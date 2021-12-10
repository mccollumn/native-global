import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../../../storybook/stories/CenterView";
import FormProviderMono from "./FormProviderMono";
import TextInputMono from "../TextInputMono";
import { View } from "react-native";
import { useFormContext } from "react-hook-form";

storiesOf("Form", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Basic Example", () => {
    const NestedInput = () => {
      const { register } = useFormContext();
      return (
        <View style={{ backgroundColor: "pink" }}>
          <input {...register("test")} />
        </View>
      );
    };
    return (
      <View>
        <FormProviderMono>
          <NestedInput />
          <TextInputMono name="Mono" />
          <input type="submit" />
        </FormProviderMono>
      </View>
    );
  });
