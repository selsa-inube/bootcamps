Dependencias circulares
-El código que se muestra en la lectura si maneja ciclos de dependencia al utilizar (require.cache) para almacenar y recuperar los módulos que esta en proceso de carga eviatando las recursión infinita y permitiendo que estos módulos se referencien entre si de forma mas segura
-Yo diría que es una mejor practica evitar cambiar el objeto (Exports) después de que se inicializo especialmente si lo otros módulos ya lo han requerido esto hace que la consistencia de la forma que los módulos interactúen entre si y cambia la posibilidad de comportamientos inesperados.
-lo que pasa es que si sobrescribo su valor (module.exports) después de haber sido requerido por otro modulo aquellos que lo hayan requerido obtendrán la versión original de las interfaz no las actualizaciones
