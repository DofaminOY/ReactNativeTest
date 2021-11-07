import React, {useState, useEffect} from "react";

import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const Favorites = () => {
	const [filterdData, setfilterdData] = useState([]);
	const [masterData, setmasterData] = useState([]);

		useEffect(() => {
			fetchPosts();
			return () => {

			}
		}), 
		[]
	const fetchPosts = () => {
		const apiURL = "https://jsonplaceholder.typicode.com/photos?albumId=1";
		fetch(apiURL)
		.then((response) => response.json())
		.then((responseJson) =>{
			setfilterdData(responseJson);
			setmasterData(responseJson);
		}).catch((error) => {
			console.error(error);
	 })
	}
	const ItemView = ({item}) =>{
     return(
		 <Text style = {styles.itemStyle}>
			{item.id}{". "}{item.title.toUpperCase()} 
		 </Text>
	 )
	}

	const ItemSeparatorView = () => {
		return (
			<View
			style = {{height: 0.5, width: "100%", backgroundColor: "#c8c8c8"}}
			/>
		)
	}
	

return (
	<SafeAreaView style={styles.container}>
	
		<View>
	
			<FlatList
			data = {filterdData}
			keyExtractor={(item, index) => index.toString()}
			ItemSeparatorComponent = {ItemSeparatorView}
			renderItem={ItemView}
			/>
	
	</View>
	
	 </SafeAreaView>
	
	
);
};
const styles = StyleSheet.create({
	continue:{
backgroundColor: 'white',
	},
	itemStyle: {
		padding: 15
	}
})

export default Favorites;
	
		
	
