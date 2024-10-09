import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router'; // Import Link from expo-router
import { useLocalSearchParams } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import ImageSlider from '@/components/ImageSlider';

const EventDetails = () => {

  const local = useLocalSearchParams();
  const eventData =
  {
    title: local.eventId + " Free Food",
    images:
      [
        "https://picsum.photos/300/200",
        "https://picsum.photos/600/400",
        "https://picsum.photos/900/600"
      ]
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.titleRow}>
        <ThemedText style={styles.title}>{eventData.title}</ThemedText>
      </ThemedView>
      <ImageSlider images={eventData.images} />
      <TouchableOpacity style={styles.button}onPress={() => {}}>
        {/* <Text style={styles.buttonText}>Register</Text> */}
        <Link href="../pages/registered" style={styles.button}>
          <ThemedText style={styles.buttonText}>Register</ThemedText>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 10, // Rounding corners
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EventDetails;

