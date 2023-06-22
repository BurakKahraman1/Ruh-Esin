import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import LinearGradient from "react-native-linear-gradient";

const EntranceSlide1 = () => {
    const {width}=useWindowDimensions()

  return (
 
    <LinearGradient colors={["#dabba6", "#EE7822"]} style={[styles.container,{width}]}>
    <View style={[styles.buttonContainer, { paddingBottom: 30 }]}>
      <Image
        style={{ left: 46, top: 10 }}
        source={require("../assets/Vector.png")}
      />
      <Image source={require("../assets/ruhesin.png")} />
    </View>
      <View style={styles.buttonContainer}>
        <Image style={{position:'absolute'}} source={require("../assets/Ellipse.png")} />
        <Image style={{position:'absolute',right:60, top:-60}} source={require("../assets/kiz.png")} />
        <Image style={{position:'absolute',left:30}} source={require("../assets/erkek.png")} />
        <Image style={{position:'absolute',left:40, bottom:-20}} source={require("../assets/Rectangle.png")} />
        <Text style={[{position:'absolute',left:60, bottom:-14},styles.imageFont]}>#Flört</Text>
        <Image style={{position:'absolute',right:40, bottom:-30}} source={require("../assets/Rectangle2.png")} />
        <Text style={[{position:'absolute',right:60, bottom:-20, transform: [{ rotate: '10deg' }]},styles.imageFont]}>#Evlilik</Text>
        <Image style={{position:'absolute',bottom:-80}} source={require("../assets/Rectangle3.png")} />
        <Text style={[{position:'absolute',bottom:-73, color:'white'},styles.imageFont]}>%100 Eşleşme</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.Text}>Birbirinizi tamamlamanızı</Text>
          <Text style={[styles.Text, { fontWeight: "900" }]}>
            sağlayacak %100{" "}
          </Text>
          <Text style={styles.Text}>oranında eşleşmeler!</Text>
        </View>
      </View>
       
      <View style={styles.buttonContainer}>
      </View>
    </LinearGradient>
    
    
  
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    buttonContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      color: "white",
      fontSize: 36,
      fontWeight: "bold",
    },
    textContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: 260,
      marginTop: 100,
    },
    imageFont:{
      fontWeight:500,
      fontSize:16,
      lineHeight:23,
      textAlign:'center'
    },
    Text: {
      fontWeight: "500",
      fontSize: 18,
      lineHeight: 27,
      textAlign: "center",
      color: "white",
    },
  });
  

export default EntranceSlide1