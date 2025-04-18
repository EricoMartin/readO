import "../globals.css"
import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const OnboardingLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='firstscreen' options={{headerShown: false}}/>
    </Stack>
  )
}

export default OnboardingLayout