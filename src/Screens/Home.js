import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, Image, } from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Card from '../Components/Card'

// const data = [
//     {
//         id: 1,
//         image: 'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',

//     },
//     {
//         id: 2,
//         image: 'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',

//     },
//     {
//         id: 3,
//         image: 'https://i.picsum.photos/id/1016/3844/2563.jpg?hmac=WEryKFRvTdeae2aUrY-DHscSmZuyYI9jd_-p94stBvc',

//     },
//     {
//         id: 4,
//         image: 'https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg',

//     },
//     {
//         id: 5,
//         image: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0',

//     },
// ]
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    title: 'pic1',
                    image: 'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',

                },
                {
                    id: 2,
                    image: 'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',

                },
                {
                    id: 3,
                    image: 'https://i.picsum.photos/id/1016/3844/2563.jpg?hmac=WEryKFRvTdeae2aUrY-DHscSmZuyYI9jd_-p94stBvc',

                },
                {
                    id: 4,
                    image: 'https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg',

                },
                {
                    id: 5,
                    image: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0',

                },
            ],
        }
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.contentContainer}>
                <Image
                    style={styles.imageThumbnail}
                    source={{ uri: item.image }}
                />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <FlatList
                    // contentContainerStyle={{flexGrow: 1, justifyContent: 'center', paddingTop: 10,}}
                    horizontal
                    pagingEnabled
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />


                <View >
                    <View style={styles.RowIcon}>
                        <Card>
                            <AntDesign name='calendar' size={40} color='green' />
                            <Text style={styles.IconText}>Agenda</Text>
                        </Card>
                        <Card>
                            <AntDesign name='user' size={40} color='blue' />
                            <Text style={styles.IconText}>Speakers</Text>
                        </Card>
                        <Card>
                            <FontAwesome5 name='handshake' size={40} color='#ec9512' />
                            <Text style={styles.IconText}>Sponsors</Text>
                        </Card>
                    </View>

                    <View style={styles.RowIcon}>
                        <Card>
                            <Entypo name='shop' size={40} color='#ff00aa' />
                            <Text style={styles.IconText}>Exhibitors</Text>
                        </Card>
                        <Card>
                            <MaterialCommunityIcons name='email-outline' size={40} color='#df2929' />
                            <Text style={styles.IconText}>Contact</Text>
                        </Card>

                        <Card>
                            <Entypo name='map' size={40} color='#9c12ec' />
                            <Text style={styles.IconText}>Map</Text>
                        </Card>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    RowIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,

    },
    MainContainer: {
        // flex: 1,
        // paddingTop: 10,
        // backgroundColor: '#91dcff'   
    },
    contentContainer: {
        // paddingTop: 10,  
    },
    imageThumbnail: {
        // justifyContent: 'center',
        // alignItems: 'center',
        height: 250,
        width: 360,
        // resizeMode: "cover",
        // borderRadius: 50,
    },
    IconText: {
        // marginTop: 10,
        // marginVertical: 10,
        paddingTop: 5,
        textAlign: 'center',
        fontSize: 10,
        // fontWeight: 'bold',
        // marginLeft: 5,
        // marginRight: 2
        // paddingRight: 5,
        // paddingLeft: 10
    }
});
