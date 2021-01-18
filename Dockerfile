FROM node:12.7-alpine as build
RUN apk update && apk upgrade && \
    apk add --no-cache git
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/mtj-project-manager-app /usr/share/nginx/html
