import React , {useState} from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity ,ScrollView,TextInput,Alert, Button} from "react-native";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import CustomLoading from "../../components/CustomLoading";
import {
  responsiveWidth,
 } from "react-native-responsive-dimensions";
 import Icon from "react-native-vector-icons/MaterialIcons";
 import { MultiSelect } from "react-native-element-dropdown";

export default function AddEvent({ navigation }) {
  const data = [
    { label: "Festival", value: "Festival" },
    { label: "Cultural", value: "Cultural" },
    { label: "BeachParty", value: "BeachParty" },
    { label: "DJNight", value: "DJNight" },
    { label: "Adventure", value: "Adventure" },
  ];
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [event_name, setevent_name] = useState("");
    const [description, setdescription] = useState("");
    const [location, setlocation] = useState("");
    const [date, setdate] = useState("");
    const [ticket_price, setticket_price] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);
    const [imageUploadStatus, setImageUploadStatus] = useState(
      "Choose Event Picture"
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

    const addevent = () => {
      const URL = `http://localhost:8080/api/events/addevent`;

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
        .post(URL, payload,{
          headers: {
            "Content-Type": "multipart/form-data",
          }
        })
        .then((res) => {
          Alert.alert("Success","Event Added Successfully");
          setLoading(false);
          navigation.navigate("EventsHome");
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          Alert.alert(
            "Error",
            "Event adding Unsuccessful",
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

    return(
      <>
        <View style={styles.container}>
             <Image
                style={styles.tinyLogo}
                source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679492857/1_xmbgom.jpg",
                }}
              />
                <Image
                style={styles.dance}
                source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679483251/Screenshot_2023-03-22_at_16.35.13-removebg-preview_m7iojm.png",
                }}
              />
                   <Text
          style={{
            fontWeight: "800",
            textAlign: "center",
            fontSize: 36,
            marginLeft: -10,
            marginTop: 0,
            color:"#3F000F",
            fontFamily: "Times New Roman",
          }}
        >
       Add New Event
        </Text>
          <ScrollView>
          <View>
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
                       padding: 20,
                       backgroundColor: "white",
                       borderRadius: 5,
                       gap:20,
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

            <Text style={styles.nameText}>Enter Event Name</Text>
                <TextInput
                    placeholder="Enter Event Name "
                    style={styles.textInput}
                    onChange={(e) => setevent_name(e.nativeEvent.text)}
                    value={event_name}
                />
             <Text style={styles.nameText2}>Enter Location</Text>
                <TextInput
                    placeholder="Enter Location "
                    style={styles.textInput}
                    onChange={(e) => setlocation(e.nativeEvent.text)}
                    value={location}
             />
             <Text style={styles.nameText2}>Enter Date </Text>
                <TextInput
                    placeholder="Enter Date"
                    style={styles.textInput}
                    onChange={(e) => setdate(e.nativeEvent.text)}
                    value={date}
             />
             <Text style={styles.nameText2}>Enter Ticket Price </Text>
                <TextInput
                    placeholder="Enter Ticket Price "
                    style={styles.textInput}
                    onChange={(e) => setticket_price(e.nativeEvent.text)}
                    value={ticket_price}
             />
             <Text style={styles.nameText2}>Enter Description</Text>
                <TextInput
                    placeholder="Enter Description"
                    style={styles.nameText3}
                    value={description}
                    onChange={(e) => setdescription(e.nativeEvent.text)}
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
          </View>
          <TouchableOpacity
                style={[styles.containerx, styles.materialButtonDark1]}
                onPress={() => {
                  addevent();
                }}
                >
                <Text style={styles.loginButton} >Add Event</Text>
            </TouchableOpacity>
          </ScrollView>



        </View>
      {loading ? < CustomLoading/> : null}
        </>
    )
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
        marginLeft:14,
        shadowRadius: 13,
      },
    tinyLogo: {
        width: 400,
        height: 70,
        marginTop:0,
        marginLeft:0,
      },
      dance:{
        width: 100,
        height: 100,
        marginTop:-50,
        marginLeft:150,
        borderRadius:25
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
      nameText:{
        color: "#6D7B8D",
        fontSize: 16,
        lineHeight: 18,
        marginTop:10,
        marginLeft: 36,
    },
      nameText1:{
        color: "#6D7B8D",
        fontSize: 16,
        lineHeight: 18,
        marginTop: 10,
        marginLeft: 36,
    },
    nameText2:{
        color: "#6D7B8D",
        fontSize: 16,
        lineHeight: 18,
        marginTop: -5,
        marginLeft: 36,
        fontFamily: "Times New Roman",
    },
    nameText2:{
        color: "#6D7B8D",
        fontSize: 16,
        lineHeight: 18,
        marginTop: 5,
        marginLeft: 36,
        fontFamily: "Times New Roman",
    },
    nameText3:{
        height: 80,
        width: 320,
        textAlign: "center",
        fontSize: 15,
        borderRadius: 25,
        marginTop:7,
        marginLeft: 36,
        borderWidth: 1,
        borderColor:"#560319",
        fontFamily: "Times New Roman",
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
        borderColor:"#560319",
        fontFamily: "Times New Roman",
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
    backgroundColor:"#551606",
    borderRadius: 100,
    elevation: 5,
    shadowOpacity: 0,
    marginTop: 2,
    marginBottom: 10,
    marginLeft: 90,
},
loginButton:{
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 18,
    fontFamily: "Times New Roman",
    
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
    marginLeft:"10%",
    marginTop:"5%"
  },
  uploadTxt: {
    color: "black",
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "Times New Roman",
  },
  uploadButton: {
    width: "30%",
    height: "30%",
    marginRight:"20%",
    backgroundColor: "#E8A317",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 50,
    marginTop:"5%",
    marginLeft: responsiveWidth(2),
    fontFamily: "Times New Roman",
  },
  textInputnew: {
    width: "80%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    paddingLeft: 10,
    marginLeft:"10%",
    marginTop:"5%",
    borderColor: "grey",  
    borderWidth: 1,
  },

})