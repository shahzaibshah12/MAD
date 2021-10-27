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
const Page_iPhone_11_Pro___X___2  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page4}    >
			<View style = {noneModeStyles._viewport}    >
				<View style = {noneModeStyles._Group_1}    >
					<View style = {noneModeStyles._png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1_container}    >
						<View style = {noneModeStyles._png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1_link}}/>
						</View>
					</View>
					<View style = {noneModeStyles._Ellipse_1}    >
					</View>
				</View>
				<Text style = {noneModeStyles._Today}   >
					Today
				</Text>
				<Text style = {noneModeStyles._Mad_Assignment}   >
					Mad Assignment
				</Text>
				<Text style = {noneModeStyles._Refill_Water_Can}   >
					Refill Water Can
				</Text>
				<View style = {noneModeStyles._Rectangle_9}    >
				</View>
				<View style = {noneModeStyles._Rectangle_10}    >
				</View>
				<View style = {noneModeStyles._Rectangle_11}    >
				</View>
				<Text style = {noneModeStyles._Excercise_at_7pm}   >
					Excercise at 7pm
				</Text>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_11_Pro___X___2

const noneModeStyles = StyleSheet.create({
_page4: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_viewport: {
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
_Today: {
	width: 426,
	height: 42,
	position: "absolute",
	left: 35,
	top: 195,
	color: "rgb(11, 45, 70)",
	fontSize: 36,
	fontWeight: "700",
	lineHeight: 42.1875,
	fontFamily: "Montserrat",
	textAlign: "left",
	},
_Mad_Assignment: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 85,
	top: 291,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Montserrat",
	textAlign: "left",
	},
_Refill_Water_Can: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 85,
	top: 362,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Montserrat",
	textAlign: "left",
	},
_Rectangle_9: {
	width: 28,
	height: 32,
	backgroundColor: "rgb(196, 196, 196)",
	position: "absolute",
	left: 21,
	top: 288,
	},
_Rectangle_10: {
	width: 30,
	height: 31,
	backgroundColor: "rgb(196, 196, 196)",
	position: "absolute",
	left: 20,
	top: 360,
	},
_Rectangle_11: {
	width: 28,
	height: 34,
	backgroundColor: "rgb(196, 196, 196)",
	position: "absolute",
	left: 21,
	top: 433,
	},
_Excercise_at_7pm: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 81,
	top: 433,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Montserrat",
	textAlign: "left",
	},
})

