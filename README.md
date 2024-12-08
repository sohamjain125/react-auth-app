# React Auth App

## How to Run the Project

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sohamjain125/react-auth-app.git
   cd react-auth-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Design Choices

- **Component-Based Architecture:** The application is built using React's component-based architecture to promote reusability and maintainability.
- **Authentication:** Firebase Authentication is used for user authentication, ensuring secure and reliable user management.
- **Styling:** CSS Modules are used for styling components to avoid global scope conflicts and to keep styles scoped to their respective components.

## Assumptions and Limitations

- **Assumptions:**

  - Users have a basic understanding of React and JavaScript.

- **Limitations:**
  - The application does not include advanced error handling and may not cover all edge cases.
  - The current design is optimized for desktop view and may not be fully responsive on mobile devices.
  - The project uses a basic authentication flow and does not include features like password reset or email verification.
