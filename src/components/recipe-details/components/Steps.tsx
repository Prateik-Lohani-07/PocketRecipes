import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { onPrimary, onTertiary, subHeader1, subHeader2, subHeader3 } from '@/src/styles/text';
import { flex } from '@/src/styles/container';
import Step from './Step';
import PushButton from '../../buttons/PushButton';
import { bgAccent, bgTertiary } from '@/src/styles/bg';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { theme } from '@/src/styles/theme';
import Stepper from '../../stepper/Stepper';
import StepperModal from './StepperModal';
import { WavePulseButton } from '../../buttons/WavePulseButton';

interface StepsProps {
	steps: string[];
};

export default function Steps({ steps }: StepsProps) {

	const [modalVisible, setModalVisible] = useState(false);

	const openModal = () => setModalVisible(true);
	const closeModal = () => setModalVisible(false);

	return (
		<>
			<View style={styles.mainContainer}>
				<Text style={styles.header}>Steps</Text>

				<WavePulseButton 
					height={48} 
					backgroundColor={theme.colors.tertiary} 
					onPress={openModal}
				>
					<View style={[ flex('row', 'center', 'center'), { gap: 8 } ]}>
						<FontAwesome name="play" size={20} color={theme.colors.onTertiary} />

						<Text style={styles.pushButtonText}>Start Cooking!</Text>
					</View>
				</WavePulseButton>

				<View style={[ flex('col'), { gap: 16, marginTop: 16 } ]}>
					{ 
						steps.map((step, index) => (
							<Step step={step} index={index+1} key={index} />
						))
					}			
				</View>
			</View>

			<StepperModal
				steps={steps}
				modalVisible={modalVisible}
				closeModal={closeModal}
			/>
		</>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		...flex('col', 'stretch', 'flex-start'),
		
		gap: 16,
	},
	pushButton: {
		...bgTertiary,
		...flex('row', 'center'),
		
		height: 48,
		borderRadius: 8,
		paddingHorizontal: 16,
	},
	pushButtonText: {
		...subHeader3,
		...onTertiary,
		
		textAlign: 'center',
	},
	header: {
		...subHeader1, 
		...onPrimary,
	},
});