import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/MaterialIcons";
import { MultiSelect } from "react-native-element-dropdown";
import { responsiveWidth } from "react-native-responsive-dimensions";
import CustomLoading from "../../components/CustomLoading";

export default function UpdateHotelDetails({ navigation }) {
  const data = [
    { label: "Wifi", value: "Wifi" },
    { label: "AC", value: "AC" },
    { label: "Food", value: "Food" },
    { label: "Pool", value: "Pool" },
    { label: "Parking", value: "Parking" },
  ];

  const [hotel_name, sethotel_name] = useState("");
  const [description, setdescription] = useState("");
  const [picture, setpicture] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [facilities, setfacilities] = useState("");
  const [hotelID, sethotelID] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [imageUploadStatus, setImageUploadStatus] = useState(
    "Choose Event Picture"
  );
  const [validationErrors, setValidationErrors] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    sethotelID(route.params.hotelID);
    settype(route.params.type);
    sethotel_name(route.params.hotel_name);
    setdescription(route.params.description);
    setpicture(route.params.picture);
    setaddress(route.params.address);
    setphone(route.params.phone);
    setfacilities(route.params.facilities);
  }, []);
  //For Multiple selection
  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
      </View>
    );
  };

  console.log(hotelID);

  const updateHotel = () => {
    const URL = `https://travel-go.herokuapp.com/api/hotels/update/${hotelID}`;

    const payload = new FormData();
    setLoading(true);
    payload.append("hotel_name", hotel_name);
    payload.append("description", description);
    payload.append("picture", {
      uri: image,
      type: "image/jpeg",
      name: "image.jpg",
    });
    payload.append("address", address);
    payload.append("phone", phone);
    payload.append("facilities", facilities);

    //for multiple selection
    if (selectedItems.length > 0) {
      for (var i = 0; i < selectedItems.length; i++) {
        payload.append(`type[${i}]`, selectedItems[i]);
      }
    }

    axios
      .put(URL, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        Alert.alert(
          "Hotel Updated",
          "Your Hotel has updated successfully!!",
          [
            {
              text: "OK",
              onPress: () => navigation.navigate("AdminDashboard"),
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
          "Updating Unsuccessful",
          [{ text: "Check Again" }],
          { cancelable: false }
        );
      });
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
      setImageUploadStatus("Choose Event Picture");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.homelogo}
          source={{
            uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679455037/Screenshot_2023-03-22_at_08.46.07_h1krq8.png",
          }}
        />
        <Text
          style={{
            fontWeight: "800",
            textAlign: "center",
            fontSize: 36,
            marginLeft: -10,
            marginTop: 15,
            color: "#3F000F",
            fontFamily: "Times New Roman",
          }}
        >
          Update Hotel Details
        </Text>
        <View style={styles.rect}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679427495/cinnamon_jmlgpz.webp",
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
          <Text style={styles.nameText}>Enter Hotel Name</Text>
          <TextInput
            placeholder="Enter Hotel Name here"
            style={styles.textInput}
            value={hotel_name}
            onChange={(e) => sethotel_name(e.nativeEvent.text)}
          />
          <Text style={styles.nameText1}>Select Facilities</Text>
          <MultiSelect
            style={styles.textInput}
            placeholderStyle={{
              fontSize: 14,
              color: "grey",
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
                    gap: 10,
                    marginBottom: "9%",
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

          <Text style={styles.nameText1}>Enter Hotel Address</Text>
          <TextInput
            placeholder="Enter Hotel Address here"
            style={styles.textInput}
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
          <TextInput
            placeholder="Enter Description here"
            style={styles.nameText2}
            value={description}
            onChange={(e) => setdescription(e.nativeEvent.text)}
          />
          <Text style={styles.nameText2}>Upload Hotel Image</Text>
          <TextInput
            placeholder="Upload Hotel Image"
            style={styles.textInput}
            value={picture}
            onChange={(e) => setpicture(e.nativeEvent.text)}
          />
          <TouchableOpacity
            style={[styles.containerx, styles.materialButtonDark1]}
            onPress={() => {
              updateHotel();
            }}
          >
            <Text style={styles.loginButton}>Update Hotel</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <Image
        style={styles.logo1}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679455037/Screenshot_2023-03-22_at_08.46.07_h1krq8.png",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homelogo: {
    width: 400,
    height: 20,
    marginTop: -5,
    marginLeft: 0,
  },
  rect: {
    width: 360,
    height: 150,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 22,
    shadowColor: "rgba(208,194,194,1)",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    elevation: 39,
    shadowOpacity: 1,
    marginTop: 20,
    marginLeft: 14,
    shadowRadius: 13,
  },

  tinyLogo: {
    width: 357,
    height: 170,
    marginBottom: -20,
    marginTop: -15,
    borderRadius: 25,
    marginLeft: 1,
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
  logo1: {
    width: 400,
    height: 50,
    marginTop: -1,
    marginLeft: 0,
  },
});
