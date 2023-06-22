import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const EntranceButton = ({ color, textColor, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable
      onPress={onPress}
        style={
          ({ pressed }) => (pressed ? styles.buttonPressed : null)
        }
      >
        <View style={[styles.pressableContainer, { backgroundColor: color }]}>
          <Text style={[{ fontSize: 18, fontWeight: "600", color: textColor }]}>
            Ruh Eşimi Bul!
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    minWidth:199,
    height: 44,
    borderRadius: 30,
    elevation: 4,
    overflow:'hidden'
  },
  buttonPressed: {
    opacity: 0.8,
  },
  pressableContainer:{
    width: 199,
    height: 44,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default EntranceButton;
