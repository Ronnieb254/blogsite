# Use node as the build environment
FROM node:24


# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock to leverage Docker caching
COPY package.json  ./

# Install dependencies
RUN npm install 

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Expose the port
EXPOSE 8080

CMD [ "npm", "run", "preview" ]