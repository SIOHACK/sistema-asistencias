<?php
// Conexion mysqli
include ("../conexion/conexionli.php");


//Recibo valores con el metodo POST
$idDatos = $_POST['idDatos'];
$turno = $_POST['turno'];
$lunesE     = $_POST['lunesE'];
$lunesS    = $_POST['lunesS'];
$martesE = $_POST['martesE'];
$martesS = $_POST['martesS'];
$miercolesE = $_POST['miercolesE'];
$miercolesS    = $_POST['miercolesS'];
$juevesE      = $_POST['juevesE'];
$juevesS = $_POST['juevesS'];
$viernesE      = $_POST['viernesE'];
$viernesS    = $_POST['viernesS'];
$sabadoE    = $_POST['sabadoE'];
$sabadoS    = $_POST['sabadoS'];
$domingoE    = $_POST['domingoE'];
$domingoS    = $_POST['domingoS'];


$fecha=date("Y-m-d"); 
$hora=date ("H:i:s");

//Inserto registro en tabla pacientes 
$cadena = "INSERT INTO horarios
				(id_datos_persona,
				turno,
				l_entrada, 
				l_salida, 
				m_entrada, 
				m_salida, 
				mi_entrada, 
				mi_salida, 
				j_entrada, 
				j_salida, 
				v_entrada, 
				v_salida,
                s_entrada,
                s_salida,
				d_entrada,
				d_salida,
				fecha_registro,
				hora_registro)
			VALUES
				('$idDatos',
                '$turno',
                '$lunesE',
				'$lunesS',
				'$martesE', 
				'$martesS', 
				'$miercolesE', 
				'$miercolesS', 
				'$juevesE', 
				'$juevesS',
				'$viernesE',
				'$viernesS',
				'$sabadoE',
				'$sabadoS',
				'$domingoE',
				'$domingoS',
				'$fecha', 
				'$hora')";
$insertar = mysqli_query($conexionLi, $cadena);
echo $cadena;

//En caso de error imprime
print_r(mysqli_error($conexionLi));
//Cierro la conexion
mysqli_close($conexionLi);
?>