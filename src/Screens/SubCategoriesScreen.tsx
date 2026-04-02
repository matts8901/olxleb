/**
 * SubCategoriesScreen
 *
 * After choosing a category, users select a subcategory to further refine their search.
 * This step ensures results are more relevant to what the user is looking for.
 *
 * Flow: HomeScreen → SubCategoriesScreen → SearchFiltersScreen → SearchResultsScreen
 */
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { fetchSubCategories } from '../api/fetchSubCategories';

interface Category {
  id: number;
  name: string;
  children: Category[]; 
}

type RootStackParamList = {
  SubCategories: { categoryid: number },
};

interface Props {
  route: RouteProp<RootStackParamList, 'SubCategories'>;
}

export default function SubCategoriesScreen({ route }: Props) {

  const navigation = useNavigation<any>();
  
  const { categoryid } = route.params;


  const [subcategory, setSubcategory] = useState<Category[]>([]);
  const [parentName, setParentName] = useState("");

  useEffect(() => {
    (async () => {
      const result = await fetchSubCategories(categoryid);
      if (result) {
        setParentName(result.name);
        setSubcategory(result.children);
      }
    })();
  }, [categoryid]);


  return (
    <View style={{ padding: 20, flex: 1, backgroundColor: 'white' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>
        {parentName || "Loading..."}
      </Text>

      <FlatList
        data={subcategory}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
          onPress={()=>{
                navigation.navigate('SearchFilters',{
                  targetCategoryID: item.id,
                })
              }}
          >
            <View style={{ paddingVertical: 17, borderBottomWidth: 1, borderColor: '#eee' }}>
            <Text style={{ fontSize: 16 }}>{item.name}</Text>
            

          </View>
          </TouchableOpacity>
        
        )}
      />
    </View>
  );
}