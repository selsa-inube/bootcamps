// Robot environment below this comment
var roads = [
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

var roadGraph = buildGraph(roads);

var VillageState = class VillageState {
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
};

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

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

VillageState.random = function (parcelCount = 5) {
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

var mailRoute = [
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
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

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

function compareRobots(robot1, memory1, robot2, memory2) {
  //Function to count steps in each simulation
  function stepsPerTask(state, robotFunction, memory) {
    let steps = 0;
    while (true) {
      if (state.parcels.length == 0) {
        return steps;
      }
      //Defining action
      let action = robotFunction(state, memory);
      //Actualizing state
      state = state.move(action.direction);
      //Actualizing memory
      memory = action.memory;
      //Actualizing number of steps
      steps++;
    }
  }
  //Function for averaging steps
  const average = (array) => array.reduce((a, b) => a + b) / array.length;
  // Looping 100 tasks
  // Array that contains steps for each task
  const resultsRobot1 = [];
  const resultsRobot2 = [];
  for (let task = 0; task < 100; task++) {
    // Randomly generated village
    let state = VillageState.random();
    resultsRobot1.push(stepsPerTask(state, robot1, memory1));
    resultsRobot2.push(stepsPerTask(state, robot2, memory2));
  }
  let average1 = average(resultsRobot1);
  let average2 = average(resultsRobot2);
  let winner = average1 < average2 ? "robot1" : "robot2";
  console.log(
    `The best robot is ${winner}, its average was ${Math.min(
      average1,
      average2
    )} and its competitors had an average of ${Math.max(average1, average2)}`
  );
}

//   Robot environment above this comment

// efficiency solution below this comment
// Shortest path -> Inmediate returns = steps
// Structure base on goal Oriented Robot
function exhaustiveRobot({ place, parcels }, route) {
  let routes = [];
  if (route.length == 0) {
    routes = parcels.map((parcel) => {
      if (parcel.place != place) {
        return findRoute(roadGraph, place, parcel.place);
      } else {
        return findRoute(roadGraph, place, parcel.address);
      }
    });
  }
  //shortest path
  if (routes.length) {
    route = routes.reduce((a, b) => (a.length < b.length ? a : b));
  }

  return { direction: route[0], memory: route.slice(1) };
}

compareRobots(routeRobot, [], goalOrientedRobot, []);
compareRobots(routeRobot, [], exhaustiveRobot, []);
compareRobots(goalOrientedRobot, [], exhaustiveRobot, []);
