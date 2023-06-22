import React, { useRef, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import EntranceButton from "../components/EntranceButton";
import EntranceSlide1 from "../components/EntranceSlide1";
import EntranceSlide2 from "../components/EntranceSlide2";

const Entrance = ({navigation}) => {
  const [slider, setSlider] = useState(0);

  let arr = [<EntranceSlide1 />, <EntranceSlide2 value={2} />,<EntranceSlide2 value={3}/>];
  const itemChangedHandler = useRef(({ viewableItems }) => {
    setSlider(viewableItems[0].index);
  }).current;

  const NavigationHandler=()=>{
    navigation.navigate('Login')
  }

  const colorChange=slider===0? {color:'black', textColor:'white'} : {color:'white', textColor:'black'}

  return (
    <>
      <FlatList
        data={arr}
        renderItem={({ item }) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onViewableItemsChanged={itemChangedHandler}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.circleContainer}>
          {arr.map((item, index) => {
            if (index == slider) {
              return <View key={index} style={styles.selectedCircle}></View>;
            } else {
              return <View key={index} style={styles.circle}></View>;
            }
          })}
        </View>
        <EntranceButton onPress={NavigationHandler} color={colorChange.color} textColor={colorChange.textColor} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: "9%",
    left: "25%",
  },
  circle: {
    margin:4,
    borderWidth: 2,
    borderColor: "white",
    width: 9,
    height: 8,
    borderRadius: 5,
  },
  selectedCircle: {
    marginVertical:4,
    marginHorizontal:0,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "white",
    width: 16,
    height: 8,
    borderRadius: 5,
  },
  circleContainer:{
    flexDirection:'row',
    marginBottom:10
  }
  
});

export default Entrance;
