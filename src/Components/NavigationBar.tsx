import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NavigationBar() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.navContainer}>
      {/* Home */}
      <TouchableOpacity style={styles.navItem} onPress={() => { navigation.navigate('Home') }}>
        <View style={[styles.iconPlaceholder, { backgroundColor: '#333' }]} />
        <Text style={styles.navText} >HOME</Text>
      </TouchableOpacity>

      {/* Chats */}
      <TouchableOpacity style={styles.navItem}>
        <View style={styles.iconPlaceholder} />
        <Text style={styles.navText}>CHATS</Text>
      </TouchableOpacity>

      {/* Sell (Spacer for the floating button) */}
      <View style={styles.navItem}>
        <View style={styles.sellSpacer} />
        <Text style={styles.navText}>SELL</Text>
      </View>

      {/* My Ads */}
      <TouchableOpacity style={styles.navItem}>
        <View style={styles.iconPlaceholder} />
        <Text style={styles.navText}>MY ADS</Text>
      </TouchableOpacity>

      {/* Account */}
      <TouchableOpacity style={styles.navItem}>
        <View style={styles.iconPlaceholder} />
        <Text style={styles.navText}>ACCOUNT</Text>
      </TouchableOpacity>

      {/* The Actual Floating Yellow Button */}
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.plusIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
});