/**
 * Simple API endpoint to demonstrate backend functionality
 */
export default function handler(req, res) {
  res.status(200).json({ message: "Hello from the API!" });
}

// Expansion Point: Enhance this API with database connectivity or authentication 