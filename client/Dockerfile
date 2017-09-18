# Use an official Python runtime as a parent image
FROM node:latest

WORKDIR /usr/src/app

COPY package.json .

COPY . .

RUN npm install

# Make port 80 available to the world outside this container
EXPOSE 8080

# Run app.py when the container launches
CMD ["npm", "run", "dev"]