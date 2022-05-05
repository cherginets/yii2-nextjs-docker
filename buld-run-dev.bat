REM building images
docker-compose --env-file ./.env-dev -f docker-compose.yml -f docker-compose.dev.yml build &
REM installing backend
docker-compose --env-file ./.env-dev run php_fpm composer install &
REM running
docker-compose --env-file ./.env-dev -f docker-compose.yml -f docker-compose.dev.yml up
