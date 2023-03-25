import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingScreen from "./Screens/CommonScreens/LoadingScreen";
import HomeScreen from "./Screens/CommonScreens/HomeScreen";
import SignInScreen from "./Screens/CommonScreens/SignInScreen";
import SignupScreen from "./Screens/CommonScreens/SignupScreen";
import AdminDashboard from "./Screens/CommonScreens/AdminDashboard";
import UserProfile from "./Screens/CommonScreens/UserProfile";
import UpdateUserProfile from "./Screens/CommonScreens/UpdateUserProfile";
import UserDashboard from "./Screens/CommonScreens/UserDashboard";

//Sajani
import EventsHome from "./Screens/Events/EventsHome";
import AdminEventDetails from "./Screens/Events/AdminEventDetails";
import AddEvent from "./Screens/Events/AddEvent";
import UpdateEvent from "./Screens/Events/UpdateEvent";
import EventList from "./Screens/Events/EventList";
import SpecificEvent from "./Screens/Events/SpecificEvent";

//Aroshini
import PlacesHome from "./Screens/Places/PlacesHome";
import AddPlaces from "./Screens/Places/AddPlaces";
import PlaceDetails from "./Screens/Places/PlaceDetails";
import UpdatePlace from "./Screens/Places/UpdatePlace";
import PlaceList from "./Screens/Places/PlaceList";
import SpecificPlace from "./Screens/Places/SpecificPlace";

//Imaya
import AddHotels from "./Screens/Hotels/AddHotels";
import HotelDetails from "./Screens/Hotels/HotelDetails";
import HotelHome from "./Screens/Hotels/HotelHome";
import UpdateHotelDetails from "./Screens/Hotels/UpdateHotelDetails";
import HotelList from "./Screens/Hotels/HotelList";
import SpecificHotel from "./Screens/Hotels/SpecificHotel";

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
        <Stack.Screen name="UserDashboard" component={UserDashboard} />

        {/* Sajani */}
        <Stack.Screen name="EventsHome" component={EventsHome} />
        <Stack.Screen name="EventDetails" component={AdminEventDetails} />
        <Stack.Screen name="AddEvent" component={AddEvent} />
        <Stack.Screen name="UpdateEvent" component={UpdateEvent} />
        <Stack.Screen name="EventList" component={EventList} />
        <Stack.Screen name="SpecificEvent" component={SpecificEvent} />

        {/* Aroshini */}
        <Stack.Screen name="PlacesHome" component={PlacesHome} />
        <Stack.Screen name="AddPlaces" component={AddPlaces} />
        <Stack.Screen name="PlaceDetails" component={PlaceDetails} />
        <Stack.Screen name="UpdatePlace" component={UpdatePlace} />
        <Stack.Screen name="PlaceList" component={PlaceList} />
        <Stack.Screen name="SpecificPlace" component={SpecificPlace} />

        {/* Imaya */}

        <Stack.Screen name="AddHotels" component={AddHotels} />
        <Stack.Screen name="HotelDetails" component={HotelDetails} />
        <Stack.Screen name="HotelHome" component={HotelHome} />
        <Stack.Screen
          name="UpdateHotelDetails"
          component={UpdateHotelDetails}
        />
        <Stack.Screen name="HotelList" component={HotelList} />
        <Stack.Screen name="SpecificHotel" component={SpecificHotel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
