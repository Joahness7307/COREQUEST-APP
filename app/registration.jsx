import { Text, View, TextInput, ImageBackground, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { Link } from 'expo-router';
import { registrationStyles } from '../styles/typography';
import { buttonStyles } from '../styles/components';

const registration = () => {
  return (
    <SafeAreaView className="bg-gray-950 h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="w-full justify-center items-center min-h-full px-4">
          <Text className={registrationStyles.title}>Create an Account</Text>
          <TextInput
            className={registrationStyles.userNameInput}
            placeholder="Username"
            keyboardType="email-address"
            autoCapitalize="none"
          ></TextInput>

          <TextInput
            className={registrationStyles.userNameInput}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          ></TextInput>

          <TextInput
            className={registrationStyles.userNameInput}
            placeholder="Password"
            keyboardType="email-address"
            autoCapitalize="none"
          ></TextInput>

          <TextInput
            className={registrationStyles.userNameInput}
            placeholder="Confirm Password"
            keyboardType="email-address"
            autoCapitalize="none"
          ></TextInput>

          <Link href="/login" className="text-xl font-rmedium bg-green-600 py-2.5 w-72 text-center rounded-lg mt-4">Register</Link>
  {/* 
          <Text className={registrationStyles.orLoginWith}>Or login with</Text>

          <Link href="" className={buttonStyles.googleBtn}>Google</Link>
          <Link href="" className={buttonStyles.fbBtn}>Facebook</Link> */}

          <Text className={registrationStyles.alreadyHaveAnAcc}>Already have an Account? <Link href="./login" className={registrationStyles.loginBtn}>Login</Link></Text>
        
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default registration

