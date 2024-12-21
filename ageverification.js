import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

const AgePhotoUpload = () => {
  const [photo, setPhoto] = useState(null); // Single photo state
  const navigation = useNavigation();

  // Function to handle photo upload
  const pickImage = async () => {
    const { status } =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'Please allow access to your photos.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri); // Store uploaded photo URI
    }
  };

  // Function to handle navigation
  const handleNext = () => {
    if (!photo) {
      Alert.alert('Upload Required', 'Please upload a valid ID to continue.');
    } else {
      navigation.navigate('Question'); // Replace 'question' with your next screen name
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Age Verification Request</Text>
      <Text style={styles.subtitle}>
        To verify your age, please upload a valid ID with your photo and date of birth.
        Accepted IDs: Aadhaar Card, PAN Card, Driving License, Passport, School ID.
      </Text>

      {/* Guidelines */}
      <Text style={styles.guidelinesTitle}>Photo Upload Guidelines:</Text>
      <Text style={styles.guideline}>1. The ID must be clear and fully visible.</Text>
      <Text style={styles.guideline}>2. Your photo and DOB must be readable.</Text>
      <Text style={styles.guideline}>3. Only valid and unexpired IDs are accepted.</Text>

      {/* Photo Upload Box */}
      <TouchableOpacity
        style={[styles.photoBox, photo ? styles.photoBoxFilled : styles.photoBoxEmpty]}
        onPress={pickImage}
      >
        {photo ? (
          <Image source={{ uri: photo }} style={styles.image} />
        ) : (
          <Text style={styles.plus}>+</Text>
        )}
      </TouchableOpacity>

      {/* Error Message */}
      {!photo && (
        <Text style={styles.error}>⚠ Please upload 1 valid ID photo to continue.</Text>
      )}

      {/* Next Button */}
      <TouchableOpacity style={styles.arrowButton} onPress={handleNext}>
        <Text style={styles.arrow}>→</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  guidelinesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  guideline: {
    fontSize: 14,
    color: '#444',
    marginBottom: 5,
  },
  photoBox: {
    width: '60%',
    height: 200,
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoBoxEmpty: {
    borderColor: '#ccc',
  },
  photoBoxFilled: {
    borderColor: '#1E90FF',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  plus: {
    fontSize: 48,
    color: '#aaa',
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  arrowButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#1E90FF',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    fontSize: 24,
    color: '#fff',
  },
});

export default AgePhotoUpload;
