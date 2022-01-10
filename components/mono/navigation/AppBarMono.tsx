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
  ...props
}: AppBarMonoProps) => {

  const [selected, setSelected] = React.useState();
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

  return (
    <Appbar
      style={styles[position]}
      {...anyProps}>

      <BackAction
        onPress={backActionPress}
      />

      <MenuAction
        onPress={menuActionPress}
      />

      <View style={styles[`${position}Actions`]}>

        <BarContent
          position={position}
          actions={actions}
          selected={selected}
          setSelected={setSelected}
          actionPress={actionPress}
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
  onPress
}: any) => {

  if (!onPress) {
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
  selected,
  setSelected = () => { },
  actionPress = () => { },
}: any) => {
  if (!actions.length) {
    return null;
  }

  return actions.map((action: any, index: number) => {
    return (
      <ActionItem
        key={`action-item-${position}-${index}`}
        selected={selected}
        setSelected={setSelected}
        position={position}
        action={action}
        actionPress={actionPress}
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
  selected,
  setSelected = () => { },
  accessibilityLabel,
  style = {},
  position = "bottom",
  action = {},
  actionPress = () => {}
}: any) => {

  const theme: any = useTheme();
  let color = theme.colors[iconColor];
  const styles: any = useStyles({ style });

  if (id && id === selected) {
    color = theme.colors.accent;
  }

  const pressHandler = () => {
    actionPress(action);
    onPress(id);
    setSelected(id);
  }

  return (
    <Appbar.Action
      style={styles[`${position}ActionIcon`]}
      icon={icon}
      onPress={pressHandler}
      color={color}
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
