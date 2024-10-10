import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Pressable } from 'react-native';

interface Props {
    title: string,
    images:
    {
        id: string,
        title: string,
        url: string
    }[]
}

const HorizontalScroll: React.FC<Props> = ({ title, images }) => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
                {images.map((item, index) => (
                    <Link asChild key={index} href={`/pages/event-details?title=${title}&id=${item.id}`}>
                        <Pressable>
                            <View style={styles.horizontalItem}>
                                <Image source={{ uri: item.url }} style={styles.image} />
                                <Text style={styles.imageTitle}>{item.title}</Text>
                            </View>
                        </Pressable>
                    </Link>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        paddingHorizontal: 5
    },
    scrollContainer: {
        paddingVertical: 10,
    },
    contentContainer: {
        paddingLeft: 10,
    },
    horizontalItem: {
        width: 100,
        marginRight: 15,
        marginBottom: 10,
        alignItems: 'center',
        borderRadius: 15,
    },
    image: {
        width: 100,
        height: 200,
        marginBottom: 5,
        borderRadius: 15,
        resizeMode: 'cover'
    },
    imageTitle: {
        fontSize: 16,
    },
});

export default HorizontalScroll;