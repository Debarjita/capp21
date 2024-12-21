import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function CreateAccountScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Background Gradient */}
      <LinearGradient
        colors={['#000000', '#002C75', '#00E5FF']} // Gradient colors
        style={styles.background}
      >
        {/* Header Text */}
        <Text style={styles.title}>Create new{'\n'}Account</Text>
        <Text style={styles.subtext}>
          Already Registered? <Text style={styles.link}>Log in here.</Text>
        </Text>

        {/* Form Fields */}
        <View style={styles.formContainer}>
          <Text style={styles.label}>NAME</Text>
          <TextInput style={styles.input} placeholder="Jiara Martins" placeholderTextColor="#B0BEC5" />

          <Text style={styles.label}>EMAIL</Text>
          <TextInput style={styles.input} placeholder="hello@reallygreatsite.com" placeholderTextColor="#B0BEC5" />

          <Text style={styles.label}>PASSWORD</Text>
          <TextInput
            style={styles.input}
            placeholder="******"
            placeholderTextColor="#B0BEC5"
            secureTextEntry={true}
          />
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Location')} // Navigate to Location screen
        >
          <Text style={styles.buttonText}>sign up</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtext: {
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 30,
  },
  link: {
    color: '#00E5FF',
    textDecorationLine: 'underline',
  },
  formContainer: {
    width: '100%',
    marginBottom: 30,
  },
  label: {
    color: '#B0BEC5',
    fontSize: 12,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#EEEEEE',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    color: '#000000',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
