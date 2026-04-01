import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface CategoryProps {
  image: any; 
  title: string;
  onPress?: () => void;
}

const CategoryCircle = ({ image, title, onPress }: CategoryProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.circle}>
        <Image source={image} style={styles.image} resizeMode="contain" />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
    width: 80,
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FFCE00', // OLX Yellow
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '80%',
    height: '80%',
  },
  title: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    textAlign: 'center',
    width:100,
  },
});

export default CategoryCircle;