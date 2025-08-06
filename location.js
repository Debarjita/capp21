import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function LocationScreen({ navigation }) {
  const handleCheckLocationSettings = () => {
    // Navigate to locationpopup.js page
    navigation.navigate('LocationPopup');
  };

  return (
    <ImageBackground
      source={require('./assets/loctn.png')} // Replace with the map image path
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        {/* Title */}
        <Text style={styles.title}>Can we get your location, please?</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          THIS INFORMATION WILL BE USED BY US ONLY{'\n'}
          FOR THE PURPOSE OF CONNECTING{'\n'}
          COUNCELLORS CLOSEST TO YOU.
        </Text>
        <Text style={styles.learnMore}>(CLICK THE LINK TO KNOW MORE)</Text>

        {/* Button */}
        <TouchableOpacity style={styles.checkLocationButton} onPress={handleCheckLocationSettings}>
          <Text style={styles.buttonText}>Check location settings</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Gradient overlay effect
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'rgb(0, 0, 0)',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 12,
    fontWeight:'bold',
    color: '#C6FF00',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 10,
  },
  learnMore: {
    color: 'rgba(0,0,0)',
    textDecorationLine: 'underline',
    fontWeight:'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  checkLocationButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderColor:'rgba(0,0,0)',
    borderWidth:3,
    paddingVertical: 12,
    paddingHorizontal: 30,
    elevation: 3, // For button shadow effect
  },
  buttonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
