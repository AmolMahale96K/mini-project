# Base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Build the app
RUN npm run build

# Expose the app on port 3000
EXPOSE 3000

# Start the app
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
