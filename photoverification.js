import React from 'react'; 
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PhotoVerification = () => {
  const navigation = useNavigation();

  // Function to handle navigation to the next page
  const handleTakePhoto = () => {
    navigation.navigate('Photoaiverification');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Top Pose Image */}
        <Image
          source={require('./assets/thumsup.png')} // Replace with the correct relative path
          style={styles.poseImage}
        />

        {/* Instructional Text */}
        <Text style={styles.title}>Copy this pose and take a photo</Text>
        <Text style={styles.instructions}>
          We’ll check this photo matches the person in your profile. It won’t be
          visible on your profile.
        </Text>

        <Text style={styles.subtitle}>To verify successfully:</Text>
        <Text style={styles.bulletText}>• Your face must be clearly visible</Text>
        <Text style={styles.bulletText}>• You must be copying this pose exactly</Text>

        {/* Privacy Information */}
        <Text style={styles.privacyInfo}>
          For more info on how we use, retain and protect your personal data,
          please read our Privacy Policy.
        </Text>

        {/* Take Photo Button */}
        <TouchableOpacity style={styles.takePhotoButton} onPress={handleTakePhoto}>
          <Text style={styles.takePhotoButtonText}>Take my photo</Text>
        </TouchableOpacity>

        {/* Additional Links */}
        <TouchableOpacity style={styles.linkContainer}>
          <Text style={styles.linkText}>View Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkContainer}>
          <Text style={styles.linkText}>Why is this needed?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkContainer}>
          <Text style={styles.linkText}>Withdraw consent via Support</Text>
          <Text style={styles.infoIcon}>ⓘ</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  poseImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    borderRadius: 100,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bulletText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
    marginVertical: 2,
  },
  privacyInfo: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
  },
  takePhotoButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 8,
    marginVertical: 20,
    alignItems: 'center',
  },
  takePhotoButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  linkText: {
    fontSize: 16,
    color: '#007AFF',
  },
  infoIcon: {
    fontSize: 16,
    color: '#666',
  },
});

export default PhotoVerification;
