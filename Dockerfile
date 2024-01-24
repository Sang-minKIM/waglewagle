# Use an official Node.js runtime as a base image
FROM node:21

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Build TypeScript app
RUN npm run build

# Expose the port the app runs on
EXPOSE 5173

# Define the command to run your app
CMD ["npm", "run", "dev", "--", "--host"]

