FROM mhart/alpine-node:6.7

ENV DB_PORT=3306

WORKDIR /src
RUN apk add --update --no-cache bash
RUN apk add --update --no-cache git
ADD . .
RUN npm install

EXPOSE 9001
ENTRYPOINT ["./docker/libs/wait-for-it/wait-for-it.sh", "db:${DB_PORT}", "--"]
CMD ["npm", "run", "serve"]
