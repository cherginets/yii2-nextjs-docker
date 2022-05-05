REM building images
docker-compose --env-file ./.env-dev -f docker-compose.yml -f docker-compose.dev.yml build &
REM installing backend
REM docker-compose --env-file ./.env-dev run php_fpm composer install --prefer-dist &
REM running
docker-compose --env-file ./.env-dev -f docker-compose.yml -f docker-compose.dev.yml up
