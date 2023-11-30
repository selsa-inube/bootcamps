//parte 1 lectura Meadowfield
console.log("---Lectura----");
const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];
//esto aun  no muestra nada tengo la defincion en un word
function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map((r) => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

const roadGraph = buildGraph(roads);

//parte 2 lectura The task
class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map((p) => {
          if (p.place != this.place) return p;
          return { place: destination, address: p.address };
        })
        .filter((p) => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

let first = new VillageState("Post Office", [
  { place: "Post Office", address: "Alice's House" },
]);
let next = first.move("Alice's House");

console.log(next.place);
// → Alice's House
console.log(next.parcels);
// → []
console.log(first.place);
// → Post Office

//parte 4 lectura Simulation

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}
//paso 2
function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

//paso3
VillageState.random = function (parcelCount = 5) {
  //Este parámetro determina la cantidad de paquetes generados aleatoriamente en el pueblo.
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({ place, address });
  }
  return new VillageState("Post Office", parcels);
};

//PASO 4 marcha un mundo virtual.
runRobot(VillageState.random(), randomRobot);

//El robot necesita muchas vueltas para entregar los paquetes porque no planifica muy bien el futuro. Nos ocuparemos de eso pronto.
// Moved to Marketplace
// → Moved to Town Hall
// → …
// → Done in 63 turns

//parte 5 lectura The mail truck’s route
const mailRoute = [
  "Alice's House",
  "Cabin",
  "Alice's House",
  "Bob's House",
  "Town Hall",
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  "Shop",
  "Grete's House",
  "Farm",
  "Marketplace",
  "Post Office",
];
function routeRobot(state, memory) {
  //preguntar q hace state
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}
runRobot(VillageState.random(), routeRobot, []);

//parte 6 lectura Pathfinding
function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some((w) => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

function goalOrientedRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}
runRobot(VillageState.random(), goalOrientedRobot, []);

//Measuring a robot
console.log("---Measuring a robot---");
function compareRobots(robot1, memory1, robot2, memory2) {
  const tasks = Array.from({ length: 100 }, () => VillageState.random()); //longitud

  const runTask = (robot, state, memory) => {
    let value = 0;
    while (state.parcels.length > 0) {
      const { direction, memory: newMemory } = robot(state, memory);
      state = state.move(direction);
      memory = newMemory;
      value++;
    }
    return value;
  };

  const getTotalSteps = (robot, memory) =>
    tasks.reduce((total, task) => total + runTask(robot, task, memory), 0);

  const stepsRobot1 = getTotalSteps(robot1, memory1);
  const stepsRobot2 = getTotalSteps(robot2, memory2);

  const avgMovesRobotA = stepsRobot1 / tasks.length; //100 longitud
  const avgMovesRobotB = stepsRobot2 / tasks.length;

  console.log(`Average Robot 1: ${avgMovesRobotA}`);
  console.log(`Average Robot 2: ${avgMovesRobotB}`);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);

//Robot efficiency
console.log("---Robot efficiency----");
function lazyRobot({ place, parcels }, route) {
  if (route.length === 0) {
    const routes = parcels.map((parcel) => {
      const destination =
        parcel.place !== place ? parcel.place : parcel.address; //condicion ternaria
      const routeToDestination = findRoute(roadGraph, place, destination);

      return {
        route: routeToDestination,
        p: parcel.place !== place,
      };
    });
    function score({ route, p }) {
      return (p ? 0 : 1) - route.length;
    }
    route = routes.reduce((a, b) => (score(a) > score(b) ? a : b)).route; //condicion ternaria
  }

  return { direction: route[0], memory: route.slice(1) };
}

runRobot(VillageState.random(), lazyRobot, []);
