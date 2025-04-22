# Step 1: Use a modern Node.js image for building the React app
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the React app source code
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Serve the React app using a lightweight server
FROM node:18 AS serve

# Install the serve package globally
RUN npm install -g serve

# Copy the build output from the previous stage
COPY --from=build /app/build /app/build

# Expose port 5173 to match the development port
EXPOSE 5173

# Start the serve command to serve the app
CMD ["serve", "-s", "/app/build", "-l", "5173"]