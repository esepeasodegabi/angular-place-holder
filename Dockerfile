# Stage 1

FROM node:16-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install --force

COPY . /app

RUN npm run build --prod

# Stage 2

FROM nginx:stable-alpine

COPY --from=build-step /app/dist/place-holder /usr/share/nginx/html