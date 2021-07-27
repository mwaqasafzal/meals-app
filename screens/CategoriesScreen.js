import React from 'react';
import {
    FlatList,
    StyleSheet
} from 'react-native';
import { CATEGORIES } from '../dummy-data';
import CategoryTile from '../components/CategoryTile';

const CategoriesScreen = (props) => {
    const { navigation } = props;

    const renderCategories = ({ item }) => (
        <CategoryTile
            id={item.id}
            title={item.title}
            color={item.color}
            onSelect={() => navigation.navigate({
                routeName: 'CategoryMeal', params: {
                    categoryId: item.id,
                }
            })} />
    )

    return <FlatList
        data={CATEGORIES}
        renderItem={renderCategories}
        numColumns={2} />
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Categories',
}

const styles = StyleSheet.create({
  
});

export default CategoriesScreen;