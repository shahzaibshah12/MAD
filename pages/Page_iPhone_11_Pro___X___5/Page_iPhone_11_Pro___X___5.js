import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
import {image_png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1_link} from './assets/imageLinks.js'
const Page_iPhone_11_Pro___X___5  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page1}    >
			<View style = {noneModeStyles._Group_1}    >
				<View style = {noneModeStyles._png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1_container}    >
					<View style = {noneModeStyles._png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Ellipse_1}    >
				</View>
			</View>
			<Text style = {noneModeStyles._This_Week}   >
				This Week
			</Text>
			<Text style = {noneModeStyles._1__Need_to_go_to_doctor}   >
				1: Need to go to    doctor
			</Text>
			<Text style = {noneModeStyles._2__Visit_house_by_18_Nov_}   >
				2: Visit house by 18 Nov.
			</Text>
			<Text style = {noneModeStyles._3__Buy_Pet_Food}   >
				3: Buy Pet Food
			</Text>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_11_Pro___X___5

const noneModeStyles = StyleSheet.create({
_page1: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Group_1: {
	width: 234,
	height: 202,
	position: "absolute",
	left: 199,
	top: -20,
	},
_png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1_container: {
	width: 154.04,
	height: 132.601,
	position: "absolute",
	transform: [
		{translateX: 11.7588},
		{translateY: 55.7669},
	],
	},
_png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1: {
	width: "100%",
	height: "100%",
	},
_Ellipse_1: {
	width: 234,
	height: 202,
	position: "absolute",
	},
_This_Week: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 48,
	top: 197,
	color: "rgb(0, 0, 0)",
	fontSize: 36,
	fontWeight: "700",
	fontFamily: "Montserrat",
	textAlign: "left",
	},
_1__Need_to_go_to_doctor: {
	width: 332,
	height: "auto",
	position: "absolute",
	left: 38,
	top: 280,
	color: "rgb(0, 0, 0)",
	fontSize: 36,
	fontWeight: "400",
	fontFamily: "Montserrat",
	textAlign: "left",
	},
_2__Visit_house_by_18_Nov_: {
	width: 303,
	height: "auto",
	position: "absolute",
	left: 40,
	top: 406,
	color: "rgb(0, 0, 0)",
	fontSize: 36,
	fontWeight: "400",
	fontFamily: "Montserrat",
	textAlign: "left",
	},
_3__Buy_Pet_Food: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 45,
	top: 532,
	color: "rgb(0, 0, 0)",
	fontSize: 36,
	fontWeight: "400",
	fontFamily: "Montserrat",
	textAlign: "left",
	},
})

