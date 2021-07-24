import React from 'react';
import {View, Text,Button, StyleSheet} from 'react-native';

const CategoriesScreen = (props) => {
    console.log(props)
    const {navigation} = props;
    return (<View style={styles.container}>
                <Text>Categories Screen</Text>
                <Button title="Open CategoryMeals" onPress={()=>navigation.push('CategoryMeal')}/>
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

export default CategoriesScreen;