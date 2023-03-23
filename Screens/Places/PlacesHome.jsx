import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput
} from "react-native";

export default function PlacesHome({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.homelogo}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679455037/Screenshot_2023-03-22_at_08.46.07_h1krq8.png"
        }}
      />
      <View style={styles.container2}>
        <Image
          style={styles.log}
          source={{
            uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679492857/1_xmbgom.jpg"
          }}
        />
        <View style={styles.rect3}>
          <Text
            style={{
              marginTop: 0,
              marginLeft: 30,
              fontSize: 20,
              fontWeight: "bold",
              fontFamily: "Times New Roman"
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
            <TouchableOpacity
            // onPress={() => navigation.navigate("HotelHome")}
            >
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679490128/beach-removebg-preview_uugwzy.png"
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
                color: "#52595D"
              }}
            >
              Beach
            </Text>
            <TouchableOpacity
            // onPress={() => navigation.navigate("HotelHome")}
            >
              <Image
                style={styles.tinyLogo2}
                source={{
                  uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679386912/8_glxli8.png"
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
                color: "#52595D"
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
                  uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679372064/waterfall_byhiyn.jpg"
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
                color: "#52595D"
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
                  uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679490562/forest_owg66p.jpg"
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
                color: "#52595D"
              }}
            >
              Forest
            </Text>
          </ScrollView>
        </View>
        <TextInput
          style={styles.inputserach}
          placeholder="Search for Place name"
          // value={search}
          // onChangeText={(text) => setSearch(text)}
        />
        <TouchableOpacity onPress={() => navigation.navigate("AddPlaces")}>
          <Image
            style={styles.addPlaces}
            source={{
              uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679429885/11-removebg-preview_l55wvj.png"
            }}
          />
        </TouchableOpacity>
        <Text style={styles.Text1}> Places</Text>
        <View style={styles.places}>
          <ScrollView style={{ display: "flex", flexDirection: "column" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("PlaceDetails")}
            >
              <Image
                style={styles.tinyLogo1}
                source={{
                  uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679376890/2_wa6zuc.jpg"
                }}
              />
              <Text
                style={{
                  color: "#000000",
                  textAlign: "justify",
                  marginTop: 30,
                  marginBottom: 10,
                  fontSize: 18,
                  marginLeft: 20,
                  fontWeight: "bold",
                  fontFamily: "Times New Roman"
                }}
              >
                Mirissa Beach
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
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
    marginTop: 0,
    marginLeft: 0
  },
  log: {
    width: 400,
    height: 80,
    marginTop: -20,
    marginLeft: 0
  },
  container2: {
    width: 500,
    height: 180,
    marginTop: 20
  },
  tinyLogo: {
    width: 70,
    height: 70,
    marginBottom: -20,
    marginTop: 20,
    borderRadius: 100,
    marginLeft: 20
  },
  tinyLogo2: {
    width: 70,
    height: 70,
    marginBottom: -20,
    marginTop: 20,
    borderRadius: 100,
    marginLeft: 40
  },
  tinyLogo3: {
    width: 70,
    height: 70,
    marginBottom: -20,
    marginTop: 20,
    borderRadius: 100,
    marginLeft: 25
  },
  tinyLogo4: {
    width: 70,
    height: 70,
    marginBottom: -20,
    marginTop: 20,
    borderRadius: 100,
    marginLeft: 16
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
    borderWidth: 1
  },
  Text1: {
    color: "#000000",
    textAlign: "center",
    marginTop: -10,
    marginLeft: -390,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Times New Roman"
  },
  places: {
    width: 350,
    height: 200,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 22,
    shadowColor: "rgba(208,194,194,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 39,
    shadowOpacity: 1,
    marginTop: 10,
    marginLeft: 22,
    shadowRadius: 13
  },
  tinyLogo1: {
    width: 350,
    height: 160,
    marginBottom: -20,
    marginTop: 0,
    marginLeft: 0,
    borderRadius: 25
  },
  addPlaces: {
    width: 80,
    height: 80,
    marginBottom: -20,
    marginLeft: 310,
    borderRadius: 25,
    marginTop: -10,
    borderColor: "black"
  }
});
