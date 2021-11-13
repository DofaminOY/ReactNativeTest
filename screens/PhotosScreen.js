import React, {useState, useEffect} from "react";
import {  Modal, SafeAreaView, View, StyleSheet, Text, TextInput, FlatList, Image, TouchableOpacity } from "react-native";

// import { FlatList } from "react-native-gesture-handler";

const Photo = () => {
	const [filterdData, setfilterdData] = useState([]);
	const [masterData, setmasterData] = useState([]);
	const [search, setsearch] = useState('');
	const  [modalVisible, setModalVisible] = React.useState(true);
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
		
		
		 
	<TouchableOpacity
	style = {styles.itemStyle}
	>
	
	<Image 
	source = {{uri: `${item.url}`}}

	style = {styles.images}
	/>
	
	<Text style = {styles.titles}>
			{item.id}{". "}{item.title.toUpperCase()} 
    </Text>

	
		 {/* <Modal
		 animationType = "slide"
		 presentationStyle = "formSheet"
		 >

			 
		 </Modal> */}
		 
	</TouchableOpacity>
		 
	 )
	}
	
	

	// <SafeAreaView style={{ flex: 1 }}></SafeAreaView>
return (
	
<SafeAreaView style={styles.container}>

	   
		
		<TextInput
		
		style={styles.textInputStyle}
		value={search}
		placeholder = "search Here"
		underlineColorAndroid = 'transparent'
		onChangeText = {(text) => searchFilter(text)}
		/>

		<FlatList
		columnWrapperStyle = {{flex: 1, justifyContent: 'space-around'}}
		numColumns = { 3 }
		contentContainerStyle={{paddingBottom: 100}}
		data = {filterdData}
		// keyExtractor={(item, index) => index.toString()}
		keyExtractor={(item => item.id)}
		
		renderItem={ItemView}
		
		/>




 </SafeAreaView>
 
	
);
};

const styles = StyleSheet.create({
	container:{
	
backgroundColor: 'white',

	},
	images:{
		width: 100,
		height: 200,
		// resizeMode: "contain",
		marginTop: 5,
		textAlign: 'center'
	
		
		
		},
	titles:{
        fontSize: 18,
		fontWeight: '500',

		},
	itemStyle: {
		
		
		
		width: '30%',
		display: "flex",
	    alignItems: "center",
		flexDirection: "column",
		margin: 5


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