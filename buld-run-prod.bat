REM building images
docker-compose --env-file ./.env-prod -f docker-compose.yml -f docker-compose.prod.yml build &
REM installing backend
REM docker-compose --env-file ./.env-prod -f docker-compose.yml -f docker-compose.prod.yml run php_fpm composer install &
REM installing node-js modules
docker-compose --env-file ./.env-prod -f docker-compose.yml -f docker-compose.prod.yml run nextjs_front bash -c "yarn install && yarn run build" &
REM running
docker-compose --env-file ./.env-prod -f docker-compose.yml -f docker-compose.prod.yml up -d
