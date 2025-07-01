const URL =
  "https://github.com/selsa-inube/bootcamp/blob/main/content/backend/v1";

const activities = [
  {
    title: "ag1-ejercicio1-clase13",
    body: `${URL}/go/ag1-ejercicio1-clase13.md`,
    labels: ["topic: go"],
  },
  {
    title: "ag2-codecademy-introduction",
    body: `${URL}/go/ag2-codecademy-introduction.md`,
    labels: ["topic: go"],
  },
  {
    title: "ag3-codecademy-variables",
    body: `${URL}/go/ag3-codecademy-variables.md`,
    labels: ["topic: go"],
  },
  {
    title: "ag4-codecademy-fmt-package",
    body: `${URL}/go/ag4-codecademy-fmt-package.md`,
    labels: ["topic: go"],
  },
  {
    title: "ag5-codecademy-conditionals",
    body: `${URL}/go/ag5-codecademy-conditionals.md`,
    labels: ["topic: go"],
  },
  {
    title: "ag6-codecademy-functions",
    body: `${URL}/go/ag6-codecademy-functions.md`,
    labels: ["topic: go"],
  },
  {
    title: "ag7-ejercicio2-clase16",
    body: `${URL}/go/ag7-ejercicio2-clase16.md`,
    labels: ["topic: go"],
  },
  {
    title: "ag8-codecademy-loops",
    body: `${URL}/go/ag8-codecademy-loops.md`,
    labels: ["topic: go"],
  },
  {
    title: "ag9-arrays",
    body: `${URL}/go/ag9-arrays.md`,
    labels: ["topic: go"],
  },
  {
    title: "ag10-maps",
    body: `${URL}/go/ag10-maps.md`,
    labels: ["topic: go"],
  },
  {
    title: "ag11-structs",
    body: `${URL}/go/ag11-structs.md`,
    labels: ["topic: go"],
  },
  {
    title: "ag12-app-introduccion",
    body: `${URL}/go/ag12-app-introduccion.md`,
    labels: ["topic: go"],
  },
  {
    title: "ag13-app-creating-basic-web-app",
    body: `${URL}/go/ag13-app-creating-basic-web-app.md`,
    labels: ["topic: go"],
  },
  {
    title: "ag14-app-middleware",
    body: `${URL}/go/ag14-app-middleware.md`,
    labels: ["topic: go"],
  },
  {
    title: "ag15-app-rendering",
    body: `${URL}/go/ag15-app-rendering.md`,
    labels: ["topic: go"],
  },
  {
    title: "ag16-app-testing",
    body: `${URL}/go/ag16-app-testing.md`,
    labels: ["topic: go"],
  },
  {
    title: "ag17-app-controller",
    body: `${URL}/go/ag17-app-controller.md`,
    labels: ["topic: go"],
  },
  {
    title: "ag18-app-databases-tips-tricks",
    body: `${URL}/go/ag18-app-databases-tips-tricks.md`,
    labels: ["topic: go"],
  },
  {
    title: "ag19-app-presentacion-proyecto",
    body: `${URL}/go/ag19-app-presentacion-proyecto.md`,
    labels: ["topic: go"],
  },
  {
    title: "lg1-codecademy-introduction",
    body: `${URL}/go/lg1-codecademy-introduction.md`,
    labels: ["topic: go"],
  },
  {
    title: "lg2-codecademy-variables",
    body: `${URL}/go/lg2-codecademy-variables.md`,
    labels: ["topic: go"],
  },
  {
    title: "lg3-codecademy-fmt-package",
    body: `${URL}/go/lg3-codecademy-fmt-package.md`,
    labels: ["topic: go"],
  },
  {
    title: "lg4-codecademy-conditionals",
    body: `${URL}/go/lg4-codecademy-conditionals.md`,
    labels: ["topic: go"],
  },
  {
    title: "lg5-codecademy-functions",
    body: `${URL}/go/lg5-codecademy-functions.md`,
    labels: ["topic: go"],
  },
  {
    title: "lg6-codecademy-addresses-and-pointers",
    body: `${URL}/go/lg6-codecademy-addresses-and-pointers.md`,
    labels: ["topic: go"],
  },
  {
    title: "lg7-codecademy-loops",
    body: `${URL}/go/lg7-codecademy-loops.md`,
    labels: ["topic: go"],
  },
  {
    title: "lg8-codecademy-arrays",
    body: `${URL}/go/lg8-codecademy-arrays.md`,
    labels: ["topic: go"],
  },
  {
    title: "lg9-maps",
    body: `${URL}/go/lg9-maps.md`,
    labels: ["topic: go"],
  },
  {
    title: "lg10-structs",
    body: `${URL}/go/lg10-structs.md`,
    labels: ["topic: go"],
  },
  {
    title: "vg1-basics-variables-funciones-condiciones",
    body: `${URL}/go/vg1-basics-variables-funciones-condiciones.md`,
    labels: ["topic: go"],
  },
  {
    title: "vg2-manejo-de-datos-y-archivos-en-go",
    body: `${URL}/go/vg2-manejo-de-datos-y-archivos-en-go.md`,
    labels: ["topic: go"],
  },
  {
    title: "vg3-recursion-arreglos-slices-maps",
    body: `${URL}/go/vg3-recursion-arreglos-slices-maps.md`,
    labels: ["topic: go"],
  },
  {
    title: "vg4-poo-interfaces-defer-goroutines-channels-servers-middlewares",
    body: `${URL}/go/vg4-poo-interfaces-defer-goroutines-channels-servers-middlewares.md`,
    labels: ["topic: go"],
  },
  {
    title: "vg11-app-instalaciones-mongo-compass-aws",
    body: `${URL}/go/vg11-app-instalaciones-mongo-compass-aws.md`,
    labels: ["topic: go"],
  },
  {
    title: "vg12-app-estructura-muestra",
    body: `${URL}/go/vg12-app-estructura-muestra.md`,
    labels: ["topic: go"],
  },
  {
    title: "vg13-app-entidad-usuarios",
    body: `${URL}/go/vg13-app-entidad-usuarios.md`,
    labels: ["topic: go"],
  },
  {
    title: "vg14-app-entidad-tweets",
    body: `${URL}/go/vg14-app-entidad-tweets.md`,
    labels: ["topic: go"],
  },
  {
    title: "vg15-app-manejo-imagenes",
    body: `${URL}/go/vg15-app-manejo-imagenes.md`,
    labels: ["topic: go"],
  },
  {
    title: "vg16-app-sistemas-de-relaciones",
    body: `${URL}/go/vg16-app-sistemas-de-relaciones.md`,
    labels: ["topic: go"],
  },
];

const go = [...activities];

export { go };
