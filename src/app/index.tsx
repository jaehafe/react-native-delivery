import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomHeader from '@/components/CustomHeader';
import Categories from '@/components/Categories';
import Restaurants from '@/components/Restaurants';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>
        <Categories />

        <Text style={styles.header}>Top picks in your neighbourhood</Text>

        <Restaurants />

        <Text style={styles.header}>Offers near you</Text>

        <Restaurants />

        <View style={{ height: 50 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 50,
    backgroundColor: Colors.lightGrey,
  },
  header: {
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});
