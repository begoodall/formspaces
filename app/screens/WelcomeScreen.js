import React, { useEffect } from 'react';
import { Text, SafeAreaView, Button, Pressable, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { s, dashStyles } from './styles.js';

export const HomeScreen = ({ navigation }) => {
  const handleHomePress = () => navigation.navigate('CreateJoinScreen');
  setTimeout(() => navigation.navigate('CreateJoinScreen'), 2000);

  return (
    <SafeAreaView style={s.evenContainer}>
      <Text style={s.titleText}>Welcome to FormSpaces!</Text>
    </SafeAreaView>
  );
}

export const CreateJoinScreen = ({ navigation }) => {
const handleCreatePress = () => navigation.navigate('NameEntryScreen');
const handleJoinPress = () => navigation.navigate('IDEntryScreen');

  return (
    <SafeAreaView style={s.evenContainer}>
      <Pressable onPress={handleCreatePress}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          width: 315,
          padding: 14,
          marginTop: 18,
          marginBottom: 18,
          backgroundColor: 'rgba(125, 204, 243, 0.3)',
          borderColor: '#7DCCF3',
          borderRadius: 12,
          borderWidth: 1,
        }}>
          <Text style={s.titleText}>Create a Team</Text>
        </View>
      </Pressable>
      <Pressable onPress={handleJoinPress}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          width: 315,
          padding: 14,
          marginTop: 18,
          marginBottom: 18,
          backgroundColor: 'rgba(125, 204, 243, 0.3)',
          borderColor: '#7DCCF3',
          borderRadius: 12,
          borderWidth: 1,
        }}>
          <Text style={s.titleText}>Join a Team</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}