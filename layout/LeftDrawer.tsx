import React from "react";
import { View, Text } from 'react-native';
import { Drawer } from 'react-native-paper';

export const LeftDrawer = ({
  drawerNavActions = [],
  drawerPressHandler = () => { },
  navigation,
  selectedAction,
  ...props
}: any) => {

  const DrawerContent = drawerNavActions.map((action: any) => {

    const pressHandler = () => {
      if (typeof action.onPress === 'function') {
        action.onPress(action, navigation);
      }

      drawerPressHandler(action, navigation);
    }

    return (
      <Drawer.Item
        onPress={pressHandler}
        label={action.accessibilityLabel}
        key={action.accessibilityLabel}
        active={selectedAction === action}
      />

    );
  })

  return (
    <Drawer.Section>
      {DrawerContent}
    </Drawer.Section>
  )
}
