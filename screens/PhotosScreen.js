import React, {useState, useEffect} from "react";
import {   SafeAreaView, View, StyleSheet, Text, TextInput, FlatList, Image, TouchableOpacity } from "react-native";

// import { FlatList } from "react-native-gesture-handler";
// let deviceHeight = Dimensions.get("window").height;
// let deviceWidth = Dimensions.get("window").width;
const Photo = () => {
	const [filterdData, setfilterdData] = useState([]);
	const [masterData, setmasterData] = useState([]);
	const [search, setsearch] = useState('');
		useEffect(() => {
			fetchPosts();
			return () => {

			}
		},
		[])
	const fetchPosts = async () => {
		const apiURL = await "https://jsonplaceholder.typicode.com/photos?albumId=1";
		fetch(apiURL)
		.then((response) => response.json())
		.then((responseJson) =>{
			setfilterdData(responseJson);
			setmasterData(responseJson);
		}).catch((error) => {
			console.error(error);
	 })
	}
	const searchFilter = (text) => {
		if (text) {
			const newData = masterData.filter((item) => {
			const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
			const textData = text.toUpperCase();
			return itemData.indexOf(textData) > -1;
			});
		setfilterdData(newData);
		setsearch(text);	
	} else {
		setfilterdData(masterData);
		setsearch(text);
	}
	}
   
	const ItemView = ({item}) =>{
     return(
		 
		 <TouchableOpacity>
		 <Image 
		 source = {{uri: `${item.url}`}}

         style = {styles.image}
		 />
		 <Text style = {styles.itemStyle}>
			{item.id}{". "}{item.title.toUpperCase()} 
		 </Text>
		 </TouchableOpacity>
		 
	 )
	}
	

	  

	const ItemSeparatorView = () => {
		return (
			<View
			style = {{height: 0.5, width: "100%", backgroundColor: "#c8c8c8"}}
			/>
		)
	}
	// <SafeAreaView style={{ flex: 1 }}></SafeAreaView>
return (
	
<SafeAreaView style={{ flex: 1 }}>
	
	
	   
		
		<TextInput
		
		style={styles.textInputStyle}
		value={search}
		placeholder = "search Here"
		underlineColorAndroid = 'transparent'
		onChangeText = {(text) => searchFilter(text)}
		/>

		<FlatList
		columnWrapperStyle = {{flex: 1, justifyContent: 'space-around'}}
		numColumns = {3}
		data = {filterdData}
		keyExtractor={(item, index) => index.toString()}
		// keyExtractor={(item => item.id)}
		
		renderItem={ItemView}
		contentContainerStyle={{paddingBottom: 100}}
		/>




 </SafeAreaView>
 
	
);
};

const styles = StyleSheet.create({
	continue:{
	
backgroundColor: 'white',

	},
	image:{
		
		padding: 10,
		width: '30%',
		height: 200,
		display: "flex",
	    alignItems: "center",
		flexDirection: "column",
		
		
		},
	itemStyle: {
		
		padding: 10,
		width: '30%',
		
		display: "flex",
	    alignItems: "center",
		flexDirection: "column",
		


	},
	
	textInputStyle: {
		
		borderRadius: 10,
		height: 40,
		borderWidth: 1,
		paddingLeft: 20,
		marginTop: 40,
		margin: 5,
		borderColor: "#009688",
		backgroundColor: "white"
	},
	
})






export default Photo;