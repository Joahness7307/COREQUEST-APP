import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icons from 'react-native-vector-icons/Ionicons'
import { images } from '../../constants'

const track = () => {
  return (
    <ScrollView className='flex-1 bg-gray-950 px-4'>
        <Text className='text-2xl font-rbold mt-4 mb-8 text-center text-gray-100'>My Activities</Text>
        
        <ScrollView
            horizontal
            className='mb-2 bg-gray-500 rounded-full'
        >
            <Text className='text-base text-gray-200 pl-4 pr-4 pt-1 pb-1'>21</Text>
            <Text className='text-base text-gray-200 pl-4 pr-4 pt-1 pb-1'>22</Text>
            <Text className='text-base text-gray-200 pl-4 pr-4 pt-1 pb-1'>23</Text>
            <Text className='text-base text-gray-200 py-1 px-2 font-rmedium bg-yellow-600 rounded-full'>Today, 24 Sept</Text>
            <Text className='text-base text-gray-200 pl-4 pr-4 pt-1 pb-1'>25</Text>
            <Text className='text-base text-gray-200 pl-4 pr-4 pt-1 pb-1'>26</Text>
            <Text className='text-base text-gray-200 pl-4 pr-4 pt-1 pb-1'>27</Text>
        </ScrollView>

        <View className='flex-row justify-between'>
            <View className='bg-red-200 mt-5 w-40 h-68 flex items-start rounded-xl'>
                <Icon
                    name="heart"
                    size={20}       
                    color="red"
                    style={{ marginLeft: 20, marginTop: 26 }}
                />
                <Text className='text-base ml-4 mb-2'>Heart Rate</Text>
                <Image
                    source={images.Image11}
                    className='w-40 h-20 mt-2'
                    style={{ opacity: 0.5 }}
                />
                <Text className='text-2xl ml-4 mt-4'>123</Text>
                <Text className='text-sm ml-4 text-gray-600'>Bpm</Text>
            </View>

            <ScrollView className='ml-2'>
                <View className='bg-gray-600 mt-5 w-40 h-32 flex items-start rounded-xl'>
                    <View className='flex-row justify-between'>
                        <Icons
                            name="footsteps"
                            size={20}       
                            color="yellow"
                            style={{ marginLeft: 20, marginTop: 20 }}
                        />
                        <Text className='text-base ml-2 mt-4 text-gray-200'>Steps</Text>
                    </View>
                    
                    <Text className='text-2xl ml-4 mt-4 text-gray-200'>2,316</Text>
                    <Text className='text-sm ml-4 text-gray-400'>Steps</Text>
                </View>

                <View className='bg-gray-600 mt-2 w-40 h-32 flex items-start rounded-xl'>
                    <View className='flex-row justify-between'>
                        <Icons
                            name="water"
                            size={20}       
                            color="blue"
                            style={{ marginLeft: 20, marginTop: 20 }}
                        />
                        <Text className='text-base ml-2 mt-4 text-gray-300'>Water</Text>
                    </View>
                    
                    <Text className='text-2xl ml-4 mt-4 text-gray-200'>1,800</Text>
                    <Text className='text-sm ml-4 text-gray-400'>Liters</Text>
                </View>
            </ScrollView>
        </View>

        <Text className='text-xl text-gray-200 font-rbold mt-8'>Calories</Text>
        <View className='flex-row'>
            <Icons
                name="flame"
                size={40} 
                color="orange"
                style={{ marginLeft: 5, marginRight: 10, marginTop: 12 }}
            />
            <Text className='text-4xl text-gray-200 mt-4'>1.825 Kcal</Text>
        </View>
        

        <Text className='text-gray-200 text-xl font-rmedium mt-8'>Statistics</Text>

        <View className='flex-row justify-between bg-gray-800 h-72 ml-1 mr-1 rounded-xl mt-4 mb-4'>
            <View className='bg-indigo-300 w-2 h-32 rounded-full mt-32 ml-4 mr-4'/>
            <Text className='absolute bottom-1 left-2 text-gray-200'>Mon</Text>
            <View className='bg-green-500 w-2 h-48 rounded-full mt-16 ml-4 mr-4'/>
            <Text className='absolute bottom-1 left-14 text-gray-200'>Tue</Text>
            <Text className='absolute top-5 left-8 bg-green-500 text-black text-sm p-1 pl-2 pr-2 rounded-full'>330 kcal</Text>
            <View className='bg-indigo-300 w-2 h-40 rounded-full mt-24 ml-4 mr-4'/>
            <Text className='absolute bottom-1 left-24 text-gray-200'>Wed</Text>
            <View className='bg-indigo-300 w-2 h-44 rounded-full mt-20 ml-4 mr-4'/>
            <Text className='absolute bottom-1 left-40 text-gray-200'>Thu</Text>
            <View className='bg-indigo-300 w-2 h-24 rounded-full mt-40 ml-4 mr-4 '/>
            <Text className='absolute bottom-1 left-52 text-gray-200'>Fri</Text>
            <View className='bg-indigo-300 w-2 h-20 rounded-full mt-44 ml-4 mr-4'/>
            <Text className='absolute bottom-1 left-64 text-gray-200'>Sat</Text>
            <View className='bg-indigo-300 w-2 h-28 rounded-full mt-36 ml-4 mr-4'/>
            <Text className='absolute bottom-1 left-72 text-gray-200'>Sun</Text>
        </View>
    </ScrollView>
  )
}

export default track