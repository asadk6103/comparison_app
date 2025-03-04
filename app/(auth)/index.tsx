import { View, Text, Alert } from "react-native";
import { useRouter } from "expo-router";
import RPTextInput from "@/components/ReactPaper/TextInput";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "react-native-paper";


const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});


export default function IndexScreen() {
  const router = useRouter();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    Alert.alert("Success!", JSON.stringify(data));
  };

  return (
    <View style={{
      display: "flex", flexDirection: "column",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      margin: '5%',
      gap: 10
    }}>
      <Text style={{ fontSize: 20 }}>Welcome to My First Application</Text>
      <RPTextInput
        label="Username"
        control={control}
        name="username"
        placeholder="Username"
        error={errors?.username ? errors.username.message : null}
      />
      <RPTextInput
        label="Password"
        control={control}
        name="password"
        placeholder="Password"
        secure={true}
        error={errors?.password ? errors.password.message : null}
      />
      <Button mode="contained" style={{ width: "100%" }} onPress={() => router.push("/(dashboard)/dashboard")} >
        Login
      </Button>
      {/* <Button mode="contained" style={{ width: "100%" }} onPress={handleSubmit(onSubmit)} >
        Login
      </Button> */}

    </View>
  );
}
