import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Favorites = () => {
return (
	<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
	<Text style={{ color: "#ffcc26", fontSize: 40 }}>Favorites Screen!</Text>
	<Ionicons name="star-outline" size={80} color="#ffcc26" />
	</View> 
);
};

export default Favorites;
