import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native"
import axios from "axios";
import {
  responsiveWidth,
  responsiveHeight
 } from "react-native-responsive-dimensions";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignInScreen ({navigation}){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const storetoken = async (value) => {
    await AsyncStorage.setItem("token", value);
  };

  const handleSignIn = async () => {
    await axios
      .post("http://localhost:8080/api/user/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.data) {
          AsyncStorage.clear();
          storetoken(res.data.token);
          if (res.data.role === "Admin") {
            navigation.push("AdminDashboard");
          } else if (res.data.role === "User"){
            navigation.push("UserDashboard");
          }
          console.log(res.data);

        }
        })
        .catch((err) => {
          console.log(err);
          Alert.alert("Logging Failed");       
         });
  };
    return(
        <View style={styles.container}>
           <Image
            style={styles.logo}
            source={{
            uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679595504/q-removebg-preview_urtpsv.png",
            }}
           />
          <Text
            style={{
            fontSize: 28,
            marginTop: 10,
            color:"#560319",
            fontWeight: "bold",
            marginBottom: 10,
            textAlign: "center",
            }}
           >
           SIGN IN
          </Text>
         
          <Text style={styles.emailText}>Enter Your Email</Text>
          <TextInput
            placeholder="Enter E-mail Address here"
            style={styles.textInput}
            onChange={(e) => setEmail(e.nativeEvent.text)}
            // onChangeText={(e) => setEmail(e.nativeEvent.text)}
            value={email}
          />
     
          <Text style={styles.passwordText}>
            Enter Your Password
          </Text>
          <TextInput placeholder="Enter Password here" style={styles.textInput}
           onChange={(e) => setPassword(e.nativeEvent.text)}
          value={password} 
          />
        
          <TouchableOpacity
            style={[styles.containerx, styles.materialButtonDark1]}
            onPress={() => handleSignIn()}
            >
            <Text style={styles.loginButton} >SIGN IN</Text>
          </TouchableOpacity>
       
          <Image
                style={styles.logo1}
                source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679455037/Screenshot_2023-03-22_at_08.46.07_h1krq8.png",
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
      width: responsiveWidth(100),
      height: responsiveHeight(35),
      marginTop: 0,
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
        marginTop: 10,
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
        borderColor:"#560319"
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
    width: responsiveWidth(50),
   height: responsiveHeight(5),
    backgroundColor:"#AB784E",
    borderRadius: 100,
    elevation: 5,
    shadowOpacity: 0,
    marginTop: 40,
    marginBottom: 10,
    marginLeft: responsiveWidth(23),
},

  loginButton:{
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 18,
    
  },
})