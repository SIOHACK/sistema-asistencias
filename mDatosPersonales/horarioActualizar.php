<?php
// Conexion mysqli
include ("../conexion/conexionli.php");

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
$cadena = "UPDATE horarios
			SET
            turno          = '$turno',
            l_entrada      = '$lunesE',
            l_salida       = '$lunesS', 
            m_entrada      = '$martesE', 
            m_salida       = '$martesS', 
            mi_entrada     = '$miercolesE', 
            mi_salida      = '$miercolesS', 
            j_entrada      = '$juevesE', 
            j_salida       = '$juevesS', 
            v_entrada      = '$viernesE', 
            v_salida       = '$viernesS',
            s_entrada      = '$sabadoE', 
            s_salida       = '$sabadoS',
            d_entrada      = '$domingoE', 
            d_salida       = '$domingoS', 
			fecha_registro = '$fecha', 
			hora_registro  = '$hora'
			WHERE 
            id_datos_persona= $idDatos";
$actualizar = mysqli_query($conexionLi, $cadena);

//En caso de error imprime
print_r(mysqli_error($conexionLi));
//Cierro la conexion
mysqli_close($conexionLi);
?> 
