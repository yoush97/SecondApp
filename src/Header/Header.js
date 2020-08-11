import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAnt from 'react-native-vector-icons/AntDesign'

export default function Header() {
    return (
        <View style={styles.header}>

            <View style={styles.leftContainer}>
                <Icon name="menu" size={33} />
            </View>

            <View>
                <Text style={styles.headerText}>Home</Text>
            </View>

            <View style={styles.rightContainer}>
                <Icon name="notifications-outline" size={27} />
                <IconAnt name="user" size={27} />
                <IconAnt name="setting" size={27} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'blue',
    },
    leftContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // backgroundColor: 'green'
    },
    rightContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',

        // backgroundColor: 'red',
    },
    headerText: {
        // alignItems: 'flex-start',
        // alignContent: 'flex-start',
        // alignSelf: 'flex-start',
        // justifyContent: 'flex-start',
        // backgroundColor: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000000',
        letterSpacing: 1,
    },
});