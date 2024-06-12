# Use the official Node.js image
FROM node:14-alpine

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install tsconfig-paths to resolve paths at runtime
RUN npm install --save tsconfig-paths

# Install nodemon globally
RUN npm install -g nodemon

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app with nodemon
CMD ["nodemon", "-L", "--watch", "src", "--exec", "ts-node", "-r", "tsconfig-paths/register", "src/app.ts"]
