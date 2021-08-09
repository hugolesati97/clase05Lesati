/* const dev = {
  altura: "160cm",
  hijos: "0",
  estudios: "secundario",
  estadocivil: "soltero",
  nombre: "hugo",
};

function bebida(precio, marca, stock) {
  this.precio = precio;
  this.marca = marca;
  this.stock = stock;
}

const bebida1 = new bebida(150, "cocacola", 50);

console.log(bebida1) */

/* function tienda(nombre, propietario, direccion, rubro) {
  this.nombre = nombre;
  this.propietario = propietario;
  this.direccion = direccion;
  this.rubro = rubro;
}

const tienda1 = new tienda("kwik-e-mart", "apu", "Calle ficticia 719", "Almacen en general")

console.log (tienda1) */

//Proyecto stock de bebidas

function stock(marca, precio, cantidad) {
  this.marca = marca;
  this.precio = precio;
  this.cantidad = cantidad;
  this.action = function () {
    console.log("Usted tiene "+ this.cantidad + this.marca)
  }
}

const bebida1 = new stock("coca colas", 150, 40)
const bebida2 = new stock("fernet", 500, 10)
bebida1.action()
bebida2.action()