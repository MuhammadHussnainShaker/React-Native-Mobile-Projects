import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal style={styles.container}>
            <View style={[styles.card, styles.cardOne]}>
                <Text style={{color: '#FFFFFF'}}>Hi</Text>
            </View>
            <View style={[styles.card, styles.cardTwo]}>
                <Text style={{color: '#FFFFFF'}}>Sir</Text>
            </View>
            <View style={[styles.card, styles.cardThree]}>
                <Text style={{color: '#FFFFFF'}}>Drag</Text>
            </View>
            <View style={[styles.card, styles.cardOne]}>
                <Text style={{color: '#FFFFFF'}}>Me</Text>
            </View>
            <View style={[styles.card, styles.cardTwo]}>
                <Text style={{color: '#FFFFFF'}}>To</Text>
            </View>
            <View style={[styles.card, styles.cardThree]}>
                <Text style={{color: '#FFFFFF'}}>Scroll</Text>
            </View>
      </ScrollView>
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
        backgroundColor: '#F48DB4'
    },
    cardTwo: {
        backgroundColor: '#C9356C'
    },
    cardThree: {
        backgroundColor: '#FF347F'
    },
})