import * as React from "react";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthProvider, useAuth } from "./libs/context/auth";

import { Chats } from "./screens/Chats";
import { Chat } from "./screens/Chat";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "./screens/Login";
import { SignUp } from "./screens/Signup";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTab() {
  return (
    <Tab.Navigator initialRouteName="Chats">
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Chats",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles-sharp" size={size} color={color} />
          ),
        }}
        name="Chats"
        component={Chats}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Contact",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-circle-sharp" size={size} color={color} />
          ),
        }}
        name="Contact"
        component={Chat}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Setting",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
        name="Setting"
        component={Chat}
      />
    </Tab.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      defaultScreenOptions={Login}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <BottomTab /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
