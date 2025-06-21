# Use the official Node.js 18 image as the base image
FROM node:22.14.0-alpine
# Set the working directory inside the container
WORKDIR /usr/src/app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install application dependencies
RUN npm install
# Copy the application code to the working directory
COPY . .
# build the application
RUN npm run build
# Expose the port the app runs on
EXPOSE 3000
# Command to run the application
CMD ["npm", "run", "start"]
