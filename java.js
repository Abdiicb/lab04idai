function operacionSumar(){
            var num1 = 0;
            var num2 = 0;

            num1 = Number(document.getElementById("numero1").value);
            num2 = Number(document.getElementById("numero2").value);

            var resultado = Number(num1) + Number(num2);
            document.getElementById("resultado").value = resultado;
         }

         function operacionRestar(){
            var num1 = 0;
            var num2 = 0;

            num1 = Number(document.getElementById("numero1").value);
            num2 = Number(document.getElementById("numero2").value);

            var resultado = Number(num1) - Number(num2);
            document.getElementById("resultado").value = resultado;
         }

        function operacionMultiplicar(){
            var num1 = 0;
            var num2 = 0;

            num1 = Number(document.getElementById("numero1").value);
            num2 = Number(document.getElementById("numero2").value);

            var resultado = Number(num1) * Number(num2);
            document.getElementById("resultado").value = resultado;
         }

        function operacionDividir(){
            var num1 = 0;
            var num2 = 0;

            num1 = Number(document.getElementById("numero1").value);
            num2 = Number(document.getElementById("numero2").value);

            var resultado = Number(num1) / Number(num2);
            document.getElementById("resultado").value = resultado;
         }

        var btnSumar = document.getElementById("sumar");
        btnSumar.addEventListener("click", operacionSumar);

        var btnRestar = document.getElementById("restar");
        btnRestar.addEventListener("click", operacionRestar);

        var btnMultiplicar = document.getElementById("multiplicar");
        btnMultiplicar.addEventListener("click", operacionMultiplicar);

        var btnDividir = document.getElementById("dividir");
        btnDividir.addEventListener("click", operacionDividir);