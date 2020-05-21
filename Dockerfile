# Use latest node version 8.x
FROM node:14

# create app directory in container
RUN mkdir -p /app

# set /app directory as default working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# only copy package.json initially so that `RUN yarn` layer is recreated only
# if there are changes in package.json

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

# Install serve dependency
RUN npm install serve -g --silent

RUN npm install --silent

# expose port 4040
EXPOSE 4040

# cmd to start service
CMD [ "npm", "run", "server" ]