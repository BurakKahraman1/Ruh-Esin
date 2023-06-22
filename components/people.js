import {
  View,
  Image,
  StyleSheet,
  Pressable,
  Text,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";

const People = ({
  imageUrl,
  imageUrl2,
  name,
  age,
  distance,
  percentage,
  instruction,
}) => {
  const [slider, setSlider] = useState(0);
  const { width } = useWindowDimensions();

  let arr = [1, 2, 3];

  const photoChanger = () => {
    if (slider === 2) {
      setSlider(0);
    } else {
      setSlider((prev) => prev + 1);
    }
  };

  

  return (
    <View style={{ width: width - 32}}>
      <Pressable onPress={photoChanger} style={styles.imageContainer}>
        {slider !== 1 && <Image source={imageUrl} />}
        {slider === 1 && <Image  source={imageUrl2} />}
        <Image
          style={{ position: "absolute", right: 20, top: 16 }}
          source={require("../assets/home/image-title.png")}
        />
        <View style={styles.informationContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "white",
                fontWeight: "800",
                fontSize: 20,
                lineHeight: 30,
              }}
            >
              {name}, {age}
            </Text>
            <Image
              id="12"
              style={[
                { width: 22, height: 18, marginLeft: 8, marginTop: 7 },
                instruction === 1 ? { tintColor: "white", zIndex: 20 } : null,
              ]}
              source={require("../assets/home/like.png")}
            />
          </View>
          <View style={{ flexDirection: "row", marginTop: 4 }}>
            <Image
              style={{ width: 13, height: 17, marginTop: 3 }}
              source={require("../assets/home/coordination.png")}
            />
            <Text
              style={{
                color: "white",
                fontWeight: "500",
                fontSize: 12,
                lineHeight: 18,
                paddingLeft: 8,
              }}
            >
              {distance} Km uzaklikta
            </Text>
          </View>
        </View>
        <View style={styles.percentage}>
          <Text
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: 16,
              lineHeight: 24,
            }}
          >
            %{percentage}
          </Text>
        </View>
        <View style={styles.circleContainer}>
          {arr.map((item, index) => {
            if (index == slider) {
              return <View key={index} style={styles.selectedCircle}></View>;
            } else {
              return <View key={index} style={styles.circle}></View>;
            }
          })}
        </View>
      </Pressable>
      <View style={styles.buttonContainer}>
        <Pressable style={({ pressed }) => (pressed ? { opacity: 0.7 } : null)}>
          <View style={styles.button}>
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../assets/home/refresh.png")}
            />
          </View>
        </Pressable>
        <Pressable style={({ pressed }) => (pressed ? { opacity: 0.7 } : null)}>
          <View style={styles.button}>
            <Image source={require("../assets/home/lightning.png")} />
          </View>
        </Pressable>
        <Pressable style={({ pressed }) => (pressed ? { opacity: 0.7 } : null)}>
          <View style={styles.button2}>
            <Image source={require("../assets/home/heart.png")} />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default People;

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  informationContainer: {
    position: "absolute",
    left: 20,
    bottom: 45,
    justifyContent: "space-between",
  },
  percentage: {
    position: "absolute",
    right: 20,
    bottom: 45,
    width: 50,
    height: 50,
    borderWidth: 2,
    borderBottomColor: "#EE7822",
    borderLeftColor: "#EE7822",
    borderTopColor: "#EE7822",
    borderRightColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  circle: {
    margin: 5,
    backgroundColor: "#EE7822",
    opacity: 0.2,
    width: 30,
    height: 5,
    borderRadius: 5,
  },
  selectedCircle: {
    backgroundColor: "#EE7822",
    width: 30,
    height: 5,
    borderRadius: 5,
    margin: 5,
  },
  circleContainer: {
    flexDirection: "row",
    marginTop: 9,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
    flex: 1,
  },
  button: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: "#ffeee2",
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  button2: {
    backgroundColor: "#EB4335",
    width: 55,
    height: 55,
    borderRadius: 30,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
});
