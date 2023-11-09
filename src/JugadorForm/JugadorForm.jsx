
function JugadorForm() {
  return (
    <><head>
    </head><body /><main className="main-container" /><title>Formulario Punto de Venta</title><section className="sub-main-container" /><div className="formulario" /><form action="p" method="POST" /><label htmlFor="nombre">Nombre:</label><input type="text" name="nombre" required /><label htmlFor="nombre">Apellido:</label><input type="text" name="nombre" required /><label htmlFor="nombre">Fecha de nacimiento:</label><input type="date" name="nombre" required /><label htmlFor="coordenada_x">Altura:</label><input type="number" name="coordenada_x" step="any" required /><label htmlFor="coordenada_y">Peso:</label><input type="number" name="coordenada_y" step="any" required /><label htmlFor="sobres_disponibles">Nro Camiseta:</label><input type="number" name="sobres_disponibles" required min="0" /><label htmlFor="pedidos_pendientes">Seleccion :</label><input type="number" name="pedidos_pendientes" required min="0" /><label htmlFor="nombre">Año de debut en la seleccion:</label><input type="date" name="nombre" required /><label htmlFor="tipo_negocio">Posicion:</label><select name="tipo_negocio" className="select">
        <option value="Kiosko">Defensor</option>
        <option value="Supermercado">Delantero</option>
      </select><label htmlFor="on_fire">Es On Fire:</label><input type="checkbox" name="on_fire" /><label htmlFor="pedidos_pendientes">Cotización :</label><input type="number" name="pedidos_pendientes" required min="0" /><button className="secondary-button">Volver</button><button className="primary-button">Guardar</button></>


  )
}


export default JugadorForm
