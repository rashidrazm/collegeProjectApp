import { StyleSheet, 
    Text, View, SafeAreaView,
    Alert, Pressable,Image, 
    TextInput,Carousel
   } from 'react-native'
import React, {useEffect, useState} from 'react'
import * as Location from 'expo-location'
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import CarouselCmpnt from '../components/CarouselCmpnt';
import CaregiverServices from '../components/CaregiverServices';
import Linking from '../components/Linking';

const CaregiverScreen = () => {
    const [displayCurrentAddress,setdisplayCurrentAddress] = useState("We are loading your location");
  const [locationServicesEnabled,setlocationServicesEnabled] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        await Location.requestForegroundPermissionsAsync();
        await Location.requestBackgroundPermissionsAsync();
        checkIfLocationEnabled();
        getCurrentLocation();
      } catch (error) {
        console.error('Error requesting location permissions:', error);
        // Handle error gracefully
      }
    })();
  }, []);
  

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if(!enabled){
      Alert.alert('Location services not enabled', 
      'please enable the location services', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
      );
    }else{
      setlocationServicesEnabled(enabled)
    }
  }
  const getCurrentLocation = async () => {
    let {status} = await Location.requestBackgroundPermissionsAsync();

    if(status !== "granted"){
      Alert.alert(
      'Permission denied', 
      'allow the app to use the location services', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
      );
    };
    const {coords} = await Location.getCurrentPositionAsync();
    console.log(coords);

    if(coords){
      const {latitude,longitude} = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude
      });

      console.log(response);

      for(let item of response){
        let address = `${item.formattedAddress}`
        setdisplayCurrentAddress(address)
      }
    }
  }
  return (
    <SafeAreaView style= {styles.container}  >

      {/* Location and Profile */}
      <View style={{flexDirection:"row",alignItems:"center",padding:10}}>
        <MaterialIcons name="location-on" size={30} color="#fd5c63" />
        <View>
          <Text style={{fontSize:18, fontWeight:"600"}} >Caregiver-Home</Text>
          <Text>{displayCurrentAddress}</Text>
        </View>

        <Pressable style={{marginLeft:"auto",marginRight:7}}>
          <Image style={{width:40,height:40,borderRadius:20}} source={{
            uri:"https://lh3.googleusercontent.com/a/ACg8ocKMnyLhioYb0LRmCnD31SMfpgK-BSW7_q0gEqtvOJJ6hg=s288-c-no"
          }}></Image>
        </Pressable>
      </View>

      {/* Search bar */}

      <View
       style={{
          padding:10,
          margin:10,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between',
          borderWidth:0.8,
          borderColor:'#C0C0C0',
          borderRadius:7,
          backgroundColor:"F0F0F0",
        }}
      >
        <TextInput placeholder='Search for items or more'></TextInput>
        <Feather name="search" size={24} color="#fd5c63" />
      </View>

      {/* image carousel */}
      <CarouselCmpnt/>

      {/* Services */}
      <CaregiverServices/>

      {/* Linking with senior */}
      <Linking/>

     


    </SafeAreaView>
  )
}

export default CaregiverScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        paddingTop: 30,
        backgroundColor:'#F0F0F0'
    }
})