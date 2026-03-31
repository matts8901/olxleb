import React from 'react';
import { View, Text } from 'react-native'; 
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';

export default function SearchFiltersScreen({route}: any) {
  const navigation = useNavigation();

  const { itemId, otherParam } = route.params;


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Text style={{ color: 'black' }}>SearchFilters</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
       <Button onPress={() => navigation.goBack()}>Go back</Button>
    </View>
  );
}