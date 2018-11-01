function multiplicar(){
    var qtd = document.querySelector("#input-quantidade").value;
    var valor = document.querySelector("#input-valor").value;
    var total = (parseInt(qtd)*parseFloat(valor));
    document.querySelector("#valor").value = valor;
    document.querySelector("#quantidade").value = qtd;
    document.querySelector("#input-resultado").value = total;
}

function multiplicarInput(){
    var valor = document.querySelector("#input-valor").value;
    var qtd = document.querySelector("#input-quantidade").value;
    var total = (qtd*valor);

    document.querySelector("#input-resultado").value = total;
}

function calcularImc(){
    // alert("foi porra");
    var peso = document.querySelector("#inputPeso").value;
    var altura = document.querySelector("#inputAltura").value;
    var imc = (peso / (altura*altura));
    document.querySelector("#resultadoImc").value = parseFloat(imc).toFixed(1);
}