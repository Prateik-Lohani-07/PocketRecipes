import { StyleSheet, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import YoutubePlayer, { PLAYER_STATES } from "react-native-youtube-iframe";
import { theme } from '@/src/styles/theme';

interface VideoProps {
	videoSource: string;
};

export default function Video({ videoSource }: VideoProps) {
	const [playing, setPlaying] = useState<boolean>(false);
	const videoId = new URL(videoSource).pathname.split('/')[1];

	const onStateChange = useCallback((state: PLAYER_STATES) => {
		if (state === "ended") {
			setPlaying(false);
		}
	}, []);

	return (
		<View style={styles.controlsContainer}>
			<YoutubePlayer
				height={188}
				play={playing}
				videoId={videoId}
				onChangeState={onStateChange}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	controlsContainer: {
		borderRadius: theme.rounded.xs,
		borderWidth: 4,
		borderColor: theme.colors.tertiary,
	}
});