function apagarUm(){
	var numero = calc.tela.value;
	calc.tela.value = numero.substring(0,(numero.length-1));
}
function extrairRaiz(){
	var numero = calc.tela.value;
	var resultado = Math.sqrt(numero);
	calc.tela.value = resultado;
}
