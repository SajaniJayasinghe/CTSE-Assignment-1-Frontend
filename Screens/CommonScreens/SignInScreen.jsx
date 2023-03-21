import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function SignInScreen ({navigation}){
    return(
        <View style={styles.container}>
           <Image
            style={styles.logo}
            source={{
            uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679314631/Screenshot_2023-03-20_at_17.45.47-removebg-preview_poz7nt.png",
            }}
           />
          <Text
            style={{
            fontSize: 28,
            marginLeft: 100,
            marginTop: 60,
            color:"#7E3517",
            fontWeight: "bold",
            marginBottom: 10,
            }}
           >
           HELLO SIGN IN
          </Text>
         
          <Text style={styles.emailText}>Enter Your Email</Text>
          <TextInput
            placeholder="Enter E-mail Address here"
            style={styles.textInput}
          />
     
          <Text style={styles.passwordText}>
            Enter Your Password
          </Text>
          <TextInput placeholder="Enter Password here" style={styles.textInput} />
        
          <TouchableOpacity
            style={[styles.containerx, styles.materialButtonDark1]}
            onPress={() => navigation.navigate("AdminDashboard")}
            >
            <Text style={styles.loginButton} >SIGN IN</Text>
          </TouchableOpacity>
       
          <Image
                style={styles.logo1}
                source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679325197/Screenshot_2023-03-20_at_18.29.26-removebg-preview_y0wd4x.png",
                }}
          />
          <Text style={styles.loginText4}>Don't have an account?</Text>
          <Text style={styles.loginText5}  onPress={() => navigation.navigate("SignupScreen")}>Sign Up</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    logo:{
        width: 400,
        height: 100,
    },
    logo1:{
        width: 400,
        height: 50,
        marginTop:220,
        marginLeft:0
    },
    emailText: {
        color: "#6D7B8D",
        fontSize: 16,
        lineHeight: 18,
        marginTop: 50,
        marginLeft: 40,
      },
    passwordText: {
        color: "#6D7B8D",
        fontSize: 16,
        lineHeight: 18,
        marginTop: 30,
        marginLeft: 40,
      },
    textInput: {
        height: 40,
        width: 320,
        textAlign: "center",
        fontSize: 15,
        borderRadius: 25,
        marginTop: 10,
        marginLeft: 35,
        borderWidth: 1,
        borderColor:"#5C3317"
      },
    
      loginText3: {
        color: "black",
        fontSize: 18,
        lineHeight: 18,
      },
      loginText4: {
        color: "black",
        fontSize: 15,
        lineHeight: 18,
        marginTop: -260,
        marginLeft: 80,
      },
      loginText5: {
        color: "blue",
        fontSize: 15,
        lineHeight: 18,
        marginTop: -18,
        marginLeft: 249,
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
  materialButtonDark1: {
    height: 40,
    width: 210,
    backgroundColor:"#7E3517",
    borderWidth:1,
    borderRadius: 100,
    elevation: 5,
    shadowOpacity: 0,
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 90,
},

loginButton:{
  color: "white",
  fontWeight: "bold",
  fontSize: 18,
  lineHeight: 18,
  
},
})