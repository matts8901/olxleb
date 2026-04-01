import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ColorValue } from 'react-native';

interface NavItemProps {
  label: string;
  onPress?: () => void;
  isActive?: boolean;
  iconColor?: ColorValue;
}

export const NavItem: React.FC<NavItemProps> = ({ label, onPress, isActive, iconColor }) => {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <View 
        style={[
          styles.iconPlaceholder, 
          { backgroundColor: isActive ? '#333' : (iconColor || '#999') }
        ]} 
      />
      <Text style={[styles.navText, isActive && { color: '#000' }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconPlaceholder: {
    width: 24,
    height: 24,
    borderRadius: 5,
    marginBottom: 4,
  },
  navText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#444',
  },
});