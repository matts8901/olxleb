import React from 'react'; // Ensure React is imported
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';

// Make sure this path is correct and HomeScreen is exported as 'default'
import HomeScreen from './src/Screens/HomeScreen'; 
import SearchFiltersScreen from './src/Screens/SearchFiltersScreen';
import SearchResultsScreen from './src/Screens/SearchResultsScreen';

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