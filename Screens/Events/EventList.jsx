import React from "react";
import { View, Text, StyleSheet ,TextInput,TouchableOpacity,Image,ScrollView} from "react-native";

export default function EventList({ navigation }) {
    return (
        <View style={styles.container}>
              <Image
                style={styles.homelogo}
                source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679455037/Screenshot_2023-03-22_at_08.46.07_h1krq8.png",
                }}
          />
             <TextInput
                    style={styles.inputserach}
                    placeholder="Search for Hotel name"
                    // value={search}
                    // onChangeText={(text) => setSearch(text)}
                />
            <Text style={styles.Text1}>Event List</Text>
            <ScrollView style={{ display: "flex", flexDirection: "column" }}>
                <View style={styles.hotel}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SpecificEvent")}
                    >
                        <Image
                        style={styles.tinyLogo1}
                        source={{
                            uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679481372/3_vgqveh.jpg",
                        }}
                        />
                        <Text
                        style={{
                            color: "#000000",
                            textAlign: "center",
                            marginTop: 30,
                            marginBottom: 10,
                            fontSize: 18,
                            fontWeight: "bold",
                            fontFamily: "Times New Roman",
                        }}
                        >
                       Hellowin Party
                        </Text>
                    </TouchableOpacity>                   
                 </View>
            </ScrollView> 
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputserach: {
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.1,
        elevation: 3,
        borderRadius: 40,
        padding: 10,
        marginTop: 30,
        width: 350,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 20,
        height: 40,
        borderWidth: 1,
      },
      homelogo:{
        width: 400,
        height: 20,
        marginTop:0,
        marginLeft:0
      },
      Text1: {
        color: "#000000",
        textAlign: "center",
        marginTop:20 ,
        marginLeft:-250,
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Times New Roman",
      },
      hotel: {
        width: 350,
        height: 200,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 22,
        shadowColor: "rgba(208,194,194,1)",
        shadowOffset: {
          width: 5,
          height: 5,
        },
        elevation: 39,
        shadowOpacity: 1,
        marginTop: 20,
        marginLeft:19,
        shadowRadius: 13, 
        },
    tinyLogo1: {
        width: 350,
        height: 160,
        marginBottom: -20,
        marginTop: 0,
        borderRadius:25,
        marginLeft:0,
    },
})