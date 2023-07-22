//Função que irá converter um valor em Reais baseado na cotação do dolar de hoje 22/07/2023.

let quantiaReal = 56.40;
let cotacaoDolar = 4.78;

function realParaDolar(){
    return quantiaReal/cotacaoDolar;
}

let total = realParaDolar();
let quantiaDolar = total.toFixed(2);

document.getElementById("texto").innerHTML="A quantia em Reais é de R$ "+quantiaReal.toFixed(2)+
" e o valor convertido em Dolar é US$ "+quantiaDolar;

//função de alerta com saudação no pop-up
function alertaHello(){
    alert("Olá, pessoal");
}

//Função para converter a temperatura de Fahrenheit para Celcius
function paraCelsius(valorFahrenheit){
    return (5/9)*(valorFahrenheit - 32);
}
var grauCelsius = paraCelsius(89).toFixed(2); 

alert('A temperatura é de '+grauCelsius+' graus Celsius')