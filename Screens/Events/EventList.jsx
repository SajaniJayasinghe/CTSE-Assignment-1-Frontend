import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import axios from "axios";

export default function EventList({ navigation }) {
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
    <View style={styles.container}>
      <TextInput
        style={styles.inputserach}
        placeholder="Search for Event name"
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <Text style={styles.Text1}>Event List</Text>

      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        {(search === "" ? event : filterEvent).map((event, index) => (
          <View key={event + index}>
            <View style={styles.hotel}>
              <TouchableOpacity
                onPress={() => navigation.navigate("SpecificEvent")}
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
                    marginBottom: 10,
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
  );
}

export const styles = StyleSheet.create({
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
    marginTop: 30,
    width: 350,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    height: 40,
    borderWidth: 1,
  },
  homelogo: {
    width: 400,
    height: 20,
    marginTop: 0,
    marginLeft: 0,
  },
  Text1: {
    color: "#000000",
    textAlign: "center",
    marginTop: 20,
    marginLeft: -250,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
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
    marginLeft: 19,
    shadowRadius: 13,
  },
  tinyLogo1: {
    width: 350,
    height: 160,
    marginBottom: -20,
    marginTop: 0,
    borderRadius: 25,
    marginLeft: 0,
  },
});
