# Step 1: Use an official Node.js image as a base for building the React app
FROM node:16 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the React app source code
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Serve the React app (optional for production, but can be used for testing)
FROM node:16 AS serve

# Install the serve package to serve the build folder
RUN npm install -g serve

# Copy the build from the previous step
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 5173 to match the development port
EXPOSE 5173

# Start the serve command to serve the app
CMD ["serve", "-s", "/usr/share/nginx/html", "-l", "5173"]
