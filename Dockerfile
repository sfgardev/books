# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy all source files to the working directory
COPY . .

# Build the Vite + React application
RUN npm run build

# Expose port 4173
EXPOSE 4173

# Define the command to start your application
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]

