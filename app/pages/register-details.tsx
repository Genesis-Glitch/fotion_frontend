import { StyleSheet, ScrollView, TextInput, TouchableOpacity, Text } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router'; // Import Link from expo-router

export default function HomeScreen() {


  const category = [
    { name : "user_id" , visible: false},
    { name : "Name" , visible: true},
    { name : "Email" , visible: true},
  ]

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        
        <ThemedView style={styles.titleRow}>
          <ThemedText style={styles.title}>FOTION</ThemedText>
        </ThemedView>
        
        {category.map(item => (
            item.visible ? 
            <ThemedView style={styles.scrollContainer} key={item.name}>
              <TextInput style={styles.searchInput} placeholder={item.name} />
            </ThemedView> : ""
        ))}
        <TouchableOpacity style={styles.button}onPress={() => {}}>
          {/* <Text style={styles.buttonText}>Register</Text> */}
          <Link href="../pages/registered" style={styles.button}>
            <ThemedText style={styles.buttonText}>Register</ThemedText>
          </Link>
        </TouchableOpacity>
      </ScrollView>

    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white'
  },
  scrollContainer: {
    gap: 5,
    marginBottom: 20,
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
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 5,
  },
  verticalContent: {
    height: 200,
    backgroundColor: '#f0f0f0',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    flex: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
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

