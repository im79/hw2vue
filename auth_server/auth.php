<?php
$data = [
     "token" => "testtoken"
  ];

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: access-control-allow-headers,access-control-allow-methods,access-control-allow-origin,authorization,content-type');
header('Access-Control-Allow-Credentials: true');

header('Content-Type: application/json');
echo json_encode($data);
