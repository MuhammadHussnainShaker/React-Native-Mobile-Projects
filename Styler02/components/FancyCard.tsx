import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={styles.container}>
      <View>
      <Image 
      source={require('./Hafiz-Rizvi.jpg')}
      style={[styles.imgDimensions]}
      />
      </View>
      <View>
        <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Imam Hafiz Khadim Hussain Rizvi</Text>
        <Text style={styles.cardDate}>1966-2020</Text>
        </View>
        <Text style={styles.cardDescription}>The founder of Tehreek-e-Labbaik, a political-religious organization founded in 2015, known to protest against any change to Pakistan's blasphemy law.</Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: 10,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        width: 345,
        backgroundColor: '#555',
        marginTop: 8,
        marginLeft: 8,
        borderRadius: 4,
    },
    imgDimensions: {
        width: 345,
        height: 200,
        borderRadius: 4,
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
    },
    cardTitle: {
        color: '#FFFFFF',
        flex: 0.7,
        marginLeft: 10,
        fontWeight: 'bold',
        flexBasis: 50,
    },
    cardDate: {
        color: '#FFFFFF',
        flex: 0.3,
        marginRight: 10,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    cardDescription: {
        color: '#FFFFFF',
        marginLeft: 10,
        marginRight: 14,
        marginBottom: 14,
        marginTop: 8,
    },
})