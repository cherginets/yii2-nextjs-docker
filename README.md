# Docker-yii2-nextjs

Yii2, NextJS, Crontab, NodeJS. All in one docker compose container.

## Install production
```
cp .env-prod .env
docker run  -v %cd%:/app -it --rm composer install -d yii2 --prefer-dist
docker-compose up -d --build
```
## Development
```
cp .env-dev .env
docker-compose up -d --build
cd frontend
yarn run dev
```

## Deploy and Rebuild

## Rebuild

## Crontab
## Testing backend
## Testing frontend
