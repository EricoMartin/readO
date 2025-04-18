import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import { Entypo } from '@expo/vector-icons'; // for dots if needed

const OnboardingScreen2 = () => {
  return (
    <SafeAreaView className="flex-1 bg-white pt-12">
      <StatusBar barStyle="dark-content" />

      {/* Placeholder for Image */}
      <View className="flex-row justify-center items-center mt-20 mb-20">
        <View className="w-80 h-80 bg-gray-100 rounded-xl" />
      </View>

      {/* Text section */}
      <View className="items-center px-6 mb-10">
        <Text className="text-xl font-semibold text-black text-center">
            Connect, Collaborate, Succeed 
        </Text>
        <Text className="text-base text-gray-500 text-center mt-2">
            Join study groups, share notes, and learn with {'\n'} your peers in real time.
          
        </Text>
      </View>

      {/* Dots indicator */}
      <View className="flex-row justify-center items-center space-x-2 mb-6">
        <View className="w-1.5 h-1.5 rounded-full bg-gray-300" />
        <View className="w-4 h-1.5 rounded-full bg-[#AEDF2E]" />
        <View className="w-1.5 h-1.5 rounded-full bg-gray-300" />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen2;
