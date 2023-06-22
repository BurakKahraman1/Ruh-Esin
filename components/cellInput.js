import { View, TextInput, StyleSheet } from "react-native";
import React from "react";

const CellInput = ({ cellRef, onChange }) => {
  return (
    <View style={styles.cell}>
      <TextInput
        onChange={onChange}
        ref={cellRef}
        keyboardType="numeric"
        maxLength={1}
        style={{ textAlign: "center", fontSize: 16, color:'black' }}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    marginBottom: 10,
    height: 48,
    width: 48,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    borderRadius: 5,
  },
});

export default CellInput;
