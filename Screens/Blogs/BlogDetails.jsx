import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from "axios";
import { useRoute } from "@react-navigation/native";

export default function BlogDetails({ route, navigation }) {
  const [blog, setblog] = useState("");

  const getBlog = async () => {
    await axios
      .get(`http://localhost:8080/api/blog/getBlog/${route.params}`)
      .then((res) => {
        if (res.data.success) {
          setblog(res.data.existingblog);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getBlog();
  }, []);

  const deleteblog = async (id) => {
    Alert.alert("Are you sure?", "This will permanently delete Blog!", [
      {
        text: "OK",
        onPress: async () => {
          axios
            .delete(`http://localhost:8080/api/blog/delete/${id}`)
            .then((res) => {
              navigation.push("BlogsHome");
            })
            .catch((e) => {
              console.error(e);
            });
        },
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
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
          color: "#3F000F",
          fontFamily: "Times New Roman",
        }}
      >
        {" "}
        {blog.blogName}
      </Text>
      <View style={styles.rect}>
        <Image style={styles.tinyLogo} source={{ uri: blog.picture }} />
      </View>
      <View>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 40,
            fontSize: 19,
            fontWeight: "bold",
            fontFamily: "Times New Roman",
            color: "#000000",
          }}
        >
          Amenities
        </Text>

        {/* ScrollView  */}
      </View>
      <Text
        style={{
          marginLeft: 30,
          fontSize: 20,
          marginTop: 25,
          fontWeight: "bold",
          fontFamily: "Times New Roman",
          color: "grey",
        }}
      >
        Description {"\n"}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("UpdateBlog", blog._id)}
      >
        <Icon
          name="edit"
          size={23}
          color="black"
          style={{
            marginTop: -43,
            marginLeft: 270,
            marginBottom: -30,
            borderRadius: 30,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          name="delete-forever"
          onPress={() => deleteblog(blog._id)}
          style={styles.icon}
        ></Icon>
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.rect1}>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 20,
              fontFamily: "Times New Roman",
              color: "#0C090A",
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            {blog.blogName} - {blog.type}
          </Text>

          <Text
            style={{
              marginLeft: 20,
              fontSize: 15,
              marginTop: 13,
              fontFamily: "Times New Roman",
              color: "#52595D",
              fontWeight: "bold",
            }}
          >
            {blog.date}
            {"\n"}
          </Text>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 15,
              marginTop: 15,
              fontFamily: "Times New Roman",
              color: "#52595D",
              textAlign: "justify",
              fontWeight: "bold",
              marginRight: 20,
            }}
          >
            {blog.description}
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
    height: 200,
    marginBottom: -20,
    marginTop: -10,
    borderRadius: 5,
    marginLeft: 1,
  },
  tinyLogo2: {
    width: 46,
    height: 46,
    marginBottom: -20,
    marginTop: 8,
    borderRadius: 100,
    marginLeft: 30,
  },
  tinyLogo3: {
    width: 76,
    height: 76,
    marginBottom: -20,
    marginTop: -8,
    borderRadius: 100,
    marginLeft: 28,
  },
  tinyLogo4: {
    width: 46,
    height: 46,
    marginBottom: -20,
    marginTop: 8,
    borderRadius: 100,
    marginLeft: 25,
  },
  tinyLogo5: {
    width: 46,
    height: 46,
    marginBottom: -20,
    marginTop: 8,
    borderRadius: 100,
    marginLeft: 35,
  },
  tinyLogo6: {
    width: 18,
    height: 18,
    marginBottom: -20,
    marginTop: 13,
    borderRadius: 100,
    marginLeft: 19,
  },
  tinyLogo7: {
    width: 46,
    height: 46,
    marginBottom: -20,
    marginTop: 8,
    borderRadius: 100,
    marginLeft: 32,
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
