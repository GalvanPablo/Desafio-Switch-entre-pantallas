import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import colors from '../../constants/colors'

const Number = ({number, mayor}) => {
    return (
        <View style={styles.container}>
            {mayor ?
                <Text style={[styles.text, {color: colors.rojo}]}>{number}</Text>
                : <Text style={[styles.text, {color: colors.azul}]}>{number}</Text>
            }
        </View>
    )
}

export default Number

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 22,
    },
})