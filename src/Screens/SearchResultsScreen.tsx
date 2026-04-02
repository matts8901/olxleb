/**
 * SearchResultsScreen
 *
 * Displays the final list of results based on the user's search or selected filters.
 * Users can browse, further refine, and select items for more details.
 *
 * Flow: HomeScreen → SubCategoriesScreen → SearchFiltersScreen → SearchResultsScreen
 */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native';
import ItemCardResults from '../Components/ItemCardResults';


const MOCK_CARS = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1620803362143-6b738466e3af?q=80&w=1000',
    price: 65000,
    title: 'Mercedes-Benz GLE-63 S AMG 1 Owner TgF g...',
    year: 2016,
    mileage: 40000,
    fuelType: 'Benzine',
    location: 'Sabtieh, Metn',
    postedTime: '24 hours ago',
    dealerLogoUrl: 'https://selective-automotive.com/logo.png', 
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000',
    price: 45000,
    title: 'Mercedes-Benz C43 AMG 4Matic',
    year: 2018,
    mileage: 55000,
    fuelType: 'Benzine',
    location: 'Achrafieh, Beirut',
    postedTime: '2 days ago',
    dealerLogoUrl: 'https://haddad-motors.com/logo.png', 
  }
];

const FilterPill = ({ label, isSelected, iconName, showClose }: any) => (
  <View style={[styles.filterPill, isSelected && styles.filterPillSelected]}>
    <Text style={[styles.filterPillText, isSelected && styles.filterPillTextSelected]}>{label}</Text>
  </View>
);

const ListHeader = () => (
  <View style={styles.headerContainer}>
    <View style={styles.searchRow}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="What are you looking for?"
          placeholderTextColor="#999"
        />
      </View>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtersScroll}>
      <FilterPill label="Filters" iconName="options" isSelected />
      <FilterPill label="Mercedes-Benz" showClose />
      <FilterPill label="All country" iconName="chevron-down" />
      <FilterPill label="Condition" iconName="chevron-down" />
    </ScrollView>

    <View style={styles.resultsCountStrip}>
      <Text style={styles.showingText}>
        Showing: <Text style={styles.countText}>995 Results for Cars for Sale</Text>
      </Text>
      <TouchableOpacity style={styles.sortButton}>
        <Text style={styles.sortText}>Sort By</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.segmentedControl}>
      <TouchableOpacity style={[styles.segment, styles.segmentSelected]}>
        <Text style={styles.segmentTextSelected}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.segment}>
        <Text style={styles.segmentText}>New</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.segment}>
        <Text style={styles.segmentText}>Used</Text>
      </TouchableOpacity>
    </View>



    <View style={styles.sectionTitleRow}>
      <Text style={styles.sectionTitle}>Elite Ads</Text>
      <TouchableOpacity style={styles.viewAllButton}>
        <Text style={styles.viewAllText}>View all</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const SearchResultsScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        data={MOCK_CARS}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={ListHeader}
        renderItem={({ item }) => (
          <ItemCardResults 
            data={item} 
            onSave={() => console.log('Saved')}
            onCall={() => console.log('Calling')}
            onWhatsApp={() => console.log('WhatsApp')}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff',
    paddingBottom: 5,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    gap: 15,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    gap: 10,
    height: 45,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  filtersScroll: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    gap: 10,
    marginBottom: 5,
  },
  filterPill: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  filterPillSelected: {
    backgroundColor: '#e3f2fd',
    borderColor: '#4FC3F7',
  },
  filterPillText: {
    fontSize: 14,
    color: '#555',
  },
  filterPillTextSelected: {
    color: '#333',
    fontWeight: '500',
  },
  resultsCountStrip: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  showingText: {
    fontSize: 14,
    color: '#777',
  },
  countText: {
    fontWeight: '700',
    color: '#333',
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  sortText: {
    fontSize: 14,
    color: '#4FC3F7',
    fontWeight: '600',
  },
  segmentedControl: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginHorizontal: 15,
    marginVertical: 15,
    overflow: 'hidden',
  },
  segment: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  segmentSelected: {
    backgroundColor: '#E0F7FA',
  },
  segmentText: {
    fontSize: 16,
    color: '#777',
  },
  segmentTextSelected: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  businessesScroll: {
    paddingHorizontal: 15,
    gap: 10,
    marginBottom: 10,
  },
  businessContainer: {
    width: 100,
    alignItems: 'center',
  },
  businessLogoPlaceholder: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    marginBottom: 4,
    backgroundColor: '#000', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  businessName: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  sectionTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 5,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewAllText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
});

export default SearchResultsScreen;