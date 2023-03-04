import { Pressable, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Button = ({style, onPress, title}) => {
    return (
        <Pressable
            style={[styles.button, style]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'gray',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    }
})