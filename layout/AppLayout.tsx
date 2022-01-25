import React from "react";
import { View, Text } from 'react-native';
import { useStyles } from './AppLayout.styles';
import {
  AppBarMono,
  AppBarActionProps
} from '../components/mono/navigation/AppBarMono';
import {
  DrawerItem,
  DrawerContentScrollView,
  createDrawerNavigator
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const AppNavigation = ({
  topActions = [],
  bottomActions = [],
  backActionPress,
  navigationPress = () => { },
  menuActionPress = () => { },
  selectedAction,
  children
}: AppLayoutProps) => {

  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{ headerTitle: 'Twitter' }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerTitle: 'Tweet' }}
      />
    </Stack.Navigator>
  );
};

const Feed = ({
  navigation
}:any) => {
  console.log('dsfsd', navigation);

  // This example is how we redirect
  React.useEffect(() => {
    navigation.push('Details');
  }, [])

  return (
    <Text>
      Feed Me
    </Text>
  );
};

const Details = () => {
  return (
    <Text>
      Details Me
    </Text>
  );
};

export const AppLayout = ({
  topActions = [],
  bottomActions = [],
  backActionPress,
  navigationPress = () => { },
  menuActionPress = () => { },
  selectedAction,
  children
}: AppLayoutProps) => {
  const styles = useStyles();

  const handleNavActionPress = (
    action: any,
    navType: 'top' | 'bottom' | 'drawer'
  ) => {
    navigationPress(action, navType);
  }

  const topPressHandler = (action: any) => {
    handleNavActionPress(action, 'top');
  };

  const bottomPressHandler = (action: any) => {
    handleNavActionPress(action, 'bottom');
  };

  return (
    <View style={styles.container}>

      <AppBarMono
        position="top"
        backActionPress={backActionPress}
        actionPress={topPressHandler}
        actions={topActions}
        menuActionPress={menuActionPress}
        selectedAction={selectedAction}
      />

      {children}

      <AppBarMono
        position="bottom"
        actionPress={bottomPressHandler}
        actions={bottomActions}
        selectedAction={selectedAction}
      />

    </View >
  )
};

interface AppLayoutProps {
  /**
   * Action icons to add to top navigation bar
   * Top navigation bar will not be populated if this is empty
   */
  topActions?: Array<AppBarActionProps>;
  /**
   * Will display a back arrow in the top left of top App bar
   * This will be run on user press
   */
  backActionPress?: Function;
  /**
   * Action icons to add to bottom navigation bar
   * Bottom navigation bar will not be populated if this is empty
   */
  bottomActions?: Array<AppBarActionProps>;
  /**
   * Returns the action that was pressed by the user
   */
  navigationPress?: Function;
  /**
   * Display menu icon on top left and returns on open drawer
   */
  menuActionPress?: Function;
  /**
   * Navigation action currently in a selected state
   */
  selectedAction?: Object;
  /**
   * All child items
   */
  children: any
}
