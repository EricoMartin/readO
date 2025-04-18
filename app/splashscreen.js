import React, { useEffect } from 'react';
import { Image, View, StyleSheet, Dimensions, Animated } from 'react-native';
import { router, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

/**
 * SplashScreen component that displays when the app is loading
 * @param {Object} props - Component props
 * @param {Function} props.onFinish - Callback function to execute when splash screen animation completes
 * @param {number} props.duration - Duration in milliseconds for the splash screen to display
 * @returns {JSX.Element} - The splash screen component
 */
const SplashScreen = ({ onFinish, duration = 2000 }) => {
  const fadeAnim = new Animated.Value(0);
  const navigation = useRouter();

  
  useEffect(() => {
    // Fade in animation
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      // Hold the splash screen
      Animated.delay(duration - 1000),
      // Fade out animation
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
        
      // Execute the callback when animation is complete
      if (onFinish) {
        // navigation.push('/(tabs)');
        onFinish();
      }
    });
  }, [fadeAnim, duration, onFinish]);

  return (
    <LinearGradient
      colors={['#AEDF2E28', '#AEDF2E66']} // green theme
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >

    <View style={styles.container}>
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        <Image size={48} 
            source={require('@/assets/images/readologo.png')}
        />
      </Animated.View>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '820',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;