import React from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity ,ScrollView,TextInput} from "react-native";
import { Dropdown } from "react-native-element-dropdown";


export default function UpdateEvent({ navigation }) {
    const data = [
        { label: "Festival", value: "Festival" },
        { label: "Cultural", value: "Cultural" },
        { label: "BeachParty", value: "BeachParty" },
        { label: "DJNight", value: "DJNight" },
        { label: "Adventure", value: "Adventure" },
      ];

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
            <Text style={styles.nameText}>Enter Event Name</Text>
                <TextInput
                    placeholder="Enter Event Name"
                    style={styles.textInput}
                />
             <Text style={styles.nameText2}>Enter Location</Text>
                <TextInput
                    placeholder="Enter Location"
                    style={styles.textInput}
             />
             <Text style={styles.nameText2}>Enter Date </Text>
                <TextInput
                    placeholder="Enter Date"
                    style={styles.textInput}
             />
             <Text style={styles.nameText2}>Enter Description</Text>
                <TextInput
                    placeholder="Enter Description here"
                    style={styles.nameText3}
                    // value={donatorName}
                    // onChange={(e) => setdonatorName(e.nativeEvent.text)}
                />
            <TouchableOpacity
                style={[styles.containerx, styles.materialButtonDark1]}
                onPress={() => navigation.navigate("EventsHome")}
                >
                <Text style={styles.loginButton} >Update Event</Text>
            </TouchableOpacity>
          </View>
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
        width: 360,
        height: 200,
        marginBottom: -20,
        marginTop: 0,
        borderRadius: 25,
        marginLeft: 0,
      },
    homelogo:{
        width: 400,
        height: 20,
        marginTop:-5,
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
    height: 50,
    marginTop:-5,
    marginLeft:0
},
})