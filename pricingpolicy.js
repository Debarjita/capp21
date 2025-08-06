import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PricingPolicy = () => {
  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate('Question');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.background}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.header}>
            <Ionicons name="shield-checkmark" size={50} color="#fff" />
            <Text style={styles.headerTitle}>Our Pricing Policy</Text>
            <Text style={styles.headerSubtitle}>Affordable mental health support for everyone</Text>
          </View>

          <View style={styles.pricingContainer}>
            {/* Under 18 */}
            <View style={styles.pricingCard}>
              <View style={styles.ageHeader}>
                <Ionicons name="school" size={30} color="#4CAF50" />
                <Text style={styles.ageTitle}>Under 18 Years</Text>
              </View>
              <View style={styles.priceSection}>
                <Text style={styles.priceText}>FREE</Text>
                <Text style={styles.sessionText}>90-minute sessions</Text>
              </View>
              <View style={styles.features}>
                <View style={styles.featureItem}>
                  <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
                  <Text style={styles.featureText}>Unlimited sessions</Text>
                </View>
                <View style={styles.featureItem}>
                  <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
                  <Text style={styles.featureText}>Parental consent required</Text>
                </View>
                <View style={styles.featureItem}>
                  <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
                  <Text style={styles.featureText}>Specialized teen counselors</Text>
                </View>
              </View>
            </View>

            {/* 18-22 Years */}
            <View style={styles.pricingCard}>
              <View style={styles.ageHeader}>
                <Ionicons name="person" size={30} color="#FF9800" />
                <Text style={styles.ageTitle}>18-22 Years</Text>
              </View>
              <View style={styles.priceSection}>
                <Text style={styles.priceText}>₹299</Text>
                <Text style={styles.sessionText}>per 90-minute session</Text>
              </View>
              <View style={styles.features}>
                <View style={styles.featureItem}>
                  <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
                  <Text style={styles.featureText}>Student-friendly pricing</Text>
                </View>
                <View style={styles.featureItem}>
                  <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
                  <Text style={styles.featureText}>Flexible scheduling</Text>
                </View>
                <View style={styles.featureItem}>
                  <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
                  <Text style={styles.featureText}>Career guidance included</Text>
                </View>
              </View>
            </View>

            {/* 25+ Years */}
            <View style={styles.pricingCard}>
              <View style={styles.ageHeader}>
                <Ionicons name="briefcase" size={30} color="#2196F3" />
                <Text style={styles.ageTitle}>25+ Years</Text>
              </View>
              <View style={styles.priceSection}>
                <Text style={styles.priceText}>₹499</Text>
                <Text style={styles.sessionText}>per 90-minute session</Text>
              </View>
              <View style={styles.features}>
                <View style={styles.featureItem}>
                  <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
                  <Text style={styles.featureText}>Professional counseling</Text>
                </View>
                <View style={styles.featureItem}>
                  <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
                  <Text style={styles.featureText}>Work-life balance support</Text>
                </View>
                <View style={styles.featureItem}>
                  <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
                  <Text style={styles.featureText}>Relationship counseling</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Special Offer */}
          <View style={styles.offerContainer}>
            <Ionicons name="gift" size={30} color="#E91E63" />
            <Text style={styles.offerTitle}>Special Offer!</Text>
            <Text style={styles.offerText}>
              Your first session is completely FREE regardless of your age group.
              Experience our quality counseling services before you commit.
            </Text>
          </View>

          {/* Additional Info */}
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>What's included in every session:</Text>
            <View style={styles.infoItem}>
              <Ionicons name="time" size={16} color="#666" />
              <Text style={styles.infoText}>Full 90-minute session</Text>
            </View>
            <View style={styles.infoItem}>
              <Ionicons name="shield" size={16} color="#666" />
              <Text style={styles.infoText}>Complete confidentiality</Text>
            </View>
            <View style={styles.infoItem}>
              <Ionicons name="document-text" size={16} color="#666" />
              <Text style={styles.infoText}>Session notes & follow-up</Text>
            </View>
            <View style={styles.infoItem}>
              <Ionicons name="call" size={16} color="#666" />
              <Text style={styles.infoText}>Emergency support access</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.continueButtonText}>Continue to Questions</Text>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
    textAlign: 'center',
    marginTop: 5,
  },
  pricingContainer: {
    marginBottom: 20,
  },
  pricingCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  ageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  ageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  priceSection: {
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
  },
  priceText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  sessionText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  features: {
    marginTop: 10,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
  },
  offerContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  offerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E91E63',
    marginTop: 10,
  },
  offerText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
  },
  infoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
  },
  continueButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#667eea',
  },
});

export default PricingPolicy;