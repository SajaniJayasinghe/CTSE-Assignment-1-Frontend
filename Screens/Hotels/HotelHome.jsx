import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity,ScrollView } from "react-native";

export default function HotelHome({ navigation }) {
    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={{uri:""}}
            />
            </View>
            <View style={styles.textContainer}>
            <Text style={styles.text}>Hotel</Text>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
                // onPress={() => navigation.navigate("Hotel")}
            >
                <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    );
}