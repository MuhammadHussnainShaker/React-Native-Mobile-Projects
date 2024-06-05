import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactsList() {
    const contacts = [
        {
            "id": 1,
            "image": "https://api.slingacademy.com/public/sample-photos/1.jpeg",
            "name": "Elma Herring",
            "email": "elmaherring@unq.com",
            "phone": "+1 (913) 497-2020"
          },
          {
            "id": 2,
            "image": "https://api.slingacademy.com/public/sample-photos/2.jpeg",
            "name": "Knapp Berry",
            "email": "knappberry@unq.com",
            "phone": "+1 (951) 472-2967"
          },
          {
            "id": 3,
            "image": "https://api.slingacademy.com/public/sample-photos/3.jpeg",
            "name": "Bell Burgess",
            "email": "bellburgess@unq.com",
            "phone": "+1 (887) 478-2693"
          }
    ]
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Contacts List</Text>
      <ScrollView style={styles.cardContainer}>
        {contacts.map(({id, image, name, email, phone}) => (
            <View key={id} style={styles.card}>
                <Image 
                source={
                    {uri:image}
                }
                style={styles.cardImage}
                />
                <View style={styles.cardContent}>
                <Text  style={styles.cardName}>{name}</Text>
                <Text  style={styles.cardPhone}>{phone}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {},
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
      },
    cardContainer: {
        flex: 1,
        backgroundColor: '#555',
        width: 345,
        marginTop: 8,
        marginLeft: 8,
        borderRadius: 4,
        padding: 12,
      },
    card: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        margin: 4,
        padding: 8,
        borderRadius: 8,
    },
    cardImage: {
        width: 50, 
        height: 50,
        borderRadius: 50 / 2 ,
        marginRight: 8,
    },
    cardContent: {
        justifyContent: 'center',
    },
    cardName: {
        fontSize: 16,
        fontWeight: '700',
        color: '#000'
    },
    cardPhone: {},
})