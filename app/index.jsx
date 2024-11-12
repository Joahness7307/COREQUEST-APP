import { StatusBar } from 'expo-status-bar';
import { Text, Image, View, ScrollView } from 'react-native';
import { Link, Redirect, router } from 'expo-router';
import { colors } from '../styles/colors';
import { buttonStyles } from '../styles/components';
import { images } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-gray-950 h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="w-full justify-center items-center min-h-screen h-[85px] px-4">
          <Image
            source={images.appName}
            className="w-[300px] h-[55px] pt-10 ml-10"
            resizeMode='contain'
          />
          <Image
            source={images.appLogo}
            className="w-[200px] h-[200px]"
            resizeMode='contain'
          />
          <View className="relative mt-5">
            <Text className="text-xl text-gray-100 font-rbold text-center">
              A Fitness App that Provides Personalized Workout Routines and Exercises to Help Users Achieve their Fitness Goal
            </Text>
          </View>
            <Text className="text-sm font-rbold text-gray-200 mt-8 text-center">
              Join Us and Unleash Your Potential—Your Fitness Journey Starts Here, Anytime, Anywhere!
            </Text>

            <CustomButton
              title="Get Started"
              handlePress={()=> router.push('/sign-in')}
              containerStyles="w-full mt-8"
            >

            </CustomButton>
        </View>
      
      {/* <View className="ml-6 mr-6 mt-5">
        <Text className="text-gray-300 text-2xl font-rmedium mb-2 text-center">Welcome to Your Ultimate Training Companion</Text>
        <Text className="text-gray-400 text-sm mb-2 text-center">With this application you will be able to improve your healthy lifestyle by exercising</Text>
      </View> */}
      {/* <Link href="/home" className={buttonStyles.registerBtn}>Get Started</Link> */}
      {/* <Link href="/registration" className={buttonStyles.registerBtn}>Get Started</Link> */}
      {/* <Link href="./registration" className={buttonStyles.registerBtn}>Register</Link>
      <Link href="./login" className={buttonStyles.loginBtn}>Login</Link> */}

        </ScrollView>

        <StatusBar backgroundColor="green" style="light" />
      </SafeAreaView>
  );
}
