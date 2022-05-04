REM building images
docker-compose --env-file ./.env-dev -f docker-compose.yml -f docker-compose.dev.yml build &
REM installing backend
docker-compose --env-file ./.env-dev run php_fpm composer install &
REM installing node-js modules
docker-compose --env-file ./.env-dev run nextjs_front bash -c "npm install && npm run build" &
REM running
docker-compose --env-file ./.env-dev -f docker-compose.yml -f docker-compose.dev.yml up
