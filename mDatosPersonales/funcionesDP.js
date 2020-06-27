//VARIABLE GLOBAL PARA NOMBRAR LOS ELEMENTOS DE LOS  FORMULARIOS
//DATOS PERSONALES -DP 
var nombreModulo_DP="Datos Personales";

$("#frmGuardar-DP").submit(function(e){

    var clave    = $("#clave").val();
    var nombre    = $("#nombre").val();
    var apPaterno = $("#apPaterno").val();
    var apMaterno = $("#apMaterno").val();
    var fNac      = $("#fNac").val();
    var correo    = $("#correo").val();
    var curp      = $("#curp").val();
    var domicilio = $("#domicilio").val();
    var sexo      = $("#sexo").val();
    var ecivil    = $("#ecivil").val();

    swal({
        title: "¿Estas Seguro?",
        text: "¿Deseas Guardar la información?",
        type: "info",
        showCancelButton: true,
        confirmButtonClass: "btn-primary",
        confirmButtonText: "Si deseo guardarla",
        cancelButtonText: "Cancelar Acción",
        cancelButtonClass: "btn-outline-danger",
        closeOnConfirm: false,
        closeOnCancel: true,
        showLoaderOnConfirm: true
      }, function (isConfirm) {
        if (isConfirm) {
        setTimeout(function () {
            swal.close();
            $.ajax({
                url:"../mDatosPersonales/guardar.php",
                type:"POST",
                dateType:"html",
                data:{clave,nombre,apPaterno,apMaterno,fNac,correo,curp,domicilio,sexo,ecivil},
                success:function(respuesta){
                    
                    $("#guardar-DP").hide();
                    llenar_lista_DP();
                    $("#frmGuardar-DP")[0].reset();
                    selectTwo();
                    alertify.success("<i class='fa fa-save fa-lg'></i>", 2);
                    $('#nombre').focus();
                    actividad  ="Se insertado un nuevo registro a la tabla "+nombreModulo_DP;
                    var idUser=$("#inicioIdusuario").val();
                    log(actividad,idUser);
        
                },
                error:function(xhr,status){
                    alert("Error en metodo AJAX"); 
                },
            });
        }, 2000);}
        else{
            alertify.error(" <i class='fa fa-times fa-lg'></i> Cancelado",2);
        }
      });

    e.preventDefault();
    return false;
});

$("#frmActualizar-DP").submit(function(e){

    var id        = $("#eId").val();
    var nombre    = $("#eNombre").val();
    var apPaterno = $("#eApPaterno").val();
    var apMaterno = $("#eApMaterno").val();
    var fNac      = $("#eFnac").val();
    var correo    = $("#eCorreo").val();
    var curp      = $("#eCurp").val();
    var clave     = $("#eClave").val();
    var domicilio = $("#eDomicilio").val();
    var sexo      = $("#eSexo").val();
    var ecivil    = $("#eEcivil").val();

    swal({
        title: "¿Estas Seguro?",
        text: "¿Deseas Actualizar la información?",
        type: "info",
        showCancelButton: true,
        confirmButtonClass: "btn-success",
        confirmButtonText: "Si deseo actualizarla",
        cancelButtonText: "Cancelar Acción",
        cancelButtonClass: "btn-outline-danger",
        closeOnConfirm: false,
        closeOnCancel: true,
        showLoaderOnConfirm: true
      }, function (isConfirm) {
        if (isConfirm) {
        setTimeout(function () {
            swal.close();
            $.ajax({
                url:"../mDatosPersonales/actualizar.php",
                type:"POST",
                dateType:"html",
                data:{clave,id,nombre,apPaterno,apMaterno,fNac,correo,curp,clave,domicilio,sexo,ecivil},
                success:function(respuesta){
                    //console.log(respuesta);
                    llenar_lista_DP();
                        $("#frmGuardar-DP")[0].reset();
                        $("#frmActualizar-DP")[0].reset();
                        alertify.success("<i class='fa fa-bolt fa-lg'></i>", 2);
                    $("#btnCancelarG-DP , #btnCancelarA-DP").click();
                    actividad  ="Se ha modificado un registro de la tabla tabla "+nombreModulo_DP;
                    var idUser=$("#inicioIdusuario").val();
                    log(actividad,idUser);
                    
                    $('#nombre').focus();
                },
                error:function(xhr,status){
                    alert("Error en metodo AJAX"); 
                },
            });
        }, 2000);}
        else{
            alertify.error(" <i class='fa fa-times fa-lg'></i> Cancelado",2);
        }
      });

    e.preventDefault();
    return false;
});

