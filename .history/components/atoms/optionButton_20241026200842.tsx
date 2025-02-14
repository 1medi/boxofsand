import React from 'react';
import * as eva from '@eva-design/eva';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface BuddonProps {
  title: string;
  destination: string; 
  accessory: React.ComponentType<any>;
}

export default function Buddon({ title, accessory: Accessory, destination }: BuddonProps) {
  const navigation = useNavigation();  

  return (
    <TouchableOpacity
      style={styles.buttonGradient}
      onPress={() => navigation.navigate(destination)}  
    >
      <Accessory 
        style={{
          width: 40,
          height: 40,
          tintColor: '#ffffff',
        }} 
      />
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  buttonGradient: {
    borderRadius: 50,
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 20,
    backgroundColor: 'rgba(8,65,92,0.8)'
  },
});
