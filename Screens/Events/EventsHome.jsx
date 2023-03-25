import React, { useEffect, useState } from "react";
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

export default function EventsHome({ navigation }) {
  const [event, setevent] = useState([]);
  const [filterEvent, setfilterEvent] = useState([]);
  const [search, setSearch] = useState("");

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
    setfilterEvent(searchFunc(search));
  }, [search]);

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.Text1}>All Events</Text>
          <TextInput
            style={styles.inputserach}
            placeholder="Search for Event name"
            value={search}
            onChangeText={(text) => setSearch(text)}
          />

          <ScrollView style={{ display: "flex", flexDirection: "column" }}>
            {(search === "" ? event : filterEvent).map((event, index) => (
              <View key={event + index}>
                <View style={styles.event}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("EventDetails", event._id)
                    }
                  >
                    <Image
                      style={styles.tinyLogo1}
                      source={{ uri: event.picture }}
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
                      {event.event_name}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("AddEvent")}>
        <Image
          style={styles.addevent}
          source={{
            uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679429885/11-removebg-preview_l55wvj.png",
          }}
        />
      </TouchableOpacity>
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
  event: {
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
