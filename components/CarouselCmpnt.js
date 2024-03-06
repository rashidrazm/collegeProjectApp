import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";
import img1 from '../images/home-baner-1.jpg'
import img2 from '../images/home-baner-2.jpeg'


const CarouselCmpnt = () => {
    const images = [
        img1,img2
    ]
  return (
    <View>
      <SliderBox images={images} autoPlay circleLoop dotColor={'#13274F'} inactiveDotColor='#90A4AE'
      ImageComponentStyle={{
        borderRadius:6,
        width:"94%",
      }}
        />
    </View>
  )
}

export default CarouselCmpnt

const styles = StyleSheet.create({})