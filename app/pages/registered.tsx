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
    backgroundColor: 'white'
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
    height: 400,
    textAlign: "center",
    verticalAlign: "middle"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  notification : {
    fontSize: 30 ,
  },
  button: {
    flex: 1,
    backgroundColor: '#007BFF',
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

