<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>
<?php $server = "localhost"; 
$username = "fernandobarciela"; //usuario de la base de datos
$password = "fernandobarciela"; //password de la base de datos
$database = "ejercicioenviar_"; //nombre de la base de datos
//usuario de la base de datos = mysqli_connect($server, $username, $password, $database) or die ("No se conecto: " . mysql_error()); 
 
$lID = $_POST["lid"]; 
$email = mysqli_real_escape_string($con,$_POST["email"]); 
$comment = mysqli_real_escape_string($con,$_POST["comentario"]); 
$sql = "INSERT INTO comments (location_id, email, comment) ";
 $sql .= "VALUES ($'lID', '$email', '$comment')"; 
 
 if (!mysqli_query($con,$sql)) { 
  die('Error: ' . mysqli_error($con));
   } else {    
   echo "Comentario agregado"; 
   }
    mysqli_close($con); ?>
</body>
</html>
