const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

// Your code here
const createTable = (data_set) => {
  let colNames = (data) => {
    let headNames = [];

    data.forEach((element) => {
      Object.keys(element).forEach((e) => {
        if (!headNames.includes(e)) {
          headNames.push(e);
        }
      });
    });
    return headNames;
  };
  let table = document.createElement("table");
  let headNames = colNames(data_set);
  // head
  let head = document.createElement("tr");
  headNames.forEach((headName) => {
    let headCell = document.createElement("th");
    headCell.appendChild(document.createTextNode(headName));
    head.appendChild(headCell);
  });
  table.appendChild(head);
  //body
  let rowBody = (rowData, headNames) => {
    let body = document.createElement("tr");
    headNames.forEach((headName) => {
      let bodyCell = document.createElement("td");
      bodyCell.appendChild(document.createTextNode(rowData[headName]));
      body.appendChild(bodyCell);
    });
    return body;
  };
  data_set.forEach((dataEntry) => {
    table.appendChild(rowBody(dataEntry, headNames));
  });

  return table;
};
document.querySelector("#mountains").appendChild(createTable(MOUNTAINS));
