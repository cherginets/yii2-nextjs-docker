<?php

namespace app\controllers;

use Yii;

class TestController extends Controller
{
    public function actionIndex() {
        return $this->asJson([
            'hello' => 'world',
            'api' => 'worked',
            'query' => Yii::$app->request->get(),
            'body' => Yii::$app->request->post(),
            'YII_ENV' => YII_ENV,
        ]);
    }
}
