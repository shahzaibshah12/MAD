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
const Page_iPhone_11_Pro___X___1  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page7}    >
			<Text style = {noneModeStyles._Welcome_Ali_}   >
				Welcome Ali,
			</Text>
			<View style = {noneModeStyles._Group_7}    >
				<View style = {noneModeStyles._Rectangle_7}    >
				</View>
				<Text style = {noneModeStyles._Done}   >
					Done
				</Text>
			</View>
			<View style = {noneModeStyles._Group_6}    >
				<View style = {noneModeStyles._Rectangle_4}    >
					<View style = {noneModeStyles._Rectangle_4_2}    >
					</View>
				</View>
				<Text style = {noneModeStyles._Add_New}   >
					Add New
				</Text>
			</View>
			<View style = {noneModeStyles._Group_5}    >
				<View style = {noneModeStyles._Rectangle_4_3}    >
					<View style = {noneModeStyles._Rectangle_4_4}    >
					</View>
				</View>
				<Text style = {noneModeStyles._This_Week}   >
					This Week
				</Text>
			</View>
			<View style = {noneModeStyles._Group_1}    >
				<View style = {noneModeStyles._png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1_container}    >
					<View style = {noneModeStyles._png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Ellipse_1}    >
				</View>
			</View>
			<View style = {noneModeStyles._Group_8}    >
				<View style = {noneModeStyles._Rectangle_8}    >
				</View>
				<Text style = {noneModeStyles._Today}   >
					Today
				</Text>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_11_Pro___X___1

const noneModeStyles = StyleSheet.create({
_page7: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Welcome_Ali_: {
	width: 426,
	height: 42,
	position: "absolute",
	left: 33,
	top: 196,
	color: "rgb(11, 45, 70)",
	fontSize: 36,
	fontWeight: "700",
	lineHeight: 42.1875,
	fontFamily: "Montserrat",
	textAlign: "left",
	},
_Group_7: {
	width: 189,
	height: 53,
	position: "absolute",
	left: 33,
	top: 388,
	},
_Rectangle_7: {
	width: 189,
	height: 53,
	backgroundColor: "rgb(240, 235, 235)",
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
_Done: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 44,
	top: 12,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Montserrat",
	textAlign: "left",
	},
_Group_6: {
	width: 205,
	height: 52,
	position: "absolute",
	left: 30,
	top: 492,
	},
_Rectangle_4: {
	width: 189,
	height: 52,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_4_2: {
	width: 189,
	height: 52,
	backgroundColor: "rgb(240, 235, 235)",
	position: "absolute",
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Add_New: {
	width: 178,
	height: 33,
	position: "absolute",
	left: 27,
	top: 15,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "400",
	lineHeight: 28.125,
	fontFamily: "Montserrat",
	textAlign: "left",
	},
_Group_5: {
	width: 189,
	height: 50,
	position: "absolute",
	left: 33,
	top: 595,
	},
_Rectangle_4_3: {
	width: 189,
	height: 50,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_4_4: {
	width: 189,
	height: 50,
	backgroundColor: "rgb(240, 235, 235)",
	position: "absolute",
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_This_Week: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 27,
	top: 10,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Montserrat",
	textAlign: "left",
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
_Group_8: {
	width: 189,
	height: 62,
	position: "absolute",
	left: 33,
	top: 275,
	},
_Rectangle_8: {
	width: 189,
	height: 62,
	backgroundColor: "rgb(240, 235, 235)",
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
_Today: {
	width: 112,
	height: "auto",
	position: "absolute",
	left: 44,
	top: 17,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Montserrat",
	textAlign: "left",
	},
})

