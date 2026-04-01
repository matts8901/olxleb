import React from 'react'; 
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import HomeScreen from './src/Screens/HomeScreen'; 
import SearchFiltersScreen from './src/Screens/SearchFiltersScreen';
import SearchResultsScreen from './src/Screens/SearchResultsScreen';
import SubCategoriesScreen from './src/Screens/SubCategoriesScreen';

const RootStack = createNativeStackNavigator({
  screens: {
    Home:{
      screen:HomeScreen,
      options: {
        title: 'Home'
      }
    } ,
    SearchFilters:SearchFiltersScreen,
    SearchResults:SearchResultsScreen,
    SubCategories:SubCategoriesScreen
  },
});

const Navigation = createStaticNavigation(RootStack);

function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;