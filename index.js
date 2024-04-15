function calcular() {
    if (!validarCampos()) {
        return;
    }

    if (document.getElementById("tipo").value === "ml") {
        calcularPor("ml");
    } else if (document.getElementById("tipo").value === "kg") {    
        calcularPor("kg");
    }
}

function validarCampos() {
    const tipo = document.getElementById("tipo").value;
    let quantidade;
    if (tipo === "ml" || tipo === "kg") {
        quantidade = parseFloat(
            document.getElementById("volume").value
        );
    } else if (tipo === "unidade") {
        quantidade = parseInt(
            document.getElementById("unidades").value
        );
    }
    const preco = parseFloat(
        document.getElementById("preco").value
    );

    if (tipo === "ml" || tipo === "kg") {
        if (quantidade <= 0) {
            alert("O volume/peso deve ser maior que zero.");
            return false;
        }
    } else if (tipo === "unidade") {
        if (quantidade < 1) {
            alert("O número de unidades deve ser maior ou igual a um.");
            return false;
        }
    }

    if (preco <= 0) {
        alert("O preço deve ser maior que zero.");
        return false;
    }

    return true;
}

function calcularPor(type) {
    switch (type) {
        case "ml":
            calcularPorMl();
            break;
        case "kg":
            calcularPorKg();
            break;
    }
}

function calcularPorMl() {
    const volume = parseFloat(document.getElementById("volume").value);
    const preco = parseFloat(document.getElementById("preco").value);
    const resultado = (preco / volume) * 1000;
    document.getElementById("resultado").innerHTML = `R$ ${resultado.toFixed(2).replace('.', ',')} por litro`;
}

function calcularPorKg() {
    const peso = parseFloat(document.getElementById("volume").value);
    const preco = parseFloat(document.getElementById("preco").value);
    const resultado = preco / peso;
    document.getElementById("resultado").innerHTML = `R$ ${resultado.toFixed(2).replace('.', ',')} por kg`;
}
