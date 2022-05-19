<?php

$custom_categories = [
    'siteapi',
];

$targets = [
    // Глобальный дефолтный лог
    [
        'class' => 'yii\log\FileTarget',
        'levels' => ['error', 'warning', 'info'],
        'logFile' => '@app/runtime/logs/app.log',
        'except' => $custom_categories,
//                    'categories' => ['api'], все
//                    'exportInterval' => 1,
        'logVars' => [], //не добавлять в лог глобальные переменные ($_SERVER, $_SESSION...)
    ],
    [
        'class' => 'index0h\\log\\LogstashFileTarget',
        'logFile' => '@app/runtime/logs/elk.log',
        'logVars' => [], //не добавлять в лог глобальные переменные ($_SERVER, $_SESSION...)
    ],
];

foreach ($custom_categories as $category) {
    $targets[] = [
        'class' => 'yii\log\FileTarget',
        'levels' => ['error', 'warning', 'info', 'trace'],
        'logFile' => "@app/runtime/logs/$category.log",
        'categories' => [$category],
        'exportInterval' => 1,
        'logVars' => [], //не добавлять в лог глобальные переменные ($_SERVER, $_SESSION...)
    ];
}

return $targets;
