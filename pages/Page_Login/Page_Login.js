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
import {image_png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_2_link} from './assets/imageLinks.js'
const Page_Login  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page8}    >
			<View style = {noneModeStyles._Group_1}    >
				<View style = {noneModeStyles._png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1_container}    >
					<View style = {noneModeStyles._png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Ellipse_1}    >
				</View>
			</View>
			<Text style = {noneModeStyles._Welcome_to_Task_Managemment}   >
				Welcome to Task Managemment
			</Text>
			<View style = {noneModeStyles._Rectangle_2}    >
			</View>
			<View style = {noneModeStyles._Rectangle_1}    >
			</View>
			<Text style = {noneModeStyles._Email}   >
				Email
			</Text>
			<Text style = {noneModeStyles._Password}   >
				Password
			</Text>
			<View style = {noneModeStyles._Rectangle_3}    >
			</View>
			<Text style = {noneModeStyles._Login}   >
				Login
			</Text>
			<Text style = {noneModeStyles._Fotgot_your_password_}   >
				Fotgot your password?
			</Text>
			<Text style = {noneModeStyles._Sign_Up_}   >
				Sign Up!
			</Text>
			<View style = {noneModeStyles._png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_2_container}    >
				<View style = {noneModeStyles._png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_2}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_2_link}}/>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Login

const noneModeStyles = StyleSheet.create({
_page8: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Group_1: {
	width: 230,
	height: 196,
	position: "absolute",
	left: 188,
	top: -14,
	},
_png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1_container: {
	width: 151.407,
	height: 128.663,
	position: "absolute",
	transform: [
		{translateX: 199.558},
		{translateY: 40.1104},
	],
	},
_png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1: {
	width: "100%",
	height: "100%",
	},
_Ellipse_1: {
	width: 230,
	height: 196,
	position: "absolute",
	transform: [
		{translateX: 1},
		{translateY: -415},
	],
	},
_Welcome_to_Task_Managemment: {
	width: 426,
	height: 115,
	position: "absolute",
	left: 30,
	top: 199,
	color: "rgb(11, 45, 70)",
	fontSize: 36,
	fontWeight: "700",
	lineHeight: 42.1875,
	fontFamily: "Montserrat",
	textAlign: "left",
	},
_Rectangle_2: {
	width: 290,
	height: 63,
	position: "absolute",
	left: 31,
	top: 528,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	borderRadius: 12,
	},
_Rectangle_1: {
	width: 292,
	height: 65,
	position: "absolute",
	left: 30,
	top: 376,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	borderRadius: 12,
	},
_Email: {
	width: 55,
	height: 21,
	position: "absolute",
	left: 31,
	top: 322,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "400",
	lineHeight: 21.0938,
	fontFamily: "Montserrat",
	textAlign: "left",
	},
_Password: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 31,
	top: 474,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Montserrat",
	textAlign: "left",
	},
_Rectangle_3: {
	width: 97,
	height: 35,
	position: "absolute",
	left: 219,
	top: 611,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Login: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 243,
	top: 618,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Montserrat",
	textAlign: "left",
	},
_Fotgot_your_password_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 100,
	top: 698,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Montserrat",
	textAlign: "left",
	},
_Sign_Up_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 266,
	top: 744,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Montserrat",
	textAlign: "left",
	},
_png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_2_container: {
	width: 371,
	height: 238,
	position: "absolute",
	left: -371,
	top: 322,
	},
_png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_2: {
	width: "100%",
	height: "100%",
	},
})

