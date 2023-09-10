# My Vite + React Application

This repository contains a Vite + React application that can be easily run using Docker.

## Prerequisites

Before you begin, ensure you have the following tools installed:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Node.js (for development): [Install Node.js](https://nodejs.org/)

## Getting Started

Follow these steps to run the Vite + React application inside a Docker container:

1. **Build the Docker Image:**

   ```sh
   docker build -t books-app .
   ```

2. **Run the Docker Container:**

   ```sh
   docker run -p 4173:4173 books-app
   ```

3. **Access the application:**
   Open a web browser and navigate to http://localhost:4173/ to access your Vite + React application.

## Development

If you want to work on the project in a development environment (outside Docker), follow these additional steps:

1. **Instal dependencies:**

   ```sh
   npm install
   ```

2. **Run the Development Server:**

   ```sh
   npm run dev
   ```

3. **Access the Development Server:**
   Open a web browser and navigate to http://localhost:8000 to access the development server.
