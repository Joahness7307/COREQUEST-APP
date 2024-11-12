import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'

const SignUp = () => {
    const [form, setForm]=useState ({
        username: '',
        email: '',
        password: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const submit = () => {}

  return (
    <SafeAreaView className="bg-gray-950 h-full">
        <ScrollView>
            <View className="w-full justify-center items-center h-full px-4 my-1">
                <Image
                    source={images.appName}
                    resizeMode='contain'
                    className="w-[300px] h-[55px] ml-10"
                />
                <Text className="text-xl text-gray-100 mt-4 mb-8 font-rregular">Sign up to CoreQuest</Text>

                <FormField
                    title="Username"
                    value={form.username}
                    handleChangeText={(e) => setForm({ ...form, username: e })}
                    otherStyles="mt-5"
                />

                <FormField
                    title="Email"
                    value={form.email}
                    handleChangeText={(e) => setForm({ ...form, email: e })}
                    otherStyles="mt-5"
                    keyboardType="email-address"
                />

                <FormField
                    title="Password"
                    value={form.password}
                    handleChangeText={(e) => setForm({ ...form, password: e })}
                    otherStyles="mt-5"
                />

                <CustomButton
                    title="Sign Up"
                    handlePress={() => router.push("/sign-in")}
                    containerStyles="w-full mt-7"
                    isLoading={isSubmitting}
                />

                <View className="flex justify-center pt-5 flex-row gap-2">
                    <Text className="text-base text-gray-100 font-rregular">Already have an Account?</Text>
                    <Link
                        href="/sign-in"
                        className="text-base font-rbold text-green-500" 
                    >
                        Sign In
                    </Link>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp