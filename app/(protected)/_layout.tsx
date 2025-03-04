import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

export default function MainLayout() {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: true, headerStyle: { backgroundColor: "tomato" }, headerTintColor: "#fff" }}>
        <Stack.Screen name="home" options={{ title: "Home" }} />
      </Stack>
    </PaperProvider>
  );
}
