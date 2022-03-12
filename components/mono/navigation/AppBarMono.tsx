import React from "react";
import { Appbar } from 'react-native-paper';
import { useStyles } from './AppBarMono.styles';
import { useTheme } from 'react-native-paper';
import { View } from 'react-native';

/**
 * Application bar for top and bottom of page
 * https://callstack.github.io/react-native-paper/appbar.html
 */
export const AppBarMono = ({
  style = {},
  position = 'bottom',
  color = 'primary',
  actions = [],
  backActionPress,
  menuActionPress,
  actionPress,
  selectedAction,
  navigation = {},
  ...props
}: AppBarMonoProps) => {

  const styles: any = useStyles({color, style});

  // Cast props to any to avoid typescript errors
  const anyProps: any = props;

  // Hide menu if these conditions are not met
  const displayMenu = [
    !!actions.length,
    !!backActionPress,
    !!menuActionPress
  ].some(s => s);

  if (!displayMenu) {
    return null;
  }

  const toggleDrawer = () => {
    menuActionPress();
    navigation.toggleDrawer();
  }

  return (
    <Appbar
      style={styles[position]}
      {...anyProps}>

      <BackAction
        onPress={backActionPress}
      />

      <MenuAction
        onPress={toggleDrawer}
        position={position}
      />

      <View style={styles[`${position}Actions`]}>

        <BarContent
          position={position}
          actions={actions}
          actionPress={actionPress}
          selectedAction={selectedAction}
          navigation={navigation}
        />

      </View>

    </Appbar>
  );
};

const BackAction = ({
  onPress
}: any) => {

  const theme: any = useTheme();

  if (!onPress) {
    return null;
  }

  return (
    <Appbar.BackAction
      onPress={onPress}
      accessibilityLabel="Back"
      color={theme.colors.surface}
    />
  );
}

const MenuAction = ({
  onPress,
  position
}: any) => {

  if (!onPress || position === 'bottom') {
    return null;
  }

  return (
    <View>
      <ActionItem
        icon="menu"
        accessibilityLabel="Menu"
        onPress={onPress}
        style={{ }}
      />
    </View>
  );
}

/**
 * List of Bar Action items
 */
const BarContent = ({
  actions = [],
  position,
  actionPress = () => { },
  selectedAction,
  navigation = { }
}: any) => {
  if (!actions.length) {
    return null;
  }

  return actions.map((action: any, index: number) => {
    return (
      <ActionItem
        key={`action-item-${position}-${index}`}
        position={position}
        action={action}
        actionPress={actionPress}
        selectedAction={selectedAction}
        navigation={navigation}
        {...action}
      />
    );
  });
};

/**
 * Single Action Item
 */
const ActionItem = ({
  icon,
  iconColor = 'surface',
  id,
  onPress = () => { },
  accessibilityLabel,
  style = {},
  position = "bottom",
  action = {},
  actionPress = () => {},
  selectedAction,
  navigation = {}
}: any) => {

  const theme: any = useTheme();
  let color = theme.colors[iconColor];
  const styles: any = useStyles({ style });
  const isSelected = (action === selectedAction);

  if (isSelected) {
    color = theme.colors.accent;
  }

  const pressHandler = () => {
    actionPress(action, navigation);
    onPress(id);
  }

  return (
    <Appbar.Action
      style={styles[`${position}ActionIcon`]}
      icon={icon}
      onPress={pressHandler}
      color={color}
      testID={`${accessibilityLabel}-${isSelected}`}
      accessibilityLabel={accessibilityLabel}
    />
  )
}

export interface AppBarActionProps {
  /**
   * Identifier for selected action item
   */
  id: string,
  /**
   * Name of material icon to choose
   * https://materialdesignicons.com/
   */
  icon: string,
  /**
   * Label for accessibility
   */
  accessibilityLabel: string,
  /**
   * Icon press action
   */
  onPress?: any,
  /**
   * Where to place the action
   * Left Nav Drawer
   * Top App Bar
   * Bottom App Bar
   * Default: left
   */
  position?: 'left' | 'top' | 'bottom';
  /**
   * Which theme icon color to use
   */
  iconColor?: string | 'primary' | 'background' | 'surface' | 'accent' | 'error' | 'text' | 'onSurface' | 'disabled' | 'placeholder' | 'backdrop' | 'notification',
  /**
   * Css style on icon
   */
  style?: Object;
}

export interface AppBarMonoProps {
  /**
   * Css style on element
   */
  position ?: 'top' | 'bottom';
  /**
   * Actions to add to bar
   */
  actions?: Array<AppBarActionProps>;
  /**
   * Display a back button and handle action
   */
  backActionPress?: any;
  /**
   * Display menu icon and handle press
   */
  menuActionPress?: any;
  /**
   * Return the action was pressed
   */
  actionPress?: Function;
  /**
   * Navigation action currently in a selected state
   */
  selectedAction?: Object;
  /**
   * Navigation type from @react-navigation/drawer
   * Currrently can't get type to work
   *  import {
   *      DrawerNavigationProp
   *  } from '@react-navigation/drawer';
   */
  navigation: any
  /**
   * Which theme color to use
   */
  color?: 'primary' | 'background' | 'surface' | 'accent' | 'error' | 'text' | 'onSurface' | 'disabled' | 'placeholder' | 'backdrop' | 'notification';
  /**
   * Css style on element
   */
  style?: Object;
  /**
   * All other types
   */
  [x: string]: any;
}
