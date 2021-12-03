import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../storybook/stories/CenterView";
import TextInputMono from "./TextInputMono";

storiesOf("Text Input", module)
  //   .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("base", ({ ...props }) => {
    console.log("Text props:", props);
    return <TextInputMono />;
  })
  .add("basic", () => <div>Hello</div>);
