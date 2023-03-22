import React from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity ,ScrollView,TextInput} from "react-native";

export default function UpdateEvent({ navigation }) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>update Event</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})