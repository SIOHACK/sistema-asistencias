<div class="login-box" >
    <div class="login-box-body bordeLogin">

        <p class="tituloLogin">Sistema Control de Accesos</p>
        
        <form action="verificar_login.php" method="post" id="frmLogin" style="border-color:#40739e">
            <div class="form-group has-feedback logoActivo">
                <label class="lblTitulo">Usuario:</label>
            <input type="usuario" id="loginUsuario" class="form-control" placeholder="Escribe el nombre de usuario" autofocus required>
            </div>
            <div class="form-group has-feedback">
                <label class="lblTitulo">Contraseña:</label>
            <input type="password" id="loginContra" class="form-control" placeholder="Escribe la contraseña" required>
           
            </div>
                <div class="col text-center">
                    <label>Desea cambiar la contraseña:</label>
                    
                    <input type="checkbox" class="toggle-two" data-toggle="toggle" data-onstyle="outline-success" data-width="60" data-offstyle="outline-warning" data-on="<i class='fa fa-check'></i> Si" data-off="<i class='fa fa-times'></i> No" id="check" >
                    <br>
                    
                    <br>
                    <button   type="submit" class="btn btn-outline-dark active" id="btnIngresar" disabled>  
                        <i class="fas fa-lock" id="icoLogin"></i>
                        Ingresar al sistema
                    </button>
                </div>
            </div>
            <div class="modal fade" id="modalcontra" tabindex="-1" role="dialog" aria-labelledby="modalcontraLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modalcontraLabel">Cambio de Contraseña</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="contraseña-nueva" class="col-form-label">Nueva contraseña:</label>
                                    <input type="password" class="form-control" id="contraseña-nueva">
                                </div>
                                <div class="form-group">
                                    <label for="contraseña-confirmar" class="col-form-label">Confirmar contraseña:</label>
                                    <input type="password" class="form-control" id="contraseña-confirmar">
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-success" id="actualizar" disabled  >Actualizar contraseña</button>
                            <button type="button" class="btn btn-success" id="generar" onclick="generarContra(8)">Generar contraseña</button>

                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>