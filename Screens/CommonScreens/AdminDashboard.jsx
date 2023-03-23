import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";

export default function AdminDashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.homelogo}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679455037/Screenshot_2023-03-22_at_08.46.07_h1krq8.png"
        }}
      />
      <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
        <Image
          style={styles.logout}
          source={{
            uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679549838/Basic_Element_15-30__28591_29-removebg-preview_vefurd.png"
          }}
        />
      </TouchableOpacity>
      <View>
        <Text
          style={{
            marginLeft: 260,
            marginTop: -35,
            fontSize: 18,
            fontWeight: "bold",
            fontFamily: "Times New Roman"
          }}
        >
          LogOut
        </Text>
      </View>
      {/* STRAT --- POPULAR CATEGORIES SECTION */}
      <View style={styles.container2}>
        <TouchableOpacity onPress={() => navigation.navigate("HotelHome")}>
          <Image
            style={styles.tinyLogo2}
            source={{
              uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679372412/Screenshot_2023-03-21_at_09.49.09_mqtose.png"
            }}
          />
        </TouchableOpacity>

        <Text
          style={{
            marginLeft: 34,
            marginTop: 30,
            fontSize: 18,
            fontWeight: "bold",
            fontFamily: "Times New Roman",
            color: "#52595D"
          }}
        >
          Hotels
        </Text>

        <TouchableOpacity
        // onPress={() => navigation.navigate("AllOrganizations")}
        >
          <Image
            style={styles.tinyLogo3}
            source={{
              uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679372173/beach_lawbaj.jpg"
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: 130,
            marginTop: -19,
            fontSize: 18,
            fontWeight: "bold",
            fontFamily: "Times New Roman",
            color: "#52595D"
          }}
        >
          Places
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("EventsHome")}>
          <Image
            style={styles.tinyLogo4}
            source={{
              uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679372338/Screenshot_2023-03-21_at_09.45.12_e2t9so.png"
            }}
          />
        </TouchableOpacity>

        <Text
          style={{
            marginLeft: 230,
            marginTop: -19,
            fontSize: 18,
            fontWeight: "bold",
            fontFamily: "Times New Roman",
            color: "#52595D"
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
              uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679372230/blog_o7qs8g.png"
            }}
          />
        </TouchableOpacity>

        <Text
          style={{
            marginLeft: 320,
            marginTop: -19,
            fontSize: 18,
            fontWeight: "bold",
            fontFamily: "Times New Roman",
            color: "#52595D"
          }}
        >
          Blogs
        </Text>
      </View>
      {/* END --- POPULAR CATEGORIES SECTION */}

      <ScrollView>
        {/* STRAT --- POPULAR LOCATION SECTION */}
        <Text
          style={{
            color: "#3A3B3C",
            textAlign: "center",
            marginTop: 30,
            marginLeft: -210,
            fontSize: 18,
            fontWeight: "bold",
            fontFamily: "Times New Roman"
          }}
        >
          Popular Locations
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
                  uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679392630/14_bzemlw.jpg"
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
                  fontFamily: "Times New Roman"
                }}
              >
                Sigiriya
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {/* END --- POPULAR LOCATION SECTION */}

        {/* STRAT --- POPULAR EVENTS SECTION */}
        <Text
          style={{
            color: "#3A3B3C",
            textAlign: "center",
            marginTop: 20,
            marginLeft: -225,
            fontSize: 18,
            fontWeight: "bold",
            fontFamily: "Times New Roman"
          }}
        >
          Popular Events
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled
        >
          <View style={styles.eventrect}>
            <TouchableOpacity
            // onPress={() => navigation.navigate("AllOrganizations")}
            >
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679481372/3_vgqveh.jpg"
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
                  fontFamily: "Times New Roman"
                }}
              >
                Hellowin
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {/* END --- POPULAR EVENTS SECTION */}

        {/* STRAT --- POPULAR PLACES SECTION */}
        <Text
          style={{
            color: "#3A3B3C",
            textAlign: "center",
            marginTop: 10,
            marginLeft: -225,
            fontSize: 18,
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
          <View style={styles.eventrect}>
            <TouchableOpacity
            // onPress={() => navigation.navigate("AllOrganizations")}
            >
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679389476/13_edwh7e.webp"
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
                  fontFamily: "Times New Roman"
                }}
              >
                Kalpitiya
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {/* END --- POPULAR PLACES SECTION */}

        {/* STRAT --- BLOGS SECTION */}
        <Text
          style={{
            color: "#3A3B3C",
            textAlign: "center",
            marginTop: 10,
            marginLeft: -300,
            fontSize: 18,
            fontWeight: "bold",
            fontFamily: "Times New Roman"
          }}
        >
          Blogs
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled
        >
          <View style={styles.eventrect}>
            <TouchableOpacity
            // onPress={() => navigation.navigate("AllOrganizations")}
            >
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679372063/mountan_rf9edj.jpg"
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
                  fontFamily: "Times New Roman"
                }}
              >
                Blogs
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {/* END --- BLOGS SECTION */}
      </ScrollView>
      {/* <!--navigation start--> */}
      <Image
        style={styles.logo2}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679455037/Screenshot_2023-03-22_at_08.46.07_h1krq8.png"
        }}
      />
      {/* <!---navigation end--> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFEFA"
  },
  container1: {
    width: 500,
    height: 430,
    marginTop: 40
  },
  container2: {
    width: 500,
    height: 120,
    marginTop: 6
  },

  homelogo: {
    width: 400,
    height: 30,
    marginTop: 0,
    marginLeft: 0
  },
  logo2: {
    width: 400,
    height: 30,
    marginTop: 15,
    marginLeft: 0
  },
  rect: {
    width: 360,
    height: 178,
    borderRadius: 22,
    shadowColor: "rgba(208,194,194,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 39,
    shadowOpacity: 1,
    marginTop: 20,
    marginLeft: 16,
    shadowRadius: 13
  },
  eventrect: {
    width: 360,
    height: 178,
    borderRadius: 22,
    shadowColor: "rgba(208,194,194,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 39,
    shadowOpacity: 1,
    marginTop: 20,
    marginLeft: 16,
    shadowRadius: 13
  },

  tinyLogo: {
    width: 360,
    height: 145,
    marginBottom: -20,
    marginTop: -1,
    borderRadius: 25,
    marginLeft: 1
  },
  rect1: {
    width: 178,
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
    marginTop: 20,
    marginLeft: 10,
    shadowRadius: 13
  },
  rect4: {
    width: 350,
    height: 105,
    backgroundColor: "#FAEBD7",
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 30
  },
  tinyLogo1: {
    width: 174,
    height: 160,
    marginBottom: -20,
    marginTop: 2,
    borderRadius: 25,
    marginLeft: 3
  },
  tinyLogo2: {
    width: 70,
    height: 70,
    marginBottom: -20,
    marginTop: 15,
    borderRadius: 100,
    marginLeft: 20
  },
  tinyLogo3: {
    width: 70,
    height: 70,
    marginBottom: -20,
    marginTop: -100,
    borderRadius: 100,
    marginLeft: 115
  },
  tinyLogo4: {
    width: 70,
    height: 70,
    marginBottom: -20,
    marginTop: -100,
    borderRadius: 100,
    marginLeft: 215
  },
  tinyLogo5: {
    width: 70,
    height: 70,
    marginBottom: -20,
    marginTop: -100,
    borderRadius: 100,
    marginLeft: 305
  },
  logout: {
    width: 30,
    height: 30,
    marginBottom: 10,
    marginLeft: 340,
    borderRadius: 25,
    marginTop: 10,
    borderColor: "black"
  }
});
