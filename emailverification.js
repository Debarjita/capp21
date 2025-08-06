import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const EmailVerification = () => {
  const [isVerifying, setIsVerifying] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    // Simulate email verification process
    const timer = setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 3000); // 3 seconds simulation

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    navigation.navigate('Location');
  };

  const handleResendEmail = () => {
    setIsVerifying(true);
    setIsVerified(false);
    
    const timer = setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 2000);

    return () => clearTimeout(timer);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#000000', '#002C75', '#00E5FF']}
        style={styles.background}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Email Verification</Text>
          
          {isVerifying ? (
            <>
              <ActivityIndicator size="large" color="#C6FF00" style={styles.loader} />
              <Text style={styles.verifyingText}>
                We've sent a verification email to your address.
              </Text>
              <Text style={styles.subText}>
                Please check your inbox and click the verification link.
              </Text>
            </>
          ) : isVerified ? (
            <>
              <View style={styles.successIcon}>
                <Text style={styles.checkMark}>✓</Text>
              </View>
              <Text style={styles.successText}>Email Verified Successfully!</Text>
              <Text style={styles.subText}>
                Your email has been verified. You can now proceed to the next step.
              </Text>
              
              <TouchableOpacity style={styles.button} onPress={handleContinue}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
            </>
          ) : null}
          
          {!isVerified && (
            <TouchableOpacity style={styles.resendButton} onPress={handleResendEmail}>
              <Text style={styles.resendText}>Didn't receive the email? Resend</Text>
            </TouchableOpacity>
          )}
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  loader: {
    marginVertical: 20,
  },
  verifyingText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  subText: {
    color: '#C6FF00',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  successIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkMark: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  successText: {
    color: '#4CAF50',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#00E5FF',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  resendButton: {
    marginTop: 30,
    padding: 10,
  },
  resendText: {
    color: '#C6FF00',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default EmailVerification;