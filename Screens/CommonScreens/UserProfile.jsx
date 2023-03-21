import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function UserProfile({navigation}) {
    return(
        <View style={styles.container}>
          <Image
                style={styles.logo}
                source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679325197/Screenshot_2023-03-20_at_18.29.26-removebg-preview_y0wd4x.png",
                }}
          />
           <Image
                style={styles.logo1}
                source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679339046/user-removebg-preview_iwug42.png",
                }}
            />
            <Text
                style={{
                marginVertical: 2,
                fontSize: 25,
                marginTop: 0,
                marginLeft: 134,
                fontWeight: "bold",
                textAlign:"justify",
                }}
             >
               <Text>{/* {profile.name} */}hello</Text>
            </Text>
            <View style={styles.no1}>
                <Text
                 style={{
                    marginLeft: 50,
                    fontSize: 18,
                    marginTop: 25,
                    marginRight: 20,
                   }}
                  > Full Name : 
                </Text>
                {/* <Text style={styles.textView}>{profile.name}</Text> */}
               
                <Text
                 style={{
                    marginLeft: 50,
                    fontSize: 18,
                    marginTop: 18,
                    marginRight: 20,
                   }}
                  > E-Mail Address : 
                </Text>
                {/* <Text style={styles.textView}>{profile.name}</Text> */}
             </View>

                <TouchableOpacity
                   style={[styles.containerx, styles.materialButtonDark]}
                    onPress={() => navigation.navigate("UpdateUserProfile")}
                    >
                    <Text style={styles.updateButton}>Update Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.containerx, styles.materialButtonDark1]}
                    // onPress={() => deleteProfile(profile._id)}
                    >
                    <Text style={styles.deleteButton}>Delete Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.containerx, styles.materialButtonDark2]}
                    // onPress={onLogOut}
                    >
                    <Text style={styles.logoutButton}>LogOut</Text>
                </TouchableOpacity>

            <Image
                    style={styles.logo2}
                    source={{
                    uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679325197/Screenshot_2023-03-20_at_18.29.26-removebg-preview_y0wd4x.png",
                    }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    logo:{
        width: 400,
        height: 10,
        marginTop:0,
        marginLeft:0
    },
    logo1:{
        width: 150,
        height: 170,
        marginTop:60,
        marginLeft:120,
        borderRadius:100
    },
    logo2:{
        width: 400,
        height: 30,
        marginTop:100,
        marginLeft:0
    },
    no1: {
        color: "rgba(155,155,155,1)",
        fontSize: 29,
        marginTop: 4,
      },
    textView: {
        marginLeft: 150,
        height: 40,
        padding: 10,
        marginTop: -30,
        width: 200,
        fontSize: 16,
        textAlign: "left",
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
}
})