import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

export default function HomeScreen ({navigation}) {
  return (
    <View style={styles.container}>
       
        <Image
        style={styles.homelogo1}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679312799/Screenshot_2023-03-20_at_17.15.19-removebg-preview_rsuins.png",
        }}
       />
        <TouchableOpacity
            style={[styles.containerx, styles.materialButtonDark]}
            onPress={() => navigation.navigate("SignInScreen")}
          >
           <Text style={styles.loginButton} >SIGN IN</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
            style={[styles.containerx, styles.materialButtonDark1]}
            onPress={() => navigation.navigate("SignupScreen")}
          >
           <Text style={styles.signupButton} >SIGN UP</Text>
        </TouchableOpacity>
       
        <Image
        style={styles.homelogo}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679296071/tr_al0fjx.webp",
        }}
      />
       
        <Image
            style={styles.logo1}
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
    backgroundColor:"#7E3517",
    borderWidth:1,
    borderRadius: 100,
    elevation: 5,
    shadowOpacity: 0,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 80,
},

  loginButton: {
    color: "#7E3517",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 18,
},
   signupButton:{
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 18,
},
homelogo:{
    width: 500,
    height: 300,
    marginLeft:-60,
    marginTop:90
},
homelogo1:{
    width: 180,
    height: 100,
    marginLeft:120,
    marginTop:20
},
logo1:{
  width: 400,
  height: 50,
  marginTop:-10,
  marginLeft:0
},
})