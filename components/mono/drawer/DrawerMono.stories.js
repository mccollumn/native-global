import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../../../storybook/stories/CenterView";
import { DrawerMono } from "../drawer/DrawerMono";

storiesOf("Drawer", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Drawer2", () => {
    return (
      <DrawerMono title='yoop' />
    );
  });

