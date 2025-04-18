import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const isEmailValid = email.trim().length > 0;

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white px-6 pt-12"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} className="w-12 h-12 rounded-full bg-[#AEDF2E] justify-center items-center mb-6">
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text className="text-2xl font-semibold mb-2">Forgot password? No wahala!</Text>
      <Text className="text-base text-gray-600 mb-6">Enter your email address to get a reset OTP</Text>

      {/* Email Field */}
      <Text className="text-sm text-black mb-1">Email Address</Text>
      <TextInput
        placeholder="johndoe@example.com"
        keyboardType="email-address"
        autoCapitalize="none"
        className="border rounded-lg px-4 py-3 mb-6 text-gray-800"
        value={email}
        onChangeText={setEmail}
      />

      {/* Reset Button */}
      <TouchableOpacity
        disabled={!isEmailValid}
        className={`py-4 rounded-full items-center mb-10 ${
          isEmailValid ? 'bg-[#AEDF2E]' : 'bg-[#AEDF2E]/50'
        }`}
      >
        <Text className="text-white font-medium">Send Reset Code</Text>
      </TouchableOpacity>

      {/* Footer Help Link */}
      <TouchableOpacity className="absolute bottom-8 w-full items-center">
        <Text className="text-[#003E44] font-medium">Need more help?</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
