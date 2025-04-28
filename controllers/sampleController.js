/**
 * Sample controller to demonstrate backend logic organization
 * In a real project, this would interact with models and databases
 */

export const getSampleData = () => {
  // Expansion Point: Replace with database query
  return [
    { id: 1, name: "Sample Item 1", description: "This is a sample item" },
    { id: 2, name: "Sample Item 2", description: "Another sample item" }
  ];
};

export const getSampleById = (id) => {
  const items = getSampleData();
  return items.find(item => item.id === id) || null;
};

export const createSample = (data) => {
  // Expansion Point: Add validation and database persistence
  console.log("Creating sample with data:", data);
  return { id: Math.floor(Math.random() * 1000), ...data };
};

// Expansion Point: Add more controllers for different resources or functionality 