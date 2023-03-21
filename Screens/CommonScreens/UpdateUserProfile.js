import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

export default function UpdateUserProfile() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679325197/Screenshot_2023-03-20_at_18.29.26-removebg-preview_y0wd4x.png",
        }}
      />
      <View style={styles.rect}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679392630/14_bzemlw.jpg",
          }}
        />
      </View>
      <Text
        style={{
          marginVertical: 2,
          fontSize: 25,
          marginTop: 0,
          marginLeft: 90,
          fontWeight: "bold",
          textAlign: "justify",
        }}
      >
        <Text>Update My Profile</Text>
      </Text>
      <View style={styles.no1}>
        <Text
          style={{
            marginVertical: 2,
            fontSize: 17,
            marginTop: 30,
            marginBottom: -10,
            marginLeft: 50,
          }}
        >
          Enter Your Name :
        </Text>
        <TextInput
          keyboardType=" Enter Your Name"
          style={styles.textView}
          //   value={name}
          //   onChange={(e) => setname(e.nativeEvent.text)}
          placeholder="   Enter Your Name"
        />
        <Text
          style={{
            marginVertical: 2,
            fontSize: 17,
            marginTop: 20,
            marginBottom: -10,
            marginLeft: 50,
          }}
        >
          Your Email Address :
        </Text>
        <TextInput
          placeholder=" Enter Your Email Address"
          editable={false}
          //   value={email}
          //   onChange={(e) => setemail(e.nativeEvent.text)}
          style={styles.textView}
        />
        <TouchableOpacity
          style={[styles.containerx, styles.materialButtonDark]}
          //   onPress={() => updateUser()}
        >
          <Text style={styles.updateButton}>Update Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.containerx, styles.materialButtonDark1]}
          onPress={() => navigation.navigate("UserProfile")}
        >
          <Text style={styles.cancelButton}>Cancel</Text>
        </TouchableOpacity>
        <Image
          style={styles.logo2}
          source={{
            uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679325197/Screenshot_2023-03-20_at_18.29.26-removebg-preview_y0wd4x.png",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 400,
    height: 20,
    marginTop: 0,
    marginLeft: 0,
  },
  tinyLogo: {
    width: 180,
    height: 180,
    marginBottom: 20,
    marginTop: 30,
    marginLeft: 110,
  },
  no1: {
    color: "rgba(155,155,155,1)",
    fontSize: 29,
    marginTop: 4,
  },
  textView: {
    marginLeft: 20,
    height: 40,
    padding: 10,
    marginLeft: 45,
    marginTop: 15,
    width: 300,
    fontSize: 16,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: "#ffff",
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
    borderColor: "#7E3517",
    backgroundColor: "#7E3517",
    borderWidth: 1,
    borderRadius: 100,
    elevation: 5,
    shadowOpacity: 0,
    marginTop: 60,
    marginBottom: 10,
    marginLeft: 65,
  },
  materialButtonDark1: {
    height: 40,
    width: 250,
    borderColor: "#7E3517",
    borderWidth: 1,
    borderRadius: 100,
    elevation: 5,
    shadowOpacity: 0,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 65,
  },
  updateButton: {
    color: "#ffff",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 18,
  },
  cancelButton: {
    color: "#7E3517",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 18,
  },
  logo2: {
    width: 400,
    height: 30,
    marginTop: 90,
    marginLeft: 0,
  },
});
