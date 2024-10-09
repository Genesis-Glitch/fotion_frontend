import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router'; // Import Link from expo-router
import { useLocalSearchParams } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import ImageSlider from '@/components/ImageSlider';

const EventDetails = () => {
  const local = useLocalSearchParams();
  const eventData = {
    "rc": "0000",
    "message": "success",
    "data": [
      {
        "id": "82ee981b-e19f-962a-401e-ea34ebfb4848",
        "title": "event title",
        "description": "event description",
        "location": "event location",
        "quota": 99,
        "event_date": "2024-12-12",
        "event_time_start": "08:00",
        "event_time_end": "15:00",
        "event_longitude": "123123123",
        "event_latitude": "234234234",
        "event_image_url": ["https://picsum.photos/100/200"]
      },
    ]
  };

  function formatEventDateTime(event) {
    const { event_date, event_time_start } = event;
    const date = new Date(`${event_date}T${event_time_start}:00`);

    if (isNaN(date.getTime())) {
      console.error('Invalid date:', date);
      return 'Invalid date';
    }

    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    const formattedTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    
    return `${formattedDate} from ${formattedTime}`;
  }

  const event = eventData.data[0];

  return (
    <ScrollView style={styles.container}>
      <ImageSlider images={event.event_image_url} />

      <ThemedView style={styles.titleRow}>
        <ThemedText style={styles.title}>{event.title}</ThemedText>
      </ThemedView>

      <ThemedView style={styles.detailsContainer}>
        {/* Schedule Icon */}
        <ThemedView style={styles.row}>
          <Icon name="calendar" size={20} color="#007BFF" style={styles.icon} />
          <ThemedText style={styles.date}>{formatEventDateTime(event)}</ThemedText>
        </ThemedView>

        {/* Location Icon with margin adjustment */}
        <ThemedView style={styles.row}>
          <Icon name="map-marker" size={20} color="#007BFF" style={[styles.icon, styles.locationIcon]} />
          <ThemedText style={styles.location}>{event.location}</ThemedText>
        </ThemedView>

        <ThemedText style={styles.aboutTitle}>About</ThemedText>
        <ThemedText style={styles.aboutText}>{event.description}</ThemedText>
      </ThemedView>

      <TouchableOpacity style={styles.button}>
        <Link href="../pages/registered" style={styles.buttonText}>
          Register
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
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  detailsContainer: {
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically centered
    marginBottom: 10,
  },
  icon: {
    marginRight: 10, // Space between icon and text
    width: 30, // Fixed width to align icons
  },
  locationIcon: {
    marginLeft: 3, // Move location icon 5px to the right
  },
  date: {
    fontSize: 16,
    fontWeight: '500',
  },
  location: {
    fontSize: 16,
    fontWeight: '500',
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 14,
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 10, // Rounding corners
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EventDetails;
