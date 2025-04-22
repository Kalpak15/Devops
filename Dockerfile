# # Step 1: Use a modern Node.js image for building the React app
# FROM node:18 AS build

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json to install dependencies
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the React app source code
# COPY . .

# # Build the React app for production
# RUN npm run build

# # Step 2: Serve the React app using a lightweight server
# FROM node:18 AS serve

# # Install the serve package globally
# RUN npm install -g serve

# # Copy the build output from the previous stage
# COPY --from=build /app/build /app/build

# # Expose port 5173 to match the development port
# EXPOSE 5173

# # Start the serve command to serve the app
# CMD ["serve", "-s", "/app/build", "-l", "5173"]


# Stage 1: Build the application
FROM node:20 AS build

WORKDIR /app

# Copy only package files to install dependencies first (cache optimization)
COPY package*.json ./

# Optional: Update npm to latest
RUN npm install -g npm@latest

# Install project dependencies
RUN npm install

# Copy all remaining project files
COPY . .

# Build the project using Vite (output goes to dist/)
RUN npm run build

# Stage 2: Serve the built files
FROM node:20 AS serve

WORKDIR /app

# Install the 'serve' package globally
RUN npm install -g serve

# Copy built files from the previous stage
COPY --from=build /app/dist .

# Expose port 3000
EXPOSE 3000

# Start the static file server
CMD ["serve", "-s", ".", "-l", "3000"]