# docker-sync installation

https://github.com/EugenMayer/docker-sync/wiki

```
gem install docker-sync
brew install fswatch

brew install unison
```

start

```
docker-sync-stack start
```

# for docker-compose instalattion

```
docker-compose up
docker-compose run app /bin/sh
npm run knex migrate:latest
npm run knex seed:run
```
