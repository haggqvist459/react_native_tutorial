import { StyleSheet, View, ActivityIndicator } from 'react-native'

const ActivityIndicator_l16 = () => {
  return (
    <View>
        <ActivityIndicator/>
        <ActivityIndicator size="small"/>
        <ActivityIndicator size="large"/>
        <ActivityIndicator size="large" color="midnightblue"/>
        <ActivityIndicator size="large" color="midnightblue" animating={false}/>
    </View>
  )
}

export default ActivityIndicator_l16

const styles = StyleSheet.create({})