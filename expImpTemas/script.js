//VARIABLE GLOBAL PARA NOMBRAR LOS ELEMENTOS DE LOS  FORMULARIOS
//Temas-TM 
var nombreModulo_TM="Temas";

function exportar(){
    valor=$("#listaTemas").val();
    console.log(valor);
    $.ajax({
        url:"exportar.php",
        type:"POST",
        dateType:"html",
        data:{valor},
        success:function(respuesta){
           // console.log(respuesta);
            preloader(1,"Generando archivo JSON","Se ha importado el archivo de manera exitosa !")
            
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
}

$("#btnExportar").click(function(){
    exportar();
});

$("#btnImportar").click(function(){
    abrirModalArchivo();
});

function abrirModalArchivo() {
    $("#modalArchivo").modal("show");
}

//llenar combo
function combo_temas()
{
    $.ajax({
        url : '../expImpTemas/comboTemas.php',
        data : {},
        type : 'POST',
        dataType : 'html',
        success : function(respuesta) {
            
            $("#listaTemas").empty();
            $("#listaTemas").html(respuesta);    
            selectTwo();
        },
        error : function(xhr, status) {
            alert('Disculpe, existió un problema');
        },
    });
}

$(document).ready(function () {

    $( ".select2" ).select2({
        theme: "bootstrap4",
        placeholder: 'Seleccione...'
    });

    combo_temas();
    
});

function selectTwo(){
    $( ".select2" ).select2({
        theme: "bootstrap4",
        placeholder: 'Seleccione...'
    });
}

function preloader(seg,mensaje,alerta){
    var s=parseInt(seg)*1000;
    abrirModalCarga(mensaje);
    setTimeout(function() {

        cerrarModalCarga(alerta);
    },s);
}

function abrirModalCarga(mensaje) {
    $("#modalCarga").modal("show");
    $("#msjCarga").text(mensaje);
}

function cerrarModalCarga(alerta="Se ha ejecutado la acción exitosamente") {
    //alertify.success(alerta,1);
    $("#modalCarga").modal("hide");
}

function importarArchivo(){
    var files = $('#imagen')[0].files[0];
    var archivo=files.name;
    var ruta= "../expImpTemas/Temas/"+archivo;

    console.log(ruta);
    
    $.getJSON(ruta, function(data){
        //for para decorre las propiedades
        for(tema in data){

            var nombre_tema       = data[tema].nombre_tema;
            var color_letra       = data[tema].color_letra;
            var color_base        = data[tema].color_base;
            var color_base_fuerte = data[tema].color_base_fuerte;
            var color_borde       = data[tema].color_borde;
            var fecha_registro    = data[tema].fecha_registro;
            var hora_registro     = data[tema].hora_registro;

            $.ajax({
                url:"../expImpTemas/importar.php",
                type:"POST",
                dateType:"html",
                data:{nombre_tema,color_letra,color_base,color_base_fuerte,color_borde,fecha_registro,hora_registro},
                success:function(respuesta){
                    console.log(respuesta);
                    var bandera=respuesta;
                    if (bandera==0) {
                        preloader(1,"Importando Tema ...");
                        $("#modalArchivo").modal("hide");
                        combo_temas();
                    }else{
                        swal({
                            title: "Error!",
                            text: "Ya existe un tema con el nombre "+nombre_tema,
                            type: "error",
                            confirmButtonClass: "btn-dark",
                            confirmButtonText: "Enterado"
                        }, function (isConfirm) {
                            alertify.message("Gracias !");
                        });
                    }
                   
                },
                error:function(xhr,status){
                    alert("Error en metodo AJAX"); 
                },
            });
        }
    });
}

function llenar_lista_TM() {
    abrirModalCarga('Cargando Lista');
    $("#frmGuardar-TM")[0].reset();
    $("#Listado-TM").hide();
    $.ajax({
        url:"../expImpTemas/lista.php",
        type:"POST",
        dateType:"html",
        data:{},
        success:function(respuesta){
            $("#Listado-TM").html(respuesta);
            $("#Listado-TM").fadeIn("slow");
            cerrarModalCarga();      
            $("#nombre").focus();
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
}

$("#btnCancelarG-TM , #btnCancelarA-TM").click(function(){
    $("#editar-TM").hide();
    $("#guardar-TM").hide();

    $("#lblTitular").text(nombreModulo_TM);
    $("#badgeInfo").text("Lista");

    $("#Listado-TM").fadeIn();
 
});


function nuevo_registro_TM() {
    $("#lblTitular").text(nombreModulo_TM);

    $("#badgeInfo").text("Nuevo registro");

    $("#Listado-TM").hide();
    $("#guardar-TM").fadeIn();
    $('#frmGuardar-TM')[0].reset();
    $("#nombre").focus();
}

function llenar_formulario_TM() {
    //console.log(id);
    //$("#eIdFC").val(id);
    //$("#eDesc").val(edesc);

    $("#lblTitular").text(nombreModulo_TM);
    $("#badgeInfo").text("Modificar datos");

    $("#guardar-TM").hide();
    $("#Listado-TM").hide();
    $("#editar-TM").fadeIn();
    $("#nombre").focus();
}