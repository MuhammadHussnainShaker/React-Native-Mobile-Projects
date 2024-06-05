import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
            <View style={[styles.card, styles.cardOne]}>
                <Text style={{color: '#FFFFFF'}}>Hello</Text>
            </View>
            <View style={[styles.card, styles.cardTwo]}>
                <Text style={{color: '#FFFFFF'}}>There</Text>
            </View>
            <View style={[styles.card, styles.cardThree]}>
                <Text style={{color: '#FFFFFF'}}>😀</Text>
            </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    card: {
        flex: 1,
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
        borderRadius: 4,
    },
    cardOne: {
        backgroundColor: '#FF347F'
    },
    cardTwo: {
        backgroundColor: '#C9356C'
    },
    cardThree: {
        backgroundColor: '#F48DB4'
    },
})