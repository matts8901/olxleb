export async function fetchCategories() {
  try {
    const response = await fetch('https://www.olx.com.lb/api/categories');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // console.log(data);
    
    return data;

  } catch (error) {
    console.error('Failed to fetch categories:', error);
    throw error;
  }
}