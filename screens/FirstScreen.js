import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import img2 from '../images/caregiver.png'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const FirstScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{
        alignItems:'center',
    }}>
        <View style={{
            width:'100%',
            paddingTop:'35%',
            backgroundColor:'white',
            height:'68%',
            borderBottomLeftRadius: 90, 
            borderBottomRightRadius: 90, 
            alignItems:'center'
        }}>
            <Image style={{ width: 300, height: 300,
              borderRadius:7,
             }} source={img2} />
        </View>
        <View>
            <Text style={{
                fontSize:25,
                paddingTop:35,
                fontWeight:'500',
                color:'#0A56A4'
            }}>I am a</Text>
        </View>
        <View style={{
            flexDirection: 'row', 
            alignItems: 'center',
            padding:5,
            backgroundColor:'white',
            borderRadius:7,
            marginTop:10
        }}>
            <FontAwesome5 style={{
                paddingHorizontal:8
            }} name="hand-holding-heart" size={24} color="red" />
            <Text style={{
                paddingHorizontal:26,
                fontSize:24
            }} >Caregiver</Text>
            <FontAwesome5  onPress={() => navigation.navigate("CaregiverRegister")}
             style={{
                paddingHorizontal:8
            }}  name="arrow-alt-circle-right" size={24} color="#0A56A4" />
        </View>
        <View style={{
            flexDirection: 'row', 
            alignItems: 'center',
            padding:5,
            backgroundColor:'white',
            borderRadius:7,
            marginTop:10
        }}>
           <MaterialIcons style={{
            paddingHorizontal:8
           }} name="elderly" size={26} color="red" />
            <Text style={{
                paddingHorizontal:42,
                fontSize:24
            }} >Senior</Text>
            <FontAwesome5 onPress={() => navigation.navigate("RegisterSenior")}
             style={{
                paddingHorizontal:8
            }}  name="arrow-alt-circle-right" size={24} color="#0A56A4" />
        </View>
    </SafeAreaView>
  )
}

export default FirstScreen

const styles = StyleSheet.create({})