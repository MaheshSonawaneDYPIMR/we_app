# Use Node.js base image with Expo CLI installed
FROM node:latest

# Set working directory in the container
WORKDIR /app

# Install Expo CLI globally
RUN npm install -g expo-cli

# Copy package.json and package-lock.json (if exists) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 19000 for Expo development server
EXPOSE 19000

# Start the Expo development server
CMD ["npm", "start"]
