import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Question = () => {
  const navigation = useNavigation();

  // State to store selected causes
  const [selectedCauses, setSelectedCauses] = useState([]);
  const maxSelection = 3;

  const causesList = [
    'Stress Management',
    'Mental Health Concerns',
    'Career Guidance',
    'Relationship Issues',
    'Personal Growth',
    'Grief or Loss ',
    'Decision-Making Support',
  ];

  const handleCauseSelect = (cause) => {
    if (selectedCauses.includes(cause)) {
      // Remove from selection if already selected
      setSelectedCauses(selectedCauses.filter((item) => item !== cause));
    } else if (selectedCauses.length < maxSelection) {
      // Add to selection if less than 3
      setSelectedCauses([...selectedCauses, cause]);
    } else {
      Alert.alert('Selection Limit', `You can only choose up to ${maxSelection} options.`);
    }
  };

  const handleSave = () => {
    navigation.navigate('Counsellor'); // Navigate to counsellor.js page
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Why Do You Want to Meet a Counselor?</Text>
      <Text style={styles.subHeader}>To help us better understand your needs and provide the best support, please share the reasons 
        you wish to meet a counselor and the topics you would like to discuss.</Text>
      <Text style={styles.counter}>You've chosen {selectedCauses.length} out of {maxSelection} options.</Text>

      {/* Causes List */}
      <View style={styles.causesContainer}>
        {causesList.map((cause, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.causeButton,
              selectedCauses.includes(cause) ? styles.causeButtonSelected : null,
            ]}
            onPress={() => handleCauseSelect(cause)}
          >
            <Text
              style={[
                styles.causeText,
                selectedCauses.includes(cause) ? styles.causeTextSelected : null,
              ]}
            >
              {cause} {selectedCauses.includes(cause) ? '✓' : '+'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  counter: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  causesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  causeButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
  },
  causeButtonSelected: {
    backgroundColor: '#000',
  },
  causeText: {
    fontSize: 14,
    color: '#000',
  },
  causeTextSelected: {
    color: '#fff',
  },
  saveButton: {
    backgroundColor: '#000',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Question;
