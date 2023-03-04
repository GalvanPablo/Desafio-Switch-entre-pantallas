import { FlatList, StyleSheet, Text, View } from 'react-native'

import Number from './Number'
import React from 'react'

const index = ({list}) => {
    return (
        <FlatList
            data={list}
            keyExtractor={item => item.num.toString()}
            renderItem={itemData =>  <Number number={itemData.item.num} mayor={itemData.item.mayor} />}
            style={styles.list}
        />
    )
}

export default index

const styles = StyleSheet.create({
    list: {
        width: '60%',
    },
})