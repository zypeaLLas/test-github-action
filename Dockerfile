# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json from the react-basic folder
COPY react-basic/package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code from the react-basic folder
COPY react-basic .

# Expose the port the app runs on
EXPOSE 4000

# Define the command to start the app
CMD ["npm", "start"]