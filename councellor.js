import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const counsellors = [
  {
    id: 1,
    name: 'Dr. Sonia Puar',
    role: 'Clinical Psychologist',
    experience: '8 Yrs',
    qualification: 'M.Phil, M.A, PH.D',
    rating: '4.8 (143 Ratings)',
    image: require('./assets/c1.png'),
  },
  {
    id: 2,
    name: 'Dr. Jyotika Goyal',
    role: 'Counselling Psychologist',
    experience: '5 Yrs',
    qualification: 'Ph.D, M.A',
    rating: '4.7 (89 Ratings)',
    image: require('./assets/Screenshot 2025-08-06 195237.png'),
  },
  {
    id: 3,
    name: 'Rishmitha Sachdeva',
    role: 'Psychology Student',
    experience: '2 Yrs',
    qualification: 'M.Sc Psychology',
    rating: '4.6 (45 Ratings)',
    image: require('./assets/Screenshot 2025-08-06 195359.png'),
  },
  {
    id: 4,
    name: 'Nadia Ishfaq Nahvi',
    role: 'Mental Health Supervisor',
    experience: '6 Yrs',
    qualification: 'M.Phil Clinical Psychology',
    rating: '4.9 (67 Ratings)',
    image: require('./assets/Screenshot 2025-08-06 195406.png'),
  },
  {
    id: 5,
    name: 'Anees Raina',
    role: 'Clinical Psychologist',
    experience: '4 Yrs',
    qualification: 'M.A Psychology',
    rating: '4.7 (52 Ratings)',
    image: require('./assets/Screenshot 2025-08-06 195412.png'),
  },
  {
    id: 6,
    name: 'Jagmeet Singh',
    role: 'Clinical Psychologist',
    experience: '3 Yrs',
    qualification: 'M.A Psychology',
    rating: '4.5 (38 Ratings)',
    image: require('./assets/Screenshot 2025-08-06 195419.png'),
  },
  {
    id: 7,
    name: 'Apoorvi Shrivastava',
    role: 'Clinical Psychologist',
    experience: '5 Yrs',
    qualification: 'M.A Psychology',
    rating: '4.7 (78 Ratings)',
    image: require('./assets/Screenshot 2025-08-06 195425.png'),
  },
  {
    id: 8,
    name: 'Sreetama Bhaduri',
    role: 'Clinical Psychologist (RCI Registered)',
    experience: '7 Yrs',
    qualification: 'M.Phil, RCI License',
    rating: '4.8 (156 Ratings)',
    image: require('./assets/Screenshot 2025-08-06 195430.png'),
  },
  {
    id: 9,
    name: 'Ananya Purkayastha',
    role: 'Clinical Psychologist',
    experience: '4 Yrs',
    qualification: 'M.Phil Clinical Psychology',
    rating: '4.7 (92 Ratings)',
    image: require('./assets/Screenshot 2025-08-06 195436.png'),
  },
  {
    id: 10,
    name: 'Tanmay Bhargava',
    role: 'HR Psychology Consultant',
    experience: '6 Yrs',
    qualification: 'MBA Psychology',
    rating: '4.6 (89 Ratings)',
    image: require('./assets/Screenshot 2025-08-06 195425.png'),
  },
];

const Counsellor = () => {
  const navigation = useNavigation();

  const handleBookSession = (counsellor) => {
    navigation.navigate('Booking', { counsellor });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Available Counsellors</Text>
      </View>

      {/* Counsellor Boxes */}
      <ScrollView contentContainerStyle={styles.content}>
        {counsellors.map((counsellor) => (
          <View key={counsellor.id} style={styles.box}>
            <Image source={counsellor.image} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{counsellor.name}</Text>
              <Text style={styles.role}>{counsellor.role}</Text>
              <Text style={styles.details}>{counsellor.experience} | {counsellor.qualification}</Text>
              <Text style={styles.rating}>⭐ {counsellor.rating}</Text>
              <Text style={styles.price}>First session free</Text>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity 
                  style={styles.bookButton}
                  onPress={() => handleBookSession(counsellor)}
                >
                  <Text style={styles.buttonText}>Book a session</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Mental Health Support</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    backgroundColor: '#0078D7',
    padding: 15,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    padding: 10,
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    width: '95%',
    flexDirection: 'row',
    padding: 10,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  role: {
    fontSize: 14,
    color: '#555',
  },
  details: {
    fontSize: 12,
    color: '#666',
    marginVertical: 2,
  },
  rating: {
    fontSize: 12,
    color: '#f39c12',
    marginVertical: 2,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  bookButton: {
    backgroundColor: '#FF5678',
    padding: 8,
    borderRadius: 5,
    flex: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#0078D7',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Counsellor;