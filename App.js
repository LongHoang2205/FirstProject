import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//Redux
// import { Provider } from "react-redux";
// import store from "./Apps/Redux/Store/store";

// Screen
import SplashScreen from "./Apps/Containers/SplashScreen/SplashScreen";

const Tab = createMaterialTopTabNavigator();

// Auth stack
const HomeStack = createStackNavigator();
function HomeStacks() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SplashScreen"
    >
      <HomeStack.Screen name="SplashScreen" component={SplashScreen} />
      {/* <HomeStack.Screen name="AddStudent" component={AddStudent} /> */}
    </HomeStack.Navigator>
  );
}

const Stack = createStackNavigator();
function App() {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"SplashScreen"} headerMode={"none"}>
        <Stack.Screen name={"HomeStack"} component={HomeStacks} />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
}

export default App;
