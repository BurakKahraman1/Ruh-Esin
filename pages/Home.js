import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";
import React, { useRef, useState} from "react";
import People from "../components/people";
import Instruction from "../components/Instruction";

const DATA = [
  {
    id: 1,
    name: "Aysu",
    age: 23,
    percentage: 70,
    distance: 2,
    imageUrl: require("../assets/home/home-women.png"),
    imageUrl2: require("../assets/home/home-women2.png"),
  },
  {
    id: 2,
    name: "Dilay",
    age: 22,
    percentage: 90,
    distance: 5,
    imageUrl: require("../assets/home/home-women2.png"),
    imageUrl2: require("../assets/home/home-women.png"),
  },
];

const Home = () => {
  const [pageSlider, setPageSlider] = useState(0);
  const [instruction, setInstruction] = useState(0);


  const itemChangedHandler = useRef(({ viewableItems }) => {
    setPageSlider(viewableItems[0].index);
  }).current;

  return (
    <>
      <View style={{ flex: 1 }}>
           
           {instruction !== 5 && (
             <Instruction
             instruction={instruction}
             setInstruction={setInstruction}
             />
           
             )}
             
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text
              style={{
                lineHeight: 29,
                fontWeight: "800",
                fontSize: 20,
                color: "#222222",
                letterSpacing: 1,
              }}
            >
              İlişkievreni
            </Text>
            <Pressable
              style={({ pressed }) => (pressed ? { opacity: 0.7 } : null)}
              >
              <Image
                style={{ width: 22, height: 20 }}
                source={require("../assets/home/title.png")}
                />
            </Pressable>
          </View>
              

          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <People
                name={item.name}
                age={item.age}
                percentage={item.percentage}
                distance={item.distance}
                imageUrl={item.imageUrl}
                imageUrl2={item.imageUrl2}
                instruction={instruction}
              />
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            onViewableItemsChanged={itemChangedHandler}
          />
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
    marginHorizontal: 8,
    height:30
  },
});
