import React from 'react';
import 
    {
        TouchableOpacity, 
        TouchableNativeFeedback, 
        View, 
        Text, 
        StyleSheet,
        Platform
    } from 'react-native';

const CategoryTile = (props)=>{
    const {title, id, color, onSelect} = props;
    let TouchableCmp = TouchableOpacity;
    if(Platform.OS === "android" && Platform.Version >= 28) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.categoryTile}>
            <TouchableCmp
                // style={{h}}
                onPress={onSelect}>
                <View style={{...styles.container, backgroundColor: color}}>
                    <Text 
                        style={styles.title}
                        numberOfLines={2}>{title}</Text>
                </View>
            </TouchableCmp>
        </View>
    );
}

const styles = StyleSheet.create({
    categoryTile: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 12,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 15,
        borderRadius: 12,
        elevation: 5,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    }
})

export default CategoryTile;