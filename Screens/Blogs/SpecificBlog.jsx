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
import axios from "axios";
import { useRoute } from "@react-navigation/native";

export default function SpecificBlog({ navigation }) {
  const [blog, setblog] = useState([]);
  const [filterBlog, setfilterBlog] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/api/blog/getblog").then((res) => {
      if (res.data.success) {
        setblog(res.data.existingblogs);
      }
    });
  }, []);

  const searchFunc = (text) => {
    return blog.filter((blog) => blog.blogName === text);
  };
  useEffect(() => {
    setfilterBlog(searchFunc(search));
  }, [search]);

  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Image style={styles.tinyLogo} source={{ uri: blog.picture }} />
      </View>
      <View>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 27,
            fontSize: 19,
            fontWeight: "bold",
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
          height={80}
          marginLeft={10}
          borderRadius={30}
          borderColor="#A9A9A9"
          marginTop={10}
        >
          <Image
            style={styles.tinyLogo2}
            source={{
              uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679771233/pngtree-book-icon-in-black-color-png-image_1713457_mfivfd.jpg",
            }}
          />
          <Text
            style={{
              marginLeft: -48,
              marginTop: 55,
              fontSize: 18,
              fontWeight: "bold",
              fontFamily: "Times New Roman",
              color: "#52595D",
            }}
          >
            Book
          </Text>
          <Image
            style={styles.tinyLogo3}
            source={{
              uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679771390/png-transparent-video-production-freemake-video-er-video-icon-free-angle-text-rectangle-thumbnail_gdwo9m.png",
            }}
          />
          <Text
            style={{
              marginLeft: -90,
              marginTop: 55,
              fontSize: 18,
              fontWeight: "bold",
              fontFamily: "Times New Roman",
              color: "#52595D",
            }}
          >
            Videos
          </Text>
          <Image
            style={styles.tinyLogo3}
            source={{
              uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679771499/png-clipart-blogger-computer-icons-social-media-marketing-blog-icon-service-logo-thumbnail_kjocxc.png",
            }}
          />
          <Text
            style={{
              marginLeft: -90,
              marginTop: 55,
              fontSize: 18,
              fontWeight: "bold",
              fontFamily: "Times New Roman",
              color: "#52595D",
            }}
          >
            Images
          </Text>
        </ScrollView>
      </View>
      <Text
        style={{
          marginLeft: 20,
          fontSize: 18,
          marginTop: 20,
          fontWeight: "bold",
          color: "#000000",
        }}
      >
        Description {"\n"}
      </Text>
      <ScrollView>
        {(search === "" ? blog : filterBlog).map((blog, index) => (
          <View key={blog + index}>
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
                  marginLeft: 40,
                  fontSize: 15,
                  marginTop: 20,
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
                {" "}
                {blog.description}
              </Text>
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
    width: 46,
    height: 46,
    marginBottom: -20,
    marginTop: 8,
    borderRadius: 100,
    marginLeft: 35,
  },

  tinyLogo7: {
    width: 46,
    height: 46,
    marginBottom: -20,
    marginTop: 8,
    borderRadius: 100,
    marginLeft: 32,
  },
  tinyLogo8: {
    width: 18,
    height: 18,
    marginBottom: -20,
    marginTop: 13,
    borderRadius: 100,
    marginLeft: 19,
  },
  icon: {
    color: "#8B0000",
    fontSize: 28,
    height: 60,
    width: 40,
    marginLeft: 330,
    marginTop: -45,
  },
  tinyLogo3: {
    width: 46,
    height: 46,
    marginBottom: -20,
    marginTop: 5,
    borderRadius: 100,
    marginLeft: 80,
  },
  tinyLogo2: {
    width: 46,
    height: 46,
    marginBottom: -20,
    marginTop: 5,
    borderRadius: 100,
    marginLeft: 50,
  },
});
