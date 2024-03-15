document.addEventListener("DOMContentLoaded", function() {
    const btnCalcular = document.getElementById("btnCalcular");
    const resultado = document.getElementById("resultado");

    btnCalcular.addEventListener("click", function() {
        calcularTinta();
    });

    function calcularTinta() {
        const largura = parseFloat(document.getElementById("largura").value);
        const altura = parseFloat(document.getElementById("altura").value);

        if (isNaN(largura) || isNaN(altura)) {
            resultado.textContent = "Por favor, insira valores válidos para largura e altura.";
            return;
        }

        const area = largura * altura;
        const litrosDeTinta = area / 2; // Assumindo 2 metros quadrados por litro de tinta
        resultado.textContent = `Você precisará de ${litrosDeTinta.toFixed(2)} litros de tinta.`;
    }
});