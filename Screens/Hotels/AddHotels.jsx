import React, { useState } from "react";
import {
  View,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import * as ImagePicker from "expo-image-picker";
import CustomLoading from "../../components/CustomLoading";
import axios from "axios";
import { responsiveWidth } from "react-native-responsive-dimensions";
import Icon from "react-native-vector-icons/MaterialIcons";
import { MultiSelect } from "react-native-element-dropdown";

export default function AddHotels({ navigation }) {
  const data = [
    { label: "Wifi", value: "Wifi" },
    { label: "AC", value: "AC" },
    { label: "Food", value: "Food" },
    { label: "Pool", value: "Pool" },
    { label: "Parking", value: "Parking" },
  ];
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [imageUploadStatus, setImageUploadStatus] = useState(
    "Choose Hotel Picture"
  );
  const [validationErrors, setValidationErrors] = useState({});

  //For Multiple selection
  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
      </View>
    );
  };

  const addHotel = () => {
    const URL = `http://localhost:8080/api/hotels/addhotel`;

    const payload = new FormData();
    setLoading(true);
    payload.append("name", name);
    payload.append("description", description);
    payload.append("picture", {
      uri: image,
      type: "image/jpeg",
      name: "image.jpg",
    });
    payload.append("address", address);
    payload.append("phone", phone);

    //for multiple selection
    if (selectedItems.length > 0) {
      for (var i = 0; i < selectedItems.length; i++) {
        payload.append(`facilities[${i}]`, selectedItems[i]);
      }
    }

    axios
      .post(URL, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        Alert.alert("Success", "Hotel Added Successfully");
        setLoading(false);
        navigation.navigate("HotelHome");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        Alert.alert(
          "Error",
          "Hotel adding Unsuccessful",
          [{ text: "Check Again" }],
          { cancelable: false }
        );
      });
  };
  console.log(image);
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
      setImageUploadStatus("Choose Hotel Picture");
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text
            style={{
              fontWeight: "800",
              textAlign: "center",
              fontSize: 36,
              marginLeft: -10,
              marginTop: 50,
              color: "#3F000F",
              fontFamily: "Times New Roman",
            }}
          >
            Add New Hotel
          </Text>
          <ScrollView
            vertical={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            decelerationRate="fast"
            pagingEnabled
          >
            <MultiSelect
              style={styles.textInputnew}
              placeholderStyle={{
                fontSize: 17,
                color: "#BCC6CC",
                fontFamily: "Times New Roman",
                marginTop: 10,
                marginBottom: 10,
              }}
              search
              data={data}
              labelField="label"
              valueField="value"
              placeholder="Select Facilities"
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
            <Text style={styles.nameText}>Enter Hotel Name</Text>
            <TextInput
              placeholder="Enter Hotel Name here"
              style={styles.textInput}
              onChange={(e) => setname(e.nativeEvent.text)}
              value={name}
            />
            <Text style={styles.nameText1}>Enter Hotel Address</Text>
            <TextInput
              placeholder="Enter Hotel Address here"
              style={styles.textInput}
              onChange={(e) => setaddress(e.nativeEvent.text)}
              value={address}
            />

            <Text style={styles.nameText1}>Enter Contact Number</Text>
            <TextInput
              placeholder="Enter Contact Number"
              style={styles.textInput}
              onChange={(e) => setphone(e.nativeEvent.text)}
              value={phone}
            />

            <Text style={styles.nameText1}>Enter Description</Text>
            <TextInput
              placeholder="Enter Description here"
              style={styles.nameText2}
              onChange={(e) => setdescription(e.nativeEvent.text)}
              value={description}
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
          </ScrollView>
          <TouchableOpacity
            style={[styles.containerx, styles.materialButtonDark1]}
            onPress={() => {
              addHotel();
            }}
          >
            <Text style={styles.loginButton}>Add Hotel</Text>
          </TouchableOpacity>
        </View>
      </View>
      {loading ? <CustomLoading /> : null}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nameText: {
    color: "#6D7B8D",
    fontSize: 16,
    lineHeight: 18,
    marginTop: 17,
    marginLeft: 36,
  },
  nameText1: {
    color: "#6D7B8D",
    fontSize: 16,
    lineHeight: 18,
    marginTop: 5,
    marginLeft: 36,
  },
  nameText2: {
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
  textInput: {
    height: 40,
    width: 320,
    textAlign: "center",
    fontSize: 15,
    borderRadius: 25,
    marginTop: 10,
    marginLeft: 36,
    borderWidth: 1,
    borderColor: "#560319",
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
    backgroundColor: "#560319",
    borderWidth: 1,
    borderRadius: 100,
    elevation: 5,
    shadowOpacity: 0,
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 90,
  },
  loginButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 18,
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
    fontFamily: "Times New Roman",
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
});
