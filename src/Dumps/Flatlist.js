import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, Image, } from 'react-native'


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    id: 1,
                    title: 'one'
                },
                {
                    id: 2,
                    title: 'teo'
                },
                {
                    id: 3,
                    title: 'three'
                },
            ]
        }
    }


    // renderItem = ({item}) => {
    //     return(
    //         <View style={styles.container}>
    //             <Text style={styles.text}> {item.title} </Text>
    //         </View>
    //     )
    // }

    render() {
        return (
            <View styles={styles.container}>

                <Text> textInComponent </Text>

                <FlatList
                    // horizontal
                    data={this.state.data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) =>
                        <Text style={styles.text}>{item.title}</Text>}
                // renderItem={this.renderItem}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    text: {
        fontSize: 30,
        color: 'blue',

    }
})
