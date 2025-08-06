import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const counsellors = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Clinical Psychologist',
    experience: '40 Yrs',
    qualification: 'M.Phil, M.A, PH.D',
    price: '₹5000',
    rating: '4.8 (143 Ratings)',
    image: require('./assets/ci.png'), // Placeholder image path
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Counselling Psychologist',
    experience: '3 Yrs',
    qualification: 'B.A, M.Sc',
    price: '₹800',
    rating: '4.7 (22 Ratings)',
    image: require('./assets/ci.png'),
  },
  {
    id: 3,
    name: 'Michael Lee',
    role: 'Counselling Psychologist',
    experience: '3 Yrs',
    qualification: 'MA, MBA',
    price: '₹1000',
    rating: '4.7 (92 Ratings)',
    image: require('./assets/ci.png'),
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'Psychotherapist',
    experience: '25 Yrs',
    qualification: 'MA, M.Phil, Ph.D',
    price: '₹3400',
    rating: '4.9 (14 Ratings)',
    image: require('./assets/ci.png'),
  },
  {
    id: 5,
    name: 'Daniel Brown',
    role: 'Psychiatrist',
    experience: '5 Yrs',
    qualification: 'MBBS, MD',
    price: '₹1000',
    rating: '4.7 (6 Ratings)',
    image: require('./assets/ci.png'),
  },
  {
    id: 6,
    name: 'Sophia Wilson',
    role: 'Psychologist',
    experience: '35 Yrs',
    qualification: 'B.A, M.Phil, M.A, PG Diploma',
    price: '₹1200',
    rating: '4.7 (190 Ratings)',
    image: require('./assets/ci.png'),
  },
];

const Counsellor = () => {
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
              <Text style={styles.price}>Session starting at {counsellor.price}</Text>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.bookButton}>
                  <Text style={styles.buttonText}>Book a session</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileButton}>
                  <Text style={styles.buttonText}>View Profile</Text>
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
    color: '#0078D7',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  bookButton: {
    backgroundColor: '#FF5678',
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
  },
  profileButton: {
    backgroundColor: '#0078D7',
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
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
