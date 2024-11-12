import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-green-600 rounded-xl min-h-[62px] mt-12 justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50': ''}` }
        disabled={isLoading}
    >
        <Text className={`font-rbold text-lg ${textStyles}`}>
            {title}
        </Text>

        {isLoading && (
          <ActivityIndicator
            animating={isLoading}
            color="#fff"
            size="small"
            className="ml-2"
          />
        )}

    </TouchableOpacity>
  )
}

export default CustomButton