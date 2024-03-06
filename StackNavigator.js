import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MedicationScreen from './screens/MedicationScreen';
import CaregiverScreen from './screens/CaregiverScreen';
import FirstScreen from './screens/FirstScreen';
import CaregiverRegister from './screens/CaregiverRegister';
import RegisterSenior from './screens/RegisterSenior';
import SigninScreen from './screens/SigninScreen';




const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="FirstScreen" component={FirstScreen} options={{headerShown:false}} />
            <Stack.Screen name="Caregiver" component={CaregiverScreen} options={{headerShown:false}} />
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
            <Stack.Screen name="Medication" component={MedicationScreen} options={{headerShown:false}} />
            <Stack.Screen name="CaregiverRegister" component={CaregiverRegister} options={{headerShown:false}} />
            <Stack.Screen name="RegisterSenior" component={RegisterSenior} options={{headerShown:false}}/>
            <Stack.Screen name ="SigninScreen" component={SigninScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})