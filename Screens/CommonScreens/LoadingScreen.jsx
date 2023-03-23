import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const LoadingScreen = ({navigation}) =>{
    return (
        <View style = {style.container}>
            <Text style = {{ 
                color: "#2B1B17",
                textAlign:"left",
                marginTop: 40,
                marginLeft:20,
                fontSize: 40,
                marginBottom: 20,
                fontWeight:"bold",
                fontFamily: "Times New Roman",
              }}>
             Explore Beauty of Journey
            </Text>
            <Text style = {{ 
                color: "#6D6968",
                textAlign:"left",
                marginTop: -10,
                marginLeft:20,
                fontSize: 17,
                marginBottom: 20,
                fontWeight:"bold",
                fontFamily: "Times New Roman",
            }}
            > Everything you can imagine, is here</Text>
            
            <Image style = {style.loadingImage}
             source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1679244712/loardingImage_pygtoq.avif",
              }}
              />
            
            <TouchableOpacity
               style={[style.containerx, style.materialButtonDark]}
               onPress={() => navigation.navigate("HomeScreen")}
             >
                <Text style={style.letsGetStarted} >Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#F7E7CE"
    },
    loadingImage:{
        width: 480,
        height: 450,
        marginTop:20,
        marginLeft:-10
    },
    containerx: {
        backgroundColor: "#3F000F",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 2,
        shadowColor: "#000",
        shadowOffset: {
        height: 1,
     },
        shadowOpacity: 0.35,
        shadowRadius: 5,
        elevation: 2,
        minWidth: 88,
        paddingLeft: 26,
        paddingRight: 16,
  },
    materialButtonDark: {
        height: 40,
        width: 160,
        borderRadius: 100,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
        width: 3,
        height: 3,
        },
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 0,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 120,
  },

    letsGetStarted: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 18,
  },
});

export default LoadingScreen;