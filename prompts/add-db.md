# Add Database Integration

Connect the boilerplate to a database for persistent data storage.

**Prompt:**  
"Integrate MongoDB using Mongoose. Connect via DATABASE_URL from .env, define a sample model in /models, and update /controllers to query the database."

**Guidance:**  
- Initialize the connection in a utility file (e.g., `/utils/db.js`)
- Replace mock data in controllers with database queries
- Update existing model files to use proper database schemas

**Implementation Steps:**
1. Install required dependencies: mongoose
2. Create a database connection utility in `/utils/db.js`
3. Update the existing models to use Mongoose schemas
4. Modify controllers to use Mongoose methods for CRUD operations
5. Update API routes to handle async database operations properly
6. Set up proper error handling for database operations 