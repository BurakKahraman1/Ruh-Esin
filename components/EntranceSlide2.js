import React from "react";
import { View, StyleSheet, Text, Image, useWindowDimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const EntranceSlide2 = ({value}) => {
   const {width}=useWindowDimensions()
  return (
    <LinearGradient colors={["#dabba6", "#ff6c02"]} style={[styles.container,{width}]}>
    <View style={[styles.buttonContainer, { paddingBottom: 30 }]}>
      <Image
        style={{ left: 46, top: 10 }}
        source={require("../assets/Vector.png")}
      />
      <Image source={require("../assets/ruhesin.png")} />
    </View>
      <View style={styles.textContainer}>
            <Text style={styles.textSlider}>
                {value}.Slider
            </Text>
      </View>
      <Image
        style={{
          opacity: 0.3,
          position: "absolute",
          height: "100%",
          width: "100%",
        }}
        source={require("../assets/man.png")}
        />

<View style={styles.buttonContainer}>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer:{
    flex:2,
    justifyContent:'flex-end',
  }
  ,
  textSlider:{
    fontSize:25,
    color:'white',
    fontWeight:'700',
    textAlign:'center'
  }
});

export default EntranceSlide2;
