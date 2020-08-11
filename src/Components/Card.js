import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function Card(props) {
    return (
        <View style={styles.Card}>
            <View style={styles.CardComponent}>
                {props.children}
                {}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Card: {
        alignItems: 'center',
        // alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 9,
        elevation: 5,
        backgroundColor: '#fff',
        shadowOffset: { width: 3, height: 3 },
        shadowColor: '#333',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        width: '27%',
        // marginLeft: '2%',
        // marginBottom: 10,
        // marginHorizontal: 5,
        // marginVertical: 7,
        // backgroundColor: 'grey',
    },
    CardComponent: {
        // backgroundColor: 'pink',
        marginHorizontal: 18,
        marginVertical: 10,
    },
})