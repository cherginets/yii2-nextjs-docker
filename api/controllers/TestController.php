<?php


namespace app\controllers;


use Yii;
use yii\rest\Controller;

class TestController extends Controller
{
    public $enableCsrfValidation = false;

    /**
     * List of allowed domains.
     * Note: Restriction works only for AJAX (using CORS, is not secure).
     *
     * @return array List of domains, that can access to this API
     */
    public static function allowedDomains()
    {
        if(YII_ENV_PROD) return [
            'http://localhost',
        ];

        return [
             '*', // todo YII_ENV_PROD должна выставляться
             'http://localhost:3002',
        ];
    }

    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return array_merge(parent::behaviors(), [

            // For cross-domain AJAX request
            'corsFilter'  => [
                'class' => \yii\filters\Cors::className(),
                'cors'  => [
                    // restrict access to domains:
                    'Origin'                           => static::allowedDomains(),
                    'Access-Control-Request-Method'    => ['GET', 'POST', 'OPTIONS'],
                    'Access-Control-Allow-Credentials' => false,
                    'Access-Control-Allow-Headers' => ['content-type'],
                    'Access-Control-Max-Age'           => 0,                 // Cache (seconds)
                ],
            ],

        ]);
    }

    public function actionIndex() {
        return $this->asJson([
            'hello' => 'world',
            'api' => 'worked',
            'query' => Yii::$app->request->get(),
            'body' => Yii::$app->request->post(),
        ]);
    }
}