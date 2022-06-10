import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../storybook/stories/CenterView";
import { View, Text } from 'react-native';
import { AppLayout } from './AppLayout';
import { Login } from '../screens/Login';

storiesOf("App Layout", module)
  .addDecorator((getStory) => (
    <CenterView styles={{
      margin: 0,
      marginTop: 24
    }}>
      {getStory()}
    </CenterView>
  ))
  .add("Logged In", () => {
    return (
      <AppLayoutConsumer
        isAuthenticated={true}
      />
    );
  })
  .add("Logged Out", () => {
    return (
      <AppLayoutConsumer
        isAuthenticated={false}
      />
    );
  });

const AppLayoutConsumer = ({
  isAuthenticated,
  userAuthRoles
}) => {
  const [selectedAction, setSelectedAction] = React.useState();

  const handleNavigationSelect = (
    action, navigation, type
  ) => {
    console.log('Handling action', action, type);
    navigation.jumpTo(action.name, {});
    setSelectedAction(action);
  };

  return (
    <AppLayout
      actions={actions}
      navigationPress={handleNavigationSelect}
      selectedAction={selectedAction}
      isAuthenticated={isAuthenticated}
      userAuthRoles={userAuthRoles}
    >

      <Home
        name={'Home'}
      />

      <Search
        name={'Search'}
      />

      <Account
        name={'Account'}
      />

      <Label
        name={'Label'}
      />

      <Mail
        name={'Mail'}
      />

      <List
        name={'List'}
      />

      <Settings
        name={'Settings'}
      />

      <Feature1
        name={'Feature1'}
      />

      <Feature2
        name={'Feature2'}
      />

      <Feature3
        name={'Feature3'}
      />

      <Login
        name={'Login'}
      />

    </AppLayout>
  );
};

const actions = [
  {
    id: 'HOME',
    name: 'Home',
    accessibilityLabel: 'Home',
    icon: 'home',
    position: 'drawer',
    onPress: () => { }
  },
  {
    id: 'FEATURE1',
    name: 'Feature1',
    accessibilityLabel: 'Feature 1',
    icon: 'home',
    position: 'drawer',
    onPress: () => { }
  },
  {
    id: 'FEATURE2',
    name: 'Feature2',
    accessibilityLabel: 'Feature 2',
    icon: 'home',
    position: 'drawer',
    onPress: () => { }
  },
  {
    id: 'FEATURE3',
    name: 'Feature3',
    accessibilityLabel: 'Feature 3',
    icon: 'home',
    position: 'drawer',
    onPress: () => { }
  },
  {
    id: 'SEARCH',
    name: 'Search',
    accessibilityLabel: 'Search',
    icon: 'magnify',
    position: 'top',
    onPress: () => { }
  },
  {
    id: 'ACCOUNT',
    name: 'Account',
    accessibilityLabel: 'Account',
    icon: 'account',
    position: 'top',
    onPress: () => { },
  },
  {
    id: 'LABEL',
    name: 'Label',
    accessibilityLabel: 'Access Label',
    icon: 'label',
    position: 'bottom',
    onPress: () => { }
  },
  {
    id: 'MAIL',
    name: 'Mail',
    accessibilityLabel: 'Send Message',
    icon: 'mail',
    position: 'bottom',
    onPress: () => { },
  },
  {
    id: 'LIST',
    name: 'List',
    accessibilityLabel: 'List items',
    icon: 'format-list-bulleted',
    position: 'bottom',
    onPress: () => { },
  },
  {
    id: 'SETTINGS',
    name: 'Settings',
    accessibilityLabel: 'Settings',
    icon: 'cog',
    position: 'bottom',
    onPress: () => { },
  }
];

const Home = ({
  name,
  isAuthenticated
}) => {
  return (
    <Text>{name}</Text>
  );
};

const Search = ({
  isAuthenticated,
  userAuthRoles
}) => {
  return (
    <Text>Search</Text>
  );
};

const Account = () => {
  return (
    <Text>Account</Text>
  );
};

const Label = () => {
  return (
    <Text>Label</Text>
  );
};

const Mail = () => {
  return (
    <Text>Mail</Text>
  );
};

const List = () => {
  return (
    <Text>List</Text>
  );
};

const Settings = () => {
  return (
    <Text>Settings</Text>
  );
};

const Feature1 = () => {
  return (
    <Text>Feature1</Text>
  );
};

const Feature2 = () => {
  return (
    <Text>Feature 2</Text>
  );
};

const Feature3 = () => {
  return (
    <Text>Feature 3</Text>
  );
};
