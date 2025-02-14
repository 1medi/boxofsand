import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import AppLoading from 'expo-app-loading'; 
import * as Font from 'expo-font';      
import { AppNavigator } from './(tabs)/navigation.component';
import { default as theme } from '@/custom-theme.json'; 
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './(tabs)/home.component';
import Library from './(tabs)/FormLibrary/library.component';

const Stack = createNativeStackNavigator();

  export default function App() {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
          <NavigationContainer>
            
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              {/* Main Tab Navigator */}
              <Stack.Screen name="MainTabs" component={AppNavigator} />
  
              {/* Additional screens */}
              <Stack.Screen name="Library" component={Library} />
              {/* Add more Stack Screens if needed */}
            </Stack.Navigator>
          </NavigationContainer>
        </ApplicationProvider>
      </>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});