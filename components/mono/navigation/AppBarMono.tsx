import React from "react";
import { Appbar } from 'react-native-paper';
import { useStyles } from './AppBarMono.styles';
import { useTheme } from 'react-native-paper';

export const AppBarMono = ({
  style = {},
  position = 'bottom',
  color = 'primary',
  actions = [],
  ...props
}: AppBarMonoProps) => {

  const [selected, setSelected]  = React.useState();
  const styles: any = useStyles(color, style);

  // Cast props to any to avoid typescript errors
  const anyProps: any = props;

  if(!actions.length) {
    return null;
  }

  return (
    <Appbar
      style={styles[position]}
      {...anyProps}>

      <BarContent
        position={position}
        actions={actions}
        selected={selected}
        setSelected={setSelected}
      />

    </Appbar>
  );
};

/**
 * List of Bar Action items
 */
const BarContent = ({
  actions = [],
  position,
  selected,
  setSelected = () => {}
}: any) => {
  if (!actions.length) {
    return null;
  }

  return actions.map((action: any, index: number) => (
    <ActionItem
      key={`action-item-${position}-${index}`}
      selected={selected}
      setSelected={setSelected}
      {...action} />
  ));
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
  accessibilityLabel
}: any) => {

  const theme: any = useTheme();
  let color = theme.colors[iconColor];

  if (id === selected) {
    color = theme.colors.accent;
  }

  const pressHandler = () => {
    onPress(id);
    setSelected(id);
  }

  return (
    <Appbar.Action
      style={{
        marginHorizontal: 24
      }}
      icon={icon}
      onPress={pressHandler}
      color={color}
      accessibilityLabel={accessibilityLabel}
    />
  )
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
}
