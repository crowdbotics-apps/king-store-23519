import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList187671Navigator from '../features/ArticleList187671/navigator';
import ArticleList187670Navigator from '../features/ArticleList187670/navigator';
import BlankScreen19187664Navigator from '../features/BlankScreen19187664/navigator';
import ArticleList187647Navigator from '../features/ArticleList187647/navigator';
import ArticleList187646Navigator from '../features/ArticleList187646/navigator';
import ArticleList187645Navigator from '../features/ArticleList187645/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList187671: { screen: ArticleList187671Navigator },
ArticleList187670: { screen: ArticleList187670Navigator },
BlankScreen19187664: { screen: BlankScreen19187664Navigator },
ArticleList187647: { screen: ArticleList187647Navigator },
ArticleList187646: { screen: ArticleList187646Navigator },
ArticleList187645: { screen: ArticleList187645Navigator },

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
