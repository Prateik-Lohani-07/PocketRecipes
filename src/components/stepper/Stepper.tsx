import { StyleSheet, View, Dimensions, Pressable, ViewStyle, ColorValue } from 'react-native'
import React, { useState } from 'react'
import StepperIndex from './StepperIndex';

const screenWidth = Dimensions.get('screen').width;

const renderItemDefault = (stepperItem: React.ReactNode, style: ViewStyle = {}) => {
	style = { ...style, zIndex: 0, width: '100%', height: '100%' };

	return (
		<View style={style}>
			{stepperItem}
		</View>
	);
}

export type renderItemFunc = ((stepperItem: React.ReactNode, style?: ViewStyle, ...args: any) => React.ReactNode);

interface StepperProps {
	children: React.ReactNode[];
	backgroundColor?: string;
	renderItem?: renderItemFunc; 
	stepperActiveColor?: ColorValue;
	stepperInactiveColor?: ColorValue;
};


export default function Stepper({ 
	children, 
	backgroundColor='white', 
	stepperActiveColor,
	stepperInactiveColor,
	renderItem=renderItemDefault,
}: StepperProps) {

	const [index, setIndex] = useState<number>(0);
	const numOfViews = children.length;

	const goPrev = () => {
		const newIndex = Math.max(0, index-1);
		setIndex(newIndex);
	};

	const goNext = () => {
		const newIndex = Math.min(index+1, numOfViews-1);
		setIndex(newIndex);
	};

	if (children.length === 0) 
		return null;

	return (
		<View style={[{ backgroundColor, height: '90%' }]}>
			<StepperIndex 
				currentStep={index} 
				steps={numOfViews} 
				stepperActiveColor={stepperActiveColor}
				stepperInactiveColor={stepperInactiveColor}
			/>

			<View style={{ flexDirection: 'row', flex: 1 }}>
				<Pressable style={{ flex: 1.5 }} onPress={goPrev} />

				<View style={[ { flex: 7 }, styles.contentContainer ]} >
					{ renderItem(children[index], { backgroundColor }) }
				</View>

				<Pressable style={{ flex: 1.5 }} onPress={goNext} />
			</View>


		</View>
	)
}

const styles = StyleSheet.create({
	stepperContainer: {
		height: '100%', 
		width: '100%',
	},
	contentContainer: {
		width: '100%', 
		height: '100%', 
	}
})