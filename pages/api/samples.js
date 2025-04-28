import { getSampleData, createSample } from '../../controllers/sampleController';

/**
 * API route for sample items
 * Demonstrates using controllers to handle business logic
 */
export default function handler(req, res) {
  // Handle different HTTP methods
  switch (req.method) {
    case 'GET':
      // Return all samples
      return res.status(200).json(getSampleData());
    
    case 'POST':
      // Create a new sample
      try {
        const newSample = createSample(req.body);
        return res.status(201).json(newSample);
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
    
    default:
      // Method not allowed
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}

// Expansion Point: Add validation, authentication, or more complex logic 