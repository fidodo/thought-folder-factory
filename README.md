```sh
# Step 1: Clone the repository using the project's Git URL.
git clone thought-folder-factory-main(1)

# Step 2: Navigate to the project directory.
cd thought-folder.factory-main

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Setting up the Backend

This project includes a backend Express server that connects to PostgreSQL and Firebase. To set it up:

```sh
# Step 1: Navigate to the server directory
cd server

# Step 2: Install server dependencies
npm install

# Step 3: Set up the PostgreSQL database
# Run the SQL commands in db-setup.sql to create the necessary tables

# Step 4: Configure environment variables
# Create a .env file in the server directory with your PostgreSQL and Firebase configuration

# Step 5: Start the server
npm run dev
```



This project is built with:

- Frontend:

  - Vite
  - TypeScript
  - React
  - shadcn-ui
  - Tailwind CSS
  - Firebase Authentication

- Backend:
  - Express
  - PostgreSQL
  - Firebase Admin SDK

<!--
For deploying the backend:
1. Set up a server (e.g., Heroku, Render, Railway)
2. Configure environment variables on your hosting platform
3. Deploy the server code
4. Update the frontend API_URL to point to your deployed backend -->
