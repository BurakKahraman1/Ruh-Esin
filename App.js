import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entrance from "./pages/Entrance";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Image } from "react-native";


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const HomeBottomNavigation = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#f76e13",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 90,
          paddingHorizontal: 16,
          paddingBottom:8,
        },
      }}
    >
      <BottomTabs.Screen name="Home Page" component={Home} options={{
        tabBarIcon:()=><Image source={require("./assets/home/vector1.png")} />
      }}/>
      <BottomTabs.Screen name="Profile" component={Home} options={{
        tabBarIcon:()=><Image source={require("./assets/home/vector2.png")} />
      }}/>
      <BottomTabs.Screen name="Menu" component={Home} options={{
        tabBarIcon:()=><Image source={require("./assets/home/vector3.png")} />
      }}/>
      <BottomTabs.Screen name="Settings" component={Home} options={{
        tabBarIcon:()=><Image source={require("./assets/home/vector4.png")} />
      }}/>
      <BottomTabs.Screen name="Search" component={Home} options={{
        tabBarIcon:()=><Image source={require("./assets/home/vector5.png")} />
      }}/>
    </BottomTabs.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Entrance" component={Entrance} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            contentStyle: {
              backgroundColor: "white",
            },
          }}
        />
        <Stack.Screen name="Home" component={HomeBottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
