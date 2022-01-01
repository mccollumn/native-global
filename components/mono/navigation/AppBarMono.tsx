import React from "react";
import { Appbar } from 'react-native-paper';
import { useStyles } from './AppBarMono.styles';

export const AppBarMono = ({
  style = {},
  position = 'bottom',
  actions = [],
  ...props
}: AppBarMonoProps) => {
  const styles: any = useStyles();

  // Cast props to any to avoid typescript errors
  const anyProps: any = props;

  return (
    <Appbar
      style={{
        ...styles[position],
        ...style
      }}
      {...anyProps}>

      <BarContent
        actions={actions}
      />

    </Appbar>
  );
};

const BarContent = ({
  actions = []
}: any) => {
  if(!actions.length) {
    return null;
  }

  return actions.map((action: any) => (
    <ActionItem {...action} />
  ));
};

const ActionItem = ({
  icon,
  onPress = () => {}
}: any) => {
  return (
    <Appbar.Action
      icon={icon}
      onPress={onPress}
      color={'white'}
    />
  )
}

export interface AppBarMonoProps {
  /**
   * Css style on element
   */
  position?: 'top' | 'bottom';
  /**
   * Actions to add to bar
   */
  actions?: Array<AppBarActionProps>;
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
  icon: string,
  onPress: any
}
