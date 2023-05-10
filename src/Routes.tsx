import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import { Home } from "./screens/Home";
import { VideoAulas } from "./screens/VideoAulas";
import { Redacao } from "./screens/Redacao";
import { Perfil } from "./screens/Perfil";
import { Baixados } from "./screens/Baixados";

import { blue, gray, white } from "tailwindcss/colors";
import { View, Text } from "react-native";

const Tabs = createBottomTabNavigator();

export function Routes() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: blue[600],
          height: 60,
          paddingBottom: 10,
          paddingTop: 10,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
        tabBarActiveTintColor: white,
        tabBarInactiveTintColor: gray[300],

        headerLeft: () => (
          <View className="ml-4 rounded-full border border-blue-500 h-10 w-10"></View>
        ),
        headerTitle: () => (
          <View>
            <Text>Olá, seja bem-vindo(a)!</Text>
            <Text className="font-bold text-xl">Matheus Mattos Avelino</Text>
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Videoaula"
        component={VideoAulas}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="play-circle" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Redação"
        component={Redacao}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="edit-2" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Baixados"
        component={Baixados}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="download" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
