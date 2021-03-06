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

---

# vagrant
Installed Version: 1.8.6

ゲストos: ubuntu 16.04 LTS
vagrant box: https://atlas.hashicorp.com/gbarbieru/boxes/xenial

# vagrant 起動

```
vagrant up
```

# vagrant provision

```
vagrant provision
```

---

# deploy

```sh
ansible-playbook -i inventories/vagrant deploy.yml
```

# rollback

```sh
ansible-playbook -i inventories/vagrant rollback.yml
```
