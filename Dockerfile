FROM node:16

WORKDIR /app
COPY src src
COPY package-lock.json package-lock.json
COPY package.json package.json

RUN ["npm", "install"]

ENTRYPOINT ["/usr/local/bin/npx", "tsx", "src/main.ts"]
