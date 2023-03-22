import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity,ScrollView } from "react-native";

export default function AdminDashboard({navigation}) {
    return(
        <View style={styles.container}>
          <Image
                style={styles.homelogo}
                source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679455037/Screenshot_2023-03-22_at_08.46.07_h1krq8.png",
                }}
          />
            <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
             <Image
                style={styles.logo}
                source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679339046/user-removebg-preview_iwug42.png",
                }}
              />
            </TouchableOpacity>
            <Text
                    style={{
                        color: "#000000",
                        textAlign: "center",
                        marginTop: 40,
                        marginLeft:-110,
                        fontSize: 18,
                        fontWeight: "bold",
                        fontFamily: "Times New Roman",
                    }}
                    >
                   Popular Location In this Month
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
                        uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679392630/14_bzemlw.jpg",
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
                    Sigiriya
                    </Text>
                </TouchableOpacity>
             </View>          
              <View style={styles.rect1}>
                <TouchableOpacity
                    // onPress={() => navigation.navigate("AllOrganizations")}
                 >
                    <Image
                    style={styles.tinyLogo1}
                    source={{
                        uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679389476/13_edwh7e.webp",
                    }}
                    />
                    <Text
                    style={{
                        color: "#000000",
                        textAlign: "center",
                        marginTop: 30,
                        marginBottom: 10,
                        fontSize: 20,
                        fontWeight: "bold",
                        fontFamily: "Times New Roman",
                    }}
                    >
                  Kalpitiya
                    </Text>
                </TouchableOpacity>
              </View>
             <View style={styles.rect}>     
                <TouchableOpacity
                    // onPress={() => navigation.navigate("AllOrganizations")}
                 >
                    <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679393025/15_cowsqm.webp",
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
                    Mirirssa
                    </Text>
                </TouchableOpacity>
             </View>
              <View style={styles.rect1}>
                <TouchableOpacity
                    // onPress={() => navigation.navigate("AllOrganizations")}
                 >
                    <Image
                    style={styles.tinyLogo1}
                    source={{
                        uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679387783/9_bah0bc.jpg",
                    }}
                    />
                    <Text
                    style={{
                        color: "#000000",
                        textAlign: "center",
                        marginTop: 30,
                        marginBottom: 10,
                        fontSize: 20,
                        fontWeight: "bold",
                        fontFamily: "Times New Roman",
                    }}
                    >
                   Ella
                    </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.rect1}>
                <TouchableOpacity
                    // onPress={() => navigation.navigate("AllOrganizations")}
                 >
                    <Image
                    style={styles.tinyLogo1}
                    source={{
                        uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679389317/11_vyatdh.webp",
                    }}
                    />
                    <Text
                    style={{
                        color: "#000000",
                        textAlign: "center",
                        marginTop: 30,
                        marginBottom: 10,
                        fontSize: 20,
                        fontWeight: "bold",
                        fontFamily: "Times New Roman",
                    }}
                    >
                   Jetwing Villa
                    </Text>
                </TouchableOpacity>
              </View>
           </ScrollView>            
            <View style={styles.container2}>            
            <Text
                    style={{
                        marginTop: -10,
                        marginLeft:30,
                        fontSize: 18,
                        fontWeight: "bold",
                        fontFamily: "Times New Roman",
                    }}
                    >
                   Popular Categories
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("HotelHome")}
                 >
                    <Image
                    style={styles.tinyLogo2}
                    source={{
                        uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679372412/Screenshot_2023-03-21_at_09.49.09_mqtose.png",
                    }}
                    />
                   
                </TouchableOpacity>
                
                <Text 
                   style={{
                    marginLeft:34,
                    marginTop:30,
                    fontSize: 18,
                    fontWeight: "bold",
                    fontFamily: "Times New Roman",
                    color:"#52595D"
                }}
                 >
                    Hotels
                </Text>
              
                <TouchableOpacity
                    // onPress={() => navigation.navigate("AllOrganizations")}
                 >
                    <Image
                    style={styles.tinyLogo3}
                    source={{
                        uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679372173/beach_lawbaj.jpg",
                    }}
                    />
                   
                </TouchableOpacity>
                <Text 
                   style={{
                    marginLeft:130,
                    marginTop:-19,
                    fontSize: 18,
                    fontWeight: "bold",
                    fontFamily: "Times New Roman",
                    color:"#52595D"
                }}
                 >
                    Places
                </Text>
                 
                  <TouchableOpacity
                       onPress={() => navigation.navigate("EventsHome")}
                 >
                    <Image
                    style={styles.tinyLogo4}
                    source={{
                        uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679372338/Screenshot_2023-03-21_at_09.45.12_e2t9so.png",
                    }}
                    />
                   
                  </TouchableOpacity>
                
                 <Text 
                   style={{
                    marginLeft:230,
                    marginTop:-19,
                    fontSize: 18,
                    fontWeight: "bold",
                    fontFamily: "Times New Roman",
                    color:"#52595D"
                }}
                 >Events
                 </Text>
                   <TouchableOpacity
                    // onPress={() => navigation.navigate("AddEvents")}
                 >
                    <Image
                    style={styles.tinyLogo5}
                    source={{
                        uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679372230/blog_o7qs8g.png",
                    }}
                    />
                   
                   </TouchableOpacity>
                
                <Text 
                   style={{
                    marginLeft:320,
                    marginTop:-19,
                    fontSize: 18,
                    fontWeight: "bold",
                    fontFamily: "Times New Roman",
                    color:"#52595D"
                }}
                 >
                    Blogs
                </Text>
            </View>

          {/* <!--navigation start--> */}
            <View style={styles.container3}>
              <View style={styles.rect3}>
              <TouchableOpacity
                    onPress={() => navigation.navigate("AdminDashboard")}
                 >
              <Image
                    style={styles.tinyLogo6}
                    source={{
                        uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679397354/home-removebg-preview_rxlckw.png",
                    }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    // onPress={() => navigation.navigate("AllOrganizations")}
                 >
                 <Image
                    style={styles.tinyLogo7}
                    source={{
                        uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679397354/heart_ctndhc.png",
                    }}
                 />
                 </TouchableOpacity>
                 <TouchableOpacity
                    onPress={() => navigation.navigate("UserProfile")}
                 >
                 <Image
                    style={styles.tinyLogo6}
                    source={{
                        uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679397354/person-removebg-preview_aowlrd.png",
                    }}
                 />
                 </TouchableOpacity>
                
              </View>
              <Image
                    style={styles.logo2}
                    source={{
                    uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679455037/Screenshot_2023-03-22_at_08.46.07_h1krq8.png",
                    }}
            />
            </View>
          {/* <!---navigation end--> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FFFEFA"
    },
    container1: {
        width: 500,
        height: 430,
        marginTop:40
      },
    container2: {
        width: 500,
        height: 180,
        marginTop:-100
    },
    container3: {
        flex: 1,
        marginTop:10
    },
    logo:{
        width: 55,
        height: 55,
        marginLeft:320,
        marginTop:13
    },
    homelogo:{
      width: 400,
      height: 10,
      marginTop:0,
      marginLeft:0
    },
    logo2:{
      width: 400,
      height: 30,
      marginTop:15,
      marginLeft:0
  },
    rect: {
        width: 178,
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
        marginLeft:14,
        shadowRadius: 13,
      },
    
    tinyLogo: {
        width: 176,
        height: 160,
        marginBottom: -20,
        marginTop: -1,
        borderRadius: 25,
        marginLeft: 1,
      },
    rect1: {
        width: 178,
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
        marginLeft:10,
        shadowRadius: 13,
      },
      rect3: {
        width: 350,
        height: 75,
        backgroundColor: "#FAEBD7",
        flexDirection: "row",
        marginTop: 40,
        marginLeft: 20,
        borderRadius:30
      },
      rect4: {
        width: 350,
        height: 105,
        backgroundColor: "#FAEBD7",
        flexDirection: "row",
        marginTop: 20,
        marginLeft: 20,
        borderRadius:30
      },
    tinyLogo1: {
        width: 174,
        height: 160,
        marginBottom: -20,
        marginTop: 2,
        borderRadius: 25,
        marginLeft: 3,
      },    
    tinyLogo2: {
        width: 80,
        height: 80,
        marginBottom: -20,
        marginTop: 20,
        borderRadius: 100,
        marginLeft: 20,
      },
    tinyLogo3: {
        width: 80,
        height: 80,
        marginBottom: -20,
        marginTop: -110,
        borderRadius: 100,
        marginLeft: 115,
      },
    tinyLogo4: {
        width: 80,
        height: 80,
        marginBottom: -20,
        marginTop: -110,
        borderRadius: 100,
        marginLeft: 215,
      },
      tinyLogo5: {
        width: 80,
        height: 80,
        marginBottom: -20,
        marginTop: -110,
        borderRadius: 100,
        marginLeft: 305,
      },
      tinyLogo6: {
        width: 40,
        height: 44,
        marginBottom: -20,
        marginTop: 10,
        marginLeft: 65,
      },
      tinyLogo7: {
        width: 30,
        height: 26,
        marginBottom: -20,
        marginTop: 20,
        marginLeft: 65,
      },
})