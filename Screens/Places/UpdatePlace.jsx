import axios from "axios";
import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export default function UpdatePlace({ navigation }) {
  const data = [
    { label: "Beach", value: "Beach" },
    { label: "Mountain", value: "Mountain" },
    { label: "Waterfall", value: "Waterfall" },
    { label: "Forest", value: "Forest" }
  ];
  const placedata = [
    { label: "Wifi", value: "Wifi" },
    { label: "Parking", value: "Parking" },
    { label: "Food", value: "Food" },
    { label: "NoSmoking", value: "NoSmoking" }
  ];

  const [type, settype] = useState("");
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [picture, setpicture] = useState("");
  const [city, setcity] = useState("");
  const [facilities, setfacilities] = useState([]);
  const [placeID, setplaceID] = useState("");

  useEffect(() => {
    setplaceID(route.params.placeID);
    settype(route.params.type);
    setname(route.params.name);
    setdescription(route.params.description);
    setpicture(route.params.picture);
    setcity(route.params.city);
    setfacilities(route.params.facilities);
  }, []);

  const updatePlace = () => {
    const URL = `"http://localhost:8080/api/places/update/${placeID}`;

    const payload = {
      placeID: placeID,
      type: type,
      name: name,
      description: description,
      picture: picture,
      city: city,
      facilities: facilities
    };
    axios
      .put(URL, payload)
      .then((res) => {
        Alert.alert(
          "Place Updated",
          "Your Place has updated successfully!!",
          [
            {
              text: "OK",
              onPress: () => navigation.navigate("AdminDashboard")
            }
          ],
          { cancelable: false }
        );
      })
      .catch((err) => {
        console.log(err);
        Alert.alert(
          "Error",
          "Updating Unsuccessful",
          [{ text: "Check Again" }],
          { cancelable: false }
        );
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.homelogo}
          source={{
            uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679455037/Screenshot_2023-03-22_at_08.46.07_h1krq8.png"
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
            fontFamily: "Times New Roman"
          }}
        >
          Update Places
        </Text>
        <View style={styles.rect}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679378950/6_gm0xk4.webp"
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
          <Text style={styles.nameText}>Enter Place Name</Text>
          <TextInput
            placeholder="Enter Place Name here"
            style={styles.textInput}
            value={name}
            onChangeText={(e) => setname(e.nativeEvent.text)}
          />
          <Text style={styles.nameText3}>Select Place Type</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select Place Type"
            searchPlaceholder="Search..."
            statusBarIsTranslucent={true}
            value={type}
            onChange={(item) => {
              settype(item.value);
            }}
          ></Dropdown>
          <Text style={styles.nameText4}>Select Facilities</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={placedata}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select Facilities"
            searchPlaceholder="Search..."
            statusBarIsTranslucent={true}
            value={facilities}
            onChange={(item) => {
              setfacilities(item.value);
            }}
          ></Dropdown>
          <Text style={styles.nameText4}>Enter City</Text>
          <TextInput
            placeholder="Enter City here"
            style={styles.textInput}
            value={city}
            onChange={(e) => setcity(e.nativeEvent.text)}
          />
          <Text style={styles.nameText3}>Enter Description</Text>
          <TextInput
            placeholder="Enter Description here"
            style={styles.nameText2}
            value={description}
            onChange={(e) => setdescription(e.nativeEvent.text)}
          />
        </ScrollView>
        <TouchableOpacity
          style={[styles.containerx, styles.materialButtonDark1]}
          onPress={() => navigation.navigate("PlacesHome")}
        >
          <Text style={styles.loginButton}>Update Place</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.logo1}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679455037/Screenshot_2023-03-22_at_08.46.07_h1krq8.png"
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  homelogo: {
    width: 400,
    height: 20,
    marginTop: -5,
    marginLeft: 0
  },
  rect: {
    width: 360,
    height: 150,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 22,
    shadowColor: "rgba(208,194,194,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 39,
    shadowOpacity: 1,
    marginTop: 25,
    marginLeft: 14,
    shadowRadius: 13
  },

  tinyLogo: {
    width: 359,
    height: 170,
    marginBottom: -20,
    marginTop: -15,
    borderRadius: 25,
    marginLeft: 1
  },
  nameText: {
    color: "#6D7B8D",
    fontSize: 16,
    lineHeight: 18,
    marginTop: 30,
    marginLeft: 36
  },
  nameText1: {
    color: "#6D7B8D",
    fontSize: 16,
    lineHeight: 18,
    marginTop: 0,
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
  nameText3: {
    color: "#6D7B8D",
    fontSize: 16,
    lineHeight: 18,
    marginTop: 5,
    marginLeft: 36
  },
  nameText4: {
    color: "#6D7B8D",
    fontSize: 16,
    lineHeight: 18,
    marginTop: -5,
    marginLeft: 36
  },
  textInput: {
    height: 40,
    width: 320,
    textAlign: "center",
    fontSize: 15,
    borderRadius: 25,
    marginTop: 8,
    marginLeft: 36,
    borderWidth: 1,
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
  }
});