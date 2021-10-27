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
const Page_iPhone_11_Pro___X___7  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page2}    >
			<View style = {noneModeStyles._Group_1}    >
				<View style = {noneModeStyles._png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1_container}    >
					<View style = {noneModeStyles._png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_png_transparent_white_notepad_notepad_notebook_painted_notepad_and_pencil_watercolor_painting_pencil_color_pencil_1_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Ellipse_1}    >
				</View>
			</View>
			<View style = {noneModeStyles._Frame_1}    >
				<Text style = {noneModeStyles._Add_New}   >
					Add New
				</Text>
			</View>
			<Text style = {noneModeStyles._Title}   >
				Title
			</Text>
			<Text style = {noneModeStyles._Details}   >
				Details
			</Text>
			<Text style = {noneModeStyles._Date}   >
				Date
			</Text>
			<View style = {noneModeStyles._layer_dbeec7}    >
				<View style = {noneModeStyles._layer_402412}   >
					<Svg style={{height: 1, width: 305}} viewBox = "0 0 305 1">
						<Path fill = {"none"}   stroke = {"black"}  d = "M0 0.5H305"/>
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles._layer_59a92a}    >
				<View style = {noneModeStyles._layer_c341fe}   >
					<Svg style={{height: 1, width: 306}} viewBox = "0 0 306 1">
						<Path fill = {"none"}   stroke = {"black"}  d = "M0 0.5H305.5"/>
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles._Group_4}    >
				<View style = {noneModeStyles._Rectangle_13}    >
				</View>
				<Text style = {noneModeStyles._Add}   >
					Add
				</Text>
			</View>
			<View style = {noneModeStyles._layer_8995b2}    >
				<View style = {noneModeStyles._layer_f4e12c}   >
					<Svg style={{height: 1, width: 310}} viewBox = "0 0 310 1">
						<Path fill = {"none"}   stroke = {"black"}  d = "M0 0.5H309.5"/>
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles._layer_189023}    >
				<View style = {noneModeStyles._layer_94a6d1}   >
					<Svg style={{height: 1, width: 284}} viewBox = "0 0 284 1">
						<Path fill = {"none"}   stroke = {"black"}  d = "M0 0.5H283.5"/>
					</Svg>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_11_Pro___X___7

const noneModeStyles = StyleSheet.create({
_page2: {
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
_Frame_1: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 38,
	top: 187,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	},
_Add_New: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 36,
	fontWeight: "700",
	fontFamily: "Montserrat",
	textAlign: "left",
	},
_Title: {
	width: 332,
	height: "auto",
	position: "absolute",
	left: 38,
	top: 272,
	color: "rgb(0, 0, 0)",
	fontSize: 36,
	fontWeight: "400",
	fontFamily: "Montserrat",
	textAlign: "left",
	},
_Details: {
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
_Date: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 47,
	top: 578,
	color: "rgb(0, 0, 0)",
	fontSize: 36,
	fontWeight: "400",
	fontFamily: "Montserrat",
	textAlign: "left",
	},
_layer_dbeec7: {
	width: 305,
	height: 0,
	position: "absolute",
	left: 54,
	top: 487.5,
	},
_layer_402412: {
	},
_layer_59a92a: {
	width: 305.5,
	height: 0,
	position: "absolute",
	left: 49,
	top: 557,
	},
_layer_c341fe: {
	},
_Group_4: {
	width: 121,
	height: 48,
	position: "absolute",
	left: 211,
	top: 700,
	},
_Rectangle_13: {
	width: 121,
	height: 48,
	backgroundColor: "rgb(246, 239, 239)",
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
_Add: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 21,
	top: 2,
	color: "rgb(0, 0, 0)",
	fontSize: 36,
	fontWeight: "400",
	fontFamily: "Montserrat",
	textAlign: "left",
	},
_layer_8995b2: {
	width: 309.5,
	height: 0,
	position: "absolute",
	left: 47,
	top: 373.5,
	},
_layer_f4e12c: {
	},
_layer_189023: {
	width: 283.5,
	height: 0,
	position: "absolute",
	left: 61,
	top: 681,
	},
_layer_94a6d1: {
	},
})

