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
import axios from "axios";

export default function PlacesHome({ navigation }) {
  const [search, setSearch] = useState("");
  const [place, setPlace] = useState([]);
  const [filterEvent, setfilterEvent] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/places/getplace").then((res) => {
      if (res.data.success) {
        setPlace(res.data.Place);
      }
    });
  }, []);

  const searchFunc = (text) => {
    return place.filter((place) => place.name === text);
  };
  useEffect(() => {
    setfilterEvent(searchFunc(search));
  }, [search]);

  return (
    <>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.log}
            source={{
              uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679492857/1_xmbgom.jpg",
            }}
          />
          <View style={styles.rect3}>
            <Text
              style={{
                marginTop: 0,
                marginLeft: 30,
                fontSize: 20,
                fontWeight: "bold",
                fontFamily: "Times New Roman",
              }}
            >
              Popular Places
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={200}
              decelerationRate="fast"
              pagingEnabled
            >
              <TouchableOpacity>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679490128/beach-removebg-preview_uugwzy.png",
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  marginLeft: -60,
                  marginTop: 95,
                  fontSize: 18,
                  fontWeight: "bold",
                  fontFamily: "Times New Roman",
                  color: "#52595D",
                }}
                // value={
              >
                Beach
              </Text>
              <TouchableOpacity
              // onPress={() => navigation.navigate("HotelHome")}
              >
                <Image
                  style={styles.tinyLogo2}
                  source={{
                    uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679386912/8_glxli8.png",
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  marginLeft: -70,
                  marginTop: 95,
                  fontSize: 18,
                  fontWeight: "bold",
                  fontFamily: "Times New Roman",
                  color: "#52595D",
                }}
              >
                Mountain
              </Text>
              <TouchableOpacity
              // onPress={() => navigation.navigate("HotelHome")}
              >
                <Image
                  style={styles.tinyLogo3}
                  source={{
                    uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679372064/waterfall_byhiyn.jpg",
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  marginLeft: -70,
                  marginTop: 95,
                  fontSize: 18,
                  fontWeight: "bold",
                  fontFamily: "Times New Roman",
                  color: "#52595D",
                }}
              >
                Waterfalls
              </Text>
              <TouchableOpacity
              // onPress={() => navigation.navigate("HotelHome")}
              >
                <Image
                  style={styles.tinyLogo4}
                  source={{
                    uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679490562/forest_owg66p.jpg",
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  marginLeft: -60,
                  marginTop: 95,
                  fontSize: 18,
                  fontWeight: "bold",
                  fontFamily: "Times New Roman",
                  color: "#52595D",
                }}
              >
                Forest
              </Text>
            </ScrollView>
          </View>
          <TextInput
            style={styles.inputserach}
            placeholder="Search for Place name"
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
          <Text style={styles.Text1}> Places</Text>
          <ScrollView style={{ display: "flex", flexDirection: "column" }}>
            {(search === "" ? place : filterEvent).map((place, index) => (
              <View key={place + index}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("PlaceDetails", {
                      placeID: place._id,
                      name: place.name,
                      description: place.description,
                      location: place.location,
                      picture: place.picture,
                      city: place.city,
                      type: place.type,
                      facilities: place.facilities,
                    })
                  }
                >
                  <Image
                    style={styles.addPlaces}
                    source={{ uri: place.picture }}
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      marginTop: -5,
                      fontSize: 18,
                    }}
                  >
                    {place.name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <View>
        {/* <TouchableOpacity
              onPress={() => navigation.navigate("AddPlaces")}
                >
                 <Image
                    style={styles.addbutton}
                    source={{
                    uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679429885/11-removebg-preview_l55wvj.png",
                    }}
                />
            </TouchableOpacity>   */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  log: {
    width: 400,
    height: 80,
    marginTop: -20,
    marginLeft: 0,
  },
  container2: {
    width: 500,
    height: 180,
    marginTop: 20,
  },
  tinyLogo: {
    width: 70,
    height: 70,
    marginBottom: -20,
    marginTop: 20,
    borderRadius: 100,
    marginLeft: 20,
  },
  tinyLogo2: {
    width: 70,
    height: 70,
    marginBottom: -20,
    marginTop: 20,
    borderRadius: 100,
    marginLeft: 40,
  },
  tinyLogo3: {
    width: 70,
    height: 70,
    marginBottom: -20,
    marginTop: 20,
    borderRadius: 100,
    marginLeft: 25,
  },
  tinyLogo4: {
    width: 70,
    height: 70,
    marginBottom: -20,
    marginTop: 20,
    borderRadius: 100,
    marginLeft: 16,
  },
  inputserach: {
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.1,
    elevation: 3,
    borderRadius: 40,
    padding: 10,
    marginTop: 30,
    width: 350,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    height: 40,
    borderWidth: 1,
  },
  Text1: {
    color: "#000000",
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
  },
  places: {
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
    marginTop: 10,
    marginLeft: 22,
    shadowRadius: 13,
  },
  tinyLogo1: {
    width: 350,
    height: 160,
    marginBottom: -20,
    marginTop: 0,
    marginLeft: 0,
    borderRadius: 25,
  },
  addPlaces: {
    width: 350,
    height: 200,
    marginBottom: "5%",
    marginTop: "5%",
    marginLeft: "5%",
    borderRadius: 25,
  },
  addbutton: {
    width: 120,
    height: 120,
    marginLeft: 270,
    borderRadius: 25,
    marginTop: 0,
    borderColor: "black",
  },
});
