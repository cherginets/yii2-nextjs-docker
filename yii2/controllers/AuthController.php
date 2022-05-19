<?php

namespace app\controllers;

use app\common\Logger;
use dektrium\user\Finder;
use dektrium\user\models\LoginForm;
use dektrium\user\models\RegistrationForm;
use yii\base\UserException;
use yii\filters\AccessControl;
use yii\web\BadRequestHttpException;
use yii\web\NotFoundHttpException;

class AuthController extends Controller {
    /** @var Finder */
    protected $finder;

    /**
     * @param string           $id
     * @param \yii\base\Module $module
     * @param Finder           $finder
     * @param array            $config
     */
    public function __construct($id, $module, Finder $finder, $config = [])
    {
        $this->finder = $finder;
        parent::__construct($id, $module, $config);
    }

    /** @inheritdoc */
    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['access'] = [
            'class' => AccessControl::className(),
            'rules' => [
                ['allow' => true, 'actions' => ['profile'], 'roles' => ['@']],
                ['allow' => true, 'actions' => ['login', 'auth', 'registration'], 'roles' => ['?']],
                ['allow' => true, 'actions' => ['login', 'auth', 'logout'], 'roles' => ['@']],
            ],
//            'verbs' => [
//                'class' => VerbFilter::className(),
//                'actions' => [
//                    'login' => ['options', 'post'],
//                    'logout' => ['post'],
//                ],
//            ],
        ];
        return $behaviors;
    }

    public function actionProfile() {
        $profile = $this->finder->findProfileById(\Yii::$app->user->getId());

        if ($profile === null) {
            throw new NotFoundHttpException();
        }

        return $profile;
    }

    public function actionLogin() {

        if (!\Yii::$app->user->isGuest) {
            throw new UserException('Вы уже авторизованы.');
        }

        /** @var LoginForm $model */
        $model = \Yii::createObject(LoginForm::className());
//        $event = $this->getFormEvent($model);


//        $this->performAjaxValidation($model);

//        $this->trigger(self::EVENT_BEFORE_LOGIN, $event);

        $model->load(\Yii::$app->getRequest()->post(), '');
        $model->beforeValidate();

        if ($model->login()) {
                return [
                    'success',
                    '\Yii::$app->user->isGuest' => \Yii::$app->user->isGuest,
                    'errors' => $model->getErrorSummary(true),
                ];
//            $this->trigger(self::EVENT_AFTER_LOGIN, $event);
        }

        return [
            'error2',
            'errors' => $model->getErrorSummary(true),
            'post' => \Yii::$app->getRequest()->post(),
            '$model' => $model,
        ];
    }

    public function actionRegistration()
    {
        Logger::debug('vawvwa');
//        \Yii::info(\Yii::$app->);
//        if (\Yii::$app->user && !\Yii::$app->user->module->enableRegistration) {
//            throw new NotFoundHttpException();
//        }

        /** @var RegistrationForm $model */
        $model = \Yii::createObject(RegistrationForm::className());

        $post = \Yii::$app->getRequest()->post();

        $model->load($post, '');
        if(!$model->username) $model->username = $model->email;

        $model->beforeValidate();

        if ($model->register()) {
            return [
                'success' => true,
            ];
        }


        throw new BadRequestHttpException(implode(",", $model->getErrorSummary(true)));
    }

}
