import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps97422Navigator from '../features/Maps97422/navigator';
import Add-Item97421Navigator from '../features/Add-Item97421/navigator';
import Maps97417Navigator from '../features/Maps97417/navigator';
import UserProfile97413Navigator from '../features/UserProfile97413/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps97422: { screen: Maps97422Navigator },
Add-Item97421: { screen: Add-Item97421Navigator },
Maps97417: { screen: Maps97417Navigator },
UserProfile97413: { screen: UserProfile97413Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
