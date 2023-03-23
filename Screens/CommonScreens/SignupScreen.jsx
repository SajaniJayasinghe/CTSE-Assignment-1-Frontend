import React ,{useState} from "react";
import axios from "axios";

import { View, Image, StyleSheet, Text, TouchableOpacity,TextInput,Alert } from "react-native";

export default function SignupScreen({navigation}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const onSignUp = async() => {
      if (password == confirmPassword) {
        const payload = {
          name: name,
          email: email,
          password: password,
        };
    
    await axios
      .post("http://localhost:8080/api/user/register", payload)
      .then((res) => {
        if (res.data.status) {
          Alert.alert("Success", "Registered Successfully");
          setTimeout(() => {
            navigation.push("SignInScreen");
          }, 2000);
        } else {
          Alert.alert("Error", "Registration Failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
    else {
      Alert.alert("Error", "Password and Confirm Password should be same");
    }
  };
    return(
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={{
            uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679455024/Screenshot_2023-03-22_at_08.45.23-removebg-preview_uzzb85.png",
            }}
          />
          
            <Text
                style={{
                fontSize: 28,
                marginLeft: 30,
                marginTop: 60,
                color:"#560319",
                fontWeight: "bold",
                marginBottom: 10,
                }}
             >
             CREATE YOUR ACCOUNT
            </Text>

            <Text style={styles.Text}>Full Name </Text>
                <TextInput
                    placeholder="Enter Full Name here"
                    style={styles.textInput}
                    onChange={(e) => setName(e.nativeEvent.text)}
                    value={name}

            />

            <Text style={styles.Text2}> E Mail Address </Text>
                <TextInput placeholder="Enter E-mail Address here" 
                    style={styles.textInput} 
                    onChange={(e) => setEmail(e.nativeEvent.text)}
                    value={email}
            />

            <Text style={styles.Text2}> Password </Text>
                <TextInput placeholder="Enter Password here" 
                    style={styles.textInput} 
                    onChange={(e) => setPassword(e.nativeEvent.text)}
                    value={password}
            />

            <Text style={styles.Text2}> Confirm Password </Text>
                <TextInput placeholder="Re-Password here" 
                    style={styles.textInput} 
                    onChange={(e) => setConfirmPassword(e.nativeEvent.text)}
                    value={confirmPassword}
            />

            <TouchableOpacity
                 style={[styles.containerx, styles.materialButtonDark]}
                 onPress={onSignUp}
                 >
              <Text style={styles.signupButton} >SIGN UP</Text>
            </TouchableOpacity>
  
            <Image
                style={styles.logo1}
                source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679455037/Screenshot_2023-03-22_at_08.46.07_h1krq8.png",
                }}
          />
             <Text style={styles.loginText4}>Already have an account?</Text>
             <Text style={styles.loginText5}  onPress={() => navigation.navigate("SignInScreen")}>Sign In</Text>
           

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    logo:{
        width: 400,
        height: 100,
    },
    Text: {
        color: "#6D7B8D",
        fontSize: 16,
        lineHeight: 18,
        marginTop: 50,
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
    Text2: {
        color: "#6D7B8D",
        fontSize: 16,
        lineHeight: 18,
        marginTop: 20,
        marginLeft: 40,
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
    width: 210,
    backgroundColor:"#560319",
    borderWidth:1,
    borderRadius: 100,
    elevation: 5,
    shadowOpacity: 0,
    marginTop: 25,
    marginBottom: 20,
    marginLeft: 80,
},
signupButton:{
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 18,
  },
  logo1:{
    width: 400,
    height: 50,
    marginTop:50,
    marginLeft:0
},
loginText4: {
    color: "black",
    fontSize: 15,
    lineHeight: 18,
    marginTop: -100,
    marginLeft: 80,
  },
  loginText5: {
    color: "blue",
    fontSize: 15,
    lineHeight: 18,
    marginTop: -18,
    marginLeft: 260,
  },
})