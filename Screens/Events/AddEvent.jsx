import React , {useState} from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity ,ScrollView,TextInput,Alert} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import axios from "axios";

export default function AddEvent({ navigation }) {
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

    const addevent = () => {
      const URL = `https://travel-go.herokuapp.com/api/events/addevent`;
  
      const payload = {
        type: type,
        event_name: event_name,
        description: description,
        picture:picture,
        location:location,
        date:date,
        ticket_price:ticket_price
      };
  
      axios
        .post(URL, payload)
        .then((res) => {
          Alert.alert("Success","Event Added Successfully");
          navigation.navigate("EventsHome");
        })
        .catch((error) => {
          console.log(error);
          Alert.alert(
            "Error",
            "Event adding Unsuccessful",
            [{ text: "Check Again" }],
            { cancelable: false }
          );
        });
    };

    return(
        <View style={styles.container}>
         <View>
           <Image
                style={styles.homelogo}
                source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679455037/Screenshot_2023-03-22_at_08.46.07_h1krq8.png",
                }}
          />
            </View>
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
            marginTop: 15,
            color:"#3F000F",
            fontFamily: "Times New Roman",
          }}
        >
       Add New Event
        </Text>
          <ScrollView>
          <View>
          <Text style={styles.nameText1}>Select Event Type</Text>
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
                placeholder="Select  Event Type"
                searchPlaceholder="Search..."
                statusBarIsTranslucent={true}
                value={type}
                onChange={(item) => {
                  settype(item.value);
                }}
            >
            </Dropdown>
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
                 <Text style={styles.nameText2}>Upload Event Image</Text>
                <TextInput
                    placeholder="Upload Event Image"
                    style={styles.textInput}
                    value={picture}
                    onChange={(e) => setpicture(e.nativeEvent.text)}
                />
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
          <Image
                style={styles.logo1}
                source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679455037/Screenshot_2023-03-22_at_08.46.07_h1krq8.png",
                }}
          />
        </View>
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
        height: 100,
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
    homelogo:{
        width: 400,
        height: 20,
        marginTop:0,
        marginLeft:0
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
        marginTop:-10,
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
    },
    nameText2:{
        color: "#6D7B8D",
        fontSize: 16,
        lineHeight: 18,
        marginTop: 5,
        marginLeft: 36,
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
        borderColor:"#560319"
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
        borderColor:"#560319"
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
    backgroundColor:"#560319",
    borderWidth:1,
    borderRadius: 100,
    elevation: 5,
    shadowOpacity: 0,
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 90,
},
loginButton:{
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 18,
    
  },
logo1:{
    width: 400,
    height: 30,
    marginTop:-5,
    marginLeft:0
},
})