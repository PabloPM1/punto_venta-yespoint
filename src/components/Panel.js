import React from 'react'
import './panel.css'
import  dbmanager  from './indexed'

let AddProd=(e)=>{
    e.preventDefault();
    const data = {
        taskProducto: e.target.buscar.value,
        taskDescripcion: e.target.descripcion.value,
        taskPrecio: e.target.precio.value,
        taskCantidad: e.target.cantidad.value,
        taskUnidad: e.target.unidad.value
    }
    console.log(data)
    dbmanager.addData(data);
}


function Panel() {
    return (
        <div className="panel panel-infoo">
            <div className="panel-headingg">
                punto de venta 2
            </div>
            <div className="panel panel-info">
                <div className="panel-heading">Seleccionar un Cliente</div>
                <div className="panel-body">
                    <div className="form-group">
                    <form className="estilo">
                        Buscar:
                        <input type="text" placeholder="PUBLICO EN GENERAL"/>
                    </form>
                    </div>
                </div>
            </div>
           
                <div className="panel panel-info">
                    <div className="panel-heading">Agregar Producto</div>
                        <div className="panel-body">
                            <div className="form-group">
                                <form id="form" xclassName="estilo" onSubmit={AddProd}>
                                    Buscar
                                    <input type="text" name="buscar" placeholder="Buscar producto o servicio"/>
                                    <input type="text" name="descripcion" placeholder="Descripcion"/>
                                    <input type="text" name="precio" placeholder="Precio venta"/>
                                    <input type="text" name="cantidad" placeholder="1"/>
                                    <input type="text" name= "unidad" placeholder="Unidad medida"/>
                                    <button type="submit" className="aplicar">add</button>
                                  
                                </form> 
                                                              
                                <div id="DivTablaDetallesV">
                                    <table className="table table-striped table-bordered table-hover table-condensed" id="datosProductos">
                                        <thead className="titulos">
                                            <tr>
                                                <th>Codigo</th>
                                                <th>Descripcion</th>
                                                <th>Precio unitario</th>
                                                <th>Cantidad</th>
                                                <th>Importe</th>
                                                <th>Opciones</th>
                                            </tr>
                                        </thead>
                                
                                <tbody id="borrarDatosFinal">
<tr>
<td>1</td>
<td>SERVICIO DE MANTENIMIENTO</td>
<td>100.0000</td>
<td>1</td>
<td>100</td>
<td>
<a className="link_eli_det_facV" productov="1" href="#">
<i clasName="fa fa-times">
</i>
&nbsp;Eliminar
</a>
</td>
</tr>
</tbody>

<tfoot id="borrarDatosFinal12">
    <tr>
        <td colspan="3">&nbsp;</td>
            <td align="right">
                <strong>sub-total:</strong>
            </td>
            <td colspan="2" align="right">
                <strong>$ 0.00</strong>
            </td>
    </tr>
    <tr>
        <td colspan="3">&nbsp;</td>
        <td align="right">
            <strong>I.V.A:</strong>
        </td>
        <td colspan="2" align="right">
            <strong>$ 0.00</strong>
        </td>
    </tr>
    <tr>
        <td colspan="3">&nbsp;</td>
        <td align="right">
            <strong>Total:</strong>
        </td>
        <td colspan="2" align="right">
            <strong>$ 0.00</strong>
        </td>
    </tr>
    <tr>
        <td>
            <input className="totalV" id="totalV" type="hidden" value="300.00"></input>
        </td>
        <td></td>
    </tr>
    <tr></tr>
</tfoot>
</table>
</div>
<div className="form-inline" align="right">
    <div className="form-group">
            <label>Descuento General</label>
                <input name="des" type="text" className="form-control input-sm" id="desCG" value="0" size="3"></input>
                    %
    </div>
    <div className="form-group">
        <button type="button" className="btn btn-primary" id="desCGB">Aplicar</button>
    </div>
</div>

                        </div>
                            </div>
                </div>
                
                
            
            <div className="panel panel-info">
                <div className="panel-heading">Forma de Pago</div>
                <div className="panel-body">
                    <div className="form-group">
                    <form className="estilo">
                        Forma de Pago:
                                <select className="form-controol" id="tipo_pagoV" name="tipo_pagoV">
                                <option value="1">Efectivo</option>
                                <option value="4">Tarjeta de Credito</option>
                                <option value="18">Tarjeta de Debito</option>
                                <option value="2">cheque nominativo</option>
                                <option value="7">Vales de despensa</option>
                                <option value="20">Por definir</option>
                        </select>
                        
                        Importe:
                        <input type="number" className="form-controool" id="pesosV" name="pesosV" placeholder="Pesos" size="10"/>
                        <button className="agregar">Registrar pago</button>
                    </form>
                    </div>
                    <div>
                    <table className="table table-striped table-bordered table-hover table-condensed">
                        <tbody>
                            <tr>
                                <td width="20%">1</td>
                                <td width="20%">Efectivo</td>
                                <td align="right" width="30%">$0.0000</td>
                                <td align="right" width="20%">
								<a title="Eliminar pago" class="el_pago_tempV" id_eps_pagosv="563" href="#i">
									<i class="fa fa-times"></i>
                                    Eliminar
								</a>
							</td>
                            </tr>
                        </tbody>
                        <tfoot className="tt">
                        <tr>
                            <td>Total:</td>
                            <td>$0</td>
							<td align="right">
                                <strong id="leyendaV">Debe:</strong>
                            </td>
							<td>$<strong id="restapagoV">0.00</strong>
                            </td>
						</tr>
                        </tfoot>
                        <input name="pago" id="cambioV" type="hidden" value="0.00"></input>
                    </table>
                    </div>
                </div>
                
            </div>
            <form className="estilo">             
            <button className="guardar">F(10) Guardar</button>
            </form>
        </div> 
           
                
    )
}

export default Panel




