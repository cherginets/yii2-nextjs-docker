REM building images
REM docker-compose --env-file ./.env-dev -f docker-compose.yml -f docker-compose.dev.yml build &
REM installing backend
REM docker-compose --env-file ./.env-dev run php_fpm composer install --prefer-dist &
REM installing node-js modules
REM docker-compose --env-file ./.env-dev run nextjs_front bash -c "yarn install && yarn run build" &
REM running
docker-compose --env-file ./.env-dev -f docker-compose.yml -f docker-compose.dev.yml up -d
