import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StyleSheet_l20 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.lightbluebox}>
        <Text>Lightblue box</Text>
      </View>
      <View style={styles.lightgreenbox}>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  )
}

export default StyleSheet_l20

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightyellow",
        padding: 60
    },
    lightbluebox: {
        backgroundColor: "lightblue",
        width: 100,
        height: 100,
        padding: 10,
    },
    lightgreenbox: {
        backgroundColor: "lightgreen",
        width: 100,
        height: 100,
        padding: 10,
    }
})