import React from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity ,ScrollView,TextInput} from "react-native";

export default function EventsHome({ navigation }) {
    return (
        <View style={styles.container}>
        <Image
                style={styles.homelogo}
                source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679455037/Screenshot_2023-03-22_at_08.46.07_h1krq8.png",
                }}
          />
          <Text
                    style={{
                        color: "#000000",
                        textAlign: "center",
                        marginTop: 40,
                        marginLeft:-110,
                        fontSize: 22,
                        fontWeight: "bold",
                        fontFamily: "Times New Roman",
                    }}
                    >
                  Recommended for You
             </Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate="fast"
                pagingEnabled
              >
               <View style={styles.rect}>
                    <TouchableOpacity
                        // onPress={() => navigation.navigate("AllOrganizations")}
                    >
                        <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679481372/6_ukkdab.jpg",
                        }}
                        />
                        <Text
                            style={{
                                color: "#000000",
                                textAlign: "center",
                                marginTop: 26,
                                marginBottom: 10,
                                fontSize: 18,
                                fontWeight: "bold",
                                fontFamily: "Times New Roman",
                            }}
                        >
                        New Year Festival
                        </Text>
                    </TouchableOpacity>
                 </View>
                 <View style={styles.rect1}>
                    <TouchableOpacity
                        // onPress={() => navigation.navigate("AllOrganizations")}
                    >
                        <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679481853/7_rl2hpo.jpg",
                        }}
                        />
                        <Text
                            style={{
                                color: "#000000",
                                textAlign: "center",
                                marginTop: 26,
                                marginBottom: 10,
                                fontSize: 18,
                                fontWeight: "bold",
                                fontFamily: "Times New Roman",
                            }}
                        >
                        Esela Perahera
                        </Text>
                    </TouchableOpacity>
                 </View>
                 <View style={styles.rect1}>
                    <TouchableOpacity
                        // onPress={() => navigation.navigate("AllOrganizations")}
                    >
                        <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679481441/4_pvzrhq.jpg",
                        }}
                        />
                        <Text
                            style={{
                                color: "#000000",
                                textAlign: "center",
                                marginTop: 26,
                                marginBottom: 10,
                                fontSize: 18,
                                fontWeight: "bold",
                                fontFamily: "Times New Roman",
                            }}
                        >
                        Miss Sri Lanka
                        </Text>
                    </TouchableOpacity>
                 </View>
                 <View style={styles.rect1}>
                    <TouchableOpacity
                        // onPress={() => navigation.navigate("AllOrganizations")}
                    >
                        <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679481369/2_w6etem.jpg",
                        }}
                        />
                        <Text
                            style={{
                                color: "#000000",
                                textAlign: "center",
                                marginTop: 26,
                                marginBottom: 10,
                                fontSize: 18,
                                fontWeight: "bold",
                                fontFamily: "Times New Roman",
                            }}
                        >
                        Beach Party
                        </Text>
                    </TouchableOpacity>
                 </View>
            </ScrollView>
            <Text style={styles.Text1}>All Events</Text>
            <TextInput
                    style={styles.inputserach}
                    placeholder="Search for Event name"
                    // value={search}
                    // onChangeText={(text) => setSearch(text)}
                />
                <ScrollView style={{ display: "flex", flexDirection: "column" }}>
                    <View style={styles.event}>
                        <TouchableOpacity
                                onPress={() => navigation.navigate("EventDetails")}
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
                               Hellowin - 2023/11/12
                                </Text>
                        </TouchableOpacity>                   
                    </View>
               </ScrollView> 
            <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("AddEvent")}
                >
                 <Image
                    style={styles.addevent}
                    source={{
                    uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679429885/11-removebg-preview_l55wvj.png",
                    }}
                />
            </TouchableOpacity>  
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    homelogo:{
        width: 400,
        height: 20,
        marginTop:0,
        marginLeft:0
      },
      rect: {
        width: 230,
        height: 260,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 25,
        shadowColor: "rgba(208,194,194,1)",
        shadowOffset: {
          width: 5,
          height: 5,
        },
        elevation: 39,
        shadowOpacity: 1,
        marginTop: 20,
        marginLeft:14,
        shadowRadius: 13,
      },
      rect1: {
        width: 230,
        height: 260,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 25,
        shadowColor: "rgba(208,194,194,1)",
        shadowOffset: {
          width: 5,
          height: 5,
        },
        elevation: 39,
        shadowOpacity: 1,
        marginTop: 20,
        marginLeft:14,
        shadowRadius: 13,
      },
      inputserach: {
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.1,
        elevation: 3,
        borderRadius: 40,
        padding: 10,
        marginTop: 10,
        width: 350,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 20,
        height: 40,
        borderWidth: 1,
      },
    
    tinyLogo: {
        width: 230,
        height: 220,
        marginBottom: -20,
        marginTop: -1,
        borderRadius: 25,
        marginLeft: 1,
      },
    Text1: {
        color: "#000000",
        textAlign: "center",
        marginTop:-50 ,
        marginLeft:-250,
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Times New Roman",
      },
    tinyLogo1: {
        width: 350,
        height: 160,
        marginBottom: -20,
        marginTop: 0,
        marginLeft:0,
        borderRadius: 25,
    },
    event: {
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
        marginTop: 30,
        marginLeft:22,
        shadowRadius: 13, 
        },
        addevent: {
            width: 80,
            height: 120,
            marginBottom: -20,
            marginLeft:290,
            borderRadius:25,
            marginTop:-130,
            borderColor:"black",
        }
})