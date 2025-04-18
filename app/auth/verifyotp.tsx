import React, { useRef, useState, useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';

const OTPScreen = () => {
    const router = useRouter();
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(30);

    const { purpose, email } = useLocalSearchParams();

  const titleMap = {
    signup: 'OTP verification',
    signin: 'Login OTP',
    password_reset: 'Reset your password',
  };

  const instructionMap = {
    signup: `Enter the verification code sent to ${email}`,
    signin: `Enter the login OTP sent to ${email}`,
    password_reset: `We sent a reset code to ${email}`,
  };
  
    const inputRefs = useRef<Array<TextInput | null>>([]);

    // const reason = titleMap[purpose];

    const parsedPurpose = Array.isArray(purpose) ? purpose[0] : purpose ?? '';
    const parsedEmail = Array.isArray(email) ? email[0] : email ?? '';

    const reason = titleMap[parsedPurpose as keyof typeof titleMap];
    const instructions = instructionMap[parsedPurpose as keyof typeof instructionMap];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) clearInterval(interval);
          return prev - 1;
        });
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    const handleChange = (text: string, index: number) => {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
  
      // Auto-focus next input
      if (text && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    };
  
    return (
      <View className="flex-1 bg-white px-6 pt-12">
        {/* Back button */}
        <TouchableOpacity onPress={() => router.back()} className="w-12 h-12 rounded-full bg-[#AEDF2E] justify-center items-center mb-6">
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
  
        {/* Heading */}


        <Text className="text-2xl font-semibold mb-2">{reason}</Text>
        <Text className="text-gray-500 mb-8">
          Enter the verification code sent to <Text className="text-blue-500 font-medium">{email}</Text>
        </Text>
  
        {/* OTP Inputs */}
        <View className="flex-row justify-between mb-10">
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              value={digit}
              onChangeText={(text) => handleChange(text.replace(/[^0-9]/g, ''), index)}
              keyboardType="number-pad"
              maxLength={1}
              className="w-12 h-14 text-center text-lg border border-gray-200 rounded-lg bg-white"
            />
          ))}
        </View>
  
        {/* Continue button */}
        <TouchableOpacity
          disabled={otp.includes('')}
          className={`py-4 rounded-full items-center mb-6 ${
            otp.includes('') ? 'bg-[#AEDF2E]/50' : 'bg-[#AEDF2E]'
          }`}
        onPress={() => router.push('/auth/setnewpassword')}
        >
          <Text className="text-white font-medium">Continue</Text>
        </TouchableOpacity>
  
        {/* Resend Info */}
        <Text className="text-center text-gray-500">
          Didn’t receive the code?{' '}
          <Text className="text-blue-600 font-medium">
            Resend
          </Text>{' '}
          in 0:{timer < 10 ? `0${timer}` : timer}s
        </Text>
      </View>
    );
  }

export default OTPScreen;