function llenar_lista_DP(){
    abrirModalCarga('Cargando Lista');
    $("#frmGuardar-DP")[0].reset();
    $("#Listado-DP").hide();
    $.ajax({
        url:"../mDatosPersonales/lista.php",
        type:"POST",
        dateType:"html",
        data:{},
        success:function(respuesta){
            $("#Listado-DP").html(respuesta);
            $("#Listado-DP").fadeIn("slow");
            cerrarModalCarga();      
            $("#nombre").focus();
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
}

function edad(fecha){
    $.ajax({
        url:"../mDatosPersonales/calcularEdad.php",
        type:"POST",
        dateType:"html",
        data:{fecha},
        success:function(respuesta){

            $("#edad").val(respuesta);
            $("#eEdad").val(respuesta);

            xedad= parseInt(respuesta);
            if (xedad < 0) {
                
                $("#edad, #eEdad , #fNac , #efNac").css("color", rojo);
            } else {
                
                $("#edad, #eEdad , #fNac , #efNac").css("color", obscuro);
            }
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
}

function llenar_formulario_DP(id,nombre,apPaterno,apMaterno,fNac,edad,correo,curp,clave,domicilio,sexo,ecivil){
   
    $("#eId").val(id);
    $("#eClave").val(clave);
    $("#eNombre").val(nombre);
    $("#eApPaterno").val(apPaterno);
    $("#eApMaterno").val(apMaterno);
    $("#eFnac").val(fNac);
    $("#eEdad").val(edad);
    $("#eCorreo").val(correo);
    $("#eCurp").val(curp);
    $("#eClave").val(clave);
    $("#eDomicilio").val(domicilio);
    $("#eSexo").val(sexo);
    $("#eEcivil").val(ecivil);

    selectTwo();

    $("#lblTitular").text(nombreModulo_DP);
    $("#badgeInfo").text("Modificar datos");

    $("#guardar-DP").hide();
    $("#Listado-DP").hide();
    $("#editar-DP").fadeIn();
    $("#eNombre").focus();
}

function cambiar_estatus_DP(id,consecutivo){

    var valor=$("#check"+consecutivo).val();
    var contravalor=(valor==1)?0:1;
    $("#check"+consecutivo).val(contravalor);

    $.ajax({
        url:"../mDatosPersonales/cEstatus.php",
        type:"POST",
        dateType:"html",
        data:{id,contravalor},
        success:function(respuesta){
            // console.log(respuesta);
            if(contravalor==1){
                alertify.success("<i class='fa fa-check fa-lg'></i>", 2);
                $("#btnEditar-DP"+consecutivo).removeAttr('disabled');
                $("#btnImprimir-DP"+consecutivo).removeAttr('disabled');
                $("#btnModal-DP"+consecutivo).removeAttr('disabled');
                $("#btnFoto-DP"+consecutivo).removeAttr('disabled');
                $("#btnSonido-DP"+consecutivo).removeAttr('disabled');
                $("#icoSound-DP"+consecutivo).removeClass("fa fa-volume-mute fa-lg");
                $("#icoSound-DP"+consecutivo).addClass("fa fa-volume-up fa-lg");
                actividad  ="Se ha reactivado un registro de la tabla tabla "+nombreModulo_DP;
                var idUser=$("#inicioIdusuario").val();
                log(actividad,idUser);
            }else{
                alertify.error("<i class='fa fa-times fa-lg'></i>", 2);
                $("#btnEditar-DP"+consecutivo).attr('disabled','disabled');
                $("#btnImprimir-DP"+consecutivo).attr('disabled','disabled');
                $("#btnModal-DP"+consecutivo).attr('disabled','disabled');
                $("#btnFoto-DP"+consecutivo).attr('disabled','disabled');
                $("#btnSonido-DP"+consecutivo).attr('disabled','disabled');
                $("#icoSound-DP"+consecutivo).removeClass("fa fa-volume-up fa-lg");
                $("#icoSound-DP"+consecutivo).addClass("fa fa-volume-mute fa-lg");
                actividad  ="Se ha desactivado un registro de la tabla tabla "+nombreModulo_DP;
                var idUser=$("#inicioIdusuario").val();
                log(actividad,idUser);
            }
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });

}

function abrirModalDatos_DP(id,nombre,apPaterno,apMaterno,fNac,edad,correo,curp,clave,domicilio,sexo,ecivil) {
    $("#modalTitle-DP").text("Datos personales - "+nombre+' '+apPaterno);

    $("#mNombre").val(nombre);
    $("#mApPaterno").val(apPaterno);
    $("#mApMaterno").val(apMaterno);
    $("#mFnac").val(fNac);
    $("#mEdad").val(edad);
    $("#mCorreo").val(correo);
    $("#mCurp").val(curp);
    $("#mClave").val(clave);
    $("#mDomicilio").val(domicilio);
    $("#mSexo").val(sexo);
    $("#mEcivil").val(ecivil);

    selectTwo();

    $("#modalDatos-DP").modal("show");
}


//Manipulacion de eventos con jquery
$("#fNac").change(function(){
    var fecha = $(this).val();
    edad(fecha);
    ;
});

$("#efNac").change(function(){
    var fecha = $(this).val();
    edad(fecha);

});

$("#btnCancelarG-DP , #btnCancelarA-DP").click(function(){
    $("#editar-DP").hide();
    $("#guardar-DP").hide();

    $("#lblTitular").text(nombreModulo_DP);
    $("#badgeInfo").text("Lista");

    $("#Listado-DP").fadeIn();
 
});


$("#clave").keydown(function() {
    var valor=$(this).val();
    soloNumeros(valor);
});

$("#curp , #eCurp").keyup(function() {

    valor=$(this);
    // Convierte en mayuscula
    valor.val(valor.val().toUpperCase());
    
    //validar curp + expresion regular
    if (curpValida(valor.val())=="Si") {
        //$("#btnGuardar-DP").removeAttr('disabled');
        $(valor).css("color", obscuro);
        alertify.success("Curp valida !",1);
    }else{
        //$("#btnGuardar-DP").attr('disabled','disabled');
        $(valor).css("color", rojo);
    }

});

$("#clave").keyup(function(){
    var valor=$(this).val();
    revisar_clave(valor);
});

//Manipulacion de eventos con jquery

//Revisar clave repetida
function revisar_clave(valor){
    $.ajax({
        url:"../mDatosPersonales/rClave.php",
        type:"POST",
        dateType:"html",
        data:{valor},
        success:function(respuesta){
            res =parseInt(respuesta);
            if (res == 0) {
                $("#clave").css("color", obscuro);
            }else{
                $("#clave").css("color", rojo);
            }
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
}

//validar curp
function curpValida(valor) {

    var validador;
    var curp=valor;

    // Expresion regular para curp
    var re = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
        validado = curp.match(re);
    
    if (!validado){  //Coincide con el formato general?
        validador = "No";
    }else{
        validador = "Si";
    }
    return validador;
}

//llenar combo
function combo_ecivil()
{
    $.ajax({
        url : '../mDatosPersonales/comboEcivil.php',
        data : {},
        type : 'POST',
        dataType : 'html',
        success : function(respuesta) {
            
            $("#ecivil , #eEcivil , #mEcivil , #eDesc").empty();
            $("#ecivil , #eEcivil , #mEcivil , #eDesc").html(respuesta);    
            selectTwo();
        },
        error : function(xhr, status) {
            alert('Disculpe, existió un problema');
        },
    });
}

function nuevo_registro_DP(){
    $("#lblTitular").text(nombreModulo_DP);
    $("#badgeInfo").text("Nuevo registro");

    $("#Listado-DP").hide();
    $("#guardar-DP").fadeIn();
    $('#frmGuardar-DP')[0].reset();
    $("#clave").focus();
    
}

function abrirModalFoto(id,clave,nombre,valorfoto) {

    $("#clavePersona").val(clave);
    $("#txtTitularFoto").text(nombre);

    if (valorfoto=="No") {
        $('#formVista').hide();
        $('#formSubida').fadeIn();
        $('#formSubida')[0].reset();
    }else{
        $('#formSubida').hide();
        $('#formVista').fadeIn();
        var archivo='../fotos/'+clave+".jpg";
        $("#imgFoto").attr("src",archivo);
    }
    
    $("#modalFoto").modal("show");

}

function  eliminarFoto(){

    var formData = new FormData();
    var clave=$('#clavePersona').val();
    formData.append('clave',clave);

    swal({
        title: "¿Estas Seguro?",
        text: "¿Deseas eliminar la foto?",
        type: "info",
        showCancelButton: true,
        confirmButtonClass: "btn-dark",
        confirmButtonText: "Si deseo eliminarla",
        cancelButtonText: "Cancelar Acción",
        cancelButtonClass: "btn-outline-danger",
        closeOnConfirm: false,
        closeOnCancel: true,
        showLoaderOnConfirm: true
      }, function (isConfirm) {
        if (isConfirm) {
        setTimeout(function () {
            swal.close();
            $.ajax({
                url: '../mDatosPersonales/fotoBorrar.php',
                type: 'post',
                data: formData,
                contentType: false,
                processData: false,
                success: function(response) {
                  var res=parseInt(response);
                  switch(res){
                    case 0 :
                        alertify.error("<i class='fa fa-times fa-lg'></i> No se encuentra el archivo",1);
                        $("#modalFoto").modal("hide");
                        llenar_lista_DP();
                      break;
                    case 1 :
                        alertify.warning("<i class='fa fa-check fa-lg'></i> Foto Eliminada",1);
                        $("#modalFoto").modal("hide");
                        llenar_lista_DP();
                        break;
                  }
        
                },
                error:function(xhr,status){
                    alertify.error('Error en proceso');
                },
            });
        }, 2000);}
        else{
            alertify.error(" <i class='fa fa-times fa-lg'></i> Cancelado",2);
        }
      });

}

function subirFoto(){
    var formData = new FormData();

    var files = $('#image')[0].files[0];

    var clave=$('#clavePersona').val();
    var tam=$('#tamanoKB').val();

    formData.append('file',files);
    formData.append('clave',clave);
    formData.append('tam',tam);

    $.ajax({
        url: '../mDatosPersonales/fotoSubir.php',
        type: 'post',
        data: formData,
        contentType: false,
        processData: false,
        success: function(response) {
          var res=parseInt(response);
          switch(res){
            case 0 :
                alertify.success("<i class='fas fa-file-upload'></i>",1);
                $("#modalFoto").modal("hide");
                llenar_lista_DP();
              break;
            case 1 :

                swal({
                    title: "Error!",
                    text: "No ha sido posible cargar el archivo debido a que este debe de tener extención jpg y no debe de sobrepasar los 3 megabytes",
                    type: "error",
                    confirmButtonClass: "btn-dark",
                    confirmButtonText: "Enterado"
                }, function (isConfirm) {
                    alertify.message("Gracias !");
                });
              break;
            default:
                  alertify.error("<i class='fa fa-times fa-lg'></i>",1);
          }

        },
        error:function(xhr,status){
            alertify.error('Error en proceso');
        },
    });
// return false;
}



function abrirModalHorario(id, nombre, valorHorario, turno, l_entrada, l_salida, m_entrada, m_salida, mi_entrada, mi_salida, j_entrada, j_salida, v_entrada, v_salida, s_entrada, s_salida, d_entrada, d_salida) {

    $("#txtTitularHorario").text(nombre);
    console.log(id,nombre,valorHorario);

    if (valorHorario=="No") {
        $("#Idh").text(""+id);
        
        $('#formEditarHorario').hide();
        $('#formSubidaHorario').fadeIn();
        $('#formSubidaHorario')[0].reset();
    }else{
        $("#IdhE").text(""+id);
        $("#turnoE").val(turno);
        if(turno=="Especial"){
            limpiarCampos2();
        }else{
            desabilitar2();
        }
        $('#LunesEntradaE').val(l_entrada);
        $('#LunesSalidaE').val(l_salida);
        $('#MartesEntradaE').val(m_entrada);
        $('#MartesSalidaE').val(m_salida);
        $('#MiercolesEntradaE').val(mi_entrada);
        $('#MiercolesSalidaE').val(mi_salida);
        $('#JuevesEntradaE').val(j_entrada);
        $('#JuevesSalidaE').val(j_salida);
        $('#ViernesEntradaE').val(v_entrada);
        $('#ViernesSalidaE').val(v_salida);
        document.getElementById("HorasTrabajadasE").value = "30:00 hrs";
        $('#btnActualizarH').prop('disabled', false);

        $('#formSubidaHorario').hide();
        $('#formEditarHorario').fadeIn();
        
    }
    
    $("#modalHorario").modal("show");
    
}


var seis="06:00";
var doce="12:00";
var dieciocho="18:00";
var cero="23:59";

$("#turno").on('change',function(){
    var turno = $('select[id=turno]').val();
    if (turno=="Especial") {
        limpiarCampos();
        limpiarCampos();
        $('#btnSubirH').prop('disabled', false);
    }
    if (turno == "Matutino") {
        desabilitar();
        $('#LunesEntrada').val(seis);
        $('#LunesSalida').val(doce);
        $('#MartesEntrada').val(seis);
        $('#MartesSalida').val(doce);
        $('#MiercolesEntrada').val(seis);
        $('#MiercolesSalida').val(doce);
        $('#JuevesEntrada').val(seis);
        $('#JuevesSalida').val(doce);
        $('#ViernesEntrada').val(seis);
        $('#ViernesSalida').val(doce);
        document.getElementById("HorasTrabajadas").value = "30:00 hrs";
        $('#btnSubirH').prop('disabled', false);


    }
    if (turno == "Vespertino") {
        desabilitar();
        $('#LunesEntrada').val(doce);
        $('#LunesSalida').val(dieciocho);
        $('#MartesEntrada').val(doce);
        $('#MartesSalida').val(dieciocho);
        $('#MiercolesEntrada').val(doce);
        $('#MiercolesSalida').val(dieciocho);
        $('#JuevesEntrada').val(doce);
        $('#JuevesSalida').val(dieciocho);
        $('#ViernesEntrada').val(doce);
        $('#ViernesSalida').val(dieciocho);
        document.getElementById("HorasTrabajadas").value = "30:00 hrs";
        $('#btnSubirH').prop('disabled', false);

    }
    if (turno == "Nocturno") {
        desabilitar();
        $('#LunesEntrada').val(dieciocho);
        $('#LunesSalida').val(cero);
        $('#MartesEntrada').val(dieciocho);
        $('#MartesSalida').val(cero);
        $('#MiercolesEntrada').val(dieciocho);
        $('#MiercolesSalida').val(cero);
        $('#JuevesEntrada').val(dieciocho);
        $('#JuevesSalida').val(cero);
        $('#ViernesEntrada').val(dieciocho);
        $('#ViernesSalida').val(cero);
        document.getElementById("HorasTrabajadas").value = "30:00 hrs";
        $('#btnSubirH').prop('disabled', false);

    }
});

function desabilitar() {
    $('#LunesEntrada').prop('disabled', true);
    $('#LunesSalida').prop('disabled', true);
    $('#MartesEntrada').prop('disabled', true);
    $('#MartesSalida').prop('disabled', true);
    $('#MiercolesEntrada').prop('disabled', true);
    $('#MiercolesSalida').prop('disabled', true);
    $('#JuevesEntrada').prop('disabled', true);
    $('#JuevesSalida').prop('disabled', true);
    $('#ViernesEntrada').prop('disabled', true);
    $('#ViernesSalida').prop('disabled', true);
    $('#SabadoEntrada').prop('disabled', true);
    $('#SabadoSalida').prop('disabled', true);
    $('#DomingoEntrada').prop('disabled', true);
    $('#DomingoSalida').prop('disabled', true);

}

function desabilitar2() {
    $('#LunesEntradaE').prop('disabled', true);
    $('#LunesSalidaE').prop('disabled', true);
    $('#MartesEntradaE').prop('disabled', true);
    $('#MartesSalidaE').prop('disabled', true);
    $('#MiercolesEntradaE').prop('disabled', true);
    $('#MiercolesSalidaE').prop('disabled', true);
    $('#JuevesEntradaE').prop('disabled', true);
    $('#JuevesSalidaE').prop('disabled', true);
    $('#ViernesEntradaE').prop('disabled', true);
    $('#ViernesSalidaE').prop('disabled', true);
    $('#SabadoEntradaE').prop('disabled', true);
    $('#SabadoSalidaE').prop('disabled', true);
    $('#DomingoEntradaE').prop('disabled', true);
    $('#DomingoSalidaE').prop('disabled', true);

}

function limpiarCampos(){
    
    $('#LunesEntrada').val('').prop('disabled', false);
    $('#LunesSalida').val('').prop('disabled', false);
    $('#MartesEntrada').val('').prop('disabled', false);
    $('#MartesSalida').val('').prop('disabled', false);
    $('#MiercolesEntrada').val('').prop('disabled', false);
    $('#MiercolesSalida').val('').prop('disabled', false);
    $('#JuevesEntrada').val('').prop('disabled', false);
    $('#JuevesSalida').val('').prop('disabled', false);
    $('#ViernesEntrada').val('').prop('disabled', false);
    $('#ViernesSalida').val('').prop('disabled', false);
    $('#SabadoEntrada').val('').prop('disabled', false);
    $('#SabadoSalida').val('').prop('disabled', false);
    $('#DomingoEntrada').val('').prop('disabled', false);
    $('#DomingoSalida').val('').prop('disabled', false);
    $('#HorasTrabajadas').val('');


    console.log("Los campos se han limpiado");
}


function limpiarCampos2(){
    
    $('#LunesEntradaE').val('--:--').prop('disabled', false);
    $('#LunesSalidaE').val('--:--').prop('disabled', false);
    $('#MartesEntradaE').val('--:--').prop('disabled', false);
    $('#MartesSalidaE').val('--:--').prop('disabled', false);
    $('#MiercolesEntradaE').val('--:--').prop('disabled', false);
    $('#MiercolesSalidaE').val('--:--').prop('disabled', false);
    $('#JuevesEntradaE').val('--:--').prop('disabled', false);
    $('#JuevesSalidaE').val('--:--').prop('disabled', false);
    $('#ViernesEntradaE').val('--:--').prop('disabled', false);
    $('#ViernesSalidaE').val('--:--').prop('disabled', false);
    $('#SabadoEntradaE').val('--:--').prop('disabled', false);
    $('#SabadoSalidaE').val('--:--').prop('disabled', false);
    $('#DomingoEntradaE').val('--:--').prop('disabled', false);
    $('#DomingoSalidaE').val('--:--').prop('disabled', false);
    $('#HorasTrabajadasE').val('');


    console.log("Los campos se han limpiado");
}


function subirHorario() {

    var idDatos = $("#Idh").text();
    var turno = $("#turno").val(); 
    var lunesE = $("#LunesEntrada").val();
    var lunesS = $("#LunesSalida").val();
    var martesE = $("#MartesEntrada").val();
    var martesS = $("#MartesSalida").val();
    var miercolesE = $("#MiercolesEntrada").val();
    var miercolesS = $("#MiercolesSalida").val();
    var juevesE = $("#JuevesEntrada").val();
    var juevesS = $("#JuevesSalida").val();
    var viernesE = $("#ViernesEntrada").val();
    var viernesS = $("#ViernesSalida").val();
    var sabadoE = $("#SabadoEntrada").val();
    var sabadoS = $("#SabadoSalida").val();
    var domingoE = $("#DomingoEntrada").val();
    var domingoS = $("#DomingoSalida").val();
    var nombreP = $("#txtTitularHorario").text();

    console.log(idDatos, turno, lunesE);

    swal({
        title: "¿Estas Seguro?",
        text: "¿Deseas Guardar el horario?",
        type: "info",
        showCancelButton: true,
        confirmButtonClass: "btn-primary",
        confirmButtonText: "Si deseo guardarla",
        cancelButtonText: "Cancelar Acción",
        cancelButtonClass: "btn-outline-danger",
        closeOnConfirm: false,
        closeOnCancel: true,
        showLoaderOnConfirm: true
      }, function (isConfirm) {
        if (isConfirm) {
        setTimeout(function () {
            swal.close();
            $.ajax({
                url:"../mDatosPersonales/horarioGuardar.php",
                type:"POST",
                dateType:"html",
                data:{idDatos,turno,lunesE,lunesS,martesE,martesS,miercolesE,miercolesS,juevesE,juevesS,viernesE,viernesS,sabadoE,sabadoS,domingoE,domingoS},
                success:function(respuesta){
                    
                    //$("#guardar-DP").hide();
                    llenar_lista_DP();
                    $("#formSubidaHorario")[0].reset();
                    //selectTwo();
                    alertify.success("<i class='fa fa-save fa-lg'></i>", 2);
                    // $('#nombre').focus();
                    actividad  ="Se ha creado un horario para la persona " + nombreP;
                    var idUser=$("#inicioIdusuario").val();
                    log(actividad,idUser);
                    $('#modalHorario').modal('hide');
        
                },
                error:function(xhr,status){
                    alert("Error en metodo AJAX"); 
                },
            });
        }, 2000);}
        else{
            alertify.error(" <i class='fa fa-times fa-lg'></i> Cancelado",2);
        }
      });
}





function actualizarHorario() {
    var nombreP = $("#txtTitularHorario").text();
    var idDatos = $("#IdhE").text();
    var turno = $("#turnoE").val(); 
    var lunesE = $("#LunesEntradaE").val();
    var lunesS = $("#LunesSalidaE").val();
    var martesE = $("#MartesEntradaE").val();
    var martesS = $("#MartesSalidaE").val();
    var miercolesE = $("#MiercolesEntradaE").val();
    var miercolesS = $("#MiercolesSalidaE").val();
    var juevesE = $("#JuevesEntradaE").val();
    var juevesS = $("#JuevesSalidaE").val();
    var viernesE = $("#ViernesEntradaE").val();
    var viernesS = $("#ViernesSalidaE").val();
    var sabadoE = $("#SabadoEntradaE").val();
    var sabadoS = $("#SabadoSalidaE").val();
    var domingoE = $("#DomingoEntradaE").val();
    var domingoS = $("#DomingoSalidaE").val();

    console.log(""+nombreP);

    swal({
        title: "¿Estas Seguro?",
        text: "¿Deseas actualizar el horario?",
        type: "info",
        showCancelButton: true,
        confirmButtonClass: "btn-primary",
        confirmButtonText: "Si deseo Actualizarlo",
        cancelButtonText: "Cancelar Acción",
        cancelButtonClass: "btn-outline-danger",
        closeOnConfirm: false,
        closeOnCancel: true,
        showLoaderOnConfirm: true
      }, function (isConfirm) {
        if (isConfirm) {
        setTimeout(function () {
            swal.close();
            $.ajax({
                url:"../mDatosPersonales/horarioActualizar.php",
                type:"POST",
                dateType:"html",
                data:{idDatos,turno,lunesE,lunesS,martesE,martesS,miercolesE,miercolesS,juevesE,juevesS,viernesE,viernesS,sabadoE,sabadoS,domingoE,domingoS},
                success:function(respuesta){
                    
                    //$("#guardar-DP").hide();
                    llenar_lista_DP();
                    //$("#formEditarHorario")[0].reset();
                    //selectTwo();
                    alertify.success("<i class='fa fa-save fa-lg'></i>", 2);
                    // $('#nombre').focus();
                    actividad  ="Se ha actualizado un horario para la persona " + nombreP;
                    var idUser=$("#inicioIdusuario").val();
                    log(actividad,idUser);
                    $('#modalHorario').modal('hide');
        
                },
                error:function(xhr,status){
                    alert("Error en metodo AJAX"); 
                },
            });
        }, 2000);}
        else{
            alertify.error(" <i class='fa fa-times fa-lg'></i> Cancelado",2);
        }
      });
}








//Variables Globales


var lunesMinutos;
var martesHoras;
var martesMinutos
var miercolesHoras;
var miercolesMinutos;
var juevesHoras;
var juevesMinutos;
var viernesHoras;
var viernesMinutos;
var sabadoHoras;
var sabadoMinutos;
var domingoHoras;
var domingoMinutos;
var resultado;

function sumarhoras() {
    horalunes = parseInt(lunesHoras);
    minutoslunes = parseInt(lunesMinutos);
    horamartes = parseInt(martesHoras);
    minutosmartes = parseInt(martesMinutos);
    horasmiercoles = parseInt(miercolesHoras);
    minutosmiercoles = parseInt(miercolesMinutos);
    horasjueves = parseInt(juevesHoras);
    minutosjueves = parseInt(juevesMinutos);
    horasviernes = parseInt(viernesHoras);
    minutosviernes = parseInt(viernesMinutos);
    horassabado = parseInt(sabadoHoras);
    minutossabado = parseInt(sabadoMinutos);
    horasdomingo = parseInt(domingoHoras);
    minutosdomingo = parseInt(domingoMinutos);

    
    var sumaminutos = minutoslunes + minutosmartes + minutosmiercoles + minutosjueves + minutosviernes + minutossabado + minutosdomingo;

    var horasminutos = sumaminutos / 60;

    var minutosrestantes = Math.round(sumaminutos % 60);

    var sumahoras = horasminutos + horalunes + horamartes + horasmiercoles + horasjueves + horasviernes + horassabado + horasdomingo;

    console.log(horalunes + " minutos:" + minutoslunes);
    console.log(horamartes + " minutos:" + minutosmartes);
    console.log(horasmiercoles + " minutos:" + minutosmiercoles);
    console.log(horasjueves + " minutos:" + minutosjueves);
    console.log(horasviernes + " minutos:" + minutosviernes);
    console.log(horassabado + " minutos:" + minutossabado);
    console.log(horasdomingo + " minutos:" + minutosdomingo);
    console.log(minutosrestantes+" "+ sumahoras);

    document.getElementById("HorasTrabajadas").value = sumahoras+":"+minutosrestantes;

}

function sumar(horaE,horaS,dia) {
    leMinutos=parseInt(horaS.substr(3,2));
    leHoras=parseInt(horaS.substr(0,2));

    lsMinutos=parseInt(horaE.substr(3,2));
    lsHoras=parseInt(horaE.substr(0,2));

    if ( (leHoras > lsHoras)||(leHoras==lsHoras && leMinutos >=lsMinutos)) {
        document.getElementById("HorasTrabajadas").value = "No Funciona";
        return false
    }else{

        transMinutos = lsMinutos - leMinutos;
        transHoras = lsHoras - leHoras;

        if (transMinutos < 0) {
            transHoras--;
            transMinutos = 60 + transMinutos;
        }

        horas = transHoras.toString();
        minutos = transMinutos.toString();
        
        if (horas.length < 2) {
            horas = "0"+horas;
        }
        
        if (minutos.length < 2) {
            minutos = "0"+minutos;
        }
        if (dia="lunes") {
            
            lunesHoras=horas;
            lunesMinutos=minutos;
        }
        if (dia="martes") {
            martesHoras=horas;
            martesMinutos=minutos;
        }
        if (dia="miercoles") {
            miercolesHoras=horas;
            miercolesMinutos = minutos
        }
        if (dia = "jueves") {
            juevesHoras=horas;
            juevesMinutos=minutos;
        }
        if (dia = "viernes") {
            viernesHoras=horas;
            viernesMinutos=minutos;
        }
        if (dia = "sabado") {
            sabadoHoras=horas;
            sabadoMinutos= minutos;
        }
        if (dia = "domingo") {
            domingoHoras=horas;
            domingoMinutos=minutos;
        }

      //resultado=lunes+martes+miercoles+jueves+viernes+sabado+domingo;
        $("#HorasTrabajadas").val(horas + ":" + minutos);
        
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

$("#turnoE").on('change',function(){
    
    var turno = $('select[id=turnoE]').val();
    if (turno=="Especial") {
        limpiarCampos2();
        limpiarCampos2();
        $('#btnActualizarH').prop('disabled', true);
    }
    if (turno == "Matutino") {
        desabilitar2();
        $('#LunesEntradaE').val(seis);
        $('#LunesSalidaE').val(doce);
        $('#MartesEntradaE').val(seis);
        $('#MartesSalidaE').val(doce);
        $('#MiercolesEntradaE').val(seis);
        $('#MiercolesSalidaE').val(doce);
        $('#JuevesEntradaE').val(seis);
        $('#JuevesSalidaE').val(doce);
        $('#ViernesEntradaE').val(seis);
        $('#ViernesSalidaE').val(doce);
        document.getElementById("HorasTrabajadasE").value = "30:00 hrs";
        $('#btnActualizarH').prop('disabled', false);


    }
    if (turno == "Vespertino") {
        desabilitar2();
        $('#LunesEntradaE').val(doce);
        $('#LunesSalidaE').val(dieciocho);
        $('#MartesEntradaE').val(doce);
        $('#MartesSalidaE').val(dieciocho);
        $('#MiercolesEntradaE').val(doce);
        $('#MiercolesSalidaE').val(dieciocho);
        $('#JuevesEntradaE').val(doce);
        $('#JuevesSalidaE').val(dieciocho);
        $('#ViernesEntradaE').val(doce);
        $('#ViernesSalidaE').val(dieciocho);
        document.getElementById("HorasTrabajadasE").value = "30:00 hrs";
        $('#btnActualizarH').prop('disabled', false);

    }
    if (turno == "Nocturno") {
        desabilitar2();
        $('#LunesEntradaE').val(dieciocho);
        $('#LunesSalidaE').val(cero);
        $('#MartesEntradaE').val(dieciocho);
        $('#MartesSalidaE').val(cero);
        $('#MiercolesEntradaE').val(dieciocho);
        $('#MiercolesSalidaE').val(cero);
        $('#JuevesEntradaE').val(dieciocho);
        $('#JuevesSalidaE').val(cero);
        $('#ViernesEntradaE').val(dieciocho);
        $('#ViernesSalidaE').val(cero);
        document.getElementById("HorasTrabajadasE").value = "30:00 hrs";
        $('#btnActualizarH').prop('disabled', false);

    }
});






$("#LunesSalida").on('change',function(){
    var lentrada = document.getElementById('LunesEntrada').value;
    var lsalida = document.getElementById('LunesSalida').value;
    var dia = "lunes";
    sumar(lsalida,lentrada,dia)
});

$("#MartesEntrada").keyup(function(){
    var lentrada = document.getElementById('MartesEntrada').value;
    var lsalida = document.getElementById('MartesSalida').value;
    var dia = "martes";
    sumar(lsalida,lentrada,dia)
});
$("#MartesSalida").on('change',function(){
    var lentrada = document.getElementById('MartesEntrada').value;
    var lsalida = document.getElementById('MartesSalida').value;
    var dia = "martes";
    sumar(lsalida,lentrada,dia)
});
$("#MiercolesEntrada").keyup(function(){
    var lentrada = document.getElementById('MiercolesEntrada').value;
    var lsalida = document.getElementById('MiercolesSalida').value;
    var dia = "miercoles";
    sumar(lsalida,lentrada,dia)
});
$("#MiercolesSalida").on('change',function(){
    var lentrada = document.getElementById('MiercolesEntrada').value;
    var lsalida = document.getElementById('MiercolesSalida').value;
    var dia = "miercoles";
    sumar(lsalida,lentrada,dia)
});
$("#JuevesEntrada").keyup(function(){
    var lentrada = document.getElementById('JuevesEntrada').value;
    var lsalida = document.getElementById('JuevesSalida').value;
    var dia = "jueves";
    sumar(lsalida,lentrada,dia)
});
$("#JuevesSalida").on('change',function(){
    var lentrada = document.getElementById('JuevesEntrada').value;
    var lsalida = document.getElementById('JuevesSalida').value;
    var dia = "jueves";
    sumar(lsalida,lentrada,dia)
});
$("#ViernesEntrada").keyup(function(){
    var lentrada = document.getElementById('ViernesEntrada').value;
    var lsalida = document.getElementById('ViernesSalida').value;
    var dia = "viernes";
    sumar(lsalida,lentrada,dia)
});
$("#ViernesSalida").on('change',function(){
    var lentrada = document.getElementById('ViernesEntrada').value;
    var lsalida = document.getElementById('ViernesSalida').value;
    var dia = "viernes";
    sumar(lsalida,lentrada,dia)
});
$("#SabadoEntrada").keyup(function(){
    var lentrada = document.getElementById('SabadoEntrada').value;
    var lsalida = document.getElementById('SabadoSalida').value;
    var dia = "sabado";
    sumar(lsalida,lentrada,dia)
});
$("#SabadoSalida").on('change',function(){
    var lentrada = document.getElementById('SabadoEntrada').value;
    var lsalida = document.getElementById('SabadoSalida').value;
    var dia = "sabado";
    sumar(lsalida,lentrada,dia)
});
$("#DomingoEntrada").keyup(function(){
    var lentrada = document.getElementById('DomingoEntrada').value;
    var lsalida = document.getElementById('DomingoSalida').value;
    var dia = "domingo";
    sumar(lsalida,lentrada,dia)
});
$("#DomingoSalida").on('change',function(){
    var lentrada = document.getElementById('DomingoEntrada').value;
    var lsalida = document.getElementById('DomingoSalida').value;
    var dia = "domingo";
    sumar(lsalida,lentrada,dia)
});




