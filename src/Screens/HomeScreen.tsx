/**
 * HomeScreen
 *
 * The entry point of the app. Users can either search using the search bar or browse by category.
 * Selecting a category leads to subcategories, helping users narrow down their search.
 *
 * Flow: HomeScreen → SubCategoriesScreen → SearchFiltersScreen → SearchResultsScreen
 */
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import SearchBar from '../Components/SearchBar';
import NavigationBar from '../Components/NavigationBar';
import CategoryCircle from '../Components/CategoryWidget';
import { fetchCategoriesTitles } from '../api/fetchCategoriesTitles';
import { fetchCategories } from '../api/fetchCategories';
import ItemCard from '../Components/ItemCard';
import { getCategoryImage } from '../utils/categoryAssets';

interface Category {
  id: number;
  name: string;
}

export default function HomeScreen() {
  
// Hardcoded data to use for item display

  const propertyDataList = [
    {
      imageUri: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000',
      price: 235000,
      description: 'Duplex 6P 114m² Terrasse – Lyon',
      location: 'Lyon, France',
      postedTime: '5 days ago',
      beds: 4,
      baths: 3,
      size: 114,
    },
    {
      imageUri: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1000',
      price: 150000,
      description: 'Modern Apartment in City Center',
      location: 'Paris, France',
      postedTime: '2 days ago',
      beds: 2,
      baths: 1,
      size: 75,
    },
  ];

  //navigation
  const navigation = useNavigation<any>();

  //category titles state variable
  const [categorytitles, setCategory] = useState<Category[]>([]);

      // Fetching category titles (Vehicles, Properties...) each time the screen is loaded

  useEffect(() => {

    fetchCategoriesTitles()
      .then((categories) => {
        setCategory(categories);
      })
      .catch((e) => {
        console.log(e);
      });

    fetchCategories()
  }, [])

  return (
    <View style={styles.container}>
      <SearchBar
        onSearch={(text) => console.log("Searching for:", text)}

      />

      <Text style={styles.SubTitle}>
        All Categories
      </Text>

      {/* displaying category titles here */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {categorytitles.map((categ, index) => (
          <View key={index} style={{ alignItems: 'center' }}>
            <CategoryCircle
              title={categ.name}
              image={getCategoryImage(categ.id)}
              onPress={() => {
                navigation.navigate('SubCategories', {
                  categoryid: categ.id,
                })
              }}
            />
          </View>
        ))}
      </ScrollView>

      <FlatList
        data={propertyDataList}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => (
          <ItemCard
            imageUri={item.imageUri}
            price={item.price}
            description={item.description}
            location={item.location}
            postedTime={item.postedTime}
            beds={item.beds}
            baths={item.baths}
            size={item.size}
          />
        )}
      />

      {/* Bottom Navigation Bar */}
      <NavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navContainer: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    alignItems: 'flex-end', // Aligns the text labels to the bottom
    paddingBottom: 15,
    position: 'relative',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconPlaceholder: {
    width: 24,
    height: 24,
    backgroundColor: '#999',
    borderRadius: 5,
    marginBottom: 4,
  },
  navText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#444',
  },
  sellSpacer: {
    height: 24, // Matches the height of other icons to keep text aligned
    marginBottom: 4,
  },
  floatingButton: {
    position: 'absolute',
    top: -20, // This pulls the button upward out of the bar
    left: '50%',
    marginLeft: -30, // Half of the width (60/2) to center it perfectly
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFCE00', // The OLX Yellow
    justifyContent: 'center',
    alignItems: 'center',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 8,
  },
  plusIcon: {
    fontSize: 35,
    color: '#333',
    fontWeight: '300',
    marginTop: -4, // Optical centering
  },
  SubTitle: {
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: '600',
  }
});