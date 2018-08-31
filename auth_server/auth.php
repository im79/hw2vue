<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: access-control-allow-headers,access-control-allow-methods,access-control-allow-origin,authorization,content-type');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

require __DIR__ . '/vendor/autoload.php';

use \Firebase\JWT\JWT;

$key = "16137571613757";
$token = array(
    "user_id" => "1613757",
    "email" => "test@test.de",
    "admin" => false,
    "exp" => 1535750072
);


$jwt = JWT::encode($token, $key);
$data = [
  "token" => $jwt
];

$decoded = JWT::decode($jwt, $key, array('HS256'));

echo json_encode($data);