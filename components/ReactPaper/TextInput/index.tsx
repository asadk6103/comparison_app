import React from 'react'
import { TextInput } from 'react-native-paper';

const RPTextInput = (props: any) => {
    const { val, setVal } = props
    return (
        <TextInput
            label="Email"
            value={val}
            onChangeText={text => setVal(text)}
        />
    )
}

export default RPTextInput