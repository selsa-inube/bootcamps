// # AG-1 | Convenciones y Sintaxis de GO
// Declarar un paquete principal (un paquete es una forma de agrupar funciones, y está compuesto por todos los archivos en el mismo directorio)
package main

// Importamos los paquetes fmt y time para imprimir en consola y manejar fechas/horas
import (
	"fmt"
	"time"
)

// # AG-2 | Codecademy Learn Go: Introduction
// main es la función principal de ejecución en un programa Go
func main() {
	// Comentarios en Go pueden ser de una línea usando "//"
	/* O multilínea 
	   usando este formato */

	// Compiling Files: Para compilar un archivo Go usamos "go build nombre_archivo.go"
	fmt.Println("¡Bienvenido a Learn Go: Introduction en Codecademy!")

	// Running Files: Para ejecutar un archivo sin compilarlo, usamos "go run nombre_archivo.go"

	// Uso del paquete time para imprimir la fecha y hora actual
	timeNow := time.Now()
	fmt.Println("La fecha y hora actual es:", timeNow)

	// Go Resources: se puede usar documentacion de cada método con go doc fmt.Println

	// Llamar funciones definidas en este archivo (En go se debe si o si usar algo definido en el archivo)
	imprimirMensaje()
	imprimirDatos()
	verificarEdad()
	fmt.Println("La suma de 3 + 5 es:", sumar(3,5))
}

// # AG-3 | Codecademy Learn Go: Variables
// Declaración de variables en Go
var nombre string = "Jero"
var edad int = 23

func imprimirDatos() {
	fmt.Println("Mi nombre es", nombre, "y tengo", edad, "años")
}

// # AG-4 | Codecademy Learn Go: fmt package
// Uso del paquete fmt para imprimir en consola
func imprimirMensaje() {
	fmt.Println("Este es un mensaje de prueba usando fmt.Println")
}

// # AG-5 | Codecademy Learn Go: Conditionals
// Uso de condicionales en Go
func verificarEdad() {
	if edad >= 18 {
		fmt.Println("Eres mayor de edad")
	} else {
		fmt.Println("Eres menor de edad")
	}
}

// # AG-6 | Codecademy Learn Go: Functions
// Declaración de una función en Go
func sumar(a int, b int) int {
	return a + b
}