import { StyleSheet, Text, View ,SafeAreaView,TextInput, Button, Pressable  } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc } from 'firebase/firestore';
import { auth,firestore } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const RegisterSenior = () => {
    const navigation = useNavigation();


    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const handleRegister = async () => {
        try {
            if (password !== confirmPassword) {
                alert('Passwords do not match. Please enter matching passwords.');
                return;
            }
    
            // Create user in Firebase Authentication
            const authResponse = await createUserWithEmailAndPassword(auth, email, password);
    
            // If user creation is successful
            if (authResponse) {
                const user = authResponse.user;
    
                // Add additional user details to Firestore
                const userDetails = {
                    username: username,
                    fullName: fullName,
                    phoneNo: phoneNo,
                    age: age,
                    address: address,
                    email: email,
                };
    
                // Add user details to Firestore
                const docRef = await addDoc(collection(firestore, 'users'), userDetails);
    
                setEmail('');
                setPassword('');
    
                // Navigate to another screen
                navigation.navigate('Home');
    
                console.log('User registered successfully:', authResponse);
                console.log('User details stored in Firestore with ID:', docRef.id);
            }
        } catch (error) {
            // Handle specific error cases
            if (error.code === 'auth/email-already-in-use') {
                console.error('Error registering user:', error);
                // Display alert or message to the user that the email is already registered
                alert('Email is already registered. Please use a different email.');
            } else {
                // Handle other errors
                console.error('Error registering user:', error);
                // Display general error message
                alert('An error occurred while registering. Please try again later.');
            }
        }
    };
    
    
    

  return (
    <SafeAreaView style={{
        margin:10,
        marginTop:100
    }}>
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
        />
        <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
        />
        <TextInput
            style={styles.input}
            placeholder="Phone No"
            value={phoneNo}
            onChangeText={setPhoneNo}
            keyboardType="phone-pad"
        />
        <TextInput
            style={styles.input}
            placeholder="Age"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
        />
        <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
        />
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
        <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
        />
         {passwordError !== '' && <Text style={{ color: 'red' }}>{passwordError}</Text>}
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
       }} >Already have an account ?</Text> 
        <Pressable onPress={() => navigation.navigate("SigninScreen")}>
           <Text style={{
        fontSize:18,
        paddingLeft:7,
        color:'#318CE7'
       }}>Sign in </Text></Pressable>
           
    </View>
    </SafeAreaView>
  )
}

export default RegisterSenior

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