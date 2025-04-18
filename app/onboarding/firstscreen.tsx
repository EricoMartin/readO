import React, { useRef, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, Dimensions, TouchableOpacity, StatusBar } from 'react-native';
import { router } from 'expo-router';
import { Entypo } from '@expo/vector-icons'; // for dots if needed

const { width } = Dimensions.get('window');

const slides = [
    {
      key: '1',
      title: 'Smarter Studying, Less Stress',
      description: 'Plan your study sessions, set reminders, and \n track progress effortlessly.',
      image: "", // replace with your actual image
    },
    {
      key: '2',
      title: 'Connect, Collaborate, Succeed',
      description: 'Join study groups, share notes, and \n learn with your peers in real time.',
      image: "", // replace with your actual image
    },
    {
      key: '3',
      title: 'Your Success, Rewarded',
      description: 'Earn badges, track streaks, and stay \n motivated with gamified learning.',
      image: "", // replace with your actual image
    },
  ];

const OnboardingScreen = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);

    const handleScroll = (event: any) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentIndex(index);
      };
    
      const handleNext = () => {
        if (currentIndex < slides.length - 1) {
          flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
        } else {
          router.replace('../getstarted'); // Change to your actual screen
        }
      };
    
  return (
    <SafeAreaView className="flex-1 bg-white pt-8">
      <StatusBar barStyle="dark-content" />

      <FlatList
        data={slides}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        ref={flatListRef}
        getItemLayout={(_, index) => ({
            length: width,
            offset: width * index,
            index,
          })}
        renderItem={({ item }) => (
        <View className='flex-1 w-180'>
            <View className="flex-row justify-center items-center mt-20 mb-20">
                <View className="w-80 h-80 bg-gray-100 rounded-xl" />
            </View>

            <View className="items-center pe-12 px-6 mb-10">
                <Text className="text-xl font-semibold text-black text-center">
                    {item.title}
                </Text>
                <Text className="text-base text-gray-500 text-center mt-2">
                    {item.description}
                </Text>
            </View>
        </View>
      )}
      />

      {/* Get Started Button */}
      {currentIndex === slides.length - 1 && (
        <TouchableOpacity
          onPress={handleNext}
          className="mx-10 mt-8 py-4 rounded-full mb-20"
          style={{ backgroundColor: '#AEDF2E' }}
        >
          <Text className="text-center text-white font-semibold text-lg">Get Started</Text>
        </TouchableOpacity>
      )}

      {/* Dots indicator */}
      <View className="flex-row justify-center items-center space-x-2 mb-6 mt-12">
        {slides.map((_, i) => (
            <View  key={i} className={`w-4 h-1.5 rounded-full ${i === currentIndex ? 'bg-[#AEDF2E]' : 'bg-gray-300'}`} />
        ))}
      </View>

      
    </SafeAreaView>
  );
};

export default OnboardingScreen;
