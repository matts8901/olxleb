import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ItemCard = ({ imageUri, price, description, location, postedTime, beds, baths, size } : any) => {
  return (
    <View style={styles.cardContainer}>
      {/* Property Image */}
      <View style={styles.imageWrapper}>
        <Image 
          source={{ uri: imageUri }} 
          style={styles.propertyImage} 
          resizeMode="cover" 
        />
      </View>

      <View style={styles.contentContainer}>
        {/* Price and Favorite Button */}
        <View style={styles.headerRow}>
          <Text style={styles.priceText}>USD {price.toLocaleString()}</Text>
        </View>

        {/* Description */}
        <Text style={styles.descriptionText} numberOfLines={1}>
          {description}
        </Text>

        {/* Stats Row (No Icons) */}
        <View style={styles.statsRow}>
          <Text style={styles.statsText}>{beds} Beds</Text>
          <Text style={styles.statsSeparator}>•</Text>
          <Text style={styles.statsText}>{baths} Baths</Text>
          <Text style={styles.statsSeparator}>•</Text>
          <Text style={styles.statsText}>{size} m²</Text>
        </View>

        {/* Location and Time */}
        <Text style={styles.locationText}>{location}</Text>
        <Text style={styles.postedTimeText}>{postedTime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
    width: '48%', // Adjusted for grid layout
    margin: '1%', // Add margin for spacing between cards
  },
  imageWrapper: {
    height: 120, // Adjusted height for smaller cards
    width: '100%',
    backgroundColor: '#f0f0f0',
  },
  propertyImage: {
    flex: 1,
  },
  contentContainer: {
    padding: 10, // Reduced padding for smaller cards
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  priceText: {
    fontSize: 16, // Reduced font size
    fontWeight: '700',
    color: '#eb5a3c',
  },
  descriptionText: {
    fontSize: 14, // Reduced font size
    color: '#333',
    fontWeight: '400',
    marginBottom: 6,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  statsText: {
    fontSize: 12, // Reduced font size
    fontWeight: '600',
    color: '#444',
  },
  statsSeparator: {
    marginHorizontal: 4,
    color: '#ccc',
    fontSize: 12,
  },
  locationText: {
    fontSize: 12, // Reduced font size
    color: '#666',
    marginBottom: 4,
  },
  postedTimeText: {
    fontSize: 10, // Reduced font size
    color: '#999',
  },
});

export default ItemCard
;