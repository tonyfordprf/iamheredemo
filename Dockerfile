FROM node:argon

 
# Provides cached layer for node_modules (hack) 
# Add this to your Dockerfile, after your dependencies, but before your app code. 
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Expose port 
EXPOSE 3002 
 
 
# Define env variables 
ENV NODE_ENV='production' 
 
 
# Run app 
CMD [ "npm", "start" ]
