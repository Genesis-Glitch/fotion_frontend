import { StyleSheet, ScrollView, Text, TouchableOpacity, View, Image} from 'react-native';
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
        <Text style={styles.notification}>Tickets</Text>
      </ThemedView>
      <View style={styles.qr}>
          <Image source={{ uri: "/assets/images/Untitled.png" }} style={styles.image} />
      </View>
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
    marginHorizontal: 'auto',
    height: 100,
    textAlign: "center",
    alignContent: "center",
    verticalAlign: "middle",
    backgroundColor: '#F5F5DC', // Neutral Color (Soft Beige)

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50', // Secondary Color (Fresh Green)

  },
  qr : {
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 15,
    // backgroundColor: '#F5F5DC', // Neutral Color (Soft Beige)
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 5,
    borderRadius: 15,
    resizeMode: 'cover',
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

