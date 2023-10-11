import { StyleSheet, Modal, View, Button } from 'react-native'
import { useState } from 'react'

const Modal_l14 = ({ visible }) => {

    const [isModalVisible, setIsModalVisible] = useState(visible)
    return (
        <View>
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
        </View>
    )
}

export default Modal_l14

const styles = StyleSheet.create({})