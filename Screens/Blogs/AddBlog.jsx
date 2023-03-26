import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
  Button,
} from "react-native";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import CustomLoading from "../../components/CustomLoading";
import { responsiveWidth } from "react-native-responsive-dimensions";
import Icon from "react-native-vector-icons/MaterialIcons";
import { MultiSelect } from "react-native-element-dropdown";

export default function AddBlog({ navigation }) {
  const data = [
    { label: "Beach", value: "Beach" },
    { label: "Forest", value: "Forest" },
    { label: "Ancient City", value: "Ancient City" },
    { label: "Mountans", value: "Mountans" },
    { label: "WaterFalls", value: "WaterFalls" },
  ];
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [blogName, setblogName] = useState("");
  const [description, setdescription] = useState("");
  const [date, setdate] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [imageUploadStatus, setImageUploadStatus] =
    useState("Choose Blog Image");
  const [validationErrors, setValidationErrors] = useState({});

  //For Multiple selection
  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
      </View>
    );
  };

  const addblog = () => {
    const URL = `http://localhost:8080/api/blog/addblog`;

    if (!blogName) {
      setValidationErrors({
        blogName: "Blog Name is required",
      });
    } else if (!image) {
      setValidationErrors({ picture: "Picture is Required" });
    } else {
      const payload = new FormData();
      setLoading(true);
      payload.append("blogName", blogName);
      payload.append("description", description);
      payload.append("picture", {
        uri: image,
        type: "image/jpeg",
        name: "image.jpg",
      });
      payload.append("date", date);
      console.log(payload);

      //for multiple selection
      if (selectedItems.length > 0) {
        for (var i = 0; i < selectedItems.length; i++) {
          payload.append(`type[${i}]`, selectedItems[i]);
        }
      }

      axios
        .post(URL, payload, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
          Alert.alert("Success", "Blog Added Successfully");
          setLoading(false);
          navigation.navigate("BlogsHome");
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          Alert.alert(
            "Error",
            "Blog adding Unsuccessful",
            [{ text: "Check Again" }],
            { cancelable: false }
          );
        });
    }
  };

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
      setImageUploadStatus("Image Uploaded");
    } else {
      setImage(null);
      setImageUploadStatus("Choose Blog Image");
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.dance}
          source={{
            uri: "https://res.cloudinary.com/dotz6cdgt/image/upload/v1679713666/pexels-fabian-wiktor-994605_qifbed.jpg",
          }}
        />
        <Text
          style={{
            fontWeight: "800",
            textAlign: "center",
            fontSize: 30,
            marginLeft: -10,
            marginTop: 20,
            color: "#3F000F",
          }}
        >
          Add New Blog
        </Text>
        <ScrollView>
          <View>
            <MultiSelect
              style={styles.textInputnew}
              placeholderStyle={{
                fontSize: 17,
                color: "#BCC6CC",
                marginTop: 10,
                marginBottom: 10,
              }}
              search
              data={data}
              labelField="label"
              valueField="value"
              placeholder="Select Blogs"
              searchPlaceholder="Search..."
              value={selectedItems}
              onChange={(item) => {
                setSelectedItems(item);
              }}
              renderItem={renderItem}
              renderSelectedItem={(item, unSelect) => (
                <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      padding: 20,
                      backgroundColor: "white",
                      borderRadius: 5,
                      gap: 20,
                      marginTop: "10%",
                      marginBottom: "10%",
                      marginLeft: "8%",
                    }}
                  >
                    <Text style={styles.textSelectedStyle}>{item.label}</Text>
                    <Icon name="delete" size={20} color="red" />
                  </View>
                </TouchableOpacity>
              )}
            />
            {validationErrors.type ? (
              <Text style={styles.errorTextSelection}>
                {validationErrors.type}
              </Text>
            ) : (
              ""
            )}

            <Text style={styles.nameText}>Enter Blog Name</Text>
            <TextInput
              placeholder="Enter Blog Name "
              style={styles.textInput}
              onChange={(e) => setblogName(e.nativeEvent.text)}
              value={blogName}
            />
            {validationErrors.blogName ? (
              <Text style={styles.errorTextSelection}>
                {validationErrors.blogName}
              </Text>
            ) : (
              ""
            )}

            <Text style={styles.nameText2}>Enter Description</Text>
            <TextInput
              placeholder="Enter Description"
              style={styles.nameText3}
              value={description}
              onChange={(e) => setdescription(e.nativeEvent.text)}
            />
            <Text style={styles.nameText2}>Enter Date </Text>
            <TextInput
              placeholder="Enter Date"
              style={styles.textInput}
              onChange={(e) => setdate(e.nativeEvent.text)}
              value={date}
            />

            <View style={styles.imageUploadField}>
              <TextInput
                style={styles.ImageTextInput}
                placeholder="Choose File"
                editable={false}
                selectTextOnFocus={false}
                value={imageUploadStatus}
              />
              <TouchableOpacity onPress={pickImage} style={styles.uploadButton}>
                <Text style={styles.uploadTxt}>Upload</Text>
              </TouchableOpacity>
            </View>
            {validationErrors.picture ? (
              <Text style={styles.errorTextSelection}>
                {validationErrors.picture}
              </Text>
            ) : (
              ""
            )}
          </View>
          <TouchableOpacity
            style={[styles.containerx, styles.materialButtonDark1]}
            onPress={() => {
              addblog();
            }}
          >
            <Text style={styles.loginButton}>Add Blog</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {loading ? <CustomLoading /> : null}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rect: {
    width: 360,
    height: 200,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 22,
    shadowColor: "rgba(208,194,194,1)",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    elevation: 39,
    shadowOpacity: 1,
    marginTop: 10,
    marginLeft: 14,
    shadowRadius: 13,
  },
  tinyLogo: {
    width: 400,
    height: 70,
    marginTop: 0,
    marginLeft: 0,
  },

  dance: {
    width: 470,
    height: 200,
    marginTop: -5,
    marginLeft: -10,
  },
  dropdown: {
    margin: 16,
    height: 40,
    backgroundColor: "white",
    borderRadius: 25,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderColor: "#560319",
    borderWidth: 1,
    marginTop: 10,
    width: 320,
    marginLeft: 36,
  },
  textInput: {
    height: 35,
    width: 320,
    textAlign: "center",
    fontSize: 15,
    borderRadius: 25,
    marginTop: 7,
    marginLeft: 36,
    borderWidth: 1,
    borderColor: "#560319",
  },
  nameText: {
    color: "#6D7B8D",
    fontSize: 16,
    lineHeight: 18,
    marginTop: 10,
    marginLeft: 36,
  },
  nameText1: {
    color: "#6D7B8D",
    fontSize: 16,
    lineHeight: 18,
    marginTop: 10,
    marginLeft: 36,
  },
  nameText2: {
    color: "#6D7B8D",
    fontSize: 16,
    lineHeight: 18,
    marginTop: -5,
    marginLeft: 36,
  },
  nameText2: {
    color: "#6D7B8D",
    fontSize: 16,
    lineHeight: 18,
    marginTop: 5,
    marginLeft: 36,
  },
  nameText3: {
    height: 80,
    width: 320,
    textAlign: "center",
    fontSize: 15,
    borderRadius: 25,
    marginTop: 7,
    marginLeft: 36,
    borderWidth: 1,
    borderColor: "#560319",
  },
  imageUploadField: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "5%",
  },

  ImageTextInput: {
    width: "50%",
    height: 50,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    color: "gray",
    marginLeft: "10%",
    marginTop: "5%",
  },

  uploadButton: {
    width: "30%",
    height: "30%",
    marginRight: "20%",
    backgroundColor: "#E8A317",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 50,
    marginTop: "5%",
    marginLeft: responsiveWidth(2),
  },
  textInputnew: {
    width: "80%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    paddingLeft: 10,
    marginLeft: "10%",
    marginTop: "5%",
    borderColor: "grey",
    borderWidth: 1,
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
    height: 45,
    width: 210,
    backgroundColor: "#551606",
    borderRadius: 100,
    elevation: 5,
    shadowOpacity: 0,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 90,
  },
  rect: {
    width: 250,
    height: 200,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 22,
    shadowColor: "rgba(208,194,194,1)",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    elevation: 39,
    shadowOpacity: 1,
    marginTop: 0,
    marginLeft: 14,
    shadowRadius: 13,
  },

  tinyLogo: {
    width: 250,
    height: 200,
    marginBottom: -10,
    borderRadius: 15,
  },
  loginButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 20,
  },
  textInputnew: {
    width: "80%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    paddingLeft: 10,
    marginLeft: "10%",
    marginTop: "5%",
    borderColor: "grey",
    borderWidth: 1,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrowHeader: {
    paddingHorizontal: "5%",
    marginTop: "12%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  errorText: {
    width: "100%",
    marginLeft: "3%",
    color: "red",
    marginTop: "-4%",
    marginBottom: "3%",
    fontSize: 12,
    textAlign: "left",
  },
  errorTextSelection: {
    width: "100%",
    marginLeft: "10%",
    color: "red",
    marginTop: "2%",
    marginBottom: "3%",
    fontSize: 12,
    textAlign: "left",
  },
});
