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
import CustomLoading from "../../components/CustomLoading";
import axios from "axios";

// import CheckBox from "react-native-check-box";

export default function AddHotels({ navigation }) {
  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState(null);
  const data = [
    { label: "Wifi", value: "Wifi" },
    { label: "AC", value: "AC" },
    { label: "Food", value: "Food" },
    { label: "Pool", value: "Pool" },
    { label: "Parking", value: "Parking" },
  ];

  const [hotel_name, sethotel_name] = useState("");
  const [description, setdescription] = useState("");
  const [address, setaddress] = useState("");
  const [mobile, setmobile] = useState("");
  const [facilities, setfacilities] = useState("");

  const addHotel = () => {
    const URL = `http://localhost:8080/api/hotels/addhotel`;

    const payload = new FormData();
    setLoading(true);
    payload.append("hotel_name", hotel_name);
    payload.append("description", description);
    payload.append("image", {
      uri: image,
      type: "image/jpeg",
      name: "image.jpg",
    });
    payload.append("address", address);

    payload.append("mobile", mobile);
    payload.append("facilities", facilities);

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
    } else {
      setImage(null);
    }
  };

  return (
    <>
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
            Add New Hotel
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
              onChange={(e) => sethotel_name(e.nativeEvent.text)}
              value={hotel_name}
            />
            <Text style={styles.nameText1}>Select Facilities</Text>
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
              placeholder="Select Facilities"
              searchPlaceholder="Search..."
              statusBarIsTranslucent={true}
              value={facilities}
              onChange={(item) => {
                setfacilities(item.value);
              }}
              // value={value}
              // onChange={(item) => {
              //     setrole(item.value);
              // }}
              // renderLeftIcon={() => (
              // )}
            >
              {/* <CheckBox
         checkedCheckBoxColor="green"
         onClick={() => {
           UpdateStatus(todo.id, todo.isDone);
         }}
         isChecked={todo.isDone}
       /> */}
            </Dropdown>
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
              onChange={(e) => setmobile(e.nativeEvent.text)}
              value={mobile}
            />

            <Text style={styles.nameText1}>Enter Description</Text>
            <TextInput
              placeholder="Enter Description here"
              style={styles.nameText2}
              onChange={(e) => setdescription(e.nativeEvent.text)}
              value={description}
            />
            <TouchableOpacity
              style={[styles.containerx, styles.materialButtonDark1]}
              onPress={pickImage}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                  fontFamily: "Times New Roman",
                }}
              >
                Upload Hotel Image
              </Text>
            </TouchableOpacity>
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
        <Image
          style={styles.logo1}
          source={{
            uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679455037/Screenshot_2023-03-22_at_08.46.07_h1krq8.png",
          }}
        />
      </View>
      {loading ? <CustomLoading /> : null}
    </>
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
