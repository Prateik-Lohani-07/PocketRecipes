import React, { useRef } from 'react'
import { Animated, Pressable, PressableProps, StyleSheet, Text, View, ViewStyle } from 'react-native'

interface PushButtonProps {
	containerStyle: ViewStyle;
	children: React.ReactNode;
	onPress?: PressableProps['onPress'];
};

export default function PushButton({ containerStyle, children, onPress }: PushButtonProps) {

	const scaleValue = useRef(new Animated.Value(1)).current;

	const onPressIn = () => {
		const scaleAnimation = Animated.spring(scaleValue, {
			toValue: 0.98,
			tension: 300, // default is 40 -> higher = faster
			useNativeDriver: true,
			friction: 100,
		})

		scaleAnimation.start(({ finished }) => { if (finished) scaleAnimation.reset(); })
	};

	return (
		<Animated.View style={[{ transform: [{ scale: scaleValue }], ...containerStyle }]}>
			<Pressable
				onPressIn={onPressIn}
				onPress={onPress}

				unstable_pressDelay={100}

				hitSlop={10} // sets hitRect
				pressRetentionOffset={10} // sets pressRect

				style={{ flex: 1 }}
			>
				{children}
			</Pressable>
		</Animated.View>
	)
}

const styles = StyleSheet.create({})