import { View, Text, Pressable, Linking, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { router } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function GetStartedScreen() {
  const [isChecked, setChecked] = useState(false);

  return (
    <View className="flex-1 bg-white px-6">
      <Text className="text-4xl font-extrabold text-[#004750] mt-20">ReadO</Text>
      <Text className="text-base text-gray-600 mt-3 mb-36">
        The companion designed to help you study smarter and stay ahead.
      </Text>

      <View className="flex-row items-start mt-10">
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#AEDF2E' : undefined}
          className="mr-3 mt-1"
        />
        <Text className="text-sm text-gray-700 flex-1">
          I agree to ReadO’s{' '}
          <Text
            className="text-blue-600"
            onPress={() => Linking.openURL('https://example.com/terms')}
          >
            Terms of Service
          </Text>{' '}
          and confirm that I have read and understood the{' '}
          <Text
            className="text-blue-600"
            onPress={() => Linking.openURL('https://example.com/privacy')}
          >
            Privacy Policy
          </Text>
          .
        </Text>
      </View>

      <View className="mt-10 space-y-4">
        <TouchableOpacity
          disabled={!isChecked}
          className={`rounded-xl px-4 py-4 ${isChecked ? 'bg-[#0A5864]' : 'bg-gray-200'}`}
          onPress={() => router.push('/auth/signup')}
        >
            <View className="flex-row flex-wrap">
                <View className="w-5/6">
                    <Text className={`text-base ${isChecked ? 'text-white' : 'text-gray-300'} font-semibold`}>
                        New account
                    </Text>
                    <Text className={`text-sm ${isChecked ? 'text-white/60' : 'text-gray-300'} mt-1`}>
                        Create a new ReadO account
                    </Text>
                </View>
                <View className="w-1/6">
                        <FontAwesome name="angle-right" className="mt-3 ms-8" size={24} color={'white'}/>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={!isChecked}
          className={`rounded-xl border-2 px-4 py-4 mt-4 ${
            isChecked ? 'border-[#0A5864]' : 'border-gray-200'
          }`}
          onPress={() => router.push('/')}
        >
            <View className="flex-row flex-wrap">
                <View className="w-5/6">
                    <Text className={`text-base ${isChecked ? 'text-[#0A5864]' : 'text-gray-300'} font-semibold`}>
                        Existing account
                    </Text>
                    <Text className={`text-sm ${isChecked ? 'text-[#0A5864]/80' : 'text-gray-300'} mt-1`}>
                        Get back into your account
                    </Text>
                </View>
                <View className="w-1/6">    
                    <FontAwesome name="angle-right" className="mt-3 ms-8" size={24} color={'green'}/>               
                </View>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
