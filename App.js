import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingScreen from "./Screens/CommonScreens/LoadingScreen";
import HomeScreen from "./Screens/CommonScreens/HomeScreen";
import SignInScreen from "./Screens/CommonScreens/SignInScreen";
import SignupScreen from "./Screens/CommonScreens/SignupScreen";
import AdminDashboard from "./Screens/CommonScreens/AdminDashboard";
import UserProfile from "./Screens/CommonScreens/UserProfile";
import UpdateUserProfile from "./Screens/CommonScreens/UpdateUserProfile";
import PlacesHome from "./Screens/Places/PlacesHome";
import AddPlaces from "./Screens/Places/AddPlaces";
import PlaceDetails from "./Screens/Places/PlaceDetails";
import UpdatePlace from "./Screens/Places/UpdatePlace";
import PlaceList from "./Screens/Places/PlaceList";
import SpecificPlace from "./Screens/Places/SpecificPlace";

//Aroshini

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen">
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="UpdateUserProfile" component={UpdateUserProfile} />

        <Stack.Screen name="PlacesHome" component={PlacesHome} />
        <Stack.Screen name="AddPlaces" component={AddPlaces} />
        <Stack.Screen name="PlaceDetails" component={PlaceDetails} />
        <Stack.Screen name="UpdatePlace" component={UpdatePlace} />
        <Stack.Screen name="PlaceList" component={PlaceList} />
        <Stack.Screen name="SpecificPlace" component={SpecificPlace} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
