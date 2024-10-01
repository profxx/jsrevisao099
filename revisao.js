let frutas = ['maçã', 'banana'];

function print(elemento = ""){
    console.log(elemento);
}

const mostra = (elemento = "") => console.log(elemento);

// Mostrar a lista de frutas
console.log(frutas);

/* Mostra a quantidade de elementos da lista */
console.log(frutas.length);

/* Adicionar um elemento na lista */
frutas.push('melancia');

print(frutas)
print("For Normal")
for (let elemento = 0; elemento < frutas.length; elemento++){
    print(`Fruta: ${elemento+1} - ${frutas[elemento]}`);
}
print("For IN")
for (elemento in frutas){
    print(`Fruta: ${parseInt(elemento)+1} - ${frutas[elemento]}`);
}
let contador = 0
print("While")
while (contador < frutas.length){
    print(`Fruta: ${contador+1} - ${frutas[contador]}`);
    contador++;
}
print()
print("forEach")
frutas.forEach(print);
print()
print("Map")
frutas.map(print);
mostra();
mostra("Criando a função como parâmetro do forEach");
frutas.forEach((elemento) => console.log(elemento));












