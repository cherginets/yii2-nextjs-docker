<?php

return [
    'class' => 'yii\db\Connection',
    'dsn' => 'mysql:host=127.0.0.1;dbname=my_database_name;port=3306',
    'username' => 'my_user_name',
    'password' => 'my_user_password',
//    'username' => 'root',
//    'password' => 'my_root_password',
    'charset' => 'utf8',
    //MYSQL_DATABASE=my_database_name
    //MYSQL_USER=my_user_name
    //MYSQL_PASSWORD=my_user_password
    //MYSQL_ROOT_PASSWORD=my_root_password

    // Schema cache options (for production environment)
    //'enableSchemaCache' => true,
    //'schemaCacheDuration' => 60,
    //'schemaCache' => 'cache',
];
