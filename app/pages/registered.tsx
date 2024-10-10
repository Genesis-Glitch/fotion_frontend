import { StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { Link } from 'expo-router'; // Import Link from expo-router

const EventDetails = () => {
  const local = useLocalSearchParams();
  
  const eventData =
  {
    title: "Your "+ local.name ,
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.titleRow}>
        <Text style={styles.notification}>Successfully Regsitered</Text>
      </ThemedView>
      <TouchableOpacity style={styles.button}>
        <Link href="/(tabs)" style={styles.buttonText}>
          Go home
        </Link>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 10,
    backgroundColor: '#F5F5DC', // Neutral Color (Soft Beige)
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
    height: 100,
      textAlign: "center",
    verticalAlign: "middle",
    backgroundColor: '#F5F5DC', // Neutral Color (Soft Beige)

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50', // Secondary Color (Fresh Green)

  },
  notification : {
    fontSize: 30 ,
    color: '#4CAF50', // Secondary Color (Fresh Green)

  },
  button: {
    flex: 1,
    backgroundColor: '#FF7043', // Primary Color (Warm Orange)
    padding: 10,
    borderRadius: 10, // Rounding corners
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EventDetails;

