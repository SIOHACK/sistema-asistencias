<?php
//Variable de Nombre
$varGral="-TM";
?>
<form id="frmActualizar<?php echo $varGral?>">

<input type="hidden"  id="eIdTM">

    <div class="row">
        
        <div class="col-xs-12 col-sm-8 col-md-8 col-lg-4">
            <div class="form-group">
                <label for="nombreE">Nombre del Tema:</label>
                <input type="text" class="form-control activo" id="nombreE" autofocus required>
            </div>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-2">
            <div class="form-group">
                <label for="colorLetraE">Color de letra:</label>
                <input type="color" class="form-control activo" id="colorLetraE"  required >
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div class="form-group">
                <label for="colorBaseE">Color Base:</label>
                <input type="color" class="form-control activo" id="colorBaseE"  required>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div class="form-group">
                <label for="colorBaseFE">Color Base Fuerte:</label>
                <input type="color" class="form-control activo" id="colorBaseFE"  required>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div class="form-group">
                <label for="colorBordeE">Color del Borde:</label>
                <input type="color" class="form-control activo" id="colorBordeE"  required >
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col text-left">
                    <button  type="button" class="btn btn-outline-danger  activo btnEspacio" id="btnCancelarA<?php echo $varGral?>">
                        <i class='fa fa-ban fa-lg'></i>
                        Cancelar
                    </button>
                </div>
                <div class="col text-right">
                    <button  type="submit" class="btn btn-outline-success  activo btnEspacio" id="btnActualizar<?php echo $varGral?>">
                        <i class='fa fa-bolt fa-lg'></i>
                        Actualizar Información
                    </button>
                </div>
            </div>
        </div>

    </div>

</form>