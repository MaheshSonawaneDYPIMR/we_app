import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feed from "../screens/mainScreens/Feed.js";
import Profile from "../screens/mainScreens/Profile.js";
import Search from "../screens/mainScreens/Search.js";
import Post from "../screens/mainScreens/Post.js";
import Message from "../screens/mainScreens/Message.js";
import { AntDesign } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "green",
       
        tabBarInactiveTintColor: "black",
        tabBarShowLabel: false,
        tabBarBadgeStyle:{
            backgroundColor: "green"
        },
        tabBarStyle: {
          backgroundColor: "white",
          height: 50,
          elevation: 12,
          borderTopWidth: 0.2,
          alignItems: "center",
          justifyContent: "center",
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
        },
        
        
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarLabel: "Post",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarLabel: "Message",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="message1" size={size} color={color} />
          ),
          tabBarBadge: 3,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
