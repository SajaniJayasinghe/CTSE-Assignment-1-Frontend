import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

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
    return hotel.filter((hotel) => hotel.hotel_name === text);
  };

  useEffect(() => {
    setfilterHotel(searchFunc(search));
  }, [search]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.homelogo}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679455037/Screenshot_2023-03-22_at_08.46.07_h1krq8.png",
        }}
      />
      <TouchableOpacity onPress={() => navigation.navigate("AddHotels")}>
        <Image
          style={styles.addhotel}
          source={{
            uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679429885/11-removebg-preview_l55wvj.png",
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          color: "#000000",
          textAlign: "center",
          marginTop: 10,
          marginLeft: -220,
          fontSize: 20,
          fontWeight: "bold",
          fontFamily: "Times New Roman",
        }}
      >
        Popular Hotels
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        decelerationRate="fast"
        pagingEnabled
      >
        <View style={styles.rect}>
          <TouchableOpacity
          // onPress={() => navigation.navigate("AllOrganizations")}
          >
            <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679427495/cinnamon_jmlgpz.webp",
              }}
            />
            <Text
              style={{
                color: "#000000",
                textAlign: "center",
                marginTop: 30,
                marginBottom: 10,
                fontSize: 18,
                fontWeight: "bold",
                fontFamily: "Times New Roman",
              }}
            >
              Cinnamon Grand
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rect}>
          <TouchableOpacity
          // onPress={() => navigation.navigate("AllOrganizations")}
          >
            <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679392630/14_bzemlw.jpg",
              }}
            />
            <Text
              style={{
                color: "#000000",
                textAlign: "center",
                marginTop: 30,
                marginBottom: 10,
                fontSize: 18,
                fontWeight: "bold",
                fontFamily: "Times New Roman",
              }}
            >
              Mandarina
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rect}>
          <TouchableOpacity
          // onPress={() => navigation.navigate("AllOrganizations")}
          >
            <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679427496/hilton_jloimp.jpg",
              }}
            />
            <Text
              style={{
                color: "#000000",
                textAlign: "center",
                marginTop: 30,
                marginBottom: 10,
                fontSize: 18,
                fontWeight: "bold",
                fontFamily: "Times New Roman",
              }}
            >
              Hilton Hotel
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rect}>
          <TouchableOpacity
          // onPress={() => navigation.navigate("AllOrganizations")}
          >
            <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679427404/araliya_nuopxg.jpg",
              }}
            />
            <Text
              style={{
                color: "#000000",
                textAlign: "center",
                marginTop: 30,
                marginBottom: 10,
                fontSize: 18,
                fontWeight: "bold",
                fontFamily: "Times New Roman",
              }}
            >
              Araliya Beach Hotel
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

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
                    hotel_name: hotel.hotel_name,
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
                  {hotel.hotel_name}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homelogo: {
    width: 400,
    height: 20,
    marginTop: 0,
    marginLeft: 0,
  },
  rect: {
    width: 178,
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
    marginTop: 30,
    marginLeft: 14,
    shadowRadius: 13,
  },

  tinyLogo: {
    width: 176,
    height: 160,
    marginBottom: -20,
    marginTop: -1,
    borderRadius: 25,
    marginLeft: 1,
  },
  Text1: {
    color: "#000000",
    textAlign: "center",
    marginTop: -50,
    marginLeft: -250,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
  },
  inputserach: {
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.1,
    elevation: 3,
    borderRadius: 40,
    padding: 10,
    marginTop: 10,
    width: 350,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    height: 40,
    borderWidth: 1,
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
    marginTop: 30,
    marginLeft: 19,
    shadowRadius: 13,
  },
  tinyLogo1: {
    width: 300,
    height: 160,
    marginBottom: -20,
    marginTop: 5,
    marginLeft: 25,
  },
  addhotel: {
    width: 60,
    height: 100,
    marginBottom: -20,
    marginLeft: 325,
    borderRadius: 25,
    marginTop: -10,
    borderColor: "black",
  },
});
