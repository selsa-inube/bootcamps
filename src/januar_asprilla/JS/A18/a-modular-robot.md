Declaraciones Base:

    -roads: es la representacion de la información sobre los caminos en el pueblo y será utilizado como base para construir el grafo.
    -mailRoute: aqui se define la ruta del correo y es una constante que se utilizará en algunas funciones.

Funciones y Dependencias:

    -buildGraph: en esta funcion se construye un grafo de caminos; la cual depende de la información proporcionada por la constante "roads" para poder crear las diferentes conexiones entre los diferentes lugares
    -roadGraph: se utiliza para representar el grafo de los caminos;la funcionalidad  de esta dependera función buildGraph y utilizara la información brindada de "roads" para modelar la topología del pueblo.
    -VillageState: se esta representando el estado actual del pueblo; utilizamos por varias funciones para obtener información sobre la ubicación y los paquetes
    -runRobot: Ejecuta las acciones del robot en el pueblo, es dependiente de VillageState para conocer cual es el estado actual
    -randomPick: en esta funcion se seleccionan aleatoriamente los elementos y se utiliza la lógica definida en la constante "roads" para realizar selecciones no deterministas
    -randomRobot: esta funcion hacer la representacion de un robot que se mueve aleatoriamente, para su funcionamiento utiliza la función randomPick y VillageState
    -routeRobot: hacemos referencua a un robot que sigue cierta ruta predefinida, depende de la constante "mailRoute" para la ruta
    -findRoute: Encuentra la ruta en el grafo de caminos,para que se cumpla se utiliza la información proporcionada por la constante "mailRoute"
    -goalOrientedRobot: y por ultimo tenemos la representacion de un robot que se mueve hacia un objetivo; para hacer esto posible se utiliza la información de "mailRoute" para orientarse hacia el objetivo

Módulos Propuestos:

    graph_module

    Interfaces: buildGraph(roads), findRoute(graph, start, end)
    state_module

    Interfaces: VillageState
    robot_module

    Interfaces: runRobot(robot, state, memory), randomPick(seq)
    route_module

    Interfaces: mailRoute()
    robots_with_routes_module

    Interfaces: routeRobot(route), goalOrientedRobot(goal)

Dependencias:

    graph_module depende de state_module.
    robot_module depende de state_module.
    route_module depende de graph_module.
    robots_with_routes_module depende de route_module.

Paquetes NPM:

    Para operaciones de grafos, podrías considerar paquetes como graphlib, graphology o dijkstra.
