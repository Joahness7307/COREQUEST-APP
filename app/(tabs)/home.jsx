import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router';
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icons from 'react-native-vector-icons/Ionicons'
import { images } from '../../constants'
import { icons } from '../../constants'


const Home = () => {

    const router = useRouter();

    const handlePress = () => {
        router.push('../TodaysActivity'); 
    };


    return (
        <ScrollView
            className="flex-1 bg-gray-950 px-4"
            showsVerticalScrollIndicator={false}
        >
                <View className='flex-row items-center justify-between self-start mt-4'>
                    <Image
                        source={images.profilePicture}
                        className='w-12 h-12 rounded-full'
                    />
                    <Text className='text-base font-rmedium text-gray-200 ml-3 flex-1'>Welcome Back, Joahness!</Text>

                    <Icon
                        name="bell"
                        size={20}       
                        color="#D1D5DB"
                        style={{marginRight: 5}}
                    />
                    <Text className='absolute top-3 right-0 bg-orange-700 text-gray-200 text-xs rounded-full'>9+</Text>
                </View>

                <View className='bg-gray-800 p-4 pl-6 pr-6 flex justify-center rounded-xl mt-6 mb-4'>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-200 font-rmedium text-lg mr-4'>Workout Progress</Text>
                            <View className='flex-row items-center'>
                                <View className='relative w-28 h-4 bg-gray-300 rounded-full'>
                                    <View className='absolute top-0 left-0 w-20 h-4 bg-green-500 rounded-full'/>
                                    <Text className='absolute top-0 left-0 right-0 bottom-0 text-center text-white text-xs font-bold'>65%</Text>
                                </View>
                            </View>
                        </View>
                    <Text className='text-gray-300'>12 Exercise left</Text>
                </View>

                <View className='flex-row items-center justify-between mb-4'>
                    <Text className='text-gray-200 text-lg font-rbold mt-3'>Today's Activity</Text>
                    <Text className='text-gray-200 mt-3'>Sea all</Text>
                </View>

                    <View className='flex-row mb-4 justify-center'>
                        <View className='bg-rose-400 flex items-center justify-center w-24 h-54 rounded-xl'>
                            <View className='bg-red-600 m-4 rounded-lg p-2'>
                                <Image
                                    source={icons.strengthIcon}
                                    className='w-12 h-12'
                                    style={{ tintColor: 'white'}}
                                />
                            </View>
                            <Text className='text-base font-rbold text-gray-900'>1.825</Text>
                            <Text className='text-gray-900'>Calories</Text>
                        </View>
                        <View className='ml-1'>
                            <TouchableOpacity className='bg-gray-400 mb-1 p-3 px-6 w-56 rounded-xl'
                                onPress={handlePress}>
                            <View className="w-2 bg-red-500 h-4 mr-4 rounded-full absolute top-4 left-2"/>
                                <View className='flex-row justify-between'>
                                    <Text className='text-base font-rmedium text-gray-900'>Push-Ups</Text>
                                    <Text className='text-gray-900 text-xs mb-3'>20 x 3</Text>
                                </View>
                                <Text className='text-xs text-gray-900'>Chest, shoulders, triceps</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className='bg-gray-400 mb-1 p-3 px-6 w-56 rounded-xl'>
                            <View className="w-2 bg-blue-500 h-4 mr-4 rounded-full absolute top-4 left-2"/>
                                <View className='flex-row justify-between'>
                                <Text className='text-base font-rmedium text-gray-900'>Squads & Lunges</Text>
                                <Text className='text-gray-900 text-xs mb-3'>15 x 3</Text>
                                </View>
                                <Text className='text-xs text-gray-900'>Thighs, hamstring, glutes, calves</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className='bg-gray-400 p-3 px-6 w-56 rounded-xl'>
                            <View className="w-2 bg-yellow-500 h-4 mr-4 rounded-full absolute top-4 left-2"/>
                                <View className='flex-row justify-between'>
                                <Text className='text-base font-rmedium text-gray-900'>Core Abdominal</Text>
                                <Text className='text-gray-900 text-xs mb-3'>15 x 3</Text>
                                </View>
                                <Text className='text-xs text-gray-900'>Upper, Lower, Oblique</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                <Text className='text-gray-200 text-lg font-rbold mt-3 mb-3'>Overall Status</Text>

                <TouchableOpacity className='w-full h-16 bg-gray-400 rounded-xl flex-row mb-1'>
                <Icons
                    name="flame"
                    size={25}       
                    color="#FF5722"
                    style={{
                        marginLeft: 20,
                        marginTop: 15,
                        backgroundColor: "#E3CBA0",
                        width: 35,
                        height: 35,
                        padding: 5,
                        borderRadius: 10,
                    }}
                />

                    <View className='mt-3 ml-5'>
                        <Text className='text-xs text-gray-700 font-rmedium'>Calories Loss</Text>
                        <Text className='text-gray-900 font-rmedium text-base'>12.182 Kcal</Text>
                    </View>

                    <View className='relative w-24 h-4 bg-gray-500 rounded-full mt-6 ml-12'>
                        <View className='absolute top-0 left-0 w-8 h-4 bg-green-500 rounded-full'/>
                        <Text className='absolute top-0 left-0 right-0 bottom-0 text-center text-white text-xs font-bold'>37%</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity className='w-full h-16 bg-gray-400 rounded-xl flex-row mb-4'>
                <Icons
                    name="barbell"
                    size={25}       
                    color="#000000"
                    style={{
                        marginLeft: 20,
                        marginTop: 15,
                        backgroundColor: "lightgray",
                        width: 35,
                        height: 35,
                        padding: 5,
                        borderRadius: 10,
                    }}
                />

                    <View className='mt-3 ml-5 mr-1'>
                        <Text className='text-xs text-gray-700 font-rmedium'>Weigth Loss</Text>
                        <Text className='text-gray-900 font-rmedium text-base'>10.7 Kg</Text>
                    </View>

                    <View className='relative w-24 h-4 bg-gray-500 rounded-full mt-6 ml-16'>
                        <View className='absolute top-0 left-0 w-20 h-4 bg-green-500 rounded-full'/>
                        <Text className='absolute top-0 left-0 right-0 bottom-0 text-center text-white text-xs font-bold'>80%</Text>
                    </View>
                </TouchableOpacity>
                   

        </ScrollView>
    )
}

export default Home