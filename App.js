import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import CreateAccountScreen from './createacc'; // assuming this file exists
import LocationScreen from './location';
import LocationPopup from './locationpopup';
import PhotoUpload from './photoupload';
import PhotoVerification from './photoverification';
import Photoaiverification from './photoaiverification';
import AgePhotoUpload from './ageverification';
import Question from './question';
import Counsellor from './councellor';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  console.log("Rendering HomeScreen"); // Add this for debugging
  return (
    <SafeAreaView style={styles.container}>
      {/* Background Gradient */}
      <LinearGradient
        colors={['#000000', '#002C75', '#00E5FF']} // Gradient colors
        style={styles.background}
      >
        {/* Title */}
        <Text style={styles.title}>LAMPY</Text>

        {/* Logo */}
        <Image 
          source={require('./assets/Screenshot 2024-11-03 225544.png')} 
          style={styles.logo} 
          resizeMode="contain"
        />    

        {/* Subtitle */}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>
            May the firefly follow you{'\n'}
            where butterflies can't.
          </Text>
        </View>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>NAME</Text>
          <TextInput 
            style={styles.input} 
            placeholder="" 
            placeholderTextColor="#ccc" 
          />
          <Text style={styles.label}>EMAIL</Text>
          <TextInput 
            style={styles.input} 
            placeholder="" 
            placeholderTextColor="#ccc" 
            keyboardType="email-address"
          />
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>login</Text>
        </TouchableOpacity>

        <Text style={styles.instructions}>Or</Text>

        {/* Create Account Button */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('CreateAccount')}
        >
          <Text style={styles.buttonText}>create an account</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="LocationPopup" component={LocationPopup} options={{ headerShown: false }} />
        <Stack.Screen name="PhotoUpload" component={PhotoUpload} />
        <Stack.Screen name="PhotoVerification" component={PhotoVerification} />
        <Stack.Screen name="Photoaiverification" component={Photoaiverification} />
        <Stack.Screen name="AgePhotoUpload" component={AgePhotoUpload} />
        <Stack.Screen name="Question" component={Question} />
        <Stack.Screen name="Counsellor" component={Counsellor} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      // Ensures the container takes up full screen
  },
  background: {
    flex: 1,  // Ensure gradient fills the entire screen
    justifyContent: 'center',  // Center content vertically
    alignItems: 'center',  // Center content horizontally
    padding: 40,
    
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    
  },
  subtitleContainer: {
    width: '100%',
    alignSelf: 'center',
  },
  subtitle: {
    color: '#C6FF00',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  instructions: {
    color: '#ccc',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  inputContainer: {
    width: '100%',
    height: '20%',
  },
  label: {
    color: '#fff',
    fontSize: 12,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    color: '#555',
    padding: 20,
    borderRadius: 8,
    marginBottom: 5,
    paddingVertical: 10,
    borderColor: '#00E5FF',
  },
  button: {
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#00E5FF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
