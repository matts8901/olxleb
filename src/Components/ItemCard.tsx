import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ItemCard = ({ imageUri, price, description, location, postedTime, beds, baths, size } : any) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageWrapper}>
        <Image 
          source={{ uri: imageUri }} 
          style={styles.propertyImage} 
          resizeMode="cover" 
        />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.priceText}>USD {price.toLocaleString()}</Text>
        </View>

        <Text style={styles.descriptionText} numberOfLines={1}>
          {description}
        </Text>

        <View style={styles.statsRow}>
          <Text style={styles.statsText}>{beds} Beds</Text>
          <Text style={styles.statsSeparator}>•</Text>
          <Text style={styles.statsText}>{baths} Baths</Text>
          <Text style={styles.statsSeparator}>•</Text>
          <Text style={styles.statsText}>{size} m²</Text>
        </View>

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
    width: '48%', 
    margin: '1%', 
  },
  imageWrapper: {
    height: 120, 
    width: '100%',
    backgroundColor: '#f0f0f0',
  },
  propertyImage: {
    flex: 1,
  },
  contentContainer: {
    padding: 10, 
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  priceText: {
    fontSize: 16, 
    fontWeight: '700',
    color: '#eb5a3c',
  },
  descriptionText: {
    fontSize: 14, 
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
    fontSize: 12, 
    fontWeight: '600',
    color: '#444',
  },
  statsSeparator: {
    marginHorizontal: 4,
    color: '#ccc',
    fontSize: 12,
  },
  locationText: {
    fontSize: 12, 
    color: '#666',
    marginBottom: 4,
  },
  postedTimeText: {
    fontSize: 10, 
    color: '#999',
  },
});

export default ItemCard
;