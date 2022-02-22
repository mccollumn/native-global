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

      </Drawer.Navigator>

    </>
  );
};

const Feed = ({
  navigation,
  moreText = ''
}: any) => {

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

  const childrenList = getChildrenList(
    children,
    bottomPressHandler,
    bottomActions,
    selectedAction
  );

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

      {childrenList}

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

const getChildrenList = (
  children: any = [],
  bottomPressHandler: any,
  bottomActions: any,
  selectedAction: any
) => {

  return React.Children.map(children, (Child => {

    const ChildComponent = ({navigation}:any) => {
      const clone = React.cloneElement(Child, { navigation });

      return (
        <View>

          <View style={{
            height: '100%'
          }}>

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
          ({ navigation }) => <ChildComponent
                                navigation={navigation}
                                moreText='hello' />
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
