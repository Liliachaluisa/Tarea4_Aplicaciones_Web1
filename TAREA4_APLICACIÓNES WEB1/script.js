document.addEventListener("DOMContentLoaded", function () {
    const numero1Input = document.getElementById("numero1");
    const numero2Input = document.getElementById("numero2");
    const calcularButton = document.getElementById("calcular");
    const resultadosDiv = document.getElementById("resultados");

    calcularButton.addEventListener("click", function () {
        const numero1 = parseFloat(numero1Input.value);
        const numero2 = parseFloat(numero2Input.value);

        if (!isNaN(numero1) && !isNaN(numero2)) {
            resultadosDiv.innerHTML = "";
            for (let i = 1; i <= 5; i++) {
                let resultado;
                switch (i) {
                    case 1:
                        resultado = numero1 + numero2;
                        resultadosDiv.innerHTML += `Resultado de SUMA: ${resultado}<br>`;
                        break;
                    case 2:
                        resultado = numero1 - numero2;
                        resultadosDiv.innerHTML += `Resultado de RESTA: ${resultado}<br>`;
                        break;
                    case 3:
                        resultado = numero1 * numero2;
                        resultadosDiv.innerHTML += `Resultado de MULTIPLICACIÓN: ${resultado}<br>`;
                        break;
                    case 4:
                        if (numero2 !== 0) {
                            resultado = numero1 / numero2;
                            resultadosDiv.innerHTML += `Resultado de DIVISIÓN: ${resultado}<br>`;
                        } else {
                            resultadosDiv.innerHTML += `No se puede dividir por cero<br>`;
                        }
                        break;
                    case 5:
                        resultado = numero1 % numero2;
                        resultadosDiv.innerHTML += `Resultado de MÓDULO: ${resultado}<br>`;
                        break;
                    default:
                        break;
                }
            }
        } else {
            resultadosDiv.innerHTML = "Por favor, ingresa números válidos.";
        }
    });
});
