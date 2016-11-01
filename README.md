# Dockerのインストール
open https://docs.docker.com/docker-for-mac/

# docker-sync をインストール
## https://github.com/EugenMayer/docker-sync/wiki

```
gem install docker-sync
brew install fswatch
brew install unison
```

# Dockerコンテナを起動

```
docker-sync-stack start
```

# マイグレーション & 初期データ登録

```
docker-compose run --rm app npm run knex migrate:latest
docker-compose run --rm app npm run knex seed:run
```


vagrant
os: ubuntu 16.04 LTS
vagrant box: https://atlas.hashicorp.com/gbarbieru/boxes/xenial

# plugins
vagrant plugin install sahara
