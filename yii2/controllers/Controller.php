<?php

namespace app\controllers;

use yii;
use yii\web\Response;

class Controller extends yii\rest\Controller
{
    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['contentNegotiator']['formats']['text/html'] = Response::FORMAT_JSON;
        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::className(),
            'cors'  => [
                // restrict access to domains:
                'Origin'                           => static::allowedDomains(),
                'Access-Control-Request-Method'    => ['GET', 'POST', 'OPTIONS'],
                'Access-Control-Allow-Credentials' => false,
                'Access-Control-Allow-Headers' => ['content-type'],
                'Access-Control-Max-Age'           => 0,                 // Cache (seconds)
            ],
        ];
        return $behaviors;
    }

    /**
     * List of allowed domains.
     * Note: Restriction works only for AJAX (using CORS, is not secure).
     *
     * @return array List of domains, that can access to this API
     */
    public static function allowedDomains()
    {
//        if(YII_ENV_PROD) return ['http://localhost',];

        return [
            '*', // todo YII_ENV_PROD должна выставляться
            'http://localhost:3030',
        ];
    }
}
