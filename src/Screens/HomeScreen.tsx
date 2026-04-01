import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import SearchBar from '../Components/SearchBar';
import NavigationBar from '../Components/NavigationBar';
import CategoryCircle from '../Components/CategoryWidget';
import { fetchCategoriesTitles } from '../services/fetchCategoriesTitles';
import { fetchCategories } from '../services/fetchCategories';

interface Category {
  id: number;
  name: string;
}

export default function HomeScreen() {

  const navigation = useNavigation<any>();
  

  const [categorytitles, setCategory] = useState<Category[]>([]);


  useEffect(() => {
    // Fetching category titles (Vehicles, Properties...)
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
        {categorytitles.map((categname, index) => (
          <View key={index} style={{ alignItems: 'center' }}>
            <CategoryCircle
              title={categname.name}
              image={{ uri: 'https://www.olx.com.lb/path/to/image.png' }}
              onPress={()=>{
                navigation.navigate('SubCategories',{
                  categoryid: categname.id,
                })
              }}
            />
          </View>
        ))}
      </ScrollView>

      <View style={styles.mainContent}>
        <Text style={{ color: '#ccc' }}>
          {/* Body */}
        </Text>
      </View>

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