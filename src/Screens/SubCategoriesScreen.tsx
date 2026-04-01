import { FlatList, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { RouteProp } from "@react-navigation/native";

interface Category {
  id: number;
  name: string;
  children: Category[]; 
}

type RootStackParamList = {
  SubCategories: { categoryid: number };
};

interface Props {
  route: RouteProp<RootStackParamList, 'SubCategories'>;
}

export default function SubCategoriesScreen({ route }: Props) {
  const { categoryid } = route.params;

  const [subcategory, setSubcategory] = useState<Category[]>([]);
  const [parentName, setParentName] = useState("");

  useEffect(() => {
    fetchCategoryData();
  }, [categoryid]);

  async function fetchCategoryData() {
    try {
      const response = await fetch('https://www.olx.com.lb/api/categories');
      const data: Category[] = await response.json();

      const targetCategory = data.find((cat) => cat.id === categoryid);

      if (targetCategory) {
        setParentName(targetCategory.name);
        setSubcategory(targetCategory.children);
      }
    } catch (e) {
      console.log("Fetch Error: ", e);
    }
  }

  return (
    <View style={{ padding: 20, flex: 1, backgroundColor: 'white' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>
        {parentName || "Loading..."}
      </Text>

      <FlatList
        data={subcategory}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ paddingVertical: 17, borderBottomWidth: 1, borderColor: '#eee' }}>
            <Text style={{ fontSize: 16 }}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}