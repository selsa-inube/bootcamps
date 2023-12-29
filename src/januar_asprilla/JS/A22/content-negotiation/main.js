const url = "https://eloquentjavascript.net/author";
const types = [
  "text/plain",
  "text/html",
  "application/json",
  "application/rainbows+unicorns",
];
async function showTypes() {
  try {
    const fetchAndFormat = async (type) => {
      // Realiza una solicitud fetch para un tipo de medio específico
      const resp = await fetch(url, { headers: { accept: type } });

      // Formatea la respuesta como una cadena y la devuelve
      return `${type}: ${await resp.text()}\n`;
    };

    const responses = [];
    for (const type of types) {
      const response = await fetchAndFormat(type);
      responses.push(response);
    }

    console.log(responses.join(""));
  } catch (error) {
    console.error("Error:", error);
  }
}
showTypes();
