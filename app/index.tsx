import './globals.css';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import SplashScreen from './splashscreen';
import { router } from 'expo-router';

/**
 * Main App component
 * @returns {JSX.Element} - The root app component
 */
const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
    router.push('/onboarding/firstscreen')

  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content"/>
      
      {/* Main App Content */}
      <View style={styles.container}>
        {!showSplash && (
          <View style={styles.mainContent}>
            {/* <Text style={styles.welcomeText}>Welcome to ReadO!</Text>
            <Text style={styles.descriptionText}>Your reading companion</Text> */}
          </View>
        )}
      </View>
      
      {/* Splash Screen */}
      {showSplash && <SplashScreen onFinish={handleSplashFinish} duration={2500} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContent: {
    padding: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0A6E6E',
  },
  descriptionText: {
    fontSize: 16,
    color: '#666666',
  },
});

export default App;