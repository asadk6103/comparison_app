import React from 'react'
import { Controller } from 'react-hook-form';
import { View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

const RPTextInput = (props: any) => {
    const { control, name, error, label, placeholder, secure =false } = props
    return (
        <View style={{
            width: "100%",
        }}>
            <Controller
                control={control}
                name={name}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        mode='outlined'
                        label={label}
                        onChangeText={onChange}
                        value={value}
                        placeholder={placeholder}
                        secureTextEntry={secure}
                    />
                )}
            />
            {error && <Text style={{ color: "red" }}>{error}</Text>}
        </View>
    )
}

export default RPTextInput