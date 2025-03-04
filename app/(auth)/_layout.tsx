import { Stack } from "expo-router";
import { View, Text } from "react-native";

export default function AuthLayout() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0" }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ title: "Login", headerShown: false }} />
      </Stack>
    </View>
  );
}
