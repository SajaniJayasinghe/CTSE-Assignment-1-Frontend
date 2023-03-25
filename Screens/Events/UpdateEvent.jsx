import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import CustomLoading from "../../components/CustomLoading";
import Icon from "react-native-vector-icons/MaterialIcons";
import { MultiSelect } from "react-native-element-dropdown";
import { responsiveWidth } from "react-native-responsive-dimensions";
import axios from "axios";

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
  const [eventID, seteventID] = useState(route.params);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [imageUploadStatus, setImageUploadStatus] = useState(
    "Choose Event Picture"
  );
  const [validationErrors, setValidationErrors] = useState({});
  const [error, setError] = useState("");

  const getEvent = async () => {
    await axios
      .get(`http://localhost:8080/api/events/${route.params}`)
      .then((res) => {
        if (res.data.success) {
          settype(res.data.Event.type);
          setevent_name(res.data.Event.event_name);
          setdescription(res.data.Event.description);
          setpicture(res.data.Event.picture);
          setlocation(res.data.Event.location);
          setdate(res.data.Event.date);
          setticket_price(res.data.Event.ticket_price);
        }
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

  const updateEvent = async () => {
    const URL = `http://localhost:8080/api/events/update/${eventID}`;
    const payload = new FormData();
    setLoading(true);

    const updatedData = {
      event_name: event_name,
      description: description,
      location: location,
      date: date,
      ticket_price: ticket_price,
      type: selectedItems,
    };
    console.log(updatedData);

    try {
      await axios.put(URL, updatedData).then((res) => {
        if (res.data) {
          console.log(res.data);
          setLoading(false);
          Alert.alert("Event Updated Successfully");
          navigation.push("EventDetails", eventID);
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
    getEvent();
  }, []);

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
    <>
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
          Update Blog
        </Text>

        <ScrollView>
          <View>
            <MultiSelect
              style={styles.textInputnew}
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
                      gap: 15,
                      marginTop: "5%",
                      marginBottom: "9%",
                      marginLeft: "18%",
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
              placeholder="Enter Event Name"
              style={styles.textInput}
              value={event_name}
              onChange={(e) => setevent_name(e.nativeEvent.text)}
            />
            {/* <Text style={styles.nameText2}>Enter Location</Text>
            <TextInput
              placeholder="Enter Location"
              value={location}
              onChange={(e) => setlocation(e.nativeEvent.text)}
              style={styles.textInput}
            /> */}
            <Text style={styles.nameText2}>Enter Date </Text>
            <TextInput
              placeholder="Enter Date"
              style={styles.textInput}
              value={date}
              onChange={(e) => setdate(e.nativeEvent.text)}
            />
            {/* <Text style={styles.nameText2}>Enter Ticket Price </Text>
            <TextInput
              placeholder="Enter Ticket Price "
              style={styles.textInput}
              value={ticket_price}
              onChange={(e) => setticket_price(e.nativeEvent.text)}
            /> */}

            <Text style={styles.decsription}>Enter Description</Text>
            <ScrollView>
              <TextInput
                placeholder="Enter Description here"
                style={styles.nameText3}
                value={description}
                onChange={(e) => setdescription(e.nativeEvent.text)}
              ></TextInput>
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
          </View>
          <TouchableOpacity
            style={[styles.containerx, styles.materialButtonDark1]}
            onPress={updateEvent}
          >
            <Text style={styles.loginButton}>Update Event</Text>
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
    height: 100,
    width: 320,
    textAlign: "center",
    fontSize: 15,
    borderRadius: 15,
    marginTop: 7,
    marginLeft: 36,
    borderWidth: 1,
    borderColor: "#560319",
  },
  decsription: {
    color: "#6D7B8D",
    fontSize: 16,
    lineHeight: 18,
    marginTop: 5,
    marginLeft: 36,
  },
  textInput: {
    height: 70,
    width: 320,
    textAlign: "center",
    fontSize: 15,
    borderRadius: 10,
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
    marginTop: 25,
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
});
