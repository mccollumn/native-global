import React from "react";
import { View, Text } from 'react-native';
import { useStyles } from './AppLayout.styles';
import {
  AppBarMono,
  AppBarActionProps
} from '../components/mono/navigation/AppBarMono';

export const AppLayout = ({
  topActions = [],
  bottomActions = [],
  backActionPress,
  navigationPress = () => { },
  menuActionPress = () => { },
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
      />

      {children}

      <AppBarMono
        position="bottom"
        actionPress={bottomPressHandler}
        actions={bottomActions}
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
   * All child items
   */
  children: any
}
