import React from "react";
import { View, Text, Button } from 'react-native';
import { useStyles } from './AppLayout.styles';
import { LeftDrawer } from './LeftDrawer';
import {
  AppBarMono,
  AppBarActionProps
} from '../components/mono/navigation/AppBarMono';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export const AppLayout = ({
  actions = [],
  backActionPress,
  navigationPress = () => { },
  menuActionPress = () => { },
  selectedAction,
  children
}: AppLayoutProps) => {
  const styles = useStyles();

  const handleNavActionPress = (
    action: any,
    navigation: any,
    navType: 'top' | 'bottom' | 'drawer'
  ) => {
    navigationPress(action, navigation, navType);
  }

  const topPressHandler = (
    action: any,
    navigation: any
  ) => {
    handleNavActionPress(action, navigation, 'top');
  };

  const bottomPressHandler = (
    action: any,
    navigation: any
  ) => {
    handleNavActionPress(action, navigation, 'bottom');
  };

  const drawerPressHandler = (
    action: any,
    navigation: any
  ) => {
    handleNavActionPress(action, navigation, 'drawer');
  };

  const topNavActions = actions.filter(
    a => a.position === 'top'
  );
  const bottomNavActions = actions.filter(
    a => a.position === 'bottom'
  );

  const drawerNavActions = actions.filter(
    a => !['top', 'bottom'].includes(a.position || '')
  );

  const childrenList = getChildrenList(
    children,
    bottomPressHandler,
    bottomNavActions,
    selectedAction
  );

  return (

    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => (
        <LeftDrawer
          drawerNavActions={drawerNavActions}
          drawerPressHandler={drawerPressHandler}
          selectedAction={selectedAction}
          {...props}
        />
      )}
      screenOptions={{
        header: ({ navigation }) => {
          return (
            <AppBarMono
              navigation={navigation}
              position="top"
              backActionPress={backActionPress}
              actionPress={topPressHandler}
              actions={topNavActions}
              menuActionPress={menuActionPress}
              selectedAction={selectedAction}
            />
          )
        }
      }}
    >

      {childrenList}

    </Drawer.Navigator >

  );
};

const getChildrenList = (
  children: any = [],
  bottomPressHandler: any,
  bottomActions: any,
  selectedAction: any
) => {

  return React.Children.map(children, (Child => {

    const ChildComponent = ({navigation, ...props}:any) => {

      const clone = React.cloneElement(Child, { navigation });

      return (
        <View style={{
          height: '100%',
        }}>

          <View>

            {clone}

          </View>

          <AppBarMono
            position="bottom"
            actionPress={bottomPressHandler}
            actions={bottomActions}
            selectedAction={selectedAction}
            navigation={navigation}
          />

        </View>
      )
    };

    return (
      <Drawer.Screen
        key={`screen-${Child.props.name}`}
        name={Child.props.name}
      >

        {
          ({ navigation }) => (
            <ChildComponent
              navigation={navigation}
            />)
        }

      </Drawer.Screen>
    );
  }));
}

interface AppLayoutProps {
  /**
   * Action icons to add to top navigation bar
   * Top navigation bar will not be populated if this is empty
   */
  actions?: Array<AppBarActionProps>;
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
  children: React.FC<AppChild>[]
}

export interface AppChild {
  /**
   * Name of element to display in Navigation
   */
  name: String;
  props: Object
}
