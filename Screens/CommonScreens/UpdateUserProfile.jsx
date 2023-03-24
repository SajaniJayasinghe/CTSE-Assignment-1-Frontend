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
import {
  responsiveWidth,
 } from "react-native-responsive-dimensions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import CustomLoading from "../../components/CustomLoading";

export default function UpdateUserProfile({ route, navigation }) {
  useEffect(() => {
    if (!!!route.prams) {
    }
  }, []);

  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [imageUploadStatus, setImageUploadStatus] = useState(
      "Choose Picture"
    );
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [error, setError] = useState("");
  

  const getUser = async () => {
    var token = await AsyncStorage.getItem("token");
    console.log(token);
    await axios
      .get(`http://localhost:8080/api/user/userprofile`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        if (res.data.status) {
          setname(res.data.User.name);
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
    const URL = `http://localhost:8080/api/user/updateuser`;

    const payload = new FormData();
    payload.append("name", name);
    payload.append("email", email);
    payload.append("picture", {
        uri: image,
        type: "image/jpeg",
        name: "image.jpg",
      });

    axios
      .put(URL, payload, {
        headers: {
          Authorization: Token,
           "Content-Type": "multipart/form-data",
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
          setLoading(false);
      })
      .catch((error) => {
        console.error(error);
         setLoading(false);
        Alert.alert(
          "Error",
          "Inserting Unsuccessful",
          [{ text: "Check Again" }],
          { cancelable: false }
        );
      });
  };
 console.log(image)
    //for Image upload
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
  });

  if (!result.canceled) {
    setImage(result.assets[0].uri);
  } else {
    setImage(null);
  }
};

  return (
    <View style={styles.container}>
      <View style={styles.rect}>
      </View>
      <Text
        style={{
          marginVertical: 2,
          fontSize: 25,
          marginTop: "30%",
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
           Full Name :
        </Text>
        <TextInput
          style={styles.textView}
            value={name}
            onChange={(e) => setname(e.nativeEvent.text)}
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
          Email Address :
        </Text>
        <TextInput
          placeholder=" Enter Your Email Address"
          editable={false}
            value={email}
            onChange={(e) => setEmail(e.nativeEvent.text)}
          style={styles.textView}
        />
          <View style={styles.imageUploadField}>
               <TextInput
                 style={styles.ImageTextInput}
                 placeholder="Choose File"
                 editable={false}
                 selectTextOnFocus={false}
                 value={imageUploadStatus}
               />
               <TouchableOpacity
                 onPress={pickImage}
                 style={styles.uploadButton}
               >
                 <Text style={styles.uploadTxt}>Upload</Text>
               </TouchableOpacity>
             </View>

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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderColor: "#E8A317",
    backgroundColor: "#E8A317",
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
    color: "black",
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
imageUploadField: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "5%",
  },
 
  ImageTextInput: {
    width: "48%",
    height: 50,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    color: "gray",
    marginLeft:"13%",
    marginTop:"5%"
  },
  uploadTxt: {
    color: "black",
    fontWeight: "bold",
  },
  uploadButton: {
    width: "25%",
    height: "30%",
    marginRight:"20%",
    backgroundColor: "#E8A317",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 50,
    marginTop:"5%",
    marginLeft: responsiveWidth(2),
  },
});
