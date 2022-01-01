import React from "react";
import { View, Text } from 'react-native';
import { useStyles } from './AppLayout.styles';
import { AppBarMono } from '../components/mono/navigation/AppBarMono';

export const AppLayout = ({

}) => {
  const styles = useStyles();

  const actions = [
    {
      icon: 'label',
      onPress: () => {}
    },
    {
      icon: 'mail',
      onPress: () => {}
    },
    {
      icon: 'menu',
      onPress: () => {}
    }
  ];

  return (
    <View style={styles.container}>
      <AppBarMono actions={actions} />

      <Text>
        Sup Main App Layout
      </Text>
    </View >
  )
};
