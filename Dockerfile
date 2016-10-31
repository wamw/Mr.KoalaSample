FROM mhart/alpine-node:6.7

WORKDIR /src
RUN apk add --update --no-cache git
ADD . .
RUN npm install

EXPOSE 9001
CMD ["npm", "run", "serve"]
