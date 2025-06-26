# ALIGHT-HR-PLATFORM-CHALLENGE-API

## 🧾 Description

This is a backend API for the ALIGHT Challenge, built with TypeScript. The project features integrated CI/CD pipeline, see the Actions tab for workflow details. You can run the API locally by following the setup instructions below, or use Docker Compose to quickly start both the backend and its frontend. Clone the repo, set up your environment, and get started!


## 🔗 Live Preview

You can view a live version of this api here:  
👉 [https://backend-alight-challenge.onrender.com](https://backend-alight-challenge.onrender.com)


## 🚀 Getting Started

Follow these steps to set up and run the project locally.

## ✅ Prerequisite installation
 
 -nodejs v18.18.0
 -postgress v17.3

## 🛠 Installation

1. **Clone the Repository**

    ```bash
    git clone git@github.com:lcdamy/backend_alight_challenge.git
    cd backend_Alight_Challenge
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

## 🏃‍♂️ Running in Development

To start the server in development mode, follow these steps:

1. Copy the example environment file:

    ```bash
    cp .env.example .env
    ```
    > **Note:** If you do not have access to the `.env.example` file, you can request a sample environment file by emailing zudanga@gmail.com.

2. Start the server:

    ```bash
    npm run dev
    ```

## 🏗️ Building for Production

To build the project for production, run:
```bash
npm run build
```

## 🌱 Running Seeds

To run database seeds, use:
```bash
npm run seed:all
```

> **Note:** The built files will be in the `app` directory.


📁 Folder Structure

```
backend_alight_challenge/
├── public/
├── src/
│   ├── assets/         # mocks data
│   ├── config/         # db config.ts & logger.ts
│   ├── controllers/    # Contains five controllers responsible for handling incoming requests and coordinating responses
│   ├── cronjobs/       # Contains scheduled tasks (e.g., schedules.ts for system health checks)
│   ├── dtos/           # Contains TypeScript types and interfaces used as Data Transfer Objects (DTOs)
│   ├── middlewares/    # Contains three files for handling request interception and custom logic
│   ├── models/         # Contains four files that hold the system schema
│   ├── routes/         # This te folder which hold all the routes (endpoints)
│   ├── seeds/          # Contains three files which are used to seeds the database, for at least some initial data
│   ├── services/       # Contains service layer logic to encapsulate business rules and support the MVC architecture
│   ├── templates/      # Contains templates; currently includes a single template used by the email service
│   ├── utils/          # Utility functions and helpers (e.g., email service, general utilities, validation)
│   └── app.ts          # Main application entry point
├── .env                # Environment variable definitions
├── .gitignore          # Git ignore rules
├── combined.log        # Log output file
├── docker-compose.yml  # Docker Compose configuration
├── Dockerfile          # Docker build instructions
├── package.json        # Project metadata and dependencies
└── README.md
```
## 🐳 Running with Docker

To run this application using Docker, follow these steps:

1. Ensure Docker and Docker Compose are installed on your machine.
2. Clone both the backend and frontend repositories into the same parent directory.
3. Navigate to the backend project folder:

    ```bash
    cd backend_Alight_Challenge
    ```

4. Start the services with Docker Compose:

    ```bash
    docker-compose --env-file .env.custom up --build
    ```

> **Note:** Make sure your `.env.custom` file is properly configured before running the command.


## 👥 Contributors

- [lcdamy](https://www.linkedin.com/in/pierre-damien-murindangabo-cyuzuzo-709b53151/)




