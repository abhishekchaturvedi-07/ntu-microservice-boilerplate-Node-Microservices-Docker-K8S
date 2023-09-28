# Base Image
FROM node:alpine

# Working Directory
WORKDIR /app

# COPY & Installation CMD
COPY package.json ./
RUN npm install

# COPY Everything else for a fast process
COPY ./ ./

# RUN COMMANDS
CMD ["npm", "start"]

