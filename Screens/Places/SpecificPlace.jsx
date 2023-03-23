import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";

export default function SpecificPlace({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.homelogo}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679455037/Screenshot_2023-03-22_at_08.46.07_h1krq8.png"
        }}
      />
      <Text
        style={{
          fontWeight: "800",
          textAlign: "center",
          fontSize: 36,
          marginLeft: -10,
          marginTop: 15,
          color: "#3F000F",
          fontFamily: "Times New Roman"
        }}
      >
        {" "}
        Place Name
        {/* {hotel.name} */}
      </Text>
      <View style={styles.rect}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679378950/6_gm0xk4.webp"
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
            color: "#000000"
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
              uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679468287/1-removebg-preview_okhsn3.png"
            }}
          />
          <Text
            style={{
              marginLeft: -43,
              marginTop: 70,
              fontSize: 18,
              fontWeight: "bold",
              fontFamily: "Times New Roman",
              color: "#52595D"
            }}
          >
            Wifi
          </Text>
          <Image
            style={styles.tinyLogo3}
            source={{
              uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679468938/download-removebg-preview_xreebs.png"
            }}
          />
          <Text
            style={{
              marginLeft: -45,
              marginTop: 70,
              fontSize: 18,
              fontWeight: "bold",
              fontFamily: "Times New Roman",
              color: "#52595D"
            }}
          >
            Foods
          </Text>
          <Image
            style={styles.tinyLogo5}
            source={{
              uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679469394/p-removebg-preview_lzlkak.png"
            }}
          />
          <Text
            style={{
              marginLeft: -53,
              marginTop: 70,
              fontSize: 18,
              fontWeight: "bold",
              fontFamily: "Times New Roman",
              color: "#52595D"
            }}
          >
            Parking
          </Text>
          <Image
            style={styles.tinyLogo4}
            source={{
              uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679495155/tvectoricons180806148-removebg-preview_t0ngho.png"
            }}
          />
          <Text
            style={{
              marginLeft: -75,
              marginTop: 70,
              fontSize: 18,
              fontWeight: "bold",
              fontFamily: "Times New Roman",
              color: "#52595D"
            }}
          >
            No Smoking
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
          color: "#000000"
        }}
      >
        Description {"\n"}
      </Text>
      <TouchableOpacity
        // onPress={() =>
        //   navigation.navigate("UpdateHotelDetails", {
        //     donationID: donations._id,
        //   })
        // }
        onPress={() => navigation.navigate("UpdatePlace")}
      ></TouchableOpacity>
      <ScrollView>
        <View style={styles.rect1}>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 20,
              fontFamily: "Times New Roman",
              color: "#0C090A",
              fontWeight: "bold",
              marginTop: 15
            }}
          >
            Mirissa Beach {/* {hotel.name} */}
          </Text>
          <Image
            style={styles.tinyLogo6}
            source={{
              uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679471650/2838912_zdihvz.png"
            }}
          />
          <Text
            style={{
              marginLeft: 40,
              fontSize: 15,
              marginTop: 3,
              fontFamily: "Times New Roman",
              color: "#52595D",
              fontWeight: "bold"
            }}
          >
            Matara,Southern Province ,Sri Lanka{/* {hotel.name} */}
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
              marginRight: 20
            }}
          >
            {/* {hotel.description} */}
            Now, where is this Secret Beach Mirissa that I speak of? Well, it's
            a little hidden gem just around the corner from the main beach in
            Mirissa, which is located in the southeast corner of Sri Lanka that
            makes up Weligama Bay.
          </Text>
        </View>
      </ScrollView>
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
    marginTop: -5,
    marginLeft: 0
  },
  rect: {
    width: 357,
    height: 167,
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
    marginLeft: 14,
    shadowRadius: 13
  },
  rect1: {
    width: 370,
    height: 600,
    borderRadius: 22,
    shadowColor: "rgba(208,194,194,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 39,
    shadowOpacity: 1,
    marginTop: -15,
    marginLeft: 10,
    marginRight: 20,
    shadowRadius: 13
  },
  tinyLogo: {
    width: 357,
    height: 170,
    marginBottom: -20,
    marginTop: -1,
    borderRadius: 5,
    marginLeft: 1
  },
  tinyLogo2: {
    width: 46,
    height: 46,
    marginBottom: -20,
    marginTop: 15,
    borderRadius: 100,
    marginLeft: 30
  },
  tinyLogo3: {
    width: 50,
    height: 50,
    marginBottom: -20,
    marginTop: 15,
    borderRadius: 100,
    marginLeft: 33
  },
  tinyLogo4: {
    width: 70,
    height: 70,
    marginBottom: -20,
    marginTop: 6,
    borderRadius: 100,
    marginLeft: 20
  },
  tinyLogo5: {
    width: 50,
    height: 50,
    marginBottom: -20,
    marginTop: 15,
    borderRadius: 100,
    marginLeft: 35
  },
  tinyLogo6: {
    width: 15,
    height: 15,
    marginBottom: -20,
    marginTop: 10,
    borderRadius: 100,
    marginLeft: 18
  },
  icon: {
    color: "#8B0000",
    fontSize: 28,
    height: 60,
    width: 40,
    marginLeft: 330,
    marginTop: -45
  }
});
