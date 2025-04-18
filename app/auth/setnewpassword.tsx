import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import ResetSuccessDialog from './successdialogue';

export default function NewPasswordScreen() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
    <KeyboardAvoidingView
      className="flex-1 bg-white px-6 pt-12"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} className="w-12 h-12 rounded-full bg-[#AEDF2E] justify-center items-center mb-6">
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text className="text-2xl font-semibold mb-2">Set new password?</Text>
      <Text className="text-base text-gray-600 mb-6">Choose a string password you would not forget.</Text>

      <Text className="text-base mb-1 text-black">New Password</Text>
            <View className="flex-row items-center bg-gray-100 rounded-xl px-4 py-3 mb-12">
              <TextInput
                placeholder="********"
                placeholderTextColor="#aaa"
                secureTextEntry={!showPassword}
                className="flex-1 text-black"
                value={password}
                onChangeText={setPassword}
              />
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="#666" />
              </Pressable>
            </View>

            <Text className="text-base mb-1 text-black">Confirm New Password</Text>
            <View className="flex-row items-center bg-gray-100 rounded-xl px-4 py-3 mb-12">
              <TextInput
                placeholder="********"
                placeholderTextColor="#aaa"
                secureTextEntry={!showPassword}
                className="flex-1 text-black"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="#666" />
              </Pressable>
            </View>

      {/* Reset Button */}
      <TouchableOpacity
        disabled={!(password && confirmPassword && password === confirmPassword)}
        className={`py-4 rounded-full items-center mb-10 ${
          password && confirmPassword && password === confirmPassword ? 'bg-[#AEDF2E]' : 'bg-[#AEDF2E]/50'
        }`}
            onPress={() => setShowDialog(true)}>

        <Text className="text-[#0A5864] font-medium">Save Password</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>


    <ResetSuccessDialog
    visible={showDialog}
    onClose={() => setShowDialog(false)}
    onContinue={() => {
      setShowDialog(false);
      // navigate to login or home
      router.push('/auth/signin')
    }}
  />
  </>
  );
}
