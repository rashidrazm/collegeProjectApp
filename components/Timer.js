import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import img1 from '../images/AddTimerIcon.orig.png'
import img2 from '../images/caregiver.png'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const Timer = () => {
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: 'white', 
                       width: "94%", 
                       margin: 11, 
                       flexDirection: 'row', 
                       alignItems: 'center',
                       paddingVertical:20,
                       borderRadius:7, 
                       height:250}}>
            <Image style={{width:140,height:140}} source={img1} />
            <View style={{alignItems:'center',paddingHorizontal:25}}>
                <Text style={{fontWeight:'700',fontSize:21}}>Add Timer</Text>
                <Text>Remind You to {'\n'} Eat Medicine</Text>
            </View>
            <Pressable onPress={() => navigation.navigate("Medication")}>
                <Feather name="plus-circle" size={40} color="#fd5c63" />
            </Pressable>
        </View>
    )
}

export default Timer

const styles = StyleSheet.create({})