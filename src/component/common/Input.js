import React from 'react'
import {View, Text, TextInput} from 'react-native'

const Input = ({label, value, onChangeText, placeholder,secureTextEntry}) => {

    const {
        inputStyle, 
        labelStyle, 
        containerStyle} = styles        

    return (
        <View style={containerStyle} >

            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry} 
                autoCorrect={false}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                 />
        </View>
    )
}

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 24,
        lineHeight: 23,
        borderWidth: 1,
        height: 50,
        width: 100,
        flex: 2
    },
    labelStyle: {
        fontSize: 23,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        marginTop: 15,
        marginBottom: 15,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}


export {Input}
