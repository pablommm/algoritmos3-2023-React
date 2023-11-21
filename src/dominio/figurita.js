export var FiguritaJSON = {
    idUsuario: Number,
    nombreUsuario: String,
    figurita: Figurita
  }
  
  export class FiguritaUsuario {
    constructor(idUsuario, nombreUsuario, figurita = new Figurita()) {
      this.idUsuario = idUsuario
      this.nombreUsuario = nombreUsuario
      this.figurita = figurita
    }
  
    static fromJson(figurita) {
      return Object.assign(new FiguritaUsuario(), figurita)
    }
  
    getId() {
      return this.figurita.id
    }
  
    getNombre() {
      return this.figurita.nombre
    }
  
    getApellido() {
      return this.figurita.apellido
    }
  
    getFechaNacimiento() {
      return this.figurita.fechaNacimiento
    }
  
    getNumeroCamiseta() {
      return this.figurita.numeroCamiseta
    }
  
    getSeleccion() {
      return this.figurita.seleccion
    }
  
    getAnioDebut() {
      return this.figurita.anioDebut
    }
  
    getAltura() {
      return this.figurita.altura
    }
  
    getPeso() {
      return this.figurita.peso
    }
  
    getPosicion() {
      return this.figurita.posicion
    }
  
    getPais() {
      return this.figurita.pais
    }
  
    getCotizacionJugador() {
      return this.figurita.cotizacionJugador
    }
  
    getOnFire() {
      return this.figurita.onFire
    }
  
    getNivelDeImpresion() {
      return this.figurita.nivelDeImpresion
    }
  
    getImagen() {
      return this.figurita.imagen
    }
  
    getEdad() {
      return this.figurita.edad
    }
  
    getValoracionBase() {
      return this.figurita.valoracionBase?.toFixed(2)
    }
  
    getValoracionFigurita() {
      return this.figurita.valoracionFigurita
    }
  
    getNumero() {
      return this.figurita.numero
    }
  
    getCopasDelMundo() {
      return this.figurita.copasDelMundo
    }
  
    getCopasConfederacion() {
      return this.figurita.copasConfederacion
    }
  
    getEsLider() {
      return this.figurita.esLider ? 'Es Lider' : 'No es Lider'
    }
  }

  export class Figurita {
    constructor(
      id,
      nombre,
      apellido,
      fechaNacimiento,
      numeroCamiseta,
      seleccion,
      anioDebut,
      altura,
      peso,
      posicion,
      pais,
      cotizacionJugador,
      onFire,
      nivelDeImpresion,
      esLider,
      imagen,
      edad,
      valoracionBase,
      valoracionFigurita,
      numero,
      copasDelMundo,
      copasConfederacion
    ) {
      this.id = id
      this.nombre = nombre
      this.apellido = apellido
      this.fechaNacimiento = fechaNacimiento
      this.numeroCamiseta = numeroCamiseta
      this.seleccion = seleccion
      this.anioDebut = anioDebut
      this.altura = altura
      this.peso = peso
      this.posicion = posicion
      this.pais = pais
      this.cotizacionJugador = cotizacionJugador
      this.onFire = onFire
      this.nivelDeImpresion = nivelDeImpresion
      this.esLider = esLider
      this.imagen = imagen
      this.edad = edad
      this.valoracionBase = valoracionBase
      this.valoracionFigurita = valoracionFigurita
      this.numero = numero
      this.copasDelMundo = copasDelMundo
      this.copasConfederacion = copasConfederacion
    }
  
    static fromJson(figurita) {
      return Object.assign(new Figurita(), figurita)
    }
  }
  