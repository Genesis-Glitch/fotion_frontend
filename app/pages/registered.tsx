import { StyleSheet, ScrollView, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


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
  }
});

export default EventDetails;

