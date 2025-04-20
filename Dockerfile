# Use official Node.js image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app files
COPY . .

# Expose Vite’s default dev server port
EXPOSE 5173

# Run Vite dev server and allow external access (important for Docker)
CMD ["npm", "run", "dev", "--", "--host"]
