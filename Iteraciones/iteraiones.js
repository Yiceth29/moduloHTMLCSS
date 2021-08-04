
let astericos = '*';
let sumas = '+';
let simbolos = `${astericos}${sumas}`;
let cuadrado = '';

for(let num = 0; num < 8; num++){
    
    for(let num2 = 0; num2 < 8; num2++){
        cuadrado += simbolos;
    }

    cuadrado += '\n';
}

console.log(cuadrado);