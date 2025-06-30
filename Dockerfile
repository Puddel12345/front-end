# Frontend Dockerfile for Railway deployment
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the React app
RUN npm run build

# Install production dependencies for the server
RUN npm install --only=production

# Expose port
EXPOSE 3000

# Start the Express server
CMD ["node", "server.js"]