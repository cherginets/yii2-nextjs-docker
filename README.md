# Docker-yii2-nextjs

Yii2, NextJS, Crontab, NodeJS. All in one docker compose container.

## preinstall
```
# Установка зависимостей
docker run  -v %cd%:/app -it --rm composer install -d yii2 --prefer-dist

# Миграции базы данных
docker exec -u 0 -it containerName bash
php yii migrate/up --migrationPath=@vendor/dektrium/yii2-user/migrations

# Перенос базы
//todo
```
## run production
```
run-dev.bat
```
## run development
```
run-prod.bat
```

## Deploy and Rebuild

## Rebuild

## Crontab
## Testing backend
## Testing frontend
