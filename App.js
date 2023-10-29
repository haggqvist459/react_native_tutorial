import { View, Image, Button, Modal, StatusBar, } from 'react-native'
import { useState } from 'react'

import CustomPressable_l13 from './components/CustomPressable_l13'
import Modal_l14 from './components/Modal_l14'
import ActivityIndicator_l16 from './components/ActivityIndicator_l16'
import Alert_l17 from './components/Alert_l17'
import Greet_l18 from './components/Greet_l18'
import StyleSheet_l20 from './components/StyleSheet_l20'


const logoImage = require("./assets/adaptive-icon.png")

export default function App() {

  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <StatusBar backgroundColor='lightgreen' barStyle='default' />



      

      {/* Previous lessons */}
      {/* <CustomPressable_l13/> */}
      {/* <Modal_l14 visible={isModalVisible}/> */}
      {/* <ActivityIndicator_l16/> */}
      {/* <Alert_l17/> */}
      {/* <Greet_l18 name={"Tim"}/> */}
      {/* <Greet_l18 name={"Ilmari"}/> */}
      <StyleSheet_l20/>
    </View>
  )
}

/*
      <Image source={logoImage} style={{ width: 300, height: 300 }} />
      <Button title="Modal" onPress={() => setIsModalVisible(true)} />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType='slide'
        // animationType='fade' 
        presentationStyle='pageSheet'
      // presentationStyle='formSheet'
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Button title="Close" color="midnightblue" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>

*/