import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import { CATEGORIES, MEALS} from '../dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = (props) => {
    const { navigation } = props;
    
    const catId = navigation.getParam('categoryId');
    const filteredMeals = MEALS.filter(meal => meal.categoryIds.includes(catId));
    
    const renderMeals = ({item})=>{
      return (
        <MealItem
          title={item.title}
          duration={item.duration}
          affordability={item.affordability}
          complexity={item.complexity}
          bgImage={item.imageUrl}
        />
      );
    }

    return (
      <View style={styles.container}>
       <FlatList style={{width:'100%', paddingHorizontal:10}} data={filteredMeals} renderItem={renderMeals}/>
      </View>
    )
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