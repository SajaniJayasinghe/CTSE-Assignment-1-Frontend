import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/MaterialIcons";
import { MultiSelect } from "react-native-element-dropdown";
import { responsiveWidth } from "react-native-responsive-dimensions";
import CustomLoading from "../../components/CustomLoading";
import axios from "axios";

export default function UpdateHotelDetails({ route, navigation }) {
  const data = [
    { label: "Wifi", value: "Wifi" },
    { label: "AC", value: "AC" },
    { label: "Food", value: "Food" },
    { label: "Pool", value: "Pool" },
    { label: "Parking", value: "Parking" }
  ];

  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [picture, setpicture] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [facilities, setfacilities] = useState();
  const [hotelID, sethotelID] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [imageUploadStatus, setImageUploadStatus] = useState(
    "Choose Event Picture"
  );
  const [validationErrors, setValidationErrors] = useState({});
  const [error, setError] = useState("");

  const getHotel = async () => {
    await axios
      .get(`http://localhost:8080/api/hotels/${route.params}`)
      .then((res) => {
        if (res.data.success) {
          setname(res.data.existinghotel.name);
          setdescription(res.data.existinghotel.description);
          setpicture(res.data.existinghotel.picture);
          setaddress(res.data.existinghotel.address);
          setphone(res.data.existinghotel.phone);
          setSelectedItems(res.data.existinghotel.facilities);
        }
        console.log(res.data.existinghotel);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //For Multiple selection
  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
      </View>
    );
  };

  const updateHotel = async () => {
    const URL = `http://localhost:8080/api/hotels/update/${hotelID}`;
    const payload = new FormData();
    setLoading(true);

    const updatedData = {
      name: name,
      description: description,
      address: address,
      phone: phone,
      facilities: selectedItems
    };

    try {
      await axios.put(URL, updatedData).then((res) => {
        if (res.data) {
          console.log(res.data);
          setLoading(false);
          Alert.alert("Hotel Updated Successfully");
          navigation.push("HotelDetails", hotelID);
        } else {
          setError(res.data.error);
          setLoading(false);
        }
      });
    } catch (error) {
      console.log(JSON.stringify(error.response));
    }
  };
  useEffect(() => {
    getHotel();
    console.log(facilities);
  }, []);

  //for Image upload
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
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
              marginTop: 15,
              color: "#3F000F",
              marginBottom: 10,
              fontFamily: "Times New Roman"
            }}
          >
            Update Hotel Details
          </Text>
          <View style={styles.rect}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679427495/cinnamon_jmlgpz.webp"
              }}
            />
          </View>
          <ScrollView
            vertical={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            decelerationRate="fast"
            pagingEnabled
          >
            <Text style={styles.nameText1}>Select Facilities</Text>
            <MultiSelect
              style={styles.textInputnew}
              placeholderStyle={{
                fontSize: 14,
                color: "grey"
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
                      padding: 10,
                      backgroundColor: "white",
                      borderRadius: 5,
                      gap: 15,
                      marginTop: "5%",
                      marginBottom: "9%",
                      marginLeft: "22%"
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
              value={name}
              onChange={(e) => setname(e.nativeEvent.text)}
            />
            <Text style={styles.nameText1}>Enter Hotel Address</Text>
            <TextInput
              placeholder="Enter Hotel Address here"
              style={styles.address}
              value={address}
              onChange={(e) => setaddress(e.nativeEvent.text)}
            />

            <Text style={styles.nameText1}>Enter Contact Number</Text>
            <TextInput
              placeholder="Enter Contact Number"
              style={styles.textInput}
              value={phone}
              onChange={(e) => setphone(e.nativeEvent.text)}
            />

            <Text style={styles.nameText1}>Enter Description</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <TextInput
                placeholder="Enter Description here"
                style={styles.description}
                value={description}
                onChange={(e) => setdescription(e.nativeEvent.text)}
              />
            </ScrollView>
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
            <TouchableOpacity
              style={[styles.containerx, styles.materialButtonDark1]}
              onPress={updateHotel}
            >
              <Text style={styles.loginButton}>Update Hotel</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
      {loading ? <CustomLoading /> : null}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  nameText: {
    color: "#6D7B8D",
    fontSize: 16,
    lineHeight: 18,
    marginTop: 17,
    marginLeft: 36
  },
  nameText1: {
    color: "#6D7B8D",
    fontSize: 16,
    lineHeight: 18,
    marginTop: 5,
    marginLeft: 36
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
    borderColor: "#560319"
  },
  textInput: {
    height: 50,
    width: 320,
    textAlign: "center",
    fontSize: 15,
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 36,
    borderWidth: 1,
    borderColor: "#560319"
  },
  address: {
    height: 55,
    width: 320,
    textAlign: "center",
    fontSize: 15,
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 36,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: "#560319"
  },
  description: {
    height: 75,
    width: 320,
    textAlign: "center",
    fontSize: 15,
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 36,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: "#560319"
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
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderColor: "#560319",
    borderWidth: 1,
    marginTop: 10,
    width: 320,
    marginLeft: 36
  },
  containerx: {
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      height: 1
    },

    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 26,
    paddingRight: 16
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
    marginLeft: 90
  },
  loginButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 18
  },
  logo1: {
    width: 400,
    height: 50,
    marginTop: -1,
    marginLeft: 0
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
    marginTop: "5%"
  },
  imageUploadField: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "5%"
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
    marginTop: "5%"
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
    fontFamily: "Times New Roman"
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
    borderWidth: 1
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  arrowHeader: {
    paddingHorizontal: "5%",
    marginTop: "12%",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
