import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import PhotosScreen from "./screens/PhotosScreen";

import FavoritesScreen from "./screens/FavoritesScreen";

const TabNavigator = createBottomTabNavigator({
	Photo: {
	screen: PhotosScreen,
	navigationOptions: {
	tabBarLabel: "Photos",
	tabBarOptions: {
		activeTintColor: "#006600",
	},
	tabBarIcon: (tabInfo) => {
		return (
		<Ionicons
			name="md-image"
			size={24}
			color={tabInfo.focused ? "#006600" : "#8e8e93"}
		/>
		);
	},
	},
},

Favorites: {
	screen: FavoritesScreen,
	navigationOptions: {
	tabBarLabel: "Favorites",
	tabBarOptions: {
		activeTintColor: "#ffcc26",
	},
	tabBarIcon: (tabInfo) => {
		return (
		<Ionicons
			name="star-outline"
			size={24}
			color={tabInfo.focused ? "#ffcc26" : "#8e8e93"}
		/>
		);
	},
	},
},
});

const Navigator = createAppContainer(TabNavigator);

export default function App() {
return (
	<Navigator>
	<PhotosScreen />
	</Navigator>
);
}
