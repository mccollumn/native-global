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

      {children}

      <AppBarMono
        actions={bottomActions}
      />

    </View >
  )
};

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
