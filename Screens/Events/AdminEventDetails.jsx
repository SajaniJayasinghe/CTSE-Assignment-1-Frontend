import React , { useEffect, useState }from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity,ScrollView,Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from "axios";
import { useRoute } from "@react-navigation/native";

export default function AdminEventDetails({navigation}) {
  const [event, setevent] = useState([]);
  const route = useRoute();
  
  useEffect(() => {
    const data = {
      eid: route.params.eID,
      type: route.params.type,
      event_name: route.params.event_name,
      description: route.params.description,
      picture: route.params.picture,
      location: route.params.location,
      date: route.params.date,
      ticket_price: route.params.ticket_price,
    };
    setevent(data);
  }, []);

  
  const deleteevent = async () => {
    const { id } = route.params;
    Alert.alert("Are you sure?", "This will permanently delete Event!", [
      {
        text: "OK",
        onPress: async () => {
          console.log(id);
          axios
            .delete(
              `https://travel-go.herokuapp.com/api/events/delete/${id}`
            )
            .then((res) => {
              navigation.push("ReceivedDonations");
            })
            .catch((e) => {
              console.error(e);
            });
        },
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
    ]);
  };


    return(
        <View style={styles.container}>
           <Image
                style={styles.homelogo}
                 source={{ uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679455037/Screenshot_2023-03-22_at_08.46.07_h1krq8.png" }}
           />
           <Text
            style={{
                fontWeight: "800",
                textAlign: "center",
                fontSize: 36,
                marginLeft: -10,
                marginTop: 15,
                color:"#3F000F",
                fontFamily: "Times New Roman",
            }}
            >  {event.event_name}
           </Text>
           <View style={styles.rect}>
             <Image
                style={styles.tinyLogo}
                source={{ uri: event.picture }}
              />
          </View>
         <View>
          <Text 
                   style={{
                    marginLeft:20,
                    marginTop:27,
                    fontSize: 19,
                    fontWeight: "bold",
                    fontFamily: "Times New Roman",
                    color:"#000000"
                }}
                 >
                 Amenities
                </Text>
          <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate="fast"
                pagingEnabled
                borderWidth = {1}
                width = {369}
                height = {80}
                marginLeft = {10}
                borderRadius = {30}
                borderColor = "#A9A9A9"
                marginTop = {10}
              >
                <Image
                    style={styles.tinyLogo2}
                    source={{
                        uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679483250/music-removebg-preview_deu4xd.png",
                    }}
                />   
                <Text 
                   style={{
                    marginLeft:-48,
                    marginTop:55,
                    fontSize: 18,
                    fontWeight: "bold",
                    fontFamily: "Times New Roman",
                    color:"#52595D"
                }}
                 >
                  Music
                </Text>
                <Image
                    style={styles.tinyLogo3}
                    source={{
                        uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679483251/pho-removebg-preview_kijiez.png",
                    }}
                />   
                <Text 
                   style={{
                    marginLeft:-90,
                    marginTop:55,
                    fontSize: 18,
                    fontWeight: "bold",
                    fontFamily: "Times New Roman",
                    color:"#52595D"
                }}
                 >
                  Photography
                </Text>
                <Image
                    style={styles.tinyLogo4}
                    source={{
                        uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679483251/Screenshot_2023-03-22_at_16.35.13-removebg-preview_m7iojm.png",
                    }}
                />   
                <Text 
                   style={{
                    marginLeft:-48,
                    marginTop:55,
                    fontSize: 18,
                    fontWeight: "bold",
                    fontFamily: "Times New Roman",
                    color:"#52595D"
                }}
                 >
                  Dance
                </Text>
                <Image
                    style={styles.tinyLogo5}
                    source={{
                        uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679483251/ga-removebg-preview_xtsstk.png",
                    }}
                />   
                <Text 
                   style={{
                    marginLeft:-50,
                    marginTop:55,
                    fontSize: 18,
                    fontWeight: "bold",
                    fontFamily: "Times New Roman",
                    color:"#52595D"
                }}
                 >
                  Games
                </Text>
          </ScrollView>
          </View>
              <Text style={{
                marginLeft:20,
                fontSize: 18,
                marginTop:20,
                fontWeight: "bold",
                fontFamily: "Times New Roman",
                color:"#000000"
               }}>
                Description {'\n'}
              </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("UpdateEvent",{
                      eID: event.eid,
                      type: event.type,
                      event_name: event.event_name,
                      description: event.description,
                      picture: event.picture,
                      location: event.location,
                      date: event.date,
                      ticket_price: event.ticket_price,
                    })}
                  >
                    <Icon
                      name="edit"
                      size={23}
                      color="black"
                      style={{
                        marginTop: -43,
                        marginLeft: 270,
                        marginBottom: -30,
                        borderRadius: 30,
                      }}
                    />
                </TouchableOpacity>
              <TouchableOpacity>
              <Icon
                    name="delete-forever"
                    onPress={() => deleteevent(event._id)}
                    style={styles.icon}
                  >
              </Icon>
              </TouchableOpacity>
             <ScrollView>
                <View style={styles.rect1}>
                <Text style={{
                    marginLeft:20,
                    fontSize: 20,
                    fontFamily:"Times New Roman",
                    color:"#0C090A",
                    fontWeight:"bold",
                    marginTop:10
                }}>
                   {event.event_name} -    {event.type}
                </Text>
                <Image
                    style={styles.tinyLogo6}
                    source={{
                        uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679471650/2838912_zdihvz.png",
                    }}
                />   
                <Text style={{
                    marginLeft:40,
                    fontSize: 15,
                    marginTop:0,
                    fontFamily:"Times New Roman",
                    color:"#52595D",
                    fontWeight:"bold"
                }}>
                   {event.location}
                    {'\n'}
                </Text>
                <Text style={{
                    marginLeft:40,
                    fontSize: 15,
                    marginTop:-13,
                    fontFamily:"Times New Roman",
                    color:"#52595D",
                    fontWeight:"bold"
                }}>
                   {event.date}
                    {'\n'}
                </Text>
                <Text style={{
                    marginLeft:40,
                    fontSize: 15,
                    marginTop:-13,
                    fontFamily:"Times New Roman",
                    color:"#000000",
                    fontWeight:"bold"
                }}>
                  Tickect Prices : {event.ticket_price}
                </Text>
                <Text style={{
                    marginLeft:20,
                    fontSize: 15,
                    marginTop:15,
                    fontFamily:"Times New Roman",
                    color:"#52595D",
                    textAlign:"justify",
                    fontWeight:"bold",
                    marginRight:20
                }}> {event.description}
                </Text>
                </View>
             </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    homelogo:{
        width: 400,
        height: 20,
        marginTop:-5,
        marginLeft:0
      },
    rect: {
        width: 357,
        height: 167,
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
    rect1: {
        width: 370,
        height: 600,
        borderRadius: 22,
        shadowColor: "rgba(208,194,194,1)",
        shadowOffset: {
          width: 5,
          height: 5,
        },
        elevation: 39,
        shadowOpacity: 1,
        marginTop: -15,
        marginLeft:10,
        marginRight:20,
        shadowRadius: 13,
      },
    tinyLogo: {
        width: 357,
        height: 200,
        marginBottom: -20,
        marginTop: -10,
        borderRadius: 5,
        marginLeft: 1,
      },
    tinyLogo2: {
        width: 46,
        height: 46,
        marginBottom: -20,
        marginTop: 8,
        borderRadius: 100,
        marginLeft: 30,
      },
    tinyLogo3: {
        width: 76,
        height: 76,
        marginBottom: -20,
         marginTop: -8,
        borderRadius: 100,
        marginLeft: 28,
      },
    tinyLogo4: {
        width: 46,
        height: 46,
        marginBottom: -20,
         marginTop: 8,
        borderRadius: 100,
        marginLeft: 25,
      },
    tinyLogo5: {
        width: 46,
        height: 46,
        marginBottom: -20,
         marginTop: 8,
        borderRadius: 100,
        marginLeft: 35,
      },
      tinyLogo6:{
        width: 18,
        height: 18,
        marginBottom: -20,
         marginTop: 13,
        borderRadius: 100,
        marginLeft: 19,
      },
      tinyLogo7: {
        width: 46,
        height: 46,
        marginBottom: -20,
         marginTop: 8,
        borderRadius: 100,
        marginLeft: 32,
      },
    icon: {
        color: "#8B0000",
        fontSize: 28,
        height: 60,
        width: 40,
        marginLeft: 330,
        marginTop:-45,
      },
})