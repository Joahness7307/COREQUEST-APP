import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { images } from '../../constants';

const Profile = () => {
    return (
        <View className="flex-1 bg-gray-950 p-4">

            <View className="flex items-center mb-6">
                <Image
                    source={images.profilePicture} 
                    className="w-24 h-24 rounded-full border-4 border-yellow-600"
                />
            </View>

            <View className="mb-4">
                <Text className="text-3xl text-gray-100 font-bold text-center">Joahness M. Caparas</Text>
                <Text className="text-gray-300 text-center mb-2">joahnesscaparas@gmail.com</Text>
                <Text className="text-gray-200 text-center">Age: 28 | Gender: Male</Text>
                <Text className="text-gray-200 text-center mb-4">
                    Passionate about technology, travel, and photography. Always eager to learn new things!
                </Text>
            </View>

            <ScrollView className="mb-4" showsVerticalScrollIndicator={false}>
                <Text className="text-xl text-gray-200 font-semibold mb-4 mt-6">Previous Cardio Activities</Text>
                <View className="bg-gray-800 p-4 rounded-lg mb-4">
                    <Text className="text-gray-300 text-base">✔️ Running - 5km - 20 Sept 2024</Text>
                    <Text className="text-gray-300 text-base">✔️ Cycling - 10km - 18 Sept 2024</Text>
                    <Text className="text-gray-300 text-base">✔️ HIIT Workout - 30 mins - 15 Sept 2024</Text>
                </View>

                <Text className="text-xl text-gray-200 font-semibold mb-4 mt-6">Weekly Calorie Burn</Text>
                <View className="bg-gray-800 p-4 rounded-lg">
                    <Text className="text-gray-300 text-base">Week of 18 Sept: 1200 kcal</Text>
                    <Text className="text-gray-300 text-base">Week of 25 Sept: 1500 kcal</Text>
                    <Text className="text-gray-300 text-base">Week of 2 Oct: 1800 kcal</Text>
                </View>
            </ScrollView>

            <TouchableOpacity className="bg-green-600 p-2 rounded-lg items-center">
                <Text className="text-gray-300 font-semibold text-lg">Edit Profile</Text>
                <Icon name="create-outline" size={20} color="lightgray" style={{ marginLeft: 8 }} />
            </TouchableOpacity>
        </View>
    );
};

export default Profile;
