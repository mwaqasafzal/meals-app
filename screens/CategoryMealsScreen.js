import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { CATEGORIES } from '../dummy-data';

const CategoryMealsScreen = (props) => {
    const { navigation } = props;
    
    const catId = navigation.getParam('categoryId');
    const category = CATEGORIES.find(cat => cat.id === catId);
   
    return <View style={styles.container}><Text>Category ({category.title}) Meal</Text></View>
}

CategoryMealsScreen.navigationOptions = (navigationDetail) => {
  const { navigation } = navigationDetail;

  const catId = navigation.getParam('categoryId');
  const category = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: category.title || 'Category Meal'
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
export default CategoryMealsScreen;