FROM mongo
# Create app directory
RUN mkdir -p /items-list

# Install app dependencies
COPY . /items-list
WORKDIR /items-list/db

CMD ["mongod"]