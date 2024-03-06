import { SafeAreaView, StyleSheet, Text, TextInput, View,Pressable, Button, Alert } from 'react-native'
import React,  { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';


const SigninScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth,email,password)
      setEmail('');
      setPassword('');
      // Navigate to another screen
      navigation.navigate('Caregiver');       
     console.log(response);
    } catch (error) {
      Alert.alert("Invalid Password");
      console.log(error);
    }
  };
  return (
    <SafeAreaView  style={{
      margin:10,
      marginTop:100
  }}>
      <View style={styles.container}>
        <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
          />
          <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
          />    

          <Button title="Register" onPress={handleRegister}/>  
        </View>
        <View style={{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center' ,
        paddingTop:18,
    }}>
       <Text style={{
        fontSize:18
       }} >Don't have an account ?</Text> 
        <Pressable onPress={() => navigation.navigate("CaregiverRegister")}>
           <Text style={{
        fontSize:18,
        paddingLeft:7,
        color:'#318CE7'
       }}>Sign up </Text></Pressable>
           
    </View>
    </SafeAreaView>
  )
}

export default SigninScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
})