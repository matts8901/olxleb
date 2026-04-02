import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const ItemCardResults = ({ data, onSave, onCall, onWhatsApp }: any) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.eliteHeader}>
  
        <Text style={styles.eliteText}>Elite</Text>
      </View>

      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: data.imageUrl }}
          style={styles.propertyImage}
          resizeMode="cover"
        />
        
        <View style={styles.verifiedBadge}>
    
          <Text style={styles.verifiedText}>Verified</Text>
        </View>

        <TouchableOpacity style={styles.heartButton}>
    
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.priceRow}>
          <Text style={styles.priceText}>USD {data.price.toLocaleString()}</Text>
          <TouchableOpacity style={styles.saveButton} onPress={onSave}>
      
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.titleText} numberOfLines={1}>
          {data.title}
        </Text>

        <View style={styles.statsRow}>
          <Text style={styles.statsText}>{data.year}</Text>
          <Text style={styles.statsSeparator}>|</Text>
          <Text style={styles.statsText}>{data.mileage} KM</Text>
          <Text style={styles.statsSeparator}>|</Text>
          <Text style={styles.statsText}>{data.fuelType}</Text>
        </View>

        <View style={styles.locationRow}>
          <View style={styles.locationTextStack}>
            <Text style={styles.locationText}>{data.location}</Text>
            <Text style={styles.timeText}>{data.postedTime}</Text>
          </View>
          <Image source={{ uri: data.dealerLogoUrl }} style={styles.dealerLogo} />
        </View>

        <View style={styles.actionButtonsRow}>
          <TouchableOpacity style={styles.whatsappButton} onPress={onWhatsApp}>
      
          </TouchableOpacity>
          <TouchableOpacity style={styles.callButton} onPress={onCall}>
      
            <Text style={styles.callButtonText}>Call</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
    overflow: 'hidden',
    marginHorizontal: 15,
    marginVertical: 10,
    elevation: 2, // Slight shadow for Android
    shadowColor: '#000', // Slight shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  eliteHeader: {
    backgroundColor: '#FFD700', // Golden background
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    gap: 10,
  },
  eliteText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  imageWrapper: {
    height: 220,
    width: '100%',
    position: 'relative',
  },
  propertyImage: {
    flex: 1,
  },
  verifiedBadge: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: '#4FC3F7', // Cyan color
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    gap: 4,
  },
  verifiedText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  heartButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    padding: 6,
  },
  contentContainer: {
    padding: 15,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  priceText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#eb5a3c', // Distinct orange-red
  },
  saveButton: {
    backgroundColor: '#FFEB3B', // Bright yellow
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    gap: 6,
  },
  saveButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  titleText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '400',
    marginBottom: 10,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 10,
  },
  statsText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  statsSeparator: {
    color: '#ccc',
    fontSize: 16,
  },
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  locationTextStack: {
    gap: 2,
  },
  locationText: {
    fontSize: 16,
    color: '#777',
  },
  timeText: {
    fontSize: 14,
    color: '#999',
  },
  dealerLogo: {
    width: 60,
    height: 35,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 4,
  },
  actionButtonsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  whatsappButton: {
    flex: 1,
    backgroundColor: '#e7f9e8', // Light green background from image
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 12,
  },
  callButton: {
    flex: 2,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    gap: 8,
    paddingVertical: 12,
  },
  callButtonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
});

export default ItemCardResults;