# Base Image
FROM node:alpine

# Add the following lines
ENV CI=true
ENV WDS_SOCKET_PORT=0

# Working Directory
WORKDIR /app

# COPY & Installation CMD
COPY package.json ./
RUN npm install

# COPY Everything else for a fast process
COPY ./ ./

# RUN COMMANDS
CMD ["npm", "start"]

