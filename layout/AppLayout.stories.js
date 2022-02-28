import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../storybook/stories/CenterView";
import { View, Text } from 'react-native';
import { AppLayout } from './AppLayout';

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
  });

const AppLayoutConsumer = ({
  
}) => {
  const [selectedAction, setSelectedAction] = React.useState();

  const handleNavigationSelect = (action, navigation, type) => {
    console.log('Handling action', action, type);
    navigation.jumpTo(action.name, {});
    setSelectedAction(action);
  };

  return (
    <AppLayout
      topActions={topActions}
      bottomActions={bottomActions}
      navigationPress={handleNavigationSelect}
      selectedAction={selectedAction}
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

    </AppLayout>
  );
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

const Home = ({name}) => {
  return (
    <Text>Home {name}</Text>
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
