import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserDashBoard({ route, navigation }) {
  const [event, setevent] = useState([]);
  const [filterEvent, setfilterEvent] = useState([]);
  const [search, setSearch] = useState("");
  const [token, settoken] = useState("");

  const getToken = async () => {
    settoken(await AsyncStorage.getItem("token"));
  };
  useEffect(() => {
    getToken();
    if (!!!route.prams) {
    }
  }, []);

  const [profile, setProfile] = useState([]);

  const getprofile = async () => {
    const userToken = await AsyncStorage.getItem("token");
    console.log(userToken);
    await axios
      .get("http://localhost:8080/api/user/userprofile", {
        headers: {
          Authorization: userToken,
        },
      })
      .then((res) => {
        setProfile(res.data.User);
      });
  };

  useEffect(() => {
    axios.get("http://localhost:8080/api/events/getevent").then((res) => {
      if (res.data.success) {
        setevent(res.data.Event);
      }
    });
  }, []);

  const searchFunc = (text) => {
    return event.filter((event) => event.event_name === text);
  };

  useEffect(() => {
    getprofile();
    setfilterEvent(searchFunc(search));
  }, [search]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679339046/user-removebg-preview_iwug42.png",
          }}
        />
        <Text
          style={{
            marginLeft: 200,
            marginTop: -40,
            marginBottom: 10,
            fontSize: 18,
            fontWeight: "bold",
            fontFamily: "Times New Roman",
          }}
        >
          Hi, {profile.name}
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          color: "#000000",
          textAlign: "center",
          marginTop: 30,
          marginLeft: -75,
          fontSize: 20,
          fontWeight: "bold",
          fontFamily: "Times New Roman",
        }}
      >
        Popular Location In this Month
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
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679392630/14_bzemlw.jpg",
              }}
            />
            <Text
              style={{
                color: "#000000",
                textAlign: "center",
                marginTop: 25,
                marginBottom: 10,
                fontSize: 18,
                fontWeight: "bold",
                fontFamily: "Times New Roman",
              }}
            >
              Sigiriya
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rect1}>
          <TouchableOpacity
          // onPress={() => navigation.navigate("AllOrganizations")}
          >
            <Image
              style={styles.tinyLogo1}
              source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679389476/13_edwh7e.webp",
              }}
            />
            <Text
              style={{
                color: "#000000",
                textAlign: "center",
                marginTop: 25,
                marginBottom: 10,
                fontSize: 18,
                fontWeight: "bold",
                fontFamily: "Times New Roman",
              }}
            >
              Kalpitiya
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
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679393025/15_cowsqm.webp",
              }}
            />
            <Text
              style={{
                color: "#000000",
                textAlign: "center",
                marginTop: 25,
                marginBottom: 10,
                fontSize: 18,
                fontWeight: "bold",
                fontFamily: "Times New Roman",
              }}
            >
              Mirirssa
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rect1}>
          <TouchableOpacity
          // onPress={() => navigation.navigate("AllOrganizations")}
          >
            <Image
              style={styles.tinyLogo1}
              source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679387783/9_bah0bc.jpg",
              }}
            />
            <Text
              style={{
                color: "#000000",
                textAlign: "center",
                marginTop: 25,
                marginBottom: 10,
                fontSize: 20,
                fontWeight: "bold",
                fontFamily: "Times New Roman",
              }}
            >
              Ella
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rect1}>
          <TouchableOpacity
          // onPress={() => navigation.navigate("AllOrganizations")}
          >
            <Image
              style={styles.tinyLogo1}
              source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679389317/11_vyatdh.webp",
              }}
            />
            <Text
              style={{
                color: "#000000",
                textAlign: "center",
                marginTop: 25,
                marginBottom: 10,
                fontSize: 18,
                fontWeight: "bold",
                fontFamily: "Times New Roman",
              }}
            >
              Jetwing Villa
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Text
        style={{
          color: "#000000",
          textAlign: "center",
          marginTop: 0,
          marginLeft: -150,
          fontSize: 20,
          fontWeight: "bold",
          fontFamily: "Times New Roman",
        }}
      >
        Recommended for You
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        decelerationRate="fast"
        pagingEnabled
      >
        {(search === "" ? event : filterEvent).map((event, index) => (
          <View key={event + index}>
            <View style={styles.rectangle}>
              <TouchableOpacity
              // onPress={() => navigation.navigate("AllOrganizations")}
              >
                <Image
                  style={styles.rectinyLogo}
                  source={{ uri: event.picture }}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <View>
        <View style={styles.container2}>
          <Text
            style={{
              marginTop: 40,
              marginLeft: 30,
              fontSize: 18,
              fontWeight: "bold",
              fontFamily: "Times New Roman",
            }}
          >
            Popular Categories
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate("HotelHome")}>
            <Image
              style={styles.tinyLogo2}
              source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679372412/Screenshot_2023-03-21_at_09.49.09_mqtose.png",
              }}
            />
          </TouchableOpacity>

          <Text
            style={{
              marginLeft: 27,
              marginTop: 25,
              fontSize: 18,
              fontWeight: "bold",
              fontFamily: "Times New Roman",
              color: "#52595D",
            }}
          >
            Hotels
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate("PlacesHome")}>
            <Image
              style={styles.tinyLogo3}
              source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679372173/beach_lawbaj.jpg",
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 125,
              marginTop: -23,
              fontSize: 18,
              fontWeight: "bold",
              fontFamily: "Times New Roman",
              color: "#52595D",
            }}
          >
            Places
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate("EventList")}>
            <Image
              style={styles.tinyLogo4}
              source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679372338/Screenshot_2023-03-21_at_09.45.12_e2t9so.png",
              }}
            />
          </TouchableOpacity>

          <Text
            style={{
              marginLeft: 220,
              marginTop: -19,
              fontSize: 18,
              fontWeight: "bold",
              fontFamily: "Times New Roman",
              color: "#52595D",
            }}
          >
            Events
          </Text>

          <TouchableOpacity
          // onPress={() => navigation.navigate("AddEvents")}
          >
            <Image
              style={styles.tinyLogo5}
              source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679372230/blog_o7qs8g.png",
              }}
            />
          </TouchableOpacity>

          <Text
            style={{
              marginLeft: 315,
              marginTop: -19,
              fontSize: 18,
              fontWeight: "bold",
              fontFamily: "Times New Roman",
              color: "#52595D",
            }}
          >
            Blogs
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFEFA",
  },
  container1: {
    width: 500,
    height: 430,
    marginTop: 40,
  },
  container2: {
    width: 500,
    height: 190,
    marginTop: -80,
  },
  logo: {
    width: 55,
    height: 55,
    marginLeft: 320,
    marginTop: 13,
  },
  rect: {
    width: 178,
    height: 170,
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

  tinyLogo: {
    width: 178,
    height: 170,
    marginBottom: -20,
    borderRadius: 25,
  },
  rect1: {
    width: 178,
    height: 170,
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
    marginLeft: 10,
    shadowRadius: 13,
  },

  rect4: {
    width: 350,
    height: 105,
    backgroundColor: "#FAEBD7",
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 30,
  },
  tinyLogo1: {
    width: 178,
    height: 170,
    marginBottom: -20,
    borderRadius: 25,
  },
  tinyLogo2: {
    width: 70,
    height: 70,
    marginBottom: -20,
    marginTop: 15,
    borderRadius: 100,
    marginLeft: 20,
  },
  tinyLogo3: {
    width: 70,
    height: 70,
    marginBottom: -20,
    marginTop: -100,
    borderRadius: 100,
    marginLeft: 115,
  },
  tinyLogo4: {
    width: 70,
    height: 70,
    marginBottom: -20,
    marginTop: -100,
    borderRadius: 100,
    marginLeft: 215,
  },
  tinyLogo5: {
    width: 70,
    height: 70,
    marginBottom: -20,
    marginTop: -100,
    borderRadius: 100,
    marginLeft: 305,
  },
  rectangle: {
    width: 365,
    height: 190,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 25,
    shadowColor: "rgba(208,194,194,1)",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    elevation: 39,
    shadowOpacity: 1,
    marginTop: 10,
    marginLeft: 14,
    marginBottom: 20,
    shadowRadius: 13,
  },
  rectinyLogo: {
    width: 365,
    height: 200,
    marginBottom: -20,
    marginTop: -1,
    borderRadius: 25,
    marginLeft: 1,
  },
});
