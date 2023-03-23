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
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function UpdateUserProfile({ route, navigation }) {
  useEffect(() => {
    if (!!!route.prams) {
    }
  }, []);

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  const getUser = async () => {
    var token = await AsyncStorage.getItem("token");
    console.log(token);
    await axios
      .get(` `, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        if (res.data.status) {
          setFullname(res.data.User.fullname);
          setEmail(res.data.User.email);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(() => {
    getUser();
  }, []);

  const updateUser = async () => {
    const Token = await AsyncStorage.getItem("token");
    const URL = ` `;

    const payload = {
      fullname: fullname,
      email: email,
    };

    axios
      .put(URL, payload, {
        headers: {
          Authorization: Token,
        },
      })
      .then((_response) => {
        Alert.alert(
          "Use Profile Updated",
          "Your Profile has updated successfully!!",
          [
            {
              text: "OK",
              onPress: () => navigation.navigate("UserDashboard", {}),
            },
          ],
          { cancelable: false }
        );
      })
      .catch((error) => {
        console.error(error);
        Alert.alert(
          "Error",
          "Inserting Unsuccessful",
          [{ text: "Check Again" }],
          { cancelable: false }
        );
      });
  };


  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679455037/Screenshot_2023-03-22_at_08.46.07_h1krq8.png",
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
          style={styles.textView}
            value={fullname}
            onChange={(e) => setFullname(e.nativeEvent.text)}
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
            value={email}
            onChange={(e) => setEmail(e.nativeEvent.text)}
          style={styles.textView}
        />
        <TouchableOpacity
          style={[styles.containerx, styles.materialButtonDark]}
            onPress={() => updateUser()}
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
            uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679455037/Screenshot_2023-03-22_at_08.46.07_h1krq8.png",
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
    borderColor: "#560319",
    backgroundColor: "#560319",
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
    borderColor: "#560319",
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
    color: "#560319",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 18,
  },
  logo2: {
    width: 400,
    height: 40,
    marginTop: 80,
    marginLeft: 0,
  },
});
