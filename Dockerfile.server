FROM node:10

# Create app directory
RUN mkdir -p /items-list

# Install app dependencies
COPY . /items-list
WORKDIR /items-list/server
RUN npm install

CMD ["npm","start"]
