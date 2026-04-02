import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ColorValue, Image, ImageSourcePropType } from 'react-native';

interface NavItemProps {
  label: string;
  onPress?: () => void;
  isActive?: boolean;
  imagepath: ImageSourcePropType;
}

export const NavItem: React.FC<NavItemProps> = ({ label, onPress, isActive, imagepath }) => {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <Image
      source={imagepath}               
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