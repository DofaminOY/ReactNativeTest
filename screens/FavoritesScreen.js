import  React from "react";
// import { Text, View } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import Images from "./Images";
import { TouchableOpacity, View, Image, Dimensions, Text, StyleSheet } from "react-native";
let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({

	tinyLogo: {
		height: deviceHeight / 3,
		alignItems: "center",
		width: deviceWidth / 3,
		borderRadius: 10, marginTop: 35, margin: 5
	},
	
  });

const Favorites = () => {
return (
<View >
{
	Images.map((image, index) => (
			
		<TouchableOpacity key={index} onPress=
		{() => {}}>
			<Image scource={image.url}
			style={styles.tinyLogo}
			/>
			
			

		</TouchableOpacity>
	))
}

</View>

	
	
);
};

export default Favorites;
	
		
	
