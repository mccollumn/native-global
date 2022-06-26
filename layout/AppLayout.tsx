import React from "react";
import { View, Text, Button } from 'react-native';
import { useStyles } from './AppLayout.styles';
import { LeftDrawerContent } from './LeftDrawerContent';
import { useNavActions } from './hooks/useNavActions';
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
  isAuthenticated,
  userAuthRoles,
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

  const {
    topNavActions,
    bottomNavActions,
    drawerNavActions
  } = useNavActions(actions, isAuthenticated);

  const childrenList = getChildrenList({
    children,
    bottomPressHandler: handleNavActionPress,
    bottomNavActions,
    selectedAction,
    isAuthenticated,
    userAuthRoles
  });

  return (

    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => (
        <LeftDrawerContent
          drawerNavActions={drawerNavActions}
          handleNavActionPress={handleNavActionPress}
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
              actionPress={handleNavActionPress}
              actions={topNavActions}
              menuActionPress={menuActionPress}
              selectedAction={selectedAction}
              displayMenuIcon={drawerNavActions.length}
            />
          )
        }
      }}
    >

      {childrenList}

    </Drawer.Navigator >

  );
};

const getChildrenList = ({
  children = [],
  bottomPressHandler,
  bottomNavActions,
  selectedAction,
  isAuthenticated,
  userAuthRoles
}: any) => {

  return React.Children.map(children, (Child => {

    const ChildComponent = ({
      navigation,
      ...props
    }: any) => {

      const clone = React.cloneElement(Child, {
        // Inject properties into Child Pages
        navigation,
        isAuthenticated,
        userAuthRoles,
      });

      return (
        <View style={{
          height: '100%',
          width: '100%'
        }}>

          <View style={{
            height: 'inherit',
            width: 'inherit'
          }}>

            {clone}

          </View>

          <AppBarMono
            position="bottom"
            actionPress={bottomPressHandler}
            actions={bottomNavActions}
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
   * If logged in user is Authenticated
   */
  isAuthenticated?: Boolean;
  /**
   * User Authorization Roles
   */
  userAuthRoles?: Array<any>;
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
