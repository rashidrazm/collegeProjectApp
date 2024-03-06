import { Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
// import img1 from '../images/medication.jpg'
// import img2 from '../images/contact.jpg'
// import img3 from '../images/details.jpg'



const CaregiverServices = () => {

    const services = [
        {
            id:"0",
            image:require('../images/medication.jpg'),
            name:"Medication",
        },
        {
            id:"1",
            image:require('../images/contact.jpg'),
            name:"Contact",
        },
        {
            id:"2",
            image:require('../images/fall-image.png'),
            name:"Fall-Alerts",
        },
        {
            id:"3",
            image:require('../images/details.jpg'),
            name:"Details",
        },
    ]

  return (
    <View style={{padding:10}}>
       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
         {services.map((service,index) => (
            <Pressable style={{margin:10,backgroundColor:'white',padding:20,borderRadius:7}} key={index}>
                <Image source={service.image} style={{width:70,height:70}}/>

                <Text style={{textAlign:'center',marginTop:10}}>{service.name}</Text>
            </Pressable>
         ))}
       </ScrollView>
    </View>
  )
}

export default CaregiverServices

const styles = StyleSheet.create({})