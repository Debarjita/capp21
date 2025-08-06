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

const PhotoUpload = () => {
  const [photos, setPhotos] = useState(Array(6).fill(null));
  const navigation = useNavigation();

  // Function to handle photo upload
  const pickImage = async (index) => {
    const { status } =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'Please allow access to your photos.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const updatedPhotos = [...photos];
      updatedPhotos[index] = result.assets[0].uri;
      setPhotos(updatedPhotos);
    }
  };

  // Function to count uploaded photos
  const uploadedPhotoCount = photos.filter((photo) => photo !== null).length;

  // Function to handle navigation
  const handleNext = () => {
    if (uploadedPhotoCount < 2) {
      Alert.alert(
        'Upload More Photos',
        'Please upload at least 2 photos to continue.'
      );
    } else {
      navigation.navigate('PhotoVerification');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Photo Verification Request</Text>
      <Text style={styles.subtitle}>
      To ensure authenticity and maintain a secure environment, we require you to upload a minimum of two (2) clear photos for verification purposes.
       These photos will be matched using AI technology to validate your identity.
      </Text>
      <Text style={styles.title}>Guidelines for Photo Upload:</Text>
      <Text style={styles.subtitle}>
      1. Upload clear and recent photos of yourself.
      </Text>
      <Text style={styles.subtitle}>
      2. Ensure the photos are free from excessive filters or edits.
      </Text>
      <Text style={styles.subtitle}>
      3. Use well-lit environments for better image clarity.
      </Text>
      
      {/* Photo Upload Grid */}
      <View style={styles.photoGrid}>
        {photos.map((photo, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.photoBox,
              photo ? styles.photoBoxFilled : styles.photoBoxEmpty,
            ]}
            onPress={() => pickImage(index)}
          >
            {photo ? (
              <Image source={{ uri: photo }} style={styles.image} />
            ) : (
              <>
                <Text style={styles.plus}>+</Text>
                {uploadedPhotoCount < 2 && <Text style={styles.warning}>!</Text>}
              </>
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Error Message */}
      {uploadedPhotoCount < 2 && (
        <Text style={styles.error}>
          ⚠ Please add at least 2 photos to continue
        </Text>
      )}

      {/* Bottom Arrow Button */}
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
    marginBottom: 10,
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  photoBox: {
    width: '28%',
    aspectRatio: 1,
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
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
    fontSize: 24,
    color: '#aaa',
  },
  warning: {
    position: 'absolute',
    top: 5,
    right: 5,
    fontSize: 18,
    color: 'red',
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginTop: 0,
  },
  arrowButton: {
    position: 'absolute',
    bottom: 20,
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

export default PhotoUpload;
