import { Button, StyleSheet, Alert, View } from 'react-native'

const Alert_l17 = () => {
    return (
        <View>
            <Button title="Alert" onPress={() => Alert.alert("invalid data")} />
            <Button title="Alert 2" onPress={() => Alert.alert("invalid data", "Incorrect Input")} />
            <Button title="Alert 3" onPress={() => Alert.alert("invalid data", "Incorrect Input", [
                {
                    text: "Cancel",
                    onPress: () => console.log("cancel pressed")
                },
                {
                    text: "OK",
                    onPress: () => console.log("OK pressed")
                }
            ])} />
        </View>
    )
}

export default Alert_l17

const styles = StyleSheet.create({})