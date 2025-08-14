# Note App API

![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)
![Express.js](https://img.shields.io/badge/Express.js-5.x-lightgrey.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-blue.svg)
![Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)

A simple and secure REST API for managing your notes, built with Node.js, Express, and MongoDB. This project includes full CRUD functionality, JWT-based authentication, and end-to-end testing with Cypress.

## Features

-   **Full CRUD Operations**: Create, Read, Update, and Delete notes.
-   **User Authentication**: Secure endpoints using JSON Web Tokens (JWT).
-   **API Documentation**: Interactive API documentation with Swagger UI.
-   **End-to-End Testing**: Robust tests written with Cypress to ensure API reliability.
-   **Environment-Based Configuration**: Easy setup using `.env` files.

## Tech Stack

-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB with Mongoose
-   **Authentication**: JSON Web Token (JWT), bcrypt
-   **API Documentation**: Swagger (swagger-jsdoc, swagger-ui-express)
-   **Testing**: Cypress
-   **Development**: Nodemon

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your system:
-   [Node.js](https://nodejs.org/en/) (v18.x or later)
-   [npm](https://www.npmjs.com/)
-   [MongoDB](https://www.mongodb.com/try/download/community) (or a MongoDB Atlas account)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/azimhatami/note_app.git](https://github.com/azimhatami/note_app.git)
    cd note_app
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Create a `.env` file** in the root of the project and add the following environment variables.
    ```env
    # Server Configuration
    PORT=8000

    # MongoDB Connection
    MONGO_URI=mongodb://localhost:27017/note_app

    # JWT Secret Key
    JWT_SECRET=your_super_secret_key_here
    ```

---

## Running the Application

-   **For development (with auto-reload):**
    ```sh
    npm run dev
    ```
    The server will start on `http://localhost:8000`.

-   **For production:**
    ```sh
    npm start
    ```

## 🧪 Running Tests

This project uses Cypress for end-to-end testing. To run the tests, use the following command to open the Cypress Test Runner:

```sh
npm test
```
This will open the Cypress interactive dashboard where you can run the tests.

---

## API Documentation

Interactive API documentation is available through Swagger UI. Once the server is running, you can access it at:

**[http://localhost:8000/docs](http://localhost:8000/docs)**

##  API Endpoints

Here is a summary of the available API endpoints.

| Method | Path                  | Description                      | Auth Required |
| :----- | :-------------------- | :------------------------------- | :------------ |
| `POST` | `/auth/register`      | Register a new user.             | No            |
| `POST` | `/auth/login`         | Log in a user and get a token.   | No            |
| `POST` | `/add-note`           | Create a new note.               | **Yes** |
| `GET`  | `/notes`              | Get all notes.                   | **Yes** |
| `GET`  | `/notes/:id`          | Get a single note by its ID.     | **Yes** |
| `PUT`  | `/update-note/:id`    | Update an existing note.         | **Yes** |
| `DELETE`| `/delete-note/:id`   | Delete a note.                   | **Yes** |

---

## 👤 Author

**Azim Hatami**

## 📄 License

This project is licensed under the ISC License.

