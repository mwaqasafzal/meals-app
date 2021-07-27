import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const MealItem = ({ title, duration, affordability, complexity, bgImage }) => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.row, ...styles.header }}>
        <ImageBackground style={styles.backgroundImage} source={{ uri: bgImage }}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{ ...styles.row, ...styles.details }}>
        <Text>{duration}m</Text>
        <Text>{affordability.toUpperCase()}</Text>
        <Text>{complexity.toUpperCase()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: "100%",
    // padding: 10
  },
  row: {
    flexDirection: "row",
  },
  header: {
    height: "85%",
    backgroundColor: "#f5f5f5",
    // justifyContent: 'flex-end
    // alignItems:'flex-end'
  },
  details: {
    height: '15%',
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems:'center'
  },
  backgroundImage: {
      height: '100%',
      width: '100%',
      justifyContent: 'flex-end'
  },
  title: {
      fontSize: 22,
      color: '#ffffff',
      fontFamily: 'open-sans-bold',
      textAlign: 'center'
  },
  titleContainer: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: 5,
    //   flex: 1
  }
});
export default MealItem;
