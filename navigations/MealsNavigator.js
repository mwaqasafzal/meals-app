import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import * as utils from '../utils'

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeal:CategoryMealScreen,
    MealDetail: MealDetailScreen
}, {
    // initialRouteName: 'MealDetail',
    defaultNavigationOptions: {
        headerStyle: utils.getHeaderStyle(),
        headerTintColor: utils.getHeaderTintColor()
    }   
});

export default createAppContainer(MealsNavigator);