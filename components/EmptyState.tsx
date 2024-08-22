import { View, Text, Image } from 'react-native'
import React from 'react'

import { images } from '../constants';
import CustomButton from './CustomButton';
import { router } from 'expo-router';

const EmptyState = ({ title, subtitle }:any) => {
	return (
		<View className='flex justify-center items-center px-44'>
			<Image 
				source={images.empty} 
				className='w-[270px] h-[215px]'
	  			resizeMode='contain'
			/>

			<Text className='text-xl text-center font-psemibold
			text-white mt-2'>
				{title}
			</Text>
	  
			<Text className='font-pmedium text-sm
			text-gray-100'>
				{subtitle}
			</Text>
			<CustomButton 
				title="Add a read"
				handlePress={() => router.push('/books')}
				containerStyles="w-full my-5"
			/>
		</View>
	)
}

export default EmptyState