import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'

const SignIn = () => {
    const [form, setForm]=useState({
        email: '',
        password: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const submit = () => {}

  return (
    <SafeAreaView className="bg-gray-950 h-full">
        <ScrollView>
            <View className="w-full justify-center items-center h-full px-4 my-6">
                <Image
                    source={images.appName}
                    resizeMode='contain'
                    className="w-[300px] h-[55px] ml-10"
                />
                <Text className="text-xl text-white mt-4 mb-8 font-rregular">Log in to CoreQuest</Text>

                <FormField
                    title="Email"
                    value={form.email}
                    handleChangeText={ (e) => setForm({ ...form, email: e })}
                    otherStyles="mt-7"
                    keyboardType="email-address"
                />

                <FormField
                    title="Password"
                    value={form.password}
                    handleChangeText={ (e) => setForm({ ...form, password: e })}
                    otherStyles="mt-7"
                    keyboardType="email-address"
                />

                <CustomButton
                    title="Sign In"
                    handlePress={() => router.push("/home")}
                    containerStyles="w-full mt-7"
                    isLoading={isSubmitting}
                />

                <View className="flex justify-center pt-5 flex-row gap-2">
                    <Text className="text-base text-gray-100 font-rregular">
                        Don't have an Account?
                    </Text>
                    
                    <Link
                        href="/sign-up"
                        className="text-base font-rbold text-green-500"
                    >
                        Signup
                    </Link>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn