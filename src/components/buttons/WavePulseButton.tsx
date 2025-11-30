import { MotiView } from 'moti'
import { DimensionValue, Pressable, PressableProps, View } from 'react-native'
import { useState } from 'react'
import { Easing } from 'react-native-reanimated';

interface WavePulseButtonProps {
	children: React.ReactNode;
	onPress: Function;

	backgroundColor?: string;
	width?: DimensionValue;
	height?: number;
	pulseWidth?: DimensionValue;
	borderRadius?: number;
}

export function WavePulseButton({
	children,
	onPress,
	backgroundColor = '#3B82F6',
	pulseWidth = '100%',
	width = '100%',
	height = 50,
	borderRadius = 8,
}: WavePulseButtonProps) {

	const [trigger, setTrigger] = useState(0);

	const executeOnPress = () => {
		setTrigger(prev => prev + 1);
		onPress();
	}

	return (
		<View style={{ justifyContent: 'center', alignItems: 'center' }}>

			{/* Pulse wave (plays once on press) */}
			<MotiView
				key={trigger}
				from={{ opacity: 0.4, scale: 1 }}
				animate={{ opacity: 0, scale: 1.5 }}
				transition={{
					type: 'timing',
					duration: 1800,
					easing: Easing.ease,
					repeat: Infinity,
					repeatReverse: false,
				}}
				style={{
					position: 'absolute',
					width: pulseWidth,
					height,
					borderRadius,
					backgroundColor,
				}}
			/>

			{/* Button with opacity feedback */}
			<Pressable
				onPress={executeOnPress}
				style={({ pressed }) => ({
					width,
					height,
					borderRadius,
					backgroundColor,
					justifyContent: 'center',
					alignItems: 'center',
					overflow: 'hidden',
					opacity: pressed ? 0.5 : 1,  // 👈 Touch feedback here
				})}
			>
				{children}
			</Pressable>
		</View>
	)
}
