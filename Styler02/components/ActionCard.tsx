import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

export default function ActionCard() {
  function openWebsite (linkUrl: string) {
    Linking.openURL(linkUrl)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Blog Card</Text>
    <View style={styles.cardContainer}>
      <View style={styles.labelContainer}>
      <Text style={styles.cardLabel}>Who is Hafiz Khadim Rizvi</Text>
      </View>
      <Image 
      source={require('./Hafiz-Rizvi.jpg')}
      style={[styles.cardImage]}
      />
      <Text
      numberOfLines={3}
      style={styles.cardDescription}
      >
        The founder of Tehreek-e-Labbaik, a political-religious organization founded in 2015, known to protest against any change to Pakistan's blasphemy law.
        </Text>
      <TouchableOpacity style={styles.cardLinks}>
        <Text
        style={styles.cardLink1}
        onPress={() => openWebsite('https://www.youtube.com/')}
        >
          Read More
        </Text>
        <Text
        style={styles.cardLink2}
        onPress={() => openWebsite('https://www.youtube.com/')}
        >
          Give a ♥
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  cardContainer: {
    flex: 1,
    backgroundColor: '#555',
    width: 345,
    marginTop: 8,
    marginLeft: 8,
    borderRadius: 4,
    paddingBottom: 12,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardLabel: {
    color: '#FFF',
    paddingTop: 6,
    paddingBottom: 6,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardImage: {
    width: 345,
    height: 200,
    borderRadius: 4,
  },
  cardDescription: {
    color: '#FFF',
    margin: 8,
  },
  cardLinks: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  cardLink1: {
    color: '#000',
    backgroundColor: '#FFF',
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderRadius: 4,
    fontWeight: 'bold',
  },
  cardLink2: {
    color: '#000',
    backgroundColor: '#FFF',
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderRadius: 4,
    fontWeight: 'bold',
  }
})