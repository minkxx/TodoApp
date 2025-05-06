# Todo App (MERN Stack)

Welcome to my first full-stack application! This is a **Todo App** built using the **MERN stack** (MongoDB, Express.js, React, and Node.js). While this is my first attempt at building a full-stack app, I have put in my best effort to create a functional and user-friendly application. I hope you find it useful and easy to work with!

---

## Features

- Create, read, update, and delete (CRUD) todos.
- Persistent data storage using MongoDB.
- Responsive and interactive UI built with React.
- Backend API built with Express.js and Node.js.
- RESTful API design for seamless communication between frontend and backend.

---

## Tech Stack

### Frontend
- **React**: Used for building the user interface. React's component-based architecture made it easier to manage the UI and state.
- **Axios**: For making HTTP requests to the backend API.

### Backend
- **Node.js**: Provides the runtime environment for the backend.
- **Express.js**: A lightweight framework for building the RESTful API.

### Database
- **MongoDB**: A NoSQL database used to store todos persistently.

### Additional Dependencies
- **Mongoose**: For object data modeling (ODM) to interact with MongoDB.
- **dotenv**: To manage environment variables securely.
- **Cors**: To enable cross-origin requests between the frontend and backend.
- **Body-parser**: For parsing incoming request bodies in JSON format.

---

## Why These Technologies?

- **MERN Stack**: The MERN stack is widely used for full-stack development due to its simplicity and efficiency. It allows for seamless integration between the frontend and backend.
- **React**: React's component-based structure makes it easier to build reusable and maintainable UI components.
- **MongoDB**: A NoSQL database like MongoDB is perfect for applications with flexible and evolving data structures.
- **Express.js**: Simplifies the process of building APIs and handling server-side logic.

---

## Setup Instructions

Follow these steps to set up the project on your local machine:

### Prerequisites
- Node.js installed on your machine.
- MongoDB installed and running locally or a MongoDB Atlas account.
- A code editor (e.g., VS Code).

### Steps
1. **Clone the Repository**:
    ```bash
    git clone https://github.com/minkxx/TodoApp.git
    cd Todo-FullStack
    ```

2. **Install Dependencies**:
    - Navigate to the `backend` folder and install dependencies:
      ```bash
      cd backend
      npm install
      ```
    - Navigate to the `frontend` folder and install dependencies:
      ```bash
      cd ../frontend
      npm install
      ```

3. **Set Up Environment Variables**:
    - In the `backend` folder, create a `.env` file and add the following:
      ```
      MONGO_URI=<your-mongodb-connection-string>
      PORT=5000
      ```
    - Replace `<your-mongodb-connection-string>` with your MongoDB URI.

4. **Run the Backend**:
    - In the `backend` folder, start the server:
      ```bash
      npm start
      ```

5. **Run the Frontend**:
    - In the `frontend` folder, start the React app:
      ```bash
      npm start
      ```

6. **Access the App**:
    - Open your browser and navigate to `http://localhost:3000`.

---

## Notes

- This is my first full-stack app, so there might be areas for improvement. Feedback is always welcome!
- Feel free to fork the repository and make your own modifications.

---

Thank you for checking out my project! 😊  