function edificio(calle, numero, codigop) {

    this.calle = calle;
    this.numero = numero;
    this.codigop = codigop;



    this.calle = modificarCalle;
    this.numero = modificarNumero;
    this.codigop = modificarCodigoPostal;
    this.plantas = plantas;
    this.arrayProp = new Array();

    document.write(+"<br>" + "Construido un nuevo edificio en la calle: " + this.calle + ", numero: " + this.numero + ", código postal: " + this.codigop);
}

function modificarNumero(numero) {
    this.numero = numero;
}

function modificarCalle(calle) {
    this.calle = calle;
}

function modificarCodigoPostal(codigop) {
    this.codigop = codigop;
}

function imprimeCalle() {
    document.write("La calle es: " + edificio.calle);
}

function imprimeNumero() {
    document.write("El numero de edificio es: " + edificio.numero);
}

function imprimeCodigoPostal() {
    document.write("El Código Postal del edificio es: " + edificio.codigop);
}

function agregarPlantasYPuertas(numplantas, puertas) {
    this.plantas = numplantas + this.plantas;
    this.puertas = puertas + this.puertas;

    document.write(numplantas + "plantas añadidas" + puertas + " puertas añadidas");

}

function agregarPropietario(nombre, planta, puerta) {
    this.arrayProp.push({ "nom": nombre, "planta": planta, "puerta": puerta });
    document.write("propietario añadido");

}

function imprimePlantas() {

}



var edificioA = new edificio('Garcia Prieto', '58', '15706');
var edificioB = new edificio('Camino Caneiro', '29', '32004');
var edificioC = new edificio('San Clemente', 's/n', '15705');