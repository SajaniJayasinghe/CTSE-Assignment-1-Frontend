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

//Randy
import BlogsHome from "./Screens/Blogs/BlogsHome";
import AddBlog from "./Screens/Blogs/AddBlog";
import BlogDetails from "./Screens/Blogs/BlogDetails";
import SpecificBlog from "./Screens/Blogs/SpecificBlog";
import UpdateBlog from "./Screens/Blogs/UpdateBlog";

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
        <Stack.Screen name="SpecificBlog" component={SpecificEvent} />

        {/* Randy */}
        <Stack.Screen name="BlogsHome" component={BlogsHome} />
        <Stack.Screen name="AddBlog" component={AddBlog} />
        <Stack.Screen name="BlogDetails" component={BlogDetails} />
        {/* <Stack.Screen name="SpecificBlog" component={SpecificBlog} /> */}
        <Stack.Screen name="UpdateBlog" component={UpdateBlog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
