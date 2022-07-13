var palabraVertical = "";
var listaPalabrasHorizontales = [];
var cantidadDeLetras = 6; // en caso de querer modificarlo en un futuro
// funcion para obtener una nueva palabra vertical
function nuevaPalabraVertical() {
    palabraVertical = document.Math.floor(Math.random() * /*document.*/length)
}

// funcion para obtener una nueva lista de palabras horizontales
function nuevaListaPalabrasHorizontales() {
    // primero vacío el array para después agregarle lo que quiera sin preocuparme de lo que había antes
    for (let i = listaPalabrasHorizontales.length; i > 0; i--) {
        listaPalabrasHorizontales.pop();
    }
    // ahora sí encuentro nuevas palabras horizontales
    for (i=0; i<=cantidadDeLetras;i++) {    
        let aleatorio = /*document.*/Math.floor(Math.random() * /*document.*/length)
        listaPalabrasHorizontales.push(aleatorio)
        // falta filtro para no repetir palabras
    }
}

// funcion para crear un nuevo codyCross (nueva palabra vertical y nuevas palabras horizontales)
function nuevoCodyCross() {
    nuevaPalabraVertical()
    nuevaListaPalabrasHorizontales()
}

// funcion para verificar las palabras
function corroborarPalabra() {
    return false
}

// funcion en caso de que la palabra verificada este bien
function palabraCorroboradaEstaBien() {
    return false
}

// funcion en caso de que la palabra verificada este mal
function palabraCorroboradaEstaMal() {
    return false
}

// funcion que verifica si ganaste
function verificadorSiGanaste() {
    return false
}
