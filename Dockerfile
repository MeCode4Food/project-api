# base image
FROM node:12.18.0

# set working directory
RUN mkdir /app
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install

# add app
COPY . /app

# Run the build step. You can disable the command below
# RUN npm run build

# start app
CMD npm run start-prod