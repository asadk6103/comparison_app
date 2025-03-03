import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import { TextInput } from "react-native-paper";
import RPTextInput from "@/components/ReactPaper/TextInput";

export default function IndexScreen() {
  const router = useRouter();

  return (
    <View style={{ flexDirection:"column", flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Welcome to My First Application</Text>
      <View style={{}}>
      <RPTextInput />
      </View>
      <Button title="Go to Home" onPress={() => router.push("/home")} />
    </View>
  );
}
