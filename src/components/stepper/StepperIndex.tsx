import { ColorValue, Dimensions, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { theme } from '@/src/styles/theme';

interface StepperIndexProps {
	currentStep: number;
	steps: number;
	paddingHorizontal?: number;
	stepperActiveColor?: ColorValue;
	stepperInactiveColor?: ColorValue;
};

const screenWidth = Dimensions.get('screen').width;

export default function StepperIndex({ 
	currentStep, 
	steps, 
	stepperActiveColor=theme.colors.tertiary, 
	stepperInactiveColor='white',
	paddingHorizontal = 16 
}: StepperIndexProps) {

	const effectiveScreenWidth = screenWidth - (2 * paddingHorizontal);
	const stepLength = Math.round(100 * (effectiveScreenWidth / steps)) / 100;

	return (
		<View style={styles.container}>
			{
				Array.from(({ length: steps })).map((_, index) => {
					let stepStyles: ViewStyle = (index === currentStep) 
										? { backgroundColor: stepperActiveColor } 
										: { backgroundColor: stepperInactiveColor };
										
					stepStyles = { ...stepStyles, width: stepLength, ...styles.step };
					
					return (
						<View 
							key={index} 
							style={stepStyles} 
						/>
					);
				})
			}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		paddingHorizontal: 16,
		marginVertical: 8,
		gap: 4,
	},
	step: {
		borderRadius: 10000,
		height: 6,
	},
})