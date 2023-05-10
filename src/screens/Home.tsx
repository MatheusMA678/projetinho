import { View, Text } from "react-native";
import React from "react";

export function Home() {
  return (
    <View className="flex-1">
      <View className="m-4 rounded-md bg-blue-500 shadow-lg h-44 p-4">
        <Text className="font-bold text-xl text-white">Simulado Estadual</Text>
        <Text className="text-white/50">
          Atenção, simulado está com o horário de Brasília.
        </Text>
      </View>
    </View>
  );
}
