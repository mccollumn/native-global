import React from "react";
import { View, Text } from 'react-native';
import { useStyles } from './AppLayout.styles';
import { AppBarMono } from '../components/mono/navigation/AppBarMono';

export const AppLayout = ({
  children
}: any) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>

      <AppBarMono
        position="top"
        //backActionPress={() => { }}
        menuActionPress={() => { }}
        actions={topActions}
      />

      {children}

      <AppBarMono
        position="bottom"
        actions={bottomActions}
      />

    </View >
  )
};

const topActions = [
  {
    id: 'SEARCH',
    accessibilityLabel: 'Search',
    icon: 'magnify',
    onPress: () => { }
  },
  {
    id: 'MAIL',
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
  }
];
