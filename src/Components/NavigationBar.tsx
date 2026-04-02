import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavItem } from './NavItem';

export default function NavigationBar() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.navContainer}>
      <NavItem 
        label="HOME" 
        isActive={true} 
        onPress={() => navigation.navigate('Home')}
        imagepath={require("../../assets/HomeIcon.png")}  
      />
      
      <NavItem 
        label="CHATS" 
        onPress={() => console.log('Navigate to Chats')}
        imagepath={require("../../assets/Chaticon.png")}   
      />

      <View style={styles.navItem}>
        <View style={styles.sellSpacer} />
        <Text style={styles.navText}>SELL</Text>
      </View>

      <NavItem 
        label="MY ADS" 
        onPress={() => console.log('Navigate to Ads')} 
        imagepath={require("../../assets/Myads.png")}  
      />
      
      <NavItem 
        label="ACCOUNT" 
        onPress={() => console.log('Navigate to Account')}
        imagepath={require("../../assets/accounticon.png")}   
      />

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
    alignItems: 'flex-end',
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
    height: 24, 
    marginBottom: 4,
  },
  floatingButton: {
    position: 'absolute',
    top: -20, 
    left: '50%',
    marginLeft: -30, 
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFCE00', 
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 8,
  },
  plusIcon: {
    fontSize: 35,
    color: '#333',
    fontWeight: '300',
    marginTop: -4, 
  },
});