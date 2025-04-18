import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
     <Stack>
          <Stack.Screen name='signin' options={{headerShown: false}}/>
          <Stack.Screen name='signup' options={{headerShown: false}}/>
          <Stack.Screen name='verifyotp' options={{headerShown: false}}/>
          <Stack.Screen name='forgotpassword' options={{headerShown: false}}/>
          <Stack.Screen name='setnewpassword' options={{headerShown: false}}/>
    </Stack>
  )
}

export default AuthLayout;