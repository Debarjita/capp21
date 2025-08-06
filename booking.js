import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const BookingPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const counsellor = route.params?.counsellor;

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedMode, setSelectedMode] = useState('');

  // Generate next 7 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
      const dayNumber = date.getDate();
      const month = date.toLocaleDateString('en-US', { month: 'short' });
      
      dates.push({
        full: date.toISOString().split('T')[0],
        display: `${dayName}, ${dayNumber} ${month}`,
        dayName,
        dayNumber,
      });
    }
    return dates;
  };

  const availableDates = generateDates();

  const timeSlots = [
    '09:00 AM', '10:30 AM', '12:00 PM', '01:30 PM',
    '03:00 PM', '04:30 PM', '06:00 PM', '07:30 PM'
  ];

  const sessionModes = [
    { id: 'video', name: 'Video Call', icon: '📹', description: 'Face-to-face video session' },
    { id: 'audio', name: 'Voice Call', icon: '📞', description: 'Audio-only session' },
    { id: 'chat', name: 'Text Chat', icon: '💬', description: 'Written conversation' },
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !selectedMode) {
      Alert.alert('Incomplete Selection', 'Please select date, time, and session mode.');
      return;
    }

    Alert.alert(
      'Booking Confirmed! 🎉',
      `Your session with ${counsellor?.name || 'the counsellor'} is booked for ${selectedDate} at ${selectedTime} via ${selectedMode}.`,
      [
        {
          text: 'Track Progress',
          onPress: () => navigation.navigate('ProgressTracking'),
        },
        {
          text: 'Done',
          onPress: () => navigation.navigate('Home'),
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Counsellor Info */}
      {counsellor && (
        <View style={styles.counsellorCard}>
          <Image source={counsellor.image} style={styles.counsellorImage} />
          <View style={styles.counsellorInfo}>
            <Text style={styles.counsellorName}>{counsellor.name}</Text>
            <Text style={styles.counsellorRole}>{counsellor.role}</Text>
            <Text style={styles.counsellorRating}>⭐ {counsellor.rating}</Text>
          </View>
        </View>
      )}

      {/* First Session Banner */}
      <View style={styles.freeBanner}>
        <Text style={styles.freeText}>🎁 Your First Session is FREE!</Text>
        <Text style={styles.freeSubtext}>90-minute comprehensive session</Text>
      </View>

      {/* Date Selection */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select Date</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateScroll}>
          {availableDates.map((date, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dateCard,
                selectedDate === date.display && styles.selectedCard,
              ]}
              onPress={() => setSelectedDate(date.display)}
            >
              <Text style={styles.dayName}>{date.dayName}</Text>
              <Text style={styles.dayNumber}>{date.dayNumber}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Time Selection */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select Time</Text>
        <View style={styles.timeGrid}>
          {timeSlots.map((time, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.timeSlot,
                selectedTime === time && styles.selectedSlot,
              ]}
              onPress={() => setSelectedTime(time)}
            >
              <Text
                style={[
                  styles.timeText,
                  selectedTime === time && styles.selectedText,
                ]}
              >
                {time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Session Mode Selection */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Session Mode</Text>
        {sessionModes.map((mode) => (
          <TouchableOpacity
            key={mode.id}
            style={[
              styles.modeCard,
              selectedMode === mode.name && styles.selectedModeCard,
            ]}
            onPress={() => setSelectedMode(mode.name)}
          >
            <Text style={styles.modeIcon}>{mode.icon}</Text>
            <View style={styles.modeInfo}>
              <Text style={styles.modeName}>{mode.name}</Text>
              <Text style={styles.modeDescription}>{mode.description}</Text>
            </View>
            <View style={styles.radioButton}>
              {selectedMode === mode.name && <View style={styles.radioSelected} />}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Important Notes */}
      <View style={styles.notesSection}>
        <Text style={styles.notesTitle}>Important Notes:</Text>
        <Text style={styles.noteItem}>• Please join 5 minutes before your scheduled time</Text>
        <Text style={styles.noteItem}>• You'll receive a confirmation email with session details</Text>
        <Text style={styles.noteItem}>• Cancellation allowed up to 2 hours before session</Text>
        <Text style={styles.noteItem}>• First session is completely free of charge</Text>
      </View>

      {/* Book Session Button */}
      <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
        <Text style={styles.bookButtonText}>Book Free Session</Text>
      </TouchableOpacity>

      <View style={styles.bottomPadding} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  counsellorCard: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  counsellorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  counsellorInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  counsellorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  counsellorRole: {
    fontSize: 14,
    color: '#666',
    marginVertical: 2,
  },
  counsellorRating: {
    fontSize: 14,
    color: '#f39c12',
  },
  freeBanner: {
    backgroundColor: '#e8f5e8',
    margin: 15,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  freeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  freeSubtext: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  section: {
    margin: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  dateScroll: {
    flexDirection: 'row',
  },
  dateCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginRight: 10,
    alignItems: 'center',
    minWidth: 70,
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
  selectedCard: {
    backgroundColor: '#2196F3',
    borderColor: '#1976D2',
  },
  dayName: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  dayNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  timeSlot: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    width: '48%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
  selectedSlot: {
    backgroundColor: '#2196F3',
    borderColor: '#1976D2',
  },
  timeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  selectedText: {
    color: '#fff',
  },
  modeCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
  selectedModeCard: {
    backgroundColor: '#e3f2fd',
    borderColor: '#2196F3',
  },
  modeIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  modeInfo: {
    flex: 1,
  },
  modeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  modeDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2196F3',
  },
  notesSection: {
    backgroundColor: '#fff3cd',
    margin: 15,
    padding: 15,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#ffc107',
  },
  notesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#856404',
    marginBottom: 10,
  },
  noteItem: {
    fontSize: 14,
    color: '#856404',
    marginBottom: 5,
    lineHeight: 20,
  },
  bookButton: {
    backgroundColor: '#4CAF50',
    margin: 15,
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomPadding: {
    height: 20,
  },
});

export default BookingPage;