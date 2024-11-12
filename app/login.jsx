import { Text, View, TextInput, ImageBackground, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router'
import React from 'react'
import { colors } from '../styles/colors';
import { loginStyles } from '../styles/typography';
import { buttonStyles } from '../styles/components';

const login = () => {
  return (
    <SafeAreaView className="bg-gray-950 h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="w-full justify-center items-center min-h-full px-4">

          <Text className={loginStyles.title}>Login</Text>
            <TextInput
              className={loginStyles.userNameInput}
              placeholder="Username"
              keyboardType="email-address"
              autoCapitalize="none"
            ></TextInput>

            <TextInput
              className={loginStyles.userNameInput}
              placeholder="Password"
              keyboardType="email-address"
              autoCapitalize="none"
            ></TextInput>

            <Link href="/home" className={loginStyles.loginBtn}>Login</Link>

          <Text className={loginStyles.dontHaveAnAcc}>Don't Have an Account? <Link href="./registration" className={loginStyles.registerBtn}>Register</Link></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default login
