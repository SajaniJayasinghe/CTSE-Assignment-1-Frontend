import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from "axios";

export default function SpecificHotel({ navigation }) {
  const [hotel, sethotel] = useState([]);
  const [filterEvent, setfilterEvent] = useState([]);
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
    setfilterEvent(searchFunc(search));
  }, [search]);

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
        Hotel Name
        {/* {hotel.name} */}
      </Text>
      <View style={styles.rect}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679427495/cinnamon_jmlgpz.webp",
          }}
        />
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
      <Text
        style={{
          marginLeft: 20,
          fontSize: 18,
          marginTop: 20,
          fontWeight: "bold",
          fontFamily: "Times New Roman",
          color: "#000000",
        }}
      >
        Description {"\n"}
      </Text>
      <ScrollView>
        <View style={styles.rect1}>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 20,
              fontFamily: "Times New Roman",
              color: "#0C090A",
              fontWeight: "bold",
              marginTop: 15,
            }}
          >
            Araliya Beach Resort Unawatuna {/* {hotel.name} */}
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
            Unawatuna, Southern Province, Sri Lanka {/* {hotel.name} */}
            {"\n"}
          </Text>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 15,
              marginTop: 5,
              fontFamily: "Times New Roman",
              color: "#52595D",
              textAlign: "justify",
              fontWeight: "bold",
              marginRight: 20,
            }}
          >
            {/* {hotel.description} */}
            Take advantage of a free breakfast buffet, a rooftop terrace, and a
            coffee shop/cafe at Araliya Beach Resort and Spa. This resort is a
            great place to bask in the sun with a white sand beach. Treat
            yourself to a Thai massage at the onsite spa. Be sure to enjoy a
            meal at any of the 4 onsite restaurants, which feature a poolside
            location and garden views. In addition to a garden and dry
            cleaning/laundry services, guests can connect to free in-room WiFi,
            with speed of 50+ Mbps.
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
  homelogo: {
    width: 400,
    height: 20,
    marginTop: -5,
    marginLeft: 0,
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
    marginLeft: 14,
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
  icon: {
    color: "#8B0000",
    fontSize: 28,
    height: 60,
    width: 40,
    marginLeft: 330,
    marginTop: -45,
  },
});
