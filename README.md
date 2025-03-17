```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

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

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

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
