import { StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router'; // Import Link from expo-router

export default function HomeScreen() {

  const category = [
    { name: "user_id", visible: false },
    { name: "Name", visible: true },
    { name: "Email", visible: true },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <ThemedView style={styles.titleRow}>
          <ThemedText style={styles.title}>FOTION</ThemedText>
        </ThemedView>

        {category.map((item) => (
          item.visible ? (
            <ThemedView style={styles.scrollContainer} key={item.name}>
              <TextInput style={styles.searchInput} placeholder={item.name} />
            </ThemedView>
          ) : null
        ))}

        <TouchableOpacity style={styles.button}>
          <Link href="../pages/registered" style={styles.buttonLink}>
            <ThemedText style={styles.buttonText}>Register</ThemedText>
          </Link>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5DC', // Neutral Color (Soft Beige)
  },
  scrollContainer: {
    marginBottom: 20,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
    backgroundColor: '#F5F5DC', // Neutral Color (Soft Beige)
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50', // Secondary Color (Fresh Green)
  },
  searchInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#FF7043', // Primary Color (Warm Orange)
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLink: {
    width: '100%', // Ensures full width for the link
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
