export interface Category {
  id: number;
  name: string;
}
//Returning only category id and name

export async function fetchCategoriesTitles(): Promise<Category[]> {
  try {
    const response = await fetch('https://www.olx.com.lb/api/categories');

    const data = await response.json();
    
    return data.map((category: any) => ({
      id: category.id,
      name: category.name,
    }));

  } catch (error) {
    console.error('Failed to fetch categories:', error);
    throw error;
  }
}