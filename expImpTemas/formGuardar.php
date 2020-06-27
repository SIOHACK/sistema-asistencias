<?php
//Variable de Nombre
$varGral="-TM";
?>
<form id="frmGuardar<?php echo $varGral?>">
    <div class="row">        
        <div class="col-xs-12 col-sm-8 col-md-8 col-lg-4">
            <div class="form-group">
                <label for="nombre">Nombre del Tema:</label>
                <input type="text" class="form-control activo" id="nombre" autofocus required>
            </div>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-2">
            <div class="form-group">
                <label for="colorLetra">Color de letra:</label>
                <input type="color" class="form-control activo" id="colorLetra" value="#000000" required >
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div class="form-group">
                <label for="colorBase">Color Base:</label>
                <input type="color" class="form-control activo" id="colorBase" value="#000000" required>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div class="form-group">
                <label for="colorBaseF">Color Base Fuerte:</label>
                <input type="color" class="form-control activo" id="colorBaseF" value="#000000" required>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div class="form-group">
                <label for="colorBorde">Color del Borde:</label>
                <input type="color" class="form-control activo" id="colorBorde" value="#000000" required >
            </div>
        </div>
        
        <div class="container">
            <div class="row">
                <div class="col text-left">
                    <button  type="button" class="btn btn-outline-danger  activo btnEspacio" id="btnCancelarG<?php echo $varGral?>">
                        <i class='fa fa-ban fa-lg'></i>
                        Cancelar
                    </button>
                </div>

                <div class="col text-right">
                    <button  type="submit" class="btn btn-outline-primary  activo btnEspacio" id="btnGuardar<?php echo $varGral?>">
                        <i class='fa fa-save fa-lg'></i>
                        Guardar Información
                    </button>
                </div>
            </div>
        </div>

    </div>

</form>