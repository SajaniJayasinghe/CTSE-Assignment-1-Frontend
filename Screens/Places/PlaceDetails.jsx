import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from "axios";

export default function PlaceDetails({ route, navigation }) {
  const [place, setPlace] = useState("");

  const getPlace = async () => {
    await axios
      .get(`http://localhost:8080/api/places/${route.params}`)
      .then((res) => {
        if (res.data.success) {
          setPlace(res.data.existingplace);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPlace();
  }, []);

  const deletePlace = async (id) => {
    Alert.alert("Are you sure?", "This will permanently delete Place!", [
      {
        text: "OK",
        onPress: async () => {
          axios
            .delete(`http://localhost:8080/api/places/delete/${id}`)
            .then((res) => {
              navigation.push("PlaceHome");
            })
            .catch((e) => {
              console.error(e);
            });
        }
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed")
      }
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
          color: "#3F000F"
        }}
      >
        {place.name}
      </Text>
      <View style={styles.rect}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: place.picture
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
          Facilities
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
            style={styles.tinyLogo3}
            source={{
              uri: facilityurl
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
            {facilityname}
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
        onPress={() => navigation.navigate("UpdatePlace", place._id)}
      >
        <Icon
          name="edit"
          size={23}
          color="black"
          style={{
            marginTop: -43,
            marginLeft: 270,
            marginBottom: -30,
            borderRadius: 30
          }}
        />
      </TouchableOpacity>
      <Icon
        name="delete-forever"
        style={styles.icon}
        onPress={() => deletePlace(place._id)}
      ></Icon>
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
          ></Text>
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
            {place.name}
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
            {place.city}
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
            {place.description}
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
