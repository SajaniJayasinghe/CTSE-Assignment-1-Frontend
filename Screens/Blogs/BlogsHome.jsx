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

export default function BlogsHome({ navigation }) {
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
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.BlogText1}>All Blogs</Text>
          <TextInput
            style={styles.inputserach}
            placeholder="Search for Blog Name"
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
          <ScrollView style={{ display: "flex", flexDirection: "column" }}>
            {(search === "" ? blog : filterBlog).map((blog, index) => (
              <View key={blog + index}>
                <View style={styles.blog}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("BlogDetails", blog._id)}
                  >
                    <Image
                      style={styles.tinyLogo1}
                      source={{ uri: blog.picture }}
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
                      {blog.blogName}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("AddBlog")}>
        <Image
          style={styles.addblog}
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
    marginTop: 5,
    width: 350,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    height: 40,
    borderWidth: 1,
  },
  BlogText1: {
    color: "#000000",
    textAlign: "center",
    marginTop: 25,
    fontSize: 35,
    marginBottom: 20,
    fontWeight: "bold",
  },

  BlogText2: {
    color: "#000000",
    marginLeft: 15,
    marginTop: 15,
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },

  BlogText3: {
    color: "#000000",
    marginLeft: 15,
    marginTop: 20,
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },

  rect: {
    width: 225,
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
    marginTop: 0,
    marginLeft: 14,
    shadowRadius: 13,
  },

  tinyLogo: {
    width: 225,
    height: 200,
    marginBottom: -10,
    borderRadius: 25,
  },

  rect1: {
    width: 225,
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
    marginTop: 0,
    marginLeft: 10,
    shadowRadius: 13,
  },

  tinyLogo1: {
    width: 225,
    height: 200,
    marginBottom: -20,
    borderRadius: 25,
  },

  addblog: {
    width: 120,
    height: 120,
    marginLeft: 270,
    borderRadius: 25,
    marginTop: 0,
    borderColor: "black",
  },
  blog: {
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
});
