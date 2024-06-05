import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactsList from './components/ContactsList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcards />
        <ElevatedCards />
        <FancyCard />
        <ContactsList />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App