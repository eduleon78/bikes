var Bicicleta = function(id, marca, modelo, color, precio, ubicacion, vendida) {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.precio = precio;
    this.ubicacion = ubicacion;
    this.vendida = vendida;
}

Bicicleta.prototype.toString = function() {
    return `ID: ${this.id}, Marca: ${this.marca}, Modelo: ${this.modelo}, Color: ${this.color}, Precio: ${this.precio}, Ubicacion: ${this.ubicacion}, Vendida: ${this.vendida}`;
}

Bicicleta.allBicis = [];
Bicicleta.add = function(aBici) {
    Bicicleta.allBicis.push(aBici);
}

Bicicleta.findById = function(aBiciId) {
    var aBici = Bicicleta.allBicis.find(x => x.id == aBiciId);
    if (aBici) {
        return aBici;
    } else {
        return new Error(`No existe la bicicleta con el id ${aBiciId}`);
    }
}

Bicicleta.removeById = function(aBiciId) {
    for (var i = 0; i < Bicicleta.allBicis.length; i++) {
        if (Bicicleta.allBicis[i].id == aBiciId) {
            Bicicleta.allBicis.splice(i, 1);
            break;
        }
    }

}

var a = new Bicicleta(1, "Giant", "Talon", "Rojo", 500, [10.976499, -63.865986], false);
var b = new Bicicleta(2, "Trek", "Marlin", "Azul", 600, [10.977036, -63.865944], false);

Bicicleta.add(a);
Bicicleta.add(b);

export default {
    Bicicleta

}
