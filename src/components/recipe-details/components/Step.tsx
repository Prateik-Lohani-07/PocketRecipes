import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { flex } from '@/src/styles/container';
import { bgAccent, bgCard } from '@/src/styles/bg';
import { bold, onCard, onPrimary, subHeader2, subHeader3 } from '@/src/styles/text';
import AntDesign from '@expo/vector-icons/AntDesign';

interface StepProps {
	index: number;
	step: string;
};

export default function Step({ index, step }: StepProps) {

	const [fullStepTextVisible, setFullStepTextVisible] = useState(false);
	const toggleFullStepTextVisibility = () => setFullStepTextVisible(!fullStepTextVisible);

	const animations = useRef({
		dropDownHeight:  new Animated.Value(0),
		bottomRadius: new Animated.Value(8),
	}).current;

	const startHeightAnimation = (toValue: number) => {
		Animated.timing(animations.dropDownHeight, {
			toValue,
			duration: 150,
			easing: Easing.linear,
			useNativeDriver: false,
		}).start();
	};

	const bottomBorderAnimation = (toValue: number) => {
		Animated.timing(animations.bottomRadius, {
			toValue,
			duration: 150,
			easing: Easing.linear,
			useNativeDriver: false,
		}).start();
	};

	const maxDropDownHeight = 100;

	const toggleDropDown = () => {
		toggleFullStepTextVisibility();

		const newHeight = fullStepTextVisible ? 0 : maxDropDownHeight;
		const newBottomRadius = fullStepTextVisible ? 8 : 0;
		
		startHeightAnimation(newHeight);
		bottomBorderAnimation(newBottomRadius);	
	}

	return (
		<View style={{ width: '100%' }}>
			<Pressable 
				style={styles.pressableContainer} 
				key={index}
				onPress={toggleDropDown}
			>
				
				<View style={styles.stepNumber}>
					<Text style={[ bold, subHeader3 ]}>{index}</Text>
				</View>

				<View style={[ flex('row', 'center', 'space-between') ,{ flex: 1, paddingHorizontal: 8 }]}>
					<View style={[ { flex: 9.25 } ]} >
						<Text ellipsizeMode='tail' numberOfLines={1} style={styles.step}>{step}</Text>
					</View>

					<View style={{ flex: 0.75 }}>
						<AntDesign name={fullStepTextVisible ? "caret-right": "caret-down"} size={24} color="black" />
					</View>
				</View>

			</Pressable>

			<Animated.View style={[ 
				styles.dropDownBox, 
				{ 
					height: animations.dropDownHeight,
					padding: animations.dropDownHeight.interpolate({
						inputRange: [0, maxDropDownHeight],
						outputRange: [0, 8],
					}),
					marginTop: animations.dropDownHeight.interpolate({
						inputRange: [0, maxDropDownHeight],
						outputRange: [0, 8],
					})
				} 
			]}>
				<Text>{step}</Text>
			</Animated.View>
		</View>
	)
}

const styles = StyleSheet.create({
	stepContainer: {
	},
	pressableContainer: {
		...flex('row', 'center'),
		...bgCard,
		
		width: '100%',
		borderRadius: 8,
		overflow: 'hidden',
		height: 50,
		paddingRight: 8,
	},
	stepNumber: {
		...bgAccent,
		...flex('col', 'center', 'center'),

		width: 30,
		height: '100%',
	},
	step: {
		...onPrimary,
		...onCard,
		...subHeader3,

		width: '100%',
		textDecorationLine: 'none',
		textAlign: 'left',
	},
	dropDownBox: {
		...bgCard,
		
		width: '100%',
		padding: 8,
		overflow: 'hidden',
		borderRadius: 8,
	},
})