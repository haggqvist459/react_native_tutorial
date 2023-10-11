import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native'
import React from 'react'
const logoImage = require("../assets/adaptive-icon.png")

const CustomPressable_l13 = () => {
  return (
    <View style={styles.mainView}>
      {/* Nesting scrollview means the padding in the view does not interefere with the bottom content */}
      {/* Also places the scrollbar inside the padding  */}
      <ScrollView>
        <Pressable
          onPress={() => { console.log("onPress") }}
          onPressIn={() => { console.log("onPressIn") }}
          onPressOut={() => { console.log("onPressOut") }}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Pressable>
        <Pressable
          onPress={() => { console.log("onPress") }}
          onPressIn={() => { console.log("onPressIn") }}
          onPressOut={() => { console.log("onPressOut") }}>
          <Image source={logoImage} style={{ width: 300, height: 300 }} />
        </Pressable>
      </ScrollView>
    </View>
  )
}

export default CustomPressable_l13

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 10
  }
})