import { Button, Modal, NativeSyntheticEvent, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Stepper from '../../stepper/Stepper';
import { header, mainHeader, subHeader1, subHeader2 } from '@/src/styles/text';
import { theme } from '@/src/styles/theme';
import { flex } from '@/src/styles/container';

interface StepperModalProps {
	modalVisible: boolean;
	closeModal: ((event: NativeSyntheticEvent<any>) => void) | undefined;
	steps: string[];
};

interface ModalStepProps {
	index: number;
	step: string;
};

function ModalStep({ index, step }: ModalStepProps) {
	return (
		<View style={[ flex('col', 'center'), { gap: 8 } ]}>
			<Text style={[ subHeader2, { textAlign: 'center' } ]}>{index}.</Text>
			<Text style={[ mainHeader, {  } ]}>{step}</Text>
		</View>
	);
}

export default function StepperModal({ steps, modalVisible, closeModal }: StepperModalProps) {
	return (
		<Modal
			visible={modalVisible}
			onRequestClose={closeModal}
			animationType='slide'
		>
			<View
				style={[{ flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'space-between' }]}
			>
				<Stepper stepperInactiveColor={theme.colors.inactive}>
					{ steps.map((step, index) => <ModalStep key={index} step={step} index={index} />) }
				</Stepper>

				<View style={{ width: 148, height: 48 }}>
					<Button
						title='Back'
						onPress={closeModal}
						color={theme.colors.accent}
					/>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({})