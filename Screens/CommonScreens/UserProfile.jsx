import { View, Image, StyleSheet, Text, TouchableOpacity,Alert } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UserProfile({route,navigation}) {
    const [token, settoken] = useState("");

    const getToken = async () => {
        settoken(await AsyncStorage.getItem("token"));
      };
      useEffect(() => {
        getToken();
        if (!!!route.prams) {
        }
      }, []);

    const [profile, setProfile] = useState([]);
    
    const getprofile = async () => {
        const userToken = await AsyncStorage.getItem("token");
        console.log(userToken);
        await axios
          .get("http://localhost:8080/api/user/userprofile", {
            headers: {
              Authorization: userToken,
            },
          })
          .then((res) => {
            setProfile(res.data.User);
          });
      };

      const deleteProfile = async (id) => {
        Alert.alert("Are you sure?", "This will permanently delete your profile!", [
            {
              text: "OK",
              onPress: async () => {
                const userToken = await AsyncStorage.getItem("token");
                axios
                  .delete(
                    `http://localhost:8080/api/user/deleteuser `,
                    {
                      headers: {
                        Authorization: userToken,
                      },
                    }
                  )
                  .then((res) => {
                    navigation.push("LoadingScreen");
                    getprofile();
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
      }

      const onLogOut = async () => {
        Alert.alert("Are you sure you want to logout?", "", [
          {
            text: "Ok",
            onPress: async () => {
              await AsyncStorage.clear();
              navigation.push("LoadingScreen");
            },
          },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
          },
        ]);
      };

        useEffect(() => {
        getprofile();
        },[])

    return(
        <View style={styles.container}>
           <View style={styles.rect}>
        <Image
          style={styles.tinyLogo}
          source={{ uri: profile.picture }}
        />
      </View>
            <Text
                style={{
                marginVertical: 2,
                fontSize: 25,
                marginTop: 0,
                fontWeight: "bold",
                textAlign:"center",
                }}
             >
               <Text>{profile.name}</Text>
            </Text>
            <View style={styles.no1}>
                <Text
                 style={{
                    marginLeft: "20%",
                    fontSize: 18,
                    marginTop: 25,
                    marginRight: 20,
                   }}
                  > Full Name : {profile.name}
                </Text>
                <Text
                 style={{
                  marginLeft: "20%",
                    fontSize: 18,
                    marginTop: 18,
                    marginRight: 20,
                   }}
                  > E-Mail Address : {profile.email}
                </Text>
             </View>

                <TouchableOpacity
                   style={[styles.containerx, styles.materialButtonDark]}
                    onPress={() => navigation.navigate("UpdateUserProfile")}
                    >
                    <Text style={styles.updateButton}>Update Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.containerx, styles.materialButtonDark1]}
                    onPress={() => deleteProfile(profile._id)}
                    >
                    <Text style={styles.deleteButton}>Delete Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.containerx, styles.materialButtonDark2]}
                    onPress={onLogOut}
                    >
                    <Text style={styles.logoutButton}>LogOut</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    logo1:{
        width: 150,
        height: 170,
        marginTop:60,
        marginLeft:120,
        borderRadius:100
    },
    no1: {
        color: "rgba(155,155,155,1)",
        fontSize: 29,
        marginTop: 4,
      },
    containerx: {
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 2,
        shadowColor: "#000",
        shadowOffset: {
        height: 1,
     },
        shadowOpacity: 0.35,
        shadowRadius: 5,
        elevation: 2,
        minWidth: 88,
        paddingLeft: 26,
        paddingRight: 16,
  },
  materialButtonDark: {
        height: 40,
        width: 250,
        borderColor:"#7E3517",
        borderWidth:1,
        borderRadius: 100,
        elevation: 5,
        shadowOpacity: 0,
        marginTop: 100,
        marginBottom: 10,
        marginLeft: 80,
  },
  materialButtonDark1: {
    height: 40,
    width: 250,
    borderColor:"#fffff",
    backgroundColor:"#800000",
    borderWidth:1,
    borderRadius: 100,
    elevation: 5,
    shadowOpacity: 0,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 80,
},
materialButtonDark2: {
    height: 40,
    width: 250,
    borderColor:"#838996",
    backgroundColor:"#BCC6CC",
    borderWidth:1,
    borderRadius: 100,
    elevation: 5,
    shadowOpacity: 0,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 80,
},
updateButton: {
    color: "#7E3517",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 18,
},
deleteButton: {
    color: "#ffff",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 18,
},
logoutButton:{
    color: "#000000",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 18,
},
rect: {
  width: 200,
  height: 190,
  backgroundColor: "rgba(255,255,255,1)",
  shadowColor: "rgba(208,194,194,1)",
  shadowOffset: {
    width: 5,
    height: 5,
  },
  elevation: 39,
  marginTop: "10%",
  marginBottom:"5%",
  marginLeft:"26%",
  shadowRadius: 13,
},
tinyLogo: {
  width: 200,
  height: 190,
  marginBottom: 20,
  marginTop: 0,
  marginLeft: 0,
},
})