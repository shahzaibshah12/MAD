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
import {image_png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1_2_link} from './assets/imageLinks.js'
const Page_iPhone_11_Pro___X___3  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page3}    >
			<View style = {noneModeStyles._Group_1}    >
				<View style = {noneModeStyles._png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1_container}    >
					<View style = {noneModeStyles._png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Ellipse_1}    >
				</View>
			</View>
			<View style = {noneModeStyles._Group_3}    >
				<View style = {noneModeStyles._png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1_container_2}    >
					<View style = {noneModeStyles._png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1_2}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1_2_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Ellipse_1_2}    >
				</View>
			</View>
			<Text style = {noneModeStyles._Today}   >
				Today
			</Text>
			<Text style = {noneModeStyles._Mad_Assignment}   >
				Mad Assignment
			</Text>
			<Text style = {noneModeStyles._Need_to_complete_all_modules}   >
				Need to complete all modules
			</Text>
			<View style = {noneModeStyles._Group_2}    >
				<View style = {noneModeStyles._Rectangle_12}    >
				</View>
				<Text style = {noneModeStyles._Mark_this_Task_done}   >
					Mark this Task done
				</Text>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_11_Pro___X___3

const noneModeStyles = StyleSheet.create({
_page3: {
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
_Group_3: {
	width: 234,
	height: 202,
	position: "absolute",
	left: 199,
	top: -20,
	},
_png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1_container_2: {
	width: 154.04,
	height: 132.601,
	position: "absolute",
	transform: [
		{translateX: 11.7588},
		{translateY: 55.7669},
	],
	},
_png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1_2: {
	width: "100%",
	height: "100%",
	},
_Ellipse_1_2: {
	width: 234,
	height: 202,
	position: "absolute",
	},
_Today: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 33,
	top: 196,
	color: "rgb(0, 0, 0)",
	fontSize: 36,
	fontWeight: "700",
	fontFamily: "Montserrat",
	textAlign: "left",
	},
_Mad_Assignment: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 28,
	top: 268,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Montserrat",
	textAlign: "left",
	},
_Need_to_complete_all_modules: {
	width: 304,
	height: 38,
	position: "absolute",
	left: 28,
	top: 354,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "400",
	lineHeight: 28.125,
	fontFamily: "Montserrat",
	textAlign: "left",
	},
_Group_2: {
	width: 253,
	height: 45,
	position: "absolute",
	left: 90,
	top: 449,
	},
_Rectangle_12: {
	width: 253,
	height: 45,
	position: "absolute",
	left: 0,
	top: 0,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Mark_this_Task_done: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 22,
	top: 10,
	color: "rgb(0, 0, 0)",
	fontSize: 21,
	fontWeight: "400",
	fontFamily: "Montserrat",
	textAlign: "left",
	},
})

