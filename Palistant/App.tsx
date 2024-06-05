import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <ScrollView horizontal style={styles.mainContainer}>
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.secondaryContainer}>
            <View style={styles.header}>
                <Text style={styles.headingText}>Palistant</Text>
                <Image 
                source={require('./searchicon.png')}
                style={[styles.imgDimensions]}
                />
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.bodyText}>Add Task Below</Text>
                <Image 
                source={require('./downarrow.png')}
                style={[styles.arrowDimensions]}
                />
            </View>
            <View style={styles.footer}>
                <TextInput
                style={styles.inputStyle}
                placeholder="Enter Task Here"
                />
            </View>
            </View>
        </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000',
    },
    secondaryContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 620,
        backgroundColor: '#475569',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 50,
        backgroundColor: '#64748b',
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingLeft: 8,
        paddingTop: 8,
    },
    bodyContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgDimensions: {
        width: 40,
        height: 40,
        marginTop: 4,
        marginRight: 4,
    },
    arrowDimensions: {
        width: 40,
        height: 40,
    },
    bodyText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
    },
    footer: {
        flex: 0,
        width: '100%',
        height: 50,
        backgroundColor: '#64748b',
    },
    inputStyle: {
        padding: 3,
        width: '90%',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#16213e',
        marginTop: 5,
        alignSelf: 'center',
    },
})