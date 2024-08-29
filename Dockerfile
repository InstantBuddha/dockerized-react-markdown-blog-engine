# Use an official Node.js image as the base image with Alpine Linux
FROM node:21-alpine

# Set the working directory inside the container
WORKDIR /blog-app

# Copy package.json and package-lock.json
COPY /blog-app/package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application code
COPY /blog-app .

# Start your React application
CMD npm start
