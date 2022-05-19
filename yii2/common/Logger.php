<?php
namespace app\common;

define("NO_LOGGING_STR", "{{jur}}aw243afa4$22##@1");

global $l;
$l = new Logger("siteapi");

// Отправляет сообщения в лог
class Logger
{
    public $category;

    public function __construct($category = 'siteapi')
    {
        $this->category = $category;
    }

    static public function getLogger() {
        global $l;
        if(!$l) {
            $l = new Logger("siteapi");
        }
        return $l;
    }

    public static function init($category = "siteapi") {
        global $l;
        $l->category = $category;
    }

    private function query($method, $header, $message) {
        \Yii::info($this->category);
        call_user_func(["Yii", $method], ($header ? $header . ($message !== NO_LOGGING_STR ? "\n" : "") : '') .
            ($message !== NO_LOGGING_STR ? print_r($message, true) : ""), $this->category);
    }

    static public function info($header, $message = NO_LOGGING_STR) {
        $l = self::getLogger();
        $l->query("info", $header, $message);
    }
    static public function debug($header, $message = NO_LOGGING_STR) {
        $l = self::getLogger();
        $l->query("debug", $header, $message);
    }
    static public function trace($header, $message = NO_LOGGING_STR) {
        static::debug($header, $message);
    }
    static public function warning($header, $message = NO_LOGGING_STR) {
        $l = self::getLogger();
        $l->query("warning", $header, $message);
    }
    static public function error($header, $message = NO_LOGGING_STR) {
        $l = self::getLogger();
        $l->query("error", $header, $message);
    }
}
