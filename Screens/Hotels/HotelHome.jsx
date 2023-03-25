import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HotelHome({ navigation }) {
  const [hotel, sethotel] = useState([]);
  const [filterHotel, setfilterHotel] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/api/hotels/gethotel").then((res) => {
      if (res.data.success) {
        sethotel(res.data.existinghotels);
      }
    });
  }, []);

  const searchFunc = (text) => {
    return hotel.filter((hotel) => hotel.name === text);
  };

  useEffect(() => {
    setfilterHotel(searchFunc(search));
  }, [search]);

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.Text1}>All Hotels</Text>
          <TextInput
            style={styles.inputserach}
            placeholder="Search for Event name"
            value={search}
            onChangeText={(text) => setSearch(text)}
          />

          <ScrollView style={{ display: "flex", flexDirection: "column" }}>
            {(search === "" ? hotel : filterHotel).map((hotel, index) => (
              <View key={hotel + index}>
                <View style={styles.hotel}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("HotelDetails", {
                        id: hotel.hotel_id,
                        facilities: hotel.facilities,
                        name: hotel.name,
                        description: hotel.description,
                        address: hotel.address,
                        picture: hotel.picture,
                        phone: hotel.phone,
                      })
                    }
                  >
                    <Image
                      style={styles.tinyLogo1}
                      source={{ uri: hotel.picture }}
                    />
                    <Text
                      style={{
                        color: "#000000",
                        textAlign: "center",
                        marginTop: 30,
                        fontSize: 18,
                        fontWeight: "bold",
                        fontFamily: "Times New Roman",
                      }}
                    >
                      {hotel.name}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("AddHotels")}>
          <Image
            style={styles.addevent}
            source={{
              uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679429885/11-removebg-preview_l55wvj.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputserach: {
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.1,
    elevation: 3,
    borderRadius: 40,
    padding: 10,
    marginTop: 20,
    width: 350,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    height: 40,
    borderWidth: 1,
  },

  Text1: {
    color: "#000000",
    textAlign: "center",
    marginTop: 20,
    fontSize: 30,
    marginBottom: 10,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
  },
  tinyLogo1: {
    width: 350,
    height: 200,
    marginBottom: -20,
    marginTop: 0,
    marginLeft: 0,
    borderRadius: 25,
  },
  hotel: {
    width: 350,
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
    marginTop: 20,
    marginLeft: 22,
    marginBottom: 30,
    shadowRadius: 13,
  },
  addevent: {
    width: 120,
    height: 120,
    marginLeft: 270,
    borderRadius: 25,
    marginTop: 0,
    borderColor: "black",
  },
});
