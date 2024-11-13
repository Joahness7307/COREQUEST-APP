import { ImageBackground, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons'

const TodaysActivity = () => {
  return (
    <ImageBackground 
      source={require('../assets/images/pushUpVideo.jpg')}
      resizeMode="cover"
      className="flex-1 items-center justify-center bg-gray-950 px-4"
    >
      <View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      }} />

      <TouchableOpacity>
        <Icon
          name="play"
          size={20}       
          color="#D1D5DB"
          style={{
            marginRight: 5,
            marginBottom: 130,
            marginTop: 120,
            backgroundColor: "gray",
            padding: 12,
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 100
          }}
        />
      </TouchableOpacity>

      <View className="relative z-10 w-full h-96 flex items-start justify-center">
        <Text className="text-gray-300 text-base mb-3">With Hans Christian Cornelio</Text>
        <Text className="text-gray-100 text-2xl font-rmedium mb-4">
          20 Minutes, Targeting Chest, Shoulders, and Triceps
        </Text>
        <Text className="text-gray-300 text-base mb-2">With just 20 minutes, you can strengthen your chest and tone your upper body.</Text>
<<<<<<< HEAD
          <View className='bg-gray-700 rounded-xl w-full py-3 px-3 mt-5 mb-5'>
=======
          <View className='bg-gray-700 rounded-xl w-full py-3 px-3 mt-2 mb-5'>
>>>>>>> 49ea983 (First Commit)
          <View className='flex-row'>
                  <Icons
                      name="time"
                      size={25} 
                      color="lightgray"
                      style={{ marginLeft: 5, marginRight: 10}}
                  />
                  <Text className="text-gray-100 text-base">20 Minutes</Text>
              </View>
            
            <View className='flex-row'>
                  <Icons
                      name="man"
                      size={25} 
                      color="#4A8B2A"
                      style={{ marginLeft: 5, marginRight: 10, marginTop: 12 }}
                  />
                  <Text className="text-gray-100 text-base mt-3">Total-Body Strength, Core, Stability</Text>
              </View>
            
                <View className='flex-row'>
                  <Icons
                      name="flame"
                      size={25} 
                      color="orange"
                      style={{ marginLeft: 5, marginRight: 10, marginTop: 12 }}
                  />
                  <Text className="text-gray-100 text-base mt-3">150 Kcal</Text>
              </View>
            
          </View>

<<<<<<< HEAD
          <TouchableOpacity className='bg-white w-full h-12 rounded-full flex items-center justify-center mb-6'>
=======
          <TouchableOpacity className='bg-green-600 w-full h-12 rounded-full flex items-center justify-center mb-8'>
>>>>>>> 49ea983 (First Commit)
            <Text className='text-gray-950 font-rmedium text-lg'>Start Workout</Text>
          </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default TodaysActivity;
