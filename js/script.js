<html>
<head>
    <title>Minha Calculadora</title>
</head>
<body>
    <h1>Minha Calculadora</h1>
    <p>Este é um projeto que eu fiz para aprender HTML e JavaScript. Ele permite fazer cálculos simples usando dois números e uma operação matemática.</p>
    <ol>
        <li>Digite os dois números nos campos abaixo.</li>
        <li>Escolha a operação que você quer fazer no menu suspenso.</li>
        <li>Clique no botão "Calcular" para ver o resultado.</li>
    </ol>
    <input type="number" id="num1" placeholder="Primeiro número">
    <input type="number" id="num2" placeholder="Segundo número">
    <select id="op">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>
    <button id="calc" onclick="calcular()">Calcular</button>
    <p id="res">O resultado da operação é:</p>

    <script>
        function calcular() {
            // Pegar os valores dos inputs
            var num1 = Number(document.getElementById("num1").value);
            var num2 = Number(document.getElementById("num2").value);
            var op = document.getElementById("op").value;
            // Fazer o cálculo de acordo com a operação escolhida
            var resultado;
            if (op == "+") {
                resultado = num1 + num2;
            } else if (op == "-") {
                resultado = num1 - num2;
            } else if (op == "*") {
                resultado = num1 * num2;
            } else if (op == "/") {
                resultado = num1 / num2;
            }
            // Mostrar o resultado no parágrafo
            document.getElementById("res").innerHTML = "O resultado da operação é: " + resultado;
        }
    </script>
</body>
</html>