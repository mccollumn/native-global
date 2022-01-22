import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../storybook/stories/CenterView";
import { View, Text } from 'react-native';
import { AppLayout, AppNavigation } from './AppLayout';

storiesOf("App Layout", module)
  .addDecorator((getStory) => (
    <CenterView styles={{
      margin: 0,
      marginTop: 24
    }}>
      {getStory()}
    </CenterView>
  ))
  .add("Layout", () => {
    return (
      <AppLayoutConsumer/>
    );
  })
  .add("Navigation", () => {
    return (
      <AppNavigation/>
    );
  });

//AppNavigation

const AppLayoutConsumer = ({
  
}) => {
  const [selectedAction, setSelectedAction] = React.useState();

  const handleNavigationSelect = (action, type) => {
    console.log('Handling action', action, type);
    setSelectedAction(action);
  };

  return (
    <AppLayout
      topActions={topActions}
      bottomActions={bottomActions}
      navigationPress={handleNavigationSelect}
      selectedAction={selectedAction}
    />
  );
};

const topActions = [
  {
    id: 'SEARCH',
    accessibilityLabel: 'Search',
    icon: 'magnify',
    onPress: () => { }
  },
  {
    id: 'ACCOUNT',
    accessibilityLabel: 'Account',
    icon: 'account',
    onPress: () => { },
  }
];

const bottomActions = [
  {
    id: 'LABEL',
    accessibilityLabel: 'Access Label',
    icon: 'label',
    onPress: () => { }
  },
  {
    id: 'MAIL',
    accessibilityLabel: 'Send Message',
    icon: 'mail',
    onPress: () => { },
  },
  {
    id: 'LIST',
    accessibilityLabel: 'List items',
    icon: 'format-list-bulleted',
    onPress: () => { },
  },
  {
    id: 'SETTING',
    accessibilityLabel: 'Settings',
    icon: 'cog',
    onPress: () => { },
  }
];
