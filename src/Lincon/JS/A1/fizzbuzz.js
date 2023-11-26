//FizzBuzz
console.log("----FizzBuzz----");
//creo mi bucle para que muestre mis numero del 1 al 100
for (let number = 1; number <= 100; number++) {
  let output = ""; //creo una variable de tipo string vacio
  if (number % 3 == 0) output += "Fizz"; //si es multipo de 3 concatene en outpot Fizz

  if (number % 5 == 0) output += "Buzz"; //Si es multiplo de 5 concatene Buzz

  console.log(output || number); //si output no es vacio muestre el valor fizz , buzz o fizzbuz de lo contrario muestra el numero
}
