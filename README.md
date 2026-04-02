## 📌 Phase 1 - Setup & Basic Features
### 1. Project Initialization
* Installed **Vite**
* Installed **Axios** (`axios@1.13.6`)

### 2. Environment Configuration
* Created a `.env` file to store the API key
* Added `.env` to `.gitignore`
* Created an `env.example` file to document required environment variables

### 3. API Setup
* Created an `api/` folder
* Added `rawg.js` file:
  * Configured Axios
  * Set up API request logic

### 4. Components Structure
* Created a `components/` folder
* Built the first component: `Header.jsx`

### 5. UI & State Management
* Installed **Bootstrap**
* Added two `useState` hooks:
  * `input` → stores user input
  * `games` → stores fetched games list
* Implemented a function to:
  * prevent default form submission
  * fetch data from the API
  * update the games state
* Created a navbar inside `Header.jsx`

### 6. App Logic Refactor
* Moved all main logic into `App.jsx` to resolve bugs
* Rendered a sample list of games based on user input