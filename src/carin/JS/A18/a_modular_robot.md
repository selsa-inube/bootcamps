If you were to write that project as a modular program, what modules would you create? Which module would depend on which other module, and what would their interfaces look like?

Module 1: Road Graph
Bindings included in module: roads, buildGraph(edges), roadGraph.
Imports: None
Exports: roadGraph.
Interface: Through its exports. In the case we want a changing graph we need to use the buildGraph(edges) method to generate a new roadGraph from a roads. In this case it is neccesary to create an aditional exports with the binding buildGraphs(eges).

Module 2: VillageState
Bindings included in module: VillageState class.
Imports: roadGraph from Module1.
Exports: villageState, including methods and its constructor.
Interface: The methods for villageState includes villageState.move(destination),
VillageState.random(parcelCount).

Module 3: routeRobot
Bindings included in module: routeRobot(state, memory), mailRoute.
Imports: none.
Exports: routeRobot.
Interface: routeRobot(state,memory) and mailRoute require for it.

Module 4: goalOrientedRobot
Bindings included in module: goalOrientedRobot({ place, parcels }, route),
findRoute(graph, from, to).
Imports: none.
Exports: goalOrientedRobot({ place, parcels }, route),
findRoute(graph, from, to).
Interface: functions in bindings.

Module 5: exhaustiveRobot
Bindings included in module: exhaustiveRobot({ place, parcels }, route)
Imports: findRoute(roadGraph, place, parcel.place).
Exports: exhaustiveRobot({ place, parcels }, route)
Interface: functions in bindings.

Module 6: runRobot.
Bindings included in module: runRobot(state, robot, memory).
Imports: none.
Exports: runRobot(state, robot, memory).
Interface: functions in bindings.

Module 7: compareRobot
Bindings included in module: compareRobots(routeRobot, [], exhaustiveRobot, [])
Imports: villageState, routeRobot, goalOrientedRobot, runRobot, exhaustiveRobot, others robots.
Exports: compareRobots(routeRobot, [], exhaustiveRobot, [])
Interface: functions in bindings.

Which pieces are likely to be available prewritten on NPM? Would you prefer to use an NPM package or write them yourself?

To maximize produtivity it is preferible to use NPM packages, however, it depends on the requirements and the status of the project.

Some npm i will use for this project are:
Express for communication with DB for storing villages, users history and so on.
Async for promises management in the interaction of the users and other tasks.
Axios as a HTTP API for communication with DB for storing villages, users history and so on.
React for building user interface.
Graph solving and construction dependencies as graph-data-structure,chart and dijkstrajs.

Some pieces i will write myself:
DOM specific manipulation based on react.
Tests based on test libraries.
