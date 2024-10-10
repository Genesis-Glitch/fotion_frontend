import { StyleSheet, ScrollView, FlatList, View, Text } from 'react-native';

import HorizontalScroll from '@/components/HorizontalScroll';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '@/components/SearchBar';

export default function HistoryScreen() {

  const donationList =  [
    { id: 1, name: "hotpot", amount: "5", unit: "kg" , expiry_date: "2024-10-25", specification : "none", event_date : "2024-10-11"},
    { id: 2, name: "vegitable curry", amount: "3", unit: "kg" , expiry_date: "2024-10-29", specification : "vegan", event_date : "2024-10-12"},
    { id: 3, name: "bibim-bab", amount: "2", unit: "kg" , expiry_date: "2024-10-16", specification : "vegetarian", event_date : "2024-10-10"},
    { id: 4, name: "Burmese curry", amount: "6", unit: "kg" , expiry_date: "2024-10-30", specification : "none", event_date : "2024-10-13"},
    { id: 5, name: "Nasi Rawon", amount: "7", unit: "kg" , expiry_date: "2024-10-30", specification : "none", event_date : "2024-10-09"},
    { id: 6, name: "kebab", amount: "2", unit: "kg" , expiry_date: "2024-10-21", specification : "halal", event_date : "2024-10-10"},
  ]


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <ThemedView style={styles.titleRow}>
          <ThemedText style={styles.title}>History</ThemedText>
        </ThemedView>

        <SearchBar />

        <FlatList
          data={donationList}
          renderItem={({item}) => 
            <View style={styles.item}>
            <Text>Food Name : {item.name} {item.specification !== "none"? "("+item.specification+")" : ""}</Text>
            <Text>Event Date : {item.event_date}</Text>
          </View>
          }
        />
      </ScrollView>
    </SafeAreaView>
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
  item: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    borderCurve: "continuous",
    borderColor: '#333333',
    fontSize: 14,
    fontWeight: 100,
    borderWidth: 1,
  },
});

