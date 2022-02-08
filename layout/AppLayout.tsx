import React from "react";
import { View, Text, Button } from 'react-native';
import { useStyles } from './AppLayout.styles';
import {
  AppBarMono,
  AppBarActionProps
} from '../components/mono/navigation/AppBarMono';
import {
  DrawerItem,
  DrawerContentScrollView,
  createDrawerNavigator,
  DrawerContent,
  DrawerItemList,
  DrawerNavigationProp
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {
  //Drawer
} from 'react-native-paper';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
    <>

      <Drawer.Navigator
        initialRouteName="Details"
        screenOptions={{
          header: (props) => {
            console.log('Me Header Props', props);

            return (
              <View><Text>ddd</Text></View>
            )
          }
        }}>

        <Drawer.Screen
          name="Feed"
          component={Feed}
        />

        <Drawer.Screen
          name="Details"
          component={Details}
        />

      </Drawer.Navigator>

    </>
  );
};

const CustomDrawerContent = (props:any) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Feed = ({
  navigation,
  moreText = ''
}: any) => {
  console.log('In Feed', navigation);

  // This example is how we redirect
  React.useEffect(() => {
    //navigation.push('Details');
  }, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'aqua'
      }}>

      <Text>
        Feed Me Now {moreText}
      </Text>

      <Button
        title="Open drawer"
        onPress={() => navigation.openDrawer()}
      />

      <Button
        title="Toggle drawer"
        onPress={() => navigation.toggleDrawer()}
      />

    </View>
  );
};

const Details = ({
  navigation
}:any) => {
  return (
    <View>

      <Text>
        Details Me Fool
      </Text>

      <Button
        title="Open drawer"
        onPress={() => navigation.openDrawer()}
      />

      <Button
        title="Toggle drawer"
        onPress={() => navigation.toggleDrawer()}
      />

    </View>
  );
};

export const AppLayout = ({
  topActions = [],
  bottomActions = [],
  backActionPress,
  navigationPress = () => { },
  menuActionPress = () => { },
  selectedAction,
  screenMap,
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


  const screenList = getScreenList(screenMap);

  return (

    <Drawer.Navigator
      initialRouteName="Details"
      screenOptions={{
        header: ({ navigation }) => {
          return (
            <AppBarMono
              navigation={navigation}
              position="top"
              backActionPress={backActionPress}
              actionPress={topPressHandler}
              actions={topActions}
              menuActionPress={menuActionPress}
              selectedAction={selectedAction}
            />
          )
        }
      }}
    >

      <Drawer.Screen
        name="Feed"
      >

        {({ navigation }) => <Feed
          navigation={navigation}
          moreText='hello' />}
      </Drawer.Screen>

      <Drawer.Screen
        name="Details"
        component={Details}
      />

      {screenList}

      {/* <AppBarMono
          position="bottom"
          actionPress={bottomPressHandler}
          actions={bottomActions}
          selectedAction={selectedAction}
        /> */}

    </Drawer.Navigator >


  );
};

const getScreenList = (
  screenMap: Object = {}
) => {

  return Object.entries(screenMap)
               .map(([key, value={}], index) => {
                 return (
                   <Drawer.Screen
                     key={`screen-${index}`}
                     name={key}
                     component={value.component}
                   />
                 );
               });
}

interface AppLayoutProps {
  /**
   * Map of all pages within the app
   */
  screenMap: Object;
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
