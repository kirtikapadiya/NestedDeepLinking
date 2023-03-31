import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer, useLinkTo } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Linking from "expo-linking";

const prefix = Linking.createURL("/");
const linking = {
  prefixes: [prefix],
  config: {
    screens: {
      HomeStack: {
        path: "stack",
        screens: {
          Home: "home",
          Profile: 'profile'
        },
      },
      Settings: "settings",
    },
  },
};

function Home({ navigation }) {
  const linkTo = useLinkTo();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Go to unknown profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

function Profile({ route }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello {route.params?.id || "Unknown"}!</Text>
      <Text>
        Hello from profile
      </Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is the Settings Page.</Text>
    </View>
  );
}

const HomeStack = () => {
  const MyStack = createStackNavigator();

  return (
    <MyStack.Navigator>
      <MyStack.Screen name="Home" component={Home} />
      <MyStack.Screen name="Profile" component={Profile} />
    </MyStack.Navigator>
  );
};
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="HomeStack" component={HomeStack} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
