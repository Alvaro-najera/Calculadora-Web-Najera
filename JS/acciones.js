$(document).ready(function() {
    $("#ejecutar").click(function() {
        var num1 = parseFloat($("#num1").val());
        var num2 = parseFloat($("#num2").val());
        var operacion = $("#opciones").val();
        var resultado = 0;

        if (isNaN(num1) || isNaN(num2)) {
            $("#Salida").val("Error");
        } else {
            switch (operacion) {
                case "1":
                    resultado = num1 + num2;
                    break;
                case "2":
                    resultado = num1 - num2;
                    break;
                case "3":
                    resultado = num1 * num2;
                    break;
                case "4":
                    if (num2 !== 0) {
                        resultado = num1 / num2;
                    } else {
                        resultado = "Error (División por cero)";
                    }
                    break;
                default:
                    resultado = "Selecciona una opción válida";
            }
            $("#Salida").val(resultado);
        }
    });
});
