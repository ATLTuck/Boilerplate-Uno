# Add Authentication

Enhance the boilerplate with user authentication using JWT and bcrypt.

**Prompt:**  
"Add user registration and login endpoints at /api/auth/register and /api/auth/login. Use JWT for tokens, bcrypt for password hashing, and store users in a database. Update /models/userModel.js with a schema and create /controllers/authController.js with auth logic."

**Guidance:**  
- Define the User model in `/models/userModel.js`
- Implement auth functions in `/controllers/authController.js`
- Add middleware in `/pages/api` routes for protected endpoints
- Create a login/registration UI in the frontend

**Implementation Steps:**
1. Install required dependencies: jsonwebtoken, bcrypt
2. Update the user model with proper schema and validation
3. Create authentication controller with register/login methods
4. Implement the API endpoints
5. Add a middleware for verifying JWT tokens
6. Create login/registration forms in the UI 