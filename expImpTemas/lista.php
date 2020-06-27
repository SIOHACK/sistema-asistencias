<?php
// Conexion mysqli
include'../conexion/conexionli.php';

//Variable de Nombre
$varGral="-TM";

$cadena = " SELECT
                id_tema,
                nombre_tema,
                color_letra,
                color_base,
                color_base_fuerte,
                color_borde,
                fecha_registro,
                hora_registro,
                activo
            FROM temas 
            ORDER BY id_tema DESC";
$consultar = mysqli_query($conexionLi, $cadena);
//$row = mysqli_fetch_array($consultar);
function dias_transcurridos($fecha_i,$fecha_f)
{
    $dias	= (strtotime($fecha_i)-strtotime($fecha_f))/86400;
    $dias = floor($dias);	
    return $dias;
}
?>
<div class="table-responsive">
<table id="example<?php echo $varGral;?>" class="table table-striped table-bordered" style="width:100%">

        <thead>
            <tr class='hTabla'>
                <th scope="col">#</th>
                <th scope="col">Editar</th>
                <th scope="col">Exportar</th>
                <th scope="col">Aplicar Tema</th>
                <th scope="col">Nombre Tema</th>
                <th scope="col">Días Transcurridos</th>
                <th scope="col">Hora de creación</th>
                <th scope="col">Status</th>
            </tr>
        </thead>

        <tbody>
        <?php
        // Recorro el arreglo y le asigno variables a cada valor del item
        $n=1;
        while( $row = mysqli_fetch_array($consultar) ) {

            $id          = $row[0];

            if ($row[8] == 1) {
                $chkChecado    = "checked";
                $dtnDesabilita = "";
                $chkValor      = "1";
            }else{
                $chkChecado    = "";
                $dtnDesabilita = "disabled";
                $chkValor      = "0";
            }

            $nombre     = $row[1];
            $colorLetra = $row[2];
            $colorBase  = $row[3];
            $colorBaseF = $row[4];
            $colorBorde = $row[5];
            $diaCreacion = $row[6];
            $horaCreacion = $row[7];
            $fechaActual = date("Y-m-d");
            
            $diasTranscurridos = dias_transcurridos($fechaActual,$diaCreacion);

            ?>

            <tr class="centrar">
                <th scope="row" class="textoBase">
                    <?php echo $n?>
                </th>
                <td>
                    <button <?php echo $dtnDesabilita?> type="button" class="editar btn btn-outline-success btn-sm activo" id="btnEditar<?php echo $varGral?><?php echo $n?>" onclick="llenar_formulario_TM('<?php echo $id?>','<?php echo $desc?>')">
                                <i class="far fa-edit fa-lg"></i>
                    </button>
                </td>
                <td>
                    <button <?php echo $dtnDesabilita?> type="button" class="exportar btn btn-outline-success btn-sm activo" id="btnExportar<?php echo $varGral?><?php echo $n?>" onclick="exportar('<?php echo $id?>','<?php echo $desc?>')">
                                <i class="fas fa-file-export fa-lg"></i>
                    </button>
                </td>
                <td>
                    <button <?php echo $dtnDesabilita?> type="button" class="aplicar btn btn-outline-success btn-sm activo" id="btnAplicar<?php echo $varGral?><?php echo $n?>" onclick="">
                                <i class="fas fa-paint-brush fa-lg"></i>
                    </button>
                </td>
                <td>
                    <label class="textoBase">
                        <?php echo $nombre ?>
                    </label>
                </td>
                <td>
                    <label class="textoBase">
                        <?php echo $diasTranscurridos ?>
                    </label>
                </td>
                <td>
                    <label class="textoBase">
                        <?php echo $horaCreacion ?>
                    </label>
                </td>

                <td>
                    <input value="<?php echo $chkValor?>" onchange="cambiar_estatus_TM(<?php echo $id?>,<?php echo $n?>)" class="toggle-two" type="checkbox" <?php echo $chkChecado?> data-toggle="toggle" data-onstyle="outline-success" data-width="60" data-size="sm" data-offstyle="outline-danger" data-on="<i class='fa fa-check'></i> Si" data-off="<i class='fa fa-times'></i> No" id="check<?php echo $n?>">
                </td>
            </tr>
        <?php
        $n++;
        }
        ?>

        </tbody>
        <tfoot>
            <tr class='hTabla'>
                <th scope="col">#</th>
                <th scope="col">Editar</th>
                <th scope="col">Exportar</th>
                <th scope="col">Aplicar Tema</th>
                <th scope="col">Nombre Tema</th>
                <th scope="col">Días Transcurridos</th>
                <th scope="col">Hora de creación</th>
                <th scope="col">Status</th>
            </tr>
        </tfoot>
    </table>
<div>

<?php
//En caso de error imprime
print_r(mysqli_error($conexionLi));
//Cierro la conexionLi
mysqli_close($conexionLi);
?>

<script type="text/javascript">
  var varGral='<?php echo $varGral?>';
  $(document).ready(function() {
        $('#example'+varGral).DataTable( {
            "language": {
                    // "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
                    "url": "../plugins/dataTablesB4/langauge/Spanish.json"
                },
            "order": [[ 0, "asc" ]],
            "paging":   true,
            "ordering": true,
            "info":     true,
            "responsive": true,
            "searching": true,
            stateSave: true,
            dom: 'Bfrtip',
            lengthMenu: [
                [ 10, 25, 50, -1 ],
                [ '10 Registros', '25 Registros', '50 Registros', 'Todos' ],
            ],
            columnDefs: [ {
                // targets: 0,
                // visible: false
            }],
            buttons: [
                      {
                          text: "<i class='fas fa-plus fa-lg' aria-hidden='true'></i> &nbsp;Nuevo Registro",
                          className: 'btn btn-outline-primary btnEspacio',
                          id: 'btnNuevo',
                          action : function(){
                            nuevo_registro_TM();
                          }
                      },
                      {
                          text: "<i class='fas fa-file-import fa-lg' aria-hidden='true'></i> &nbsp;Importar Tema",
                          className: 'btn btn-outline-primary btnEspacio',
                          id: 'btnImportar',
                          action : function(){
                            importarArchivo();
                          }
                      },
                      {
                          extend: 'excel',
                          text: "<i class='far fa-file-excel fa-lg' aria-hidden='true'></i> &nbsp;Exportar a Excel",
                          className: 'btn btn-outline-secondary btnEspacio',
                          title:'Lista_datos_Temas',
                          id: 'btnExportar',
                          exportOptions: {
                            columns:  [6,7,8,9,10],
                          }
                      }

            ]
        } );
    } );

</script>

<script>
    $('.toggle-two').bootstrapToggle();
</script>
<script>
    $("#imagen").fileinput({
        'theme': 'explorer-fas',
        overwriteInitial: false,
        initialPreviewAsData: true,
        language: 'es',
        showUpload: false,
        showCaption: true,
        showCancel: false,
        showRemove: true,
        browseClass: "btn btn-dark",
        fileType: "json",
        allowedFileExtensions: ['json'],
        overwriteInitial: false,
        maxFileSize: 3000,
        maxFilesNum: 1
    });
</script>
