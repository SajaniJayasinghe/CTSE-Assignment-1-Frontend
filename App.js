import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingScreen from "./Screens/CommonScreens/LoadingScreen";
import HomeScreen from "./Screens/CommonScreens/HomeScreen";
import SignInScreen from "./Screens/CommonScreens/SignInScreen";
import SignupScreen from "./Screens/CommonScreens/SignupScreen";
import AdminDashboard from "./Screens/CommonScreens/AdminDashboard";
import UserProfile from "./Screens/CommonScreens/UserProfile";
import UpdateUserProfile from "./Screens/CommonScreens/UpdateUserProfile";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
