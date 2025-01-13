# LiaPlus Chat Application

## Overview
LiaPlus is a real-time chat application built using modern web technologies. It features user authentication, real-time messaging, and a responsive user interface. The frontend is powered by React, TypeScript, and Vite, while the backend leverages Node.js, Express, and MongoDB.

---

## Table of Contents

1. [Folder Structure](#folder-structure)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Code Flow](#code-flow)
6. [Environment Variables](#environment-variables)
7. [Contributing](#contributing)
8. [License](#license)

---

## Folder Structure

```
LiaPlus/
├── client/       # Frontend code
│   ├── src/
│   ├── public/
│   └── .env
├── server/       # Backend code
│   ├── src/
│   └── .env
└── README.md     # Documentation
```

---

## Tech Stack

### Frontend:
- **React**
- **TypeScript**
- **Vite** (build tool)
- **Zustand** (state management)
- **Tailwind CSS** (styling)
- **Axios** (HTTP requests)

### Backend:
- **Node.js**
- **Express**
- **TypeScript**
- **MongoDB** (database)
- **Mongoose** (ORM)
- **Socket.IO** (real-time communication)
- **dotenv** (environment variable management)

---

## Installation

### 1. Clone the repository:
```bash
git clone https://github.com/your-username/liaplus.git
```

### 2. Install dependencies:
- Navigate to the `client` and `server` directories separately, and run:
```bash
npm install
```

### 3. Configure environment variables:
- Create a `.env` file in both the `client` and `server` directories based on the provided `.env.example` files.

---

## Usage

### 1. Start the server:
Navigate to the `server` directory and run:
```bash
npm run dev
```

### 2. Start the client:
Navigate to the `client` directory and run:
```bash
npm run dev
```

### 3. Access the application:
Open your browser and navigate to:
```
http://localhost:5173
```

---

## Code Flow

### Frontend:
1. The application entry point is `src/main.tsx`, which renders the `App` component.
2. The `App` component manages routing and authentication state using Zustand.
3. The main chat interface includes components like `Sidebar`, `ChatContainer`, and `MessageInput`.
4. User interactions trigger API calls to the backend using Axios.

### Backend:
1. The server initializes in `server/src/server.ts`, setting up the Express app and Socket.IO server.
2. API routes are defined in `server/src/routes`, handling user authentication and message management.
3. Controllers in `server/src/controllers` process requests and interact with the database.

---

## Environment Variables

The application requires specific environment variables for both the client and server. Create `.env` files as follows:

### Client `.env`
```env
VITE_API_URL=<backend-api-url>
```

### Server `.env`
```env
PORT=5173
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
```

---

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`feature/new-feature` or `bugfix/fix-issue`).
3. Commit your changes and push the branch.
4. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

Thank you for using LiaPlus! If you have any questions or issues, feel free to open an issue or contact the project maintainers.

