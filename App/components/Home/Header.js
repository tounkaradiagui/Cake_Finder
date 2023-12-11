import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import Colors from '../../constants/Colors';

export default function Header() {
  return (
    <View style={styles.container}>
        
        <TouchableOpacity>
            <Image source={require('../../../assets/images/map.png')} style={styles.map}/>
        </TouchableOpacity>

        <TextInput style={styles.searchInput} placeholder='Trouver une pâtisserie près de chez moi !'/>

        <TouchableOpacity>
            <Image source={require('../../../assets/images/profile-user.png')} style={styles.map}/>
        </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:10
    },
    map:{
        width: 30,
        height:30
    },
    searchInput: {
        height:30,
        width:'80%',
        borderWidth:2,
        borderColor:Colors.primary,
        padding:5,
        borderRadius:10
    }
})