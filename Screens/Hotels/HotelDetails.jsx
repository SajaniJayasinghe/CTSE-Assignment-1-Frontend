import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from "axios";
import { useRoute } from "@react-navigation/native";

export default function HotelDetails({ navigation }) {
  const [hotel, sethotel] = useState([]);
  const route = useRoute();

  useEffect(() => {
    const data = {
      hid: route.params.hID,
      name: route.params.name,
      description: route.params.description,
      address: route.params.address,
      picture: route.params.picture,
      facilities: route.params.facilities,
      phone: route.params.phone,
    };
    sethotel(data);
  }, []);

  const deletehotel = async () => {
    const hID = route.params.hID;
    Alert.alert("Are you sure?", "This will permanently delete Hotel!", [
      {
        text: "OK",
        onPress: async () => {
          console.log(id);
          axios
            .delete(`http://localhost:8080/api/hotels/delete/${hID}`)
            .then((res) => {
              navigation.push("HotelHome");
            })
            .catch((e) => {
              console.error(e);
            });
        },
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
    ]);
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
        {" "}
        Hotel Galadari
        {/* {hotel.name} */}
      </Text>
      <View style={styles.rect}>
        <Image style={styles.tinyLogo} source={{ uri: hotel.picture }} />
      </View>
      <View>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 27,
            fontSize: 19,
            fontWeight: "bold",
            fontFamily: "Times New Roman",
            color: "#000000",
          }}
        >
          Amenities
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled
          borderWidth={1}
          width={369}
          height={100}
          marginLeft={10}
          borderRadius={30}
          borderColor="#A9A9A9"
          marginTop={10}
        >
          <Image
            style={styles.tinyLogo2}
            source={{
              uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679468287/1-removebg-preview_okhsn3.png",
            }}
          />
          <Text
            style={{
              marginLeft: -43,
              marginTop: 70,
              fontSize: 18,
              fontWeight: "bold",
              fontFamily: "Times New Roman",
              color: "#52595D",
            }}
          >
            Wifi
          </Text>
          <Image
            style={styles.tinyLogo3}
            source={{
              uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679468938/download-removebg-preview_xreebs.png",
            }}
          />
          <Text
            style={{
              marginLeft: -45,
              marginTop: 70,
              fontSize: 18,
              fontWeight: "bold",
              fontFamily: "Times New Roman",
              color: "#52595D",
            }}
          >
            Foods
          </Text>
          <Image
            style={styles.tinyLogo4}
            source={{
              uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679469173/2_kxc3wg.png",
            }}
          />
          <Text
            style={{
              marginLeft: -40,
              marginTop: 70,
              fontSize: 18,
              fontWeight: "bold",
              fontFamily: "Times New Roman",
              color: "#52595D",
            }}
          >
            A/C
          </Text>
          <Image
            style={styles.tinyLogo5}
            source={{
              uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679469394/p-removebg-preview_lzlkak.png",
            }}
          />
          <Text
            style={{
              marginLeft: -60,
              marginTop: 70,
              fontSize: 18,
              fontWeight: "bold",
              fontFamily: "Times New Roman",
              color: "#52595D",
            }}
          >
            Parking
          </Text>
          <Image
            style={styles.tinyLogo4}
            source={{
              uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679469557/pool-removebg-preview_zputhg.png",
            }}
          />
          <Text
            style={{
              marginLeft: -45,
              marginTop: 70,
              fontSize: 18,
              fontWeight: "bold",
              fontFamily: "Times New Roman",
              color: "#52595D",
            }}
          >
            Pool
          </Text>
        </ScrollView>
      </View>
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("UpdateHotelDetails", {
              // donationID: donations._id,
            })
          }
        >
          <Icon
            name="edit"
            size={23}
            color="black"
            style={{
              marginTop: 10,
              marginLeft: 270,
              marginBottom: -30,
              borderRadius: 30,
            }}
          />
        </TouchableOpacity>
        <Icon
          name="delete-forever"
          onPress={() => deletehotel(hotel._id)}
          style={styles.icon}
        ></Icon>
      </View>
      <ScrollView>
        <View style={styles.rect1}>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 20,
              fontFamily: "Times New Roman",
              color: "#0C090A",
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            {" "}
            Hotel Galadari
            {/* {hotel.name} */}
          </Text>
          <Image
            style={styles.tinyLogo6}
            source={{
              uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679471650/2838912_zdihvz.png",
            }}
          />
          <Text
            style={{
              marginLeft: 40,
              fontSize: 15,
              marginTop: 3,
              fontFamily: "Times New Roman",
              color: "#52595D",
              fontWeight: "bold",
            }}
          >
            {" "}
            Galleface Road , Colombo
            {hotel.address}
            {"\n"}
          </Text>
          <Image
            style={styles.tinyLogo7}
            source={{
              uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679730544/pngtree-phone-icon-png-image_5065646-removebg-preview_htdi2u.png",
            }}
          />
          <Text
            style={{
              marginLeft: 40,
              fontSize: 15,
              marginTop: 2,
              fontFamily: "Times New Roman",
              color: "#52595D",
              fontWeight: "bold",
            }}
          >
            {" "}
            0114322558
            {/* {hotel.phone} */}
            {"\n"}
          </Text>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 15,
              marginTop: 10,
              fontFamily: "Times New Roman",
              color: "#52595D",
              textAlign: "justify",
              fontWeight: "bold",
              marginRight: 20,
            }}
          >
            Take advantage of a free breakfast buffet, a rooftop terrace, and a
            coffee shop/cafe at Araliya Beach Resort and Spa. This resort is a
            great place to bask in the sun with a white sand beach. Treat
            yourself to a Thai massage at the onsite spa. Be sure to enjoy a
            meal at any of the 4 onsite restaurants, which feature a poolside
            location and garden views. In addition to a garden and dry
            cleaning/laundry services, guests can connect to free in-room WiFi,
            with speed of 50+ Mbps.
            {/* {hotel.description} */}
          </Text>
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
    width: 357,
    height: 167,
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
    marginLeft: 15,
    shadowRadius: 13,
  },
  rect1: {
    width: 370,
    height: 600,
    borderRadius: 22,
    shadowColor: "rgba(208,194,194,1)",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    elevation: 39,
    shadowOpacity: 1,
    marginTop: -15,
    marginLeft: 10,
    marginRight: 20,
    shadowRadius: 13,
  },
  tinyLogo: {
    width: 357,
    height: 170,
    marginBottom: -20,
    marginTop: -1,
    borderRadius: 5,
    marginLeft: 1,
  },
  tinyLogo2: {
    width: 46,
    height: 46,
    marginBottom: -20,
    marginTop: 15,
    borderRadius: 100,
    marginLeft: 20,
  },
  tinyLogo3: {
    width: 50,
    height: 50,
    marginBottom: -20,
    marginTop: 15,
    borderRadius: 100,
    marginLeft: 33,
  },
  tinyLogo4: {
    width: 50,
    height: 50,
    marginBottom: -20,
    marginTop: 15,
    borderRadius: 100,
    marginLeft: 20,
  },
  tinyLogo5: {
    width: 50,
    height: 50,
    marginBottom: -20,
    marginTop: 15,
    borderRadius: 100,
    marginLeft: 28,
  },
  tinyLogo6: {
    width: 15,
    height: 15,
    marginBottom: -20,
    marginTop: 10,
    borderRadius: 100,
    marginLeft: 18,
  },
  tinyLogo7: {
    width: 15,
    height: 15,
    marginBottom: -20,
    marginTop: 0,
    borderRadius: 100,
    marginLeft: 18,
  },
  icon: {
    color: "#8B0000",
    fontSize: 28,
    height: 60,
    width: 40,
    marginLeft: 330,
    marginTop: 5,
  },
});
