//Fetch category fields and only returning category id(filtering json)

export async function fetchCategoryFields(targetCategoryID: number): Promise<any[]> {
	try {
		const response = await fetch('https://www.olx.com.lb/api/categoryFields?includeChildCategories=true&splitByCategoryIDs=true&flatChoices=true&groupChoicesBySection=true&flat=true');
		const data = await response.json();
		if (data && data[targetCategoryID]?.flatFields) {
			return data[targetCategoryID].flatFields;
		}
		return [];
	} catch (error) {
		console.error("Fetch error:", error);
		return [];
	}
}
