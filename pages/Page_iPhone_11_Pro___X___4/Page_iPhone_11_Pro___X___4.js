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
const Page_iPhone_11_Pro___X___4  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page6}    >
			<View style = {noneModeStyles._Group_1}    >
				<View style = {noneModeStyles._png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1_container}    >
					<View style = {noneModeStyles._png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Ellipse_1}    >
				</View>
			</View>
			<Text style = {noneModeStyles._Done}   >
				Done
			</Text>
			<View style = {noneModeStyles._Ellipse_2}    >
			</View>
			<View style = {noneModeStyles._Ellipse_3}    >
			</View>
			<Text style = {noneModeStyles._Spm_Assignment}   >
				Spm Assignment
			</Text>
			<Text style = {noneModeStyles._Home_Work}   >
				Home Work
			</Text>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_11_Pro___X___4

const noneModeStyles = StyleSheet.create({
_page6: {
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
_Done: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 47,
	top: 199,
	color: "rgb(0, 0, 0)",
	fontSize: 36,
	fontWeight: "700",
	fontFamily: "Montserrat",
	textAlign: "left",
	},
_Ellipse_2: {
	width: 36,
	height: 34,
	position: "absolute",
	left: 32,
	top: 344,
	},
_Ellipse_3: {
	width: 36,
	height: 33,
	position: "absolute",
	left: 32,
	top: 449,
	},
_Spm_Assignment: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 93,
	top: 352,
	color: "rgb(0, 0, 0)",
	fontSize: 21,
	fontWeight: "400",
	fontFamily: "Montserrat",
	textAlign: "left",
	},
_Home_Work: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 98,
	top: 456,
	color: "rgb(0, 0, 0)",
	fontSize: 21,
	fontWeight: "400",
	fontFamily: "Montserrat",
	textAlign: "left",
	},
})

