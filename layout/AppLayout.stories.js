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
      screenMap={screenMap}
    />
  );
};

const screenMap = {
  Home: {
    component: () => <Home />
  },
  Search: {
    component: () => <Search />
  },
  Account: {
    component: () => <Account />
  }
};

const topActions = [
  {
    id: 'SEARCH',
    name: 'Search',
    accessibilityLabel: 'Search',
    icon: 'magnify',
    onPress: () => { }
  },
  {
    id: 'ACCOUNT',
    name: 'Account',
    accessibilityLabel: 'Account',
    icon: 'account',
    onPress: () => { },
  }
];

const bottomActions = [
  {
    id: 'LABEL',
    name: 'Label',
    accessibilityLabel: 'Access Label',
    icon: 'label',
    onPress: () => { }
  },
  {
    id: 'MAIL',
    name: 'Mail',
    accessibilityLabel: 'Send Message',
    icon: 'mail',
    onPress: () => { },
  },
  {
    id: 'LIST',
    name: 'List',
    accessibilityLabel: 'List items',
    icon: 'format-list-bulleted',
    onPress: () => { },
  },
  {
    id: 'SETTINGS',
    name: 'Settings',
    accessibilityLabel: 'Settings',
    icon: 'cog',
    onPress: () => { },
  }
];

const Home = () => {
  return (
    <Text>Home</Text>
  );
};

const Search = () => {
  return (
    <Text>Search</Text>
  );
};

const Account = () => {
  return (
    <Text>Account</Text>
  );
};
