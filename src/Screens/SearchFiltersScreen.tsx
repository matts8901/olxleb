import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';

interface Choice {
  id: number;
  label: string;
  value: string;
}

interface CategoryField {
  id: number;
  name: string;
  attribute: string;
  filterType: 'range' | 'multiple_choice' | 'single_choice' | string;
  choices?: Choice[];
}

export default function SearchFiltersScreen({ route }: any) {
  const [categoryfields, setCategoryFields] = useState<CategoryField[]>([]);
  const [loading, setLoading] = useState(true);
  const targetCategoryID = route.params?.targetCategoryID || "49";

  useEffect(() => {
    fetchcategoryfields();
  }, []);

  async function fetchcategoryfields() {
    try {
      const response = await fetch('https://www.olx.com.lb/api/categoryFields?includeChildCategories=true&splitByCategoryIDs=true&flatChoices=true&groupChoicesBySection=true&flat=true');
      const data = await response.json();
      if (data && data[targetCategoryID]?.flatFields) {
        setCategoryFields(data[targetCategoryID].flatFields);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  }


  const RenderRange = ({ field }: { field: CategoryField }) => (
    <View style={styles.filterSection}>
      <Text style={styles.filterLabel}>{field.name}</Text>
      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="Min" keyboardType="numeric" />
        <View style={styles.dash} />
        <TextInput style={styles.input} placeholder="Max" keyboardType="numeric" />
      </View>
    </View>
  );

  const RenderChoices = ({ field }: { field: CategoryField }) => (
    <View style={styles.filterSection}>
      <Text style={styles.filterLabel}>{field.name}</Text>
      <View style={styles.choiceContainer}>
        {field.choices?.slice(0, 6).map((choice) => (
          <TouchableOpacity key={choice.id} style={styles.chip}>
            <Text style={styles.chipText}>{choice.label}</Text>
          </TouchableOpacity>
        ))}
        {field.choices && field.choices.length > 6 && (
          <TouchableOpacity>
            <Text style={styles.seeMore}>+ {field.choices.length - 6} more</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  if (loading) return <ActivityIndicator style={styles.loader} size="large" color="#007bff" />;

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Filters</Text>
        
        
        {categoryfields.map((field) => {
          if (field.filterType === 'range') {
            return <RenderRange key={field.id} field={field} />;
          }
          if (field.filterType === 'multiple_choice' || field.filterType === 'single_choice') {
            return <RenderChoices key={field.id} field={field} />;
          }
          
          return (
            <View key={field.id} style={styles.filterSection}>
              <Text style={styles.filterLabel}>{field.name}</Text>
              <TextInput style={styles.input} placeholder={`Enter ${field.name}`} />
            </View>
          );
        })}
        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Show Results</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, paddingHorizontal: 20 },
  loader: { flex: 1, justifyContent: 'center' },
  header: { fontSize: 24, fontWeight: 'bold', marginVertical: 20, color: '#1a1a1a' },
  
  filterSection: { marginBottom: 25 },
  filterLabel: { fontSize: 16, fontWeight: '700', marginBottom: 12, color: '#333' },
  
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  input: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fdfdfd',
  },
  dash: { width: 10, height: 1, backgroundColor: '#ccc', marginHorizontal: 10 },

  choiceContainer: { flexDirection: 'row', flexWrap: 'wrap' },
  chip: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: '#f5f5f5',
  },
  chipText: { fontSize: 13, color: '#444' },
  seeMore: { color: '#007bff', fontSize: 13, marginTop: 5, fontWeight: '600' },

  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  applyButton: {
    backgroundColor: '#007bff',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});