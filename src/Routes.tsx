import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./screens/Home";
import { VideoAulas } from "./screens/VideoAulas";
import { Redacao } from "./screens/Redacao";
import { Perfil } from "./screens/Perfil";
import { Baixados } from "./screens/Baixados";

import { blue, gray, white } from "tailwindcss/colors";

const Tabs = createBottomTabNavigator();

export function Routes() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: blue[600],
        },
        tabBarActiveTintColor: white,
        tabBarInactiveTintColor: gray[300],
      }}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="VideoAulas" component={VideoAulas} />
      <Tabs.Screen name="Redacao" component={Redacao} />
      <Tabs.Screen name="Perfil" component={Perfil} />
      <Tabs.Screen name="Baixados" component={Baixados} />
    </Tabs.Navigator>
  );
}
