import { StyleSheet, Text, View, Image, Pressable, SafeAreaView } from 'react-native'
import React from 'react'
import img1 from '../images/linking-elder.png'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Linking = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{
            backgroundColor: 'white', 
            width: "94%", 
            margin: 11,
            borderRadius:7, 
            height:250,
            paddingVertical:10,
    }}>
        <Text style={{
            textAlign:'center',
            paddingBottom:15,
            paddingTop:10,
            fontWeight:'500',
            fontSize:15
        }}>You Are Connected With User : SampleUser </Text>
        <View style={{ 
                       flexDirection: 'row', 
                       alignItems: 'center',
                       }}>
            <Image style={{width:180,height:160,marginLeft:8,borderRadius:7}} source={img1} />
            <View style={{alignItems:'center',paddingHorizontal:25}}>
                <Text style={{fontWeight:'700',fontSize:21}}>Elder Details</Text>
                <Text style={{textAlign:'center'}}>Monitor Your Elder{'\n'}With Set Medication{'\n'}and more</Text>
            </View>
            
        </View>
        <Pressable style={{
            position:'relative',
            left:260,
            bottom:38
            }} onPress={() => navigation.navigate("Medication")}>
            <Entypo name="arrow-with-circle-right" size={36} color="#fd5c63" />
        </Pressable>
    </SafeAreaView>
  )
}

export default Linking

const styles = StyleSheet.create({})