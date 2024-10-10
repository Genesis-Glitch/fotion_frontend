import { StyleSheet, ScrollView, TouchableOpacity, View  } from 'react-native';
import { Link } from 'expo-router'; // Import Link from expo-router
import { useLocalSearchParams } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import ImageSlider from '@/components/ImageSlider';
import axios from 'axios';

interface EventInfo {
  id : string,
  title : string,
  description : string,
  location : string,
  quota : Number,
  event_date : string,
  event_time_start : string,
  event_time_end : string,
  event_longitude : string,
  event_latitude : string,
  event_image_url : string[],
}
interface Post {
  rc : string,
  message : string,
  data : EventInfo
}

const EventDetails = () => {
  const local = useLocalSearchParams();
  console.log("junhuh741 local : ", local);
  const eventData = {
    "rc": "0000",
    "message": "success",
    "data":
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
    
  };

  const API_URL = `http://52.11.213.134/event/${local.id}`;
  const API_HEADER = {
    'Access-Control-Allow-Origin': "*"
  };
 
  const [data, setData] = React.useState<Post>();

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("fetching data");
    try {
      const response = await axios.get(API_URL,  {
        headers: API_HEADER
      });
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      setData(eventData);
      console.error('Error fetching data:', error);
    }
  };

  function formatEventDateTime(event: any) {
    const { event_date, event_time_start } = event;
    const date = new Date(`${event_date}T${event_time_start}:00`);

    if (isNaN(date.getTime())) {
      console.error('Invalid date:', date);
      return 'Invalid date';
    }

    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',  // TypeScript expects specific values like 'long', 'short', or 'narrow'
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    const formattedTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    
    return `${formattedDate} from ${formattedTime}`;
  }

  const event = data?data.data: eventData.data;
  const initialResion = {
    latitude: event.event_latitude,
    longitude: event.event_longitude,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  }

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
        <Link href="/pages/register-details">
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
    backgroundColor: '#F5F5DC', // Neutral Color (Soft Beige)
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    backgroundColor: '#F5F5DC', // Neutral Color (Soft Beige)
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50', // Secondary Color (Fresh Green)
  },
  detailsContainer: {
    marginVertical: 20,
    backgroundColor: '#F5F5DC', // Neutral Color (Soft Beige)
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically centered
    marginBottom: 10,
    backgroundColor: '#F5F5DC', // Neutral Color (Soft Beige)
  },
  icon: {
    marginRight: 10, // Space between icon and text
    width: 30, // Fixed width to align icons
  },
  locationIcon: {
    marginLeft: 3, // Move location icon slightly to the right
  },
  date: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FF7043', // Primary Color (Warm Orange)
  },
  location: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FF7043', // Primary Color (Warm Orange)
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4CAF50', // Secondary Color (Fresh Green)
  },
  aboutText: {
    fontSize: 14,
    color: '#333',
  },
  button: {
    backgroundColor: '#FF7043', // Primary Color (Warm Orange)
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
  mapTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#4CAF50', // Secondary Color (Fresh Green)
  },
  mapContainer: {
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  map: {
    ...StyleSheet.absoluteFillObject,  // Make the map take up the entire space of its container
  },
});


export default EventDetails;
