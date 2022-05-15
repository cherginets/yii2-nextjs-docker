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
                'Access-Control-Request-Method'    => ['DELETE', 'GET', 'OPTIONS', 'PATCH', 'POST', 'PUT'],
                'Access-Control-Allow-Credentials' => true,
                'Access-Control-Allow-Headers' => ['accept', 'accept-encoding', 'authorization', 'content-type', 'dnt', 'origin', 'user-agent', 'x-csrftoken', 'x-requested-with', 'Set-Cookie'],
//                'Access-Control-Allow-Headers' => accept, accept-encoding, authorization, content-type, dnt, origin, user-agent, x-csrftoken, x-requested-with, Set-Cookie,
                'Access-Control-Max-Age'           => 86400,                 // Cache (seconds)
//                'referrer-policy'           => 'same-origin',                 // Cache (seconds)

                // edleed
                // RESPONSE
                // access-control-allow-credentials: true
                // access-control-allow-origin: http://localhost:3000
                // allow: POST, OPTIONS
                // content-length: 8
                // content-type: application/json
                // date: Sun, 15 May 2022 17:26:51 GMT
                // referrer-policy: same-origin
                // server: nginx
                // set-cookie: sessionid=6ekovyolotonl83jpytz74sax2pvcdyj; HttpOnly; Path=/; SameSite=None; Secure
                // vary: Accept, Origin, Cookie
                // x-content-type-options: nosniff
                // x-frame-options: DENY

                // REQUEST
                // :authority: edleed.com
                // :method: POST
                // :path: /api/auth/users/login
                // :scheme: https
                // accept: application/json, text/plain, */*
                // accept-encoding: gzip, deflate, br
                // accept-language: ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7
                // cache-control: no-cache
                // content-length: 61
                // content-type: application/json
                // origin: http://localhost:3000
                // pragma: no-cache
                // referer: http://localhost:3000/
                // sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"
                // sec-ch-ua-mobile: ?0
                // sec-ch-ua-platform: "Windows"
                // sec-fetch-dest: empty
                // sec-fetch-mode: cors
                // sec-fetch-site: cross-site
                // user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36
                // x-csrftoken

                // OPTIONS RESPONSE
                // access-control-allow-credentials: true
                // access-control-allow-headers: accept, accept-encoding, authorization, content-type, dnt, origin, user-agent, x-csrftoken, x-requested-with, Set-Cookie
                // access-control-allow-methods: DELETE, GET, OPTIONS, PATCH, POST, PUT
                // access-control-allow-origin: http://localhost:3000
                // access-control-max-age: 86400
                // content-length: 0
                // content-type: text/html; charset=utf-8
                // date: Sun, 15 May 2022 17:26:50 GMT
                // referrer-policy: same-origin
                // server: nginx
                // vary: Origin
                // x-content-type-options: nosniff
                // x-frame-options: DENY
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
//            '*', // todo YII_ENV_PROD должна выставляться
            'http://localhost:3030',
            'http://next.app.localhost:3030',
            'http://shop.local',
        ];
    }
}
