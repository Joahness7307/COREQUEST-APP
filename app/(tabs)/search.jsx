import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { images } from '../../constants'
import Icon from 'react-native-vector-icons/FontAwesome'

const Search = () => {
    return (
        <ScrollView className='flex-1 item-center bg-gray-950 px-4'>

                <View className='flex-row items-center justify-between self-start mb-4 mt-6'>
                    <Text className='text-xl font-rbold text-gray-200 flex-1'>Search</Text>
                    <Icon
                        name="bell" 
                        size={20}
                        color="#D1D5DB"
                        style={{ marginRight: 5}}
                    />
                    <Text className='absolute top-0.5 right-0 bg-orange-700 text-gray-100 text-xs rounded-full'>9+</Text>
                </View>

                <View className='bg-gray-100 p-2 rounded-sm'>
                    <Text className='text-lg font-rmedium text-gray-500 pl-2'>Search exercises...</Text>
                </View>

                <View className='flex-row justify-between mt-8 mb-3'>
                    <Text className='text-gray-300 text-lg font-rmedium'>Popular Exercises</Text>
                    <Text className='text-gray-300'>Sea all</Text>
                </View>

                <ScrollView
                    horizontal
                    className='mb-2'
                >
                    <TouchableOpacity className='bg-yellow-800 h-40 w-52 rounded-xl mb-3 mr-3'>
                        <View className='mt-4 ml-4 w-32 z-10'>
                            <Text className='text-xl font-rbold text-gray-200'>Home  Workout</Text>
                        </View>     
                            <Image
                                source={images.Image6}
                                className='w-28 h-36 ml-48 absolute top-2 -right-4'
                            />
                            <Text style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)' }} className='w-28 rounded-full pl-3 pt-1 pb-1 mt-12 ml-4 text-sm text-gray-100'>
                                12 Exercises
                            </Text>
                    </TouchableOpacity>

                    <TouchableOpacity className='bg-gray-800 h-40 w-52 rounded-xl mb-4'>
                        <View className='mt-4 ml-4 w-28 z-10'>
                            <Text className='text-xl font-rbold text-gray-200'>Gym  Workout</Text>
                        </View>     
                            <Image
                                source={images.Image7}
                                className='w-28 h-36 ml-48 absolute top-2 -right-2'
                            />
                            <Text style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)' }} className='w-28 rounded-full pl-3 pt-1 pb-1 mt-12 ml-4 text-sm text-gray-100'>
                                12 Exercises
                            </Text>
                    </TouchableOpacity>

                 </ScrollView>

                 <Text className='text-gray-200 text-lg font-rmedium mb-3'>
                    Our Collection
                 </Text>

                 <TouchableOpacity className='bg-red-800 h-36 rounded-xl mb-4'>
                    <View className='mt-4 ml-4 w-40 z-10'>
                        <Text className='text-xl font-rmedium text-gray-200'>Chest, shoulder & core exercises</Text>
                    </View>     
                        <Image
                            source={images.Image8}
                            className='w-36 h-36 ml-32 absolute top-0 right-4'
                        />
                        <Text style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)' }} className='w-28 rounded-full pl-3 pt-1 pb-1 mt-8 ml-4 text-sm text-gray-100'>
                            12 Exercises
                        </Text>
                </TouchableOpacity>

                <TouchableOpacity className='bg-indigo-800 h-36 rounded-xl mb-4'>
                    <View className='mt-4 ml-4 w-40 z-10'>
                        <Text className='text-xl font-rmedium text-gray-200'>Back & arms exercises</Text>
                    </View>     
                        <Image
                            source={images.Image9}
                            className='w-44 h-36 ml-48 absolute top-0 right-2'
                        />
                        <Text style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)' }} className='w-28 rounded-full pl-3 pt-1 pb-1 mt-8 ml-4 text-sm text-gray-100'>
                            12 Exercises
                        </Text>
                </TouchableOpacity>

                <TouchableOpacity className='bg-green-800 h-36 rounded-xl mb-4'>
                    <View className='mt-4 ml-4 w-40 z-10'>
                        <Text className='text-xl font-rmedium text-gray-200'>Lower & cardio exercises</Text>
                    </View>     
                        <Image
                            source={images.Image10}
                            className='w-32 h-36 ml-48 absolute bottom-0 right-6'
                        />
                        <Text style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)' }} className='w-28 rounded-full pl-3 pt-1 pb-1 mt-8 ml-4 text-sm text-gray-100'>
                            12 Exercises
                        </Text>
                </TouchableOpacity>

        </ScrollView>
    )
}

export default Search
