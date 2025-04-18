import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

function SignUpScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const isFormValid = fullName.trim() && email.trim() && password; 

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-white px-6 pt-12">
      {/* Back button */}
      <TouchableOpacity onPress={() => router.back()} className="w-12 h-12 rounded-full bg-[#AEDF2E] justify-center items-center mb-6">
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text className="text-2xl font-semibold mb-6">Create an account</Text>

      {/* Full Name */}
      <Text className="text-base mb-1 text-black">Full Name</Text>
      <TextInput
        placeholder="John Doe"
        placeholderTextColor="#aaa"
        className="bg-gray-100 rounded-xl px-4 py-3 mb-4 text-black"
        value={fullName}
        onChangeText={setFullName}
      />

      {/* Email */}
      <Text className="text-base mb-1 text-black">Email Address</Text>
      <TextInput
        placeholder="johndoe@example.com"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        className="bg-gray-100 rounded-xl px-4 py-3 mb-4 text-black"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password */}
      <Text className="text-base mb-1 text-black">Password</Text>
      <View className="flex-row items-center bg-gray-100 rounded-xl px-4 py-3 mb-6">
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

      {/* Create Account Button */}
      <TouchableOpacity className={`bg-[#AEDF2E] py-4 rounded-full items-center mb-6 ${
          isFormValid ? 'bg-[#AEDF2E]' : 'bg-[#AEDF2E]/50'}`} 
          onPress={() => isFormValid? router.push({pathname: '/auth/verifyotp', params: {
            purpose: 'signup', // or 'signin' or 'password_reset'
            email: email,
          },}) : ''}>
        <Text className="text-white font-medium">Create Account</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View className="flex-row items-center mb-6">
        <View className="flex-1 h-px bg-gray-300" />
        <Text className="mx-2 text-gray-400">Or</Text>
        <View className="flex-1 h-px bg-gray-300" />
      </View>

      {/* Google Button */}
      <TouchableOpacity
        disabled={!isFormValid}
        className="border border-teal-800 py-4 rounded-full flex-row items-center justify-center mb-4">
        <Ionicons name="logo-google" size={20} color="#EA4335" className="mr-2" />
        <Text className="text-teal-800 font-medium ml-2">Continue with Google</Text>
      </TouchableOpacity>

      {/* Apple Button */}
      <TouchableOpacity className="border border-teal-800 py-4 rounded-full flex-row items-center justify-center mb-10">
        <Ionicons name="logo-apple" size={20} color="black" className="mr-2" />
        <Text className="text-teal-800 font-medium ml-2">Continue with Apple</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text className="text-center text-gray-500">
        Already have an account?{' '}
        <Text className="text-blue-600 font-medium" onPress={() => router.push('/auth/signin')}>
          Login here
        </Text>
      </Text>
    </ScrollView>
  );
}
 export default SignUpScreen;