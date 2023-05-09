import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/Routes";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar barStyle="dark-content" backgroundColor={"transparent"} />
    </NavigationContainer>
  );
}
