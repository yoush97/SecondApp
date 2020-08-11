import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, Image } from 'react-native'


const data = [
    {
        id: 1,
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
]


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            // data: [
            //     {
            //         id: 1,
            //         title: 'pic1',
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
            // ],
        }

    }

  renderItem = ({ item }) => {
        return(
            <View style={{ flex: 1, flexDirection: 'row', }}>
                <Image 
                    style={{width: 120, height: 100,}} 
                    source={{uri: item.image}}
                />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <Text> textInComponent </Text>
                <FlatList
                    // horizontal
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id}
                
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      paddingTop: 10,
    },
    imageThumbnail: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 70,
      width: 70,
      borderRadius: 50,
    },
    text: {
      fontSize: 13,
      fontWeight: 'bold',
      marginLeft: 5,
  
    }
  });
