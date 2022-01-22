import React from 'react';
import { Drawer } from 'react-native-paper';

export const DrawerMono = ({
  title,
  ...props
}: DrawerMonoProps) => {
  return (
    <Drawer.Section
      title={title}>

      <Drawer.Item
        label="poot"
      />

    </Drawer.Section>
  );
}

interface DrawerMonoProps {
  /**
   * Title at tope of drawer
   */
  title: string;
  /**
   * All other types
   */
  [x: string]: any;
}
