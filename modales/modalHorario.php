
<!-- Modal -->
<div class="modal fade" id="modalHorario" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document" >
    <div class="modal-content">
      <div class="modal-header" >
        <h5 class="modal-title" id="txtTitularHorario">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="areaImprimir">
        <form action="#" method="post" id="formSubidaHorario">
        <label id="Idh"></label>

          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div class="form-group">
                <label for="turno">Turno:</label>
                <select id="turno" class="select2" style="width: 100%" >
                  <option value="Especial" selected = "selected">Especial</option>
                  <option value="Matutino">Matutino</option>
                  <option value="Vespertino">Vespertino</option>
                  <option value="Nocturno">Nocturno</option>
                </select>
              </div>
            </div>
          </div>
            
          <div class="row">
            <div class="col-md-6">
              <label for="LunesEntrada">Lunes Entrada:</label>
              <input type="time" class="form-control" name="LunesEntrada" id="LunesEntrada" disabled>
            </div>
            <div class="col-md-6">
              <label for="LunesSalida">Lunes Salida:</label>
              <input type="time" class="form-control" name="LunesSalida" id="LunesSalida" disabled>
            </div>

            <div class="col-md-6">
              <label for="MartesEntrada">Martes Entrada:</label>
              <input type="time" class="form-control" name="MartesEntrada" id="MartesEntrada" disabled>
            </div>
            <div class="col-md-6">
              <label for="MartesSalida">Martes Salida:</label>
              <input type="time" class="form-control" name="MartesSalida" id="MartesSalida" disabled>
            </div>
            
            <div class="col-md-6">
              <label for="MiercolesEntrada">Miercoles Entrada:</label>
              <input type="time" class="form-control" name="MiercolesEntrada" id="MiercolesEntrada" disabled>
            </div>
            <div class="col-md-6">
              <label for="MiercolesSalida">Miercoles Salida:</label>
              <input type="time" class="form-control" name="MiercolesSalida" id="MiercolesSalida" disabled>
            </div>
              
            <div class="col-md-6">
              <label for="mJuevesEntrada">Jueves Entrada:</label>
              <input type="time" class="form-control" name="JuevesEntrada" id="JuevesEntrada" disabled>
            </div>
            <div class="col-md-6">
              <label for="JuevesSalida">Jueves Salida:</label>
              <input type="time" class="form-control" name="JuevesSalida" id="JuevesSalida" disabled>
            </div>

            <div class="col-md-6">
              <label for="ViernesEntrada">Viernes Entrada:</label>
              <input type="time" class="form-control" name="ViernesEntrada" id="ViernesEntrada" disabled>
            </div>
            <div class="col-md-6">
              <label for="ViernesSalida">Viernes Salida:</label>
              <input type="time" class="form-control" name="ViernesSalida" id="ViernesSalida" disabled>
            </div>
            
            <div class="col-md-6">
              <label for="SabadoEntrada">Sábado Entrada:</label>
              <input type="time" class="form-control" name="SabadoEntrada" id="SabadoEntrada" disabled>
            </div>
            <div class="col-md-6">
              <label for="SabadoSalida">Sábado Salida:</label>
              <input type="time" class="form-control" name="SabadoSalida" id="SabadoSalida" disabled>              
            </div>
            
            <div class="col-md-6">
              <label for="DomingoEntrada">Domingo Entrada:</label>
              <input type="time" class="form-control" name="DomingoEntrada" id="DomingoEntrada" disabled>
            </div>
            <div class="col-md-6">
              <label for="DomingoSalida">Domingo Salida:</label>
              <input type="time" class="form-control" name="DomingoSalida" id="DomingoSalida" disabled>
            </div>
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
            <div class="col-md-3">
              <label for="HorasTrabajadas"><b>Cantidad de Horas:</b></label>
              <input type="text" class="form-control" name="HorasTrabajadas" id="HorasTrabajadas" disabled>
            </div>
            
          </div>
          <div class="col">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" onclick="subirHorario();" class="btn btn-primary" disabled style="margin-top:8px;" id="btnSubirH"  >
            <i class="fas fa-check"></i> Subir Horario
            </button>
          </div>
        </form>

        <form action="#" method="post" id="formEditarHorario">
          <label id="IdhE"></label>

          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div class="form-group">
                <label for="turnoE">Turno:</label>
                <select id="turnoE" class="select2" style="width: 100%" >
                  <option value="Especial">Especial</option>
                  <option value="Matutino">Matutino</option>
                  <option value="Vespertino">Vespertino</option>
                  <option value="Nocturno">Nocturno</option>
                </select>
              </div>
            </div>
          </div>
            
          <div class="row">
            <div class="col-md-6">
              <label for="LunesEntradaE">Lunes Entrada:</label>
              <input type="time" class="form-control" name="LunesEntradaE" id="LunesEntradaE" disabled>
            </div>
            <div class="col-md-6">
              <label for="LunesSalidaE">Lunes Salida:</label>
              <input type="time" class="form-control" name="LunesSalidaE" id="LunesSalidaE" disabled>
            </div>

            <div class="col-md-6">
              <label for="MartesEntradaE">Martes Entrada:</label>
              <input type="time" class="form-control" name="MartesEntradaE" id="MartesEntradaE" disabled>
            </div>
            <div class="col-md-6">
              <label for="MartesSalidaE">Martes Salida:</label>
              <input type="time" class="form-control" name="MartesSalidaE" id="MartesSalidaE" disabled>
            </div>
            
            <div class="col-md-6">
              <label for="MiercolesEntradaE">Miercoles Entrada:</label>
              <input type="time" class="form-control" name="MiercolesEntradaE" id="MiercolesEntradaE" disabled>
            </div>
            <div class="col-md-6">
              <label for="MiercolesSalidaE">Miercoles Salida:</label>
              <input type="time" class="form-control" name="MiercolesSalidaE" id="MiercolesSalidaE" disabled>
            </div>
              
            <div class="col-md-6">
              <label for="mJuevesEntradaE">Jueves Entrada:</label>
              <input type="time" class="form-control" name="JuevesEntradaE" id="JuevesEntradaE" disabled>
            </div>
            <div class="col-md-6">
              <label for="JuevesSalidaE">Jueves Salida:</label>
              <input type="time" class="form-control" name="JuevesSalidaE" id="JuevesSalidaE" disabled>
            </div>

            <div class="col-md-6">
              <label for="ViernesEntradaE">Viernes Entrada:</label>
              <input type="time" class="form-control" name="ViernesEntradaE" id="ViernesEntradaE" disabled>
            </div>
            <div class="col-md-6">
              <label for="ViernesSalidaE">Viernes Salida:</label>
              <input type="time" class="form-control" name="ViernesSalidaE" id="ViernesSalidaE" disabled>
            </div>
            
            <div class="col-md-6">
              <label for="SabadoEntradaE">Sábado Entrada:</label>
              <input type="time" class="form-control" name="SabadoEntradaE" id="SabadoEntradaE" disabled>
            </div>
            <div class="col-md-6">
              <label for="SabadoSalidaE">Sábado Salida:</label>
              <input type="time" class="form-control" name="SabadoSalidaE" id="SabadoSalidaE" disabled>              
            </div>
            
            <div class="col-md-6">
              <label for="DomingoEntradaE">Domingo Entrada:</label>
              <input type="time" class="form-control" name="DomingoEntradaE" id="DomingoEntradaE" disabled>
            </div>
            <div class="col-md-6">
              <label for="DomingoSalidaE">Domingo Salida:</label>
              <input type="time" class="form-control" name="DomingoSalidaE" id="DomingoSalidaE" disabled>
            </div>
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
            <div class="col-md-3">
              <label for="HorasTrabajadasE"><b>Cantidad de Horas:</b></label>
              <input type="text" class="form-control" name="HorasTrabajadasE" id="HorasTrabajadasE" disabled>
            </div>
            
          </div>


          <div class="col ">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" onclick="actualizarHorario();" class="btn btn-primary" id="btnActualizarH" style="margin-top:8px;">
            <i class="fas fa-check"></i> Actualizar Horario
            </button>
          </div>

        </form>
      </div>
      <div class="modal-footer">
        
        
      </div>
    </div>
  </div>
</div>















          