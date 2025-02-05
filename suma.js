// Función para realizar la suma
function realizarSuma() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingresa números válidos en ambos campos.");
        return;
    }

    const suma = numero1 + numero2;
    document.getElementById("resultado").innerText = `La suma es: ${suma}`;
}

// Función para realizar la resta
function realizarResta() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingresa números válidos en ambos campos.");
        return;
    }

    const resta = numero1 - numero2;
    document.getElementById("resultado").innerText = `La resta es: ${resta}`;
}

// Función para realizar la multiplicacion
function realizarMultiplicacion() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingresa números válidos en ambos campos.");
        return;
    }

    const resta = numero1 * numero2;
    document.getElementById("resultado").innerText = `La multiplicacion es: ${resta}`;
}

// Función para realizar la divicion
function realizarDivision() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingresa números válidos en ambos campos.");
        return;
    }

    const resta = numero1 / numero2;
    document.getElementById("resultado").innerText = `La divicion es: ${resta}`;
}

// Función para Borrar
function borrarDatos() {
    document.getElementById("numero1").value = '';  // Borra el primer campo
    document.getElementById("numero2").value = '';  // Borra el segundo campo
}

// Generación dinámica del menú
const menu = document.getElementById('menu');
const menuData = [
    { "menu": "Inicio", "src": "index.html" },
    { "menu": "Operaciones", "src": "operaciones.html" },
    { "menu": "CSS", "src": "fotos.html" },
    { "menu": "UCACUE", "src": "https://www.ucacue.edu.ec/" }
];

menuData.forEach(item => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = item.src;
    link.textContent = item.menu;

    listItem.appendChild(link);
    menu.appendChild(listItem);
});