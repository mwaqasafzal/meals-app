import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const CategoryMealScreen = (props) => {
    const {navigation} = props;
    return (<View style={styles.container}>
                <Text>Category Meal Screen</Text>
                <Button title="Go to Meal Detail" onPress={()=>navigation.push('MealDetail')}/>
            </View>);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
export default CategoryMealScreen;