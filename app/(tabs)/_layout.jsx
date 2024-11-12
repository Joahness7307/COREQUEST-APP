import { Text, View, Image } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused }) => {
    color = focused ? '#C65D00' : '#D1D5DB';
    return (
        <View>
            <Image
                source={icon}
                className="w-5 h-5"
                tintColor={color}
                resizeMode="contain"
            />
        </View>
    )
}

// const TabsLayout = () => {   
//     return (
//         <View>
//             <Image
//                 source={ }
//             />
//         </View>
//     )
// }

const TabLayout = () => {
    return (    
            <Tabs
                screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#111827',
                    paddingTop: 5,
                    paddingBottom: 2
                },
            }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.homeIcon}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        ),
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ color: focused ? '#C65D00' : '#D1D5DB', fontSize: 12 }}>
                                Home
                            </Text>
                        ),
                    }}
                />

                <Tabs.Screen
                    name="search"
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.searchIcon}
                                color={color}
                                name="Search"
                                focused={focused}
                            />
                        ),
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ color: focused ? '#C65D00' : '#D1D5DB', fontSize: 12 }}>
                                Search
                            </Text>
                        ),
                    }}
                />

                <Tabs.Screen
                    name="activity"
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.libraryIcon}
                                color={color}
                                name="Activity"
                                focused={focused}
                            />
                        ),
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ color: focused ? '#C65D00' : '#D1D5DB', fontSize: 12 }}>
                                Activity
                            </Text>
                        ),
                    }}
                />

                <Tabs.Screen
                    name="profile"
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.userIcon}
                                color={color}
                                name="Profile"
                                focused={focused}
                            />
                        ),
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ color: focused ? '#C65D00' : '#D1D5DB', fontSize: 12 }}>
                                Profile
                            </Text>
                        ),
                    }}
                />
            </Tabs>

    )
}

export default TabLayout
