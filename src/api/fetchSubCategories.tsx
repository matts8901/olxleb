/**
 * Fetches all categories from the OLX API and returns the category object matching the given id,
 * including its children (subcategories). Returns null if not found or on error.
 * @param categoryid The id of the parent category to find.
 */
export async function fetchSubCategories(categoryid: number): Promise<{ name: string; children: any[] } | null> {
	try {
		const response = await fetch('https://www.olx.com.lb/api/categories');
		const data = await response.json();
		const targetCategory = data.find((cat: any) => cat.id === categoryid);
		if (targetCategory) {
			return { name: targetCategory.name, children: targetCategory.children };
		}
		return null;
	} catch (e) {
		console.log('Fetch Error: ', e);
		return null;
	}
}
