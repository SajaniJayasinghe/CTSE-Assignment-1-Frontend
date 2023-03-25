import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import * as ImagePicker from "expo-image-picker";
import CustomLoading from "../../components/CustomLoading";
import Icon from "react-native-vector-icons/MaterialIcons";
import { MultiSelect } from "react-native-element-dropdown";
import { responsiveWidth } from "react-native-responsive-dimensions";

export default function UpdateEvent({ route, navigation }) {
  const data = [
    { label: "Festival", value: "Festival" },
    { label: "Cultural", value: "Cultural" },
    { label: "BeachParty", value: "BeachParty" },
    { label: "DJNight", value: "DJNight" },
    { label: "Adventure", value: "Adventure" },
  ];

  const [type, settype] = useState("");
  const [event_name, setevent_name] = useState("");
  const [description, setdescription] = useState("");
  const [picture, setpicture] = useState("");
  const [location, setlocation] = useState("");
  const [date, setdate] = useState("");
  const [ticket_price, setticket_price] = useState("");
  const [eventID, seteventID] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [imageUploadStatus, setImageUploadStatus] = useState(
    "Choose Event Picture"
  );
  const [validationErrors, setValidationErrors] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    seteventID(route.params.eventID);
    settype(route.params.type);
    setevent_name(route.params.event_name);
    setdescription(route.params.description);
    setpicture(route.params.picture);
    setlocation(route.params.location);
    setdate(route.params.date);
    setticket_price(route.params.ticket_price);
  }, []);
  //For Multiple selection
  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
      </View>
    );
  };

  console.log(eventID);

  const updateEvent = () => {
    const URL = `https://travel-go.herokuapp.com/api/events/update/${eventID}`;

    // const payload = {
    //   eid: eID,
    //   type: type,
    //   event_name: event_name,
    //   description: description,
    //   picture: picture,
    //   location: location,
    //   date: date,
    //   ticket_price: ticket_price,
    // };
    const payload = new FormData();
    setLoading(true);
    payload.append("event_name", event_name);
    payload.append("description", description);
    payload.append("picture", {
      uri: image,
      type: "image/jpeg",
      name: "image.jpg",
    });
    payload.append("location", location);
    payload.append("date", date);
    payload.append("ticket_price", ticket_price);

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
          "Event Updated",
          "Your Event has updated successfully!!",
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
        Update Event
      </Text>
      <View style={styles.rect}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679481372/3_vgqveh.jpg",
          }}
        />
      </View>
      <ScrollView>
        <View>
          <Text style={styles.nameText1}>Select Event Type</Text>
          {/* <Dropdown
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
                placeholder="Select  Event Type"
                searchPlaceholder="Search..."
                statusBarIsTranslucent={true}
                value={type}
                onChange={(item) => {
                  settype(item.value);
                }}              
            >
            </Dropdown> */}
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
            placeholder="Select Events"
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
          <Text style={styles.nameText}>Enter Event Name</Text>
          <TextInput
            placeholder="Enter Event Name"
            style={styles.textInput}
            value={event_name}
            onChange={(e) => setevent_name(e.nativeEvent.text)}
          />
          <Text style={styles.nameText2}>Enter Location</Text>
          <TextInput
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setlocation(e.nativeEvent.text)}
            style={styles.textInput}
          />
          <Text style={styles.nameText2}>Enter Date </Text>
          <TextInput
            placeholder="Enter Date"
            style={styles.textInput}
            value={date}
            onChange={(e) => setdate(e.nativeEvent.text)}
          />
          <Text style={styles.nameText2}>Enter Ticket Price </Text>
          <TextInput
            placeholder="Enter Ticket Price "
            style={styles.textInput}
            value={ticket_price}
            onChange={(e) => setticket_price(e.nativeEvent.text)}
          />
          <Text style={styles.nameText2}>Enter Description</Text>
          <TextInput
            placeholder="Enter Description here"
            style={styles.nameText3}
            value={description}
            onChange={(e) => setdescription(e.nativeEvent.text)}
          />
          <Text style={styles.nameText2}>Upload Event Image</Text>
          <TextInput
            placeholder="Upload Event Image"
            style={styles.textInput}
            value={picture}
            onChange={(e) => setpicture(e.nativeEvent.text)}
          />
          <TouchableOpacity
            style={[styles.containerx, styles.materialButtonDark1]}
            onPress={() => {
              updateEvent();
            }}
          >
            <Text style={styles.loginButton}>Update Event</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rect: {
    width: 360,
    height: 180,
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
    marginLeft: 15,
    shadowRadius: 13,
  },
  tinyLogo: {
    width: 360,
    height: 180,
    marginBottom: -20,
    marginTop: 0,
    borderRadius: 25,
    marginLeft: 0,
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
  nameText: {
    color: "#6D7B8D",
    fontSize: 16,
    lineHeight: 18,
    marginTop: -10,
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
  textInput: {
    height: 40,
    width: 320,
    textAlign: "center",
    fontSize: 15,
    borderRadius: 25,
    marginTop: 7,
    marginLeft: 36,
    borderWidth: 1,
    borderColor: "#560319",
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
  uploadTxt: {
    color: "black",
    fontWeight: "bold",
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
});
