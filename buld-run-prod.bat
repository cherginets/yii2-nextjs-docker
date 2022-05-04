REM building images
docker-compose --env-file ./.env-prod -f docker-compose.yml -f docker-compose.prod.yml build &
REM installing backend
docker-compose --env-file ./.env-prod run php_fpm composer install &
REM installing node-js modules
docker-compose --env-file ./.env-prod run nextjs_front bash -c "npm install && npm run build" &
REM running
docker-compose --env-file ./.env-prod -f docker-compose.yml -f docker-compose.prod.yml up
