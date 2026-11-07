document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("somaForm");
        const numero1 = document.getElementById("numero1");
        const numero2 = document.getElementById("numero2");
        const resultado = document.getElementById("resultado");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const soma = parseFloat(numero1.value) + parseFloat(numero2.value);

            if (isNaN(soma)) {
                resultado.innerHTML = "<strong>Preencha os dois números.</strong>";
                return;
            }
            resultado.innerHTML = "<strong>Resultado: " + soma + "</strong>";
        });
    });

