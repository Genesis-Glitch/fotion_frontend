import { StyleSheet, ScrollView } from 'react-native';

import HorizontalScroll from '@/components/HorizontalScroll';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '@/components/SearchBar';
import axios from 'axios';

interface EventInfo {
  id : string,
  title : string,
  url : string
}
interface Events {
  title : string
  images : EventInfo[]
}

const locationList = [
  'AUCKLAND', 'CANTERBURY', 'CHRIS'
]
export default function HomeScreen() {

  const API_URL = `http://52.11.213.134/events`;
  const API_HEADER = {
    'Access-Control-Allow-Origin': "*"
  };
  
  const [eventsData, setEventData] = React.useState<Events>();

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("fetching data");
    try {
      const response = await axios.get(API_URL , {
        headers: API_HEADER
      });
      setEventData(response.data);
      console.log(response.data);
    } catch (error) {
      
      console.error('Error fetching data:', error);
    }
  };

  const testData = [
    {
        title : "AUCKLAND",
        images : [
            {    
              "id": "1",
              "title": "AUCKLAND 1",
              "url": "https://picsum.photos/100/200"
            },
            {    
              "id": "2",
              "title": "AUCKLAND 2",
              "url": "https://picsum.photos/200/400"
            },
            {    
              "id": "3",
              "title": "AUCKLAND 3",
              "url": "https://picsum.photos/300/600"
            },
            {    
              "id": "31",
              "title": "AUCKLAND 4",
              "url": "https://picsum.photos/400/800"
            },
            {    
              "id": "32",
              "title": "AUCKLAND 5",
              "url": "https://picsum.photos/500/1000"
            },
        ]
    },
    {
        title : "WELLINGTON",
        images : [
          {    
            "id": "4",
            "title": "WELLINGTON 1",
            "url": "https://picsum.photos/140/200"
          },
          {    
            "id": "5",
            "title": "WELLINGTON 2",
            "url": "https://picsum.photos/150/200"
          },
          {    
            "id": "6",
            "title": "WELLINGTON 3",
            "url": "https://picsum.photos/160/200"
          },
          {    
            "id": "61",
            "title": "WELLINGTON 4",
            "url": "https://picsum.photos/320/200"
          },
          {    
            "id": "62",
            "title": "WELLINGTON 5",
            "url": "https://picsum.photos/500/1000"
          },
        ]
    },
    {
        title : "CHRISTCHURCH",
        images : [
          {    
            "id": "7",
            "title": "CHRISTCHURCH 1",
            "url": "https://picsum.photos/330/200"
          },
          {    
            "id": "8",
            "title": "CHRISTCHURCH 2",
            "url": "https://picsum.photos/350/200"
          },
          {    
            "id": "9",
            "title": "CHRISTCHURCH 3",
            "url": "https://picsum.photos/370/200"
          },
          {    
            "id": "10",
            "title": "CHRISTCHURCH 4",
            "url": "https://picsum.photos/370/200"
          },
        ]
    },
]

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <ThemedView style={styles.titleRow}>
          <ThemedText style={styles.title}>FOTION</ThemedText>
        </ThemedView>

        <SearchBar />

        {testData.map(item => (
          <ThemedView style={styles.scrollContainer} key={item.title}>
            <ThemedText style={styles.subtitle}>{item.title}</ThemedText>
            <HorizontalScroll title={item.title} images={item.images}
            />
          </ThemedView>
        ))}

      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5DC' // Neutral Color (Soft Beige)
  },
  scrollContainer: {
    gap: 5,
    marginBottom: 20,
    backgroundColor: '#F5F5DC' // Neutral Color (Soft Beige)
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
    backgroundColor: '#F5F5DC' // Neutral Color (Soft Beige)
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF7043' // Primary Color (Warm Orange)
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 5,
    color: '#4CAF50', // Secondary Color (Fresh Green)
    backgroundColor: '#F5F5DC' // Neutral Color (Soft Beige)
  },
  verticalContent: {
    height: 200,
    backgroundColor: '#FFEB3B', // Accent Color (Bright Yellow)
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